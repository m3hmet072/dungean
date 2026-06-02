import * as React from "react";
import { CheckCircle2, Copy, Download, MessageCircle, Move3D, Plus, RotateCw, Trash2 } from "lucide-react";
import { ArkDoorEditor } from "./components/ArkDoorEditor";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";

export type Door = {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
};

const doorBlueprint = "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'";
const storageKey = "ark-3d-door-editor-v1";

const starterDoors: Door[] = [
  { id: "door-1", name: "Door 1", x: 0, y: 0, z: 0, yaw: 0 },
  { id: "door-2", name: "Door 2", x: 100, y: 0, z: 0, yaw: 0 },
  { id: "door-3", name: "Door 3", x: 200, y: 0, z: 0, yaw: 0 },
];

type BatchForm = {
  amount: number | "";
  startX: number | "";
  startY: number | "";
  startZ: number | "";
  offsetX: number | "";
  offsetY: number | "";
  offsetZ: number | "";
  incrementX: boolean;
  incrementY: boolean;
  incrementZ: boolean;
};

const initialBatchForm: BatchForm = {
  amount: 5,
  startX: 0,
  startY: 0,
  startZ: 0,
  offsetX: 100,
  offsetY: 0,
  offsetZ: 0,
  incrementX: true,
  incrementY: false,
  incrementZ: false,
};

function readStoredDoors() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return starterDoors;
    const parsed = JSON.parse(raw) as { doors?: Door[] };
    return parsed.doors?.length ? parsed.doors : starterDoors;
  } catch {
    return starterDoors;
  }
}

function readStoredBatchForm() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return initialBatchForm;
    const parsed = JSON.parse(raw) as { batchForm?: BatchForm };
    return parsed.batchForm ? { ...initialBatchForm, ...parsed.batchForm } : initialBatchForm;
  } catch {
    return initialBatchForm;
  }
}

function formatNumber(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function makeCommand(door: Door) {
  return `SpawnActor "${doorBlueprint}" ${formatNumber(door.x)} ${formatNumber(door.y)} ${formatNumber(door.z)} |`;
}

function valueOrZero(value: number | "") {
  return value === "" ? 0 : value;
}

function snap100(value: number) {
  return Math.round(value / 100) * 100;
}

function amountValue(value: number | "") {
  return value === "" ? 1 : Math.max(1, Math.min(200, Math.floor(value)));
}

export function App() {
  const [doors, setDoors] = React.useState<Door[]>(readStoredDoors);
  const [batchForm, setBatchForm] = React.useState<BatchForm>(readStoredBatchForm);
  const [selectedDoorId, setSelectedDoorId] = React.useState(() => readStoredDoors()[0]?.id ?? "");
  const [mode, setMode] = React.useState<"translate" | "rotate">("translate");
  const [copyLabel, setCopyLabel] = React.useState("Copy Commands");

  const selectedDoor = doors.find((door) => door.id === selectedDoorId) ?? doors[0];
  const commands = React.useMemo(() => doors.map(makeCommand).join("\n"), [doors]);

  React.useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify({ batchForm, doors }));
  }, [batchForm, doors]);

  React.useEffect(() => {
    if (!selectedDoor && doors[0]) setSelectedDoorId(doors[0].id);
  }, [doors, selectedDoor]);

  function addDoor() {
    const nextNumber = doors.length + 1;
    const lastDoor = doors[doors.length - 1];
    const nextDoor: Door = {
      id: crypto.randomUUID(),
      name: `Door ${nextNumber}`,
      x: lastDoor ? lastDoor.x + 100 : 0,
      y: lastDoor?.y ?? 0,
      z: lastDoor?.z ?? 0,
      yaw: lastDoor?.yaw ?? 0,
    };
    setDoors((current) => [...current, nextDoor]);
    setSelectedDoorId(nextDoor.id);
  }

  function deleteSelectedDoor() {
    if (!selectedDoor) return;
    setDoors((current) => current.filter((door) => door.id !== selectedDoor.id));
  }

  function resetScene() {
    setDoors(starterDoors);
    setSelectedDoorId(starterDoors[0].id);
    setMode("translate");
  }

  function updateBatchNumber(field: keyof Pick<BatchForm, "amount" | "startX" | "startY" | "startZ" | "offsetX" | "offsetY" | "offsetZ">, value: string) {
    setBatchForm((current) => ({ ...current, [field]: value === "" ? "" : Number(value) }));
  }

  function updateBatchCheckbox(field: keyof Pick<BatchForm, "incrementX" | "incrementY" | "incrementZ">, value: boolean) {
    setBatchForm((current) => ({ ...current, [field]: value }));
  }

  function generateBatchDoors() {
    const amount = amountValue(batchForm.amount);
    const newDoors = Array.from({ length: amount }, (_, index): Door => ({
      id: crypto.randomUUID(),
      name: `Door ${index + 1}`,
      x: snap100(valueOrZero(batchForm.startX) + (batchForm.incrementX ? valueOrZero(batchForm.offsetX) * index : 0)),
      y: snap100(valueOrZero(batchForm.startY) + (batchForm.incrementY ? valueOrZero(batchForm.offsetY) * index : 0)),
      z: snap100(valueOrZero(batchForm.startZ) + (batchForm.incrementZ ? valueOrZero(batchForm.offsetZ) * index : 0)),
      yaw: selectedDoor?.yaw ?? 0,
    }));
    setDoors(newDoors);
    setSelectedDoorId(newDoors[0]?.id ?? "");
  }

  function updateDoor(updatedDoor: Door) {
    setDoors((current) => current.map((door) => (door.id === updatedDoor.id ? updatedDoor : door)));
  }

  function updateSelectedField(field: keyof Pick<Door, "x" | "y" | "z" | "yaw">, value: string) {
    if (!selectedDoor) return;
    const nextValue = Number(value || 0);
    updateDoor({ ...selectedDoor, [field]: field === "yaw" ? nextValue : snap100(nextValue) });
  }

  async function copyCommands() {
    try {
      await navigator.clipboard.writeText(commands);
      setCopyLabel("Copied");
    } catch {
      setCopyLabel("Select + copy");
    }
  }

  function exportCommands() {
    const blob = new Blob([commands], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ark-dungeon-door-spawn-commands.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <main className="editor-page">
      <header className="editor-header">
        <a className="logo" href="/" aria-label="ARK command home">
          A
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#editor">3D Editor</a>
          <a href="#commands">Commands</a>
          <a href="#premium">Premium</a>
        </nav>
        <a className="discord-link" href="#discord" aria-label="Discord">
          <MessageCircle aria-hidden="true" />
        </a>
      </header>

      <section className="editor-hero">
        <p className="eyebrow">ARK dungeon door placement</p>
        <h1>Place locked doors visually, then copy clean spawn commands.</h1>
              <p>
          Generate a batch from familiar command inputs, then select any standalone door in the viewport
          and place it visually.
        </p>
      </section>

      <section className="editor-shell" id="editor">
        <div className="viewport-panel">
          <div className="viewport-topbar">
            <div>
              <span>3D Viewport</span>
              <strong>{selectedDoor ? selectedDoor.name : "No door selected"}</strong>
            </div>
            <div className="tool-toggle" aria-label="Transform mode">
              <button className={mode === "translate" ? "active" : ""} type="button" onClick={() => setMode("translate")}>
                <Move3D aria-hidden="true" />
                Move
              </button>
              <button className={mode === "rotate" ? "active" : ""} type="button" onClick={() => setMode("rotate")}>
                <RotateCw aria-hidden="true" />
                Rotate
              </button>
            </div>
          </div>
          <ArkDoorEditor
            doors={doors}
            mode={mode}
            selectedDoorId={selectedDoor?.id ?? ""}
            onChangeDoor={updateDoor}
            onSelectDoor={setSelectedDoorId}
          />
        </div>

        <aside className="control-panel">
          <div className="panel-card">
            <div className="panel-heading">
              <div>
                <h2>Doors</h2>
                <p>{doors.length} placed actors</p>
              </div>
              <span className="save-state">
                <CheckCircle2 aria-hidden="true" />
                Saved
              </span>
            </div>

            <div className="door-reference">
              <div className="door-reference-model">
                <span className="door-ref-bars" />
                <span className="door-ref-plate" />
              </div>
              <div>
                <strong>Locked door only</strong>
                <p>No surrounding stone wall. This is the object rendered and exported.</p>
              </div>
            </div>

            <div className="button-row">
              <Button onClick={addDoor}>
                <Plus aria-hidden="true" />
                Add Door
              </Button>
              <Button variant="secondary" onClick={deleteSelectedDoor} disabled={!selectedDoor}>
                <Trash2 aria-hidden="true" />
                Delete
              </Button>
            </div>

            <div className="door-list">
              {doors.map((door) => (
                <button
                  className={door.id === selectedDoor?.id ? "door-list-item active" : "door-list-item"}
                  key={door.id}
                  type="button"
                  onClick={() => setSelectedDoorId(door.id)}
                >
                  <span>{door.name}</span>
                  <small>
                    {formatNumber(door.x)}, {formatNumber(door.y)}, {formatNumber(door.z)}
                  </small>
                </button>
              ))}
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-heading">
              <div>
                <h2>Batch generator</h2>
                <p>Create doors from the old command inputs</p>
              </div>
            </div>

            <div className="batch-grid">
              <BatchInput label="Amount" value={batchForm.amount} onChange={(value) => updateBatchNumber("amount", value)} />
              <BatchInput label="Start X (front/back)" value={batchForm.startX} onChange={(value) => updateBatchNumber("startX", value)} />
              <BatchInput label="Offset X (front/back)" value={batchForm.offsetX} onChange={(value) => updateBatchNumber("offsetX", value)} />
              <BatchInput label="Start Y (left/right)" value={batchForm.startY} onChange={(value) => updateBatchNumber("startY", value)} />
              <BatchInput label="Offset Y (left/right)" value={batchForm.offsetY} onChange={(value) => updateBatchNumber("offsetY", value)} />
              <BatchInput label="Start Z (up/down)" value={batchForm.startZ} onChange={(value) => updateBatchNumber("startZ", value)} />
              <BatchInput label="Offset Z (up/down)" value={batchForm.offsetZ} onChange={(value) => updateBatchNumber("offsetZ", value)} />
            </div>

            <div className="batch-checks">
              <Checkbox id="batch-x" checked={batchForm.incrementX} label="Increment X" onChange={(event) => updateBatchCheckbox("incrementX", event.target.checked)} />
              <Checkbox id="batch-y" checked={batchForm.incrementY} label="Increment Y" onChange={(event) => updateBatchCheckbox("incrementY", event.target.checked)} />
              <Checkbox id="batch-z" checked={batchForm.incrementZ} label="Increment Z" onChange={(event) => updateBatchCheckbox("incrementZ", event.target.checked)} />
            </div>

            <Button onClick={generateBatchDoors}>Generate Doors Into 3D</Button>
          </div>

          <div className="panel-card">
            <div className="panel-heading">
              <div>
                <h2>Selected transform</h2>
                <p>Fine tune exact values</p>
              </div>
            </div>

            {selectedDoor ? (
              <>
                <div className="transform-grid">
                  <TransformInput label="X (front/back)" step={100} value={selectedDoor.x} onChange={(value) => updateSelectedField("x", value)} />
                  <TransformInput label="Y (left/right)" step={100} value={selectedDoor.y} onChange={(value) => updateSelectedField("y", value)} />
                  <TransformInput label="Z (up/down)" step={100} value={selectedDoor.z} onChange={(value) => updateSelectedField("z", value)} />
                  <TransformInput label="Yaw (rotation)" step={15} value={selectedDoor.yaw} onChange={(value) => updateSelectedField("yaw", value)} />
                </div>
                <p className="axis-help">X = front/back · Y = left/right · Z = up/down · Yaw = 0°-360°</p>
              </>
            ) : (
              <p className="empty-note">Add or select a door to edit transforms.</p>
            )}

            <Button variant="ghost" onClick={resetScene}>
              Reset Scene
            </Button>
          </div>

          <div className="panel-card command-card" id="commands">
            <div className="panel-heading">
              <div>
                <h2>Generated commands</h2>
                <p>{doors.length} command lines</p>
              </div>
            </div>
            <pre className="command-box">
              <code>{commands}</code>
            </pre>
            <div className="button-row">
              <Button onClick={copyCommands}>
                <Copy aria-hidden="true" />
                {copyLabel}
              </Button>
              <Button variant="secondary" onClick={exportCommands}>
                <Download aria-hidden="true" />
                Export
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

function TransformInput({
  label,
  value,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  step?: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="transform-field">
      <span>{label}</span>
      <input type="number" step={step} value={formatNumber(value)} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function BatchInput({
  label,
  value,
  step = 100,
  onChange,
}: {
  label: string;
  value: number | "";
  step?: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="transform-field">
      <span>{label}</span>
      <input type="number" step={label === "Amount" ? 1 : step} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
