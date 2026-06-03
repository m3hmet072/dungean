"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Html, OrbitControls, useTexture } from "@react-three/drei";
import { create } from "zustand";
import {
  Boxes,
  Check,
  Clipboard,
  Copy,
  Database,
  Download,
  FileCode2,
  Grid3X3,
  Layers3,
  LayoutDashboard,
  LogOut,
  Map,
  MoreHorizontal,
  Move3D,
  PanelBottom,
  Plus,
  Radio,
  Save,
  Search,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import * as THREE from "three";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import { Select } from "../ui/select";
import { Separator } from "../ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";

type PageKey = "overview" | "editor" | "builder" | "library" | "collections" | "structures" | "settings";
type GenerateType = "Single" | "Line" | "Wall" | "Grid" | "Ceiling" | "Room";

type Preset = {
  name: string;
  category: string;
  blueprint: string;
  size: string;
  dimensions: [number, number, number];
  footprint: "box" | "cylinder";
  notes: string;
};

type PlacedObject = {
  id: string;
  name: string;
  category: string;
  blueprint: string;
  x: number;
  y: number;
  z: number;
  rotation: number;
  notes: string;
  collection: string;
};

type SavedCommand = {
  id: string;
  name: string;
  category: string;
  blueprint: string;
  objectCount: number;
  collection: string;
  updated: string;
  command: string;
};

type BuildCollection = {
  id: string;
  name: string;
  updated: string;
  commands: SavedCommand[];
};

type Toast = {
  id: string;
  message: string;
};

const presets: Preset[] = [
  {
    name: "Dungeon Door",
    category: "Dungeon",
    blueprint: "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'",
    size: "500 W x 2500 H x 100 D",
    dimensions: [500, 2500, 100],
    footprint: "box",
    notes: "Real editor scale in Unreal units. Custom visual preview, not a ripped game mesh.",
  },
  {
    name: "Arena Teleporter",
    category: "Event",
    blueprint: "Blueprint'/Game/Mobile/Dungeon/BossArena/ArenaTeleporter.ArenaTeleporter_C'",
    size: "500 W x 100 H x 500 D",
    dimensions: [500, 100, 500],
    footprint: "cylinder",
    notes: "Circular custom teleporter marker used for event routing and boss arena flows.",
  },
  {
    name: "Metal Tree Platform",
    category: "Platform",
    blueprint: "Blueprint'/Game/PrimalEarth/Structures/BuildingBases/TreePlatform_Metal_SM.TreePlatform_Metal_SM_C'",
    size: "3000 diameter x 100 H",
    dimensions: [3000, 100, 3000],
    footprint: "cylinder",
    notes: "Real editor scale requested by admin spec. Rendered as a circular platform.",
  },
  {
    name: "Metal Wall",
    category: "Structure",
    blueprint: "Blueprint'/Game/PrimalEarth/Structures/Metal/Wall_Metal.Wall_Metal_C'",
    size: "500 W x 500 H x 100 D",
    dimensions: [500, 500, 100],
    footprint: "box",
    notes: "Foundation-grid wall approximation for command planning.",
  },
  {
    name: "Behemoth Gateway",
    category: "Gateway",
    blueprint: "Blueprint'/Game/PrimalEarth/Structures/StoneGate/BehemothGate.BehemothGate_C'",
    size: "2100 W x 3600 H x 300 D",
    dimensions: [2100, 3600, 300],
    footprint: "box",
    notes: "Large gateway preview using requested real editor dimensions.",
  },
  {
    name: "Custom Blueprint",
    category: "Custom",
    blueprint: "Blueprint'/Game/Mobile/Custom/ReplaceMe.ReplaceMe_C'",
    size: "Custom",
    dimensions: [500, 500, 500],
    footprint: "box",
    notes: "Use for temporary admin-only blueprint paths before presets are formalized.",
  },
];

const initialObjects: PlacedObject[] = [
  makeObject("Dungeon Door", -1800, -420, 220, "Custom Cave Alpha"),
  makeObject("Arena Teleporter", 740, 960, 120, "BedWars Arena"),
  makeObject("Metal Tree Platform", 1120, -1300, 360, "Teleporter Roof"),
];

const mapUnits = 40000;
const mapHalfUnits = mapUnits / 2;
const renderUnitsPerArkUnit = 0.001;
const mapWorldSize = mapUnits * renderUnitsPerArkUnit;
const snapSizes = [100, 200, 500, 1000, 2000];

const initialCommands: SavedCommand[] = [
  commandFromObject(initialObjects[0], "cmd-1"),
  commandFromObject(initialObjects[1], "cmd-2"),
  commandFromObject(initialObjects[2], "cmd-3"),
];

function makeObject(name: string, x: number, y: number, z: number, collection = "Custom Cave Alpha"): PlacedObject {
  const preset = presets.find((candidate) => candidate.name === name) ?? presets[0];
  return {
    id: cryptoId(),
    name,
    category: preset.category,
    blueprint: preset.blueprint,
    x,
    y,
    z,
    rotation: 0,
    notes: preset.notes,
    collection,
  };
}

function cryptoId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

function spawnCommand(item: Pick<PlacedObject, "blueprint" | "x" | "y" | "z" | "rotation">) {
  return `SpawnActor "${item.blueprint}" ${item.x} ${item.y} ${item.z} 0 ${item.rotation} 0 |`;
}

function snapValue(value: number, snap: number) {
  return Math.round(value / snap) * snap;
}

function arkToRender(value: number) {
  return value * renderUnitsPerArkUnit;
}

function renderToArk(value: number) {
  return Math.round(value / renderUnitsPerArkUnit);
}

function presetForObject(object: PlacedObject) {
  return presets.find((candidate) => candidate.name === object.name) ?? presets.find((candidate) => candidate.category === object.category) ?? presets[presets.length - 1];
}

function objectBounds(object: PlacedObject) {
  const preset = presetForObject(object);
  const [width, height, depth] = preset.dimensions;
  return {
    minX: object.x - width / 2,
    maxX: object.x + width / 2,
    minY: object.y - depth / 2,
    maxY: object.y + depth / 2,
    minZ: object.z,
    maxZ: object.z + height,
    width,
    height,
    depth,
  };
}

function boundsOverlap(a: ReturnType<typeof objectBounds>, b: ReturnType<typeof objectBounds>) {
  return a.minX < b.maxX && a.maxX > b.minX && a.minY < b.maxY && a.maxY > b.minY && a.minZ < b.maxZ && a.maxZ > b.minZ;
}

function overlappingObjectIds(objects: PlacedObject[]) {
  const overlaps = new Set<string>();
  for (let a = 0; a < objects.length; a += 1) {
    for (let b = a + 1; b < objects.length; b += 1) {
      if (boundsOverlap(objectBounds(objects[a]), objectBounds(objects[b]))) {
        overlaps.add(objects[a].id);
        overlaps.add(objects[b].id);
      }
    }
  }
  return overlaps;
}

function commandFromObject(object: PlacedObject, id = cryptoId()): SavedCommand {
  return {
    id,
    name: object.name,
    category: object.category,
    blueprint: object.blueprint,
    objectCount: 1,
    collection: object.collection,
    updated: "Today",
    command: spawnCommand(object),
  };
}

type AdminStore = {
  page: PageKey;
  objects: PlacedObject[];
  selectedObjectId: string;
  selectedPreset: string;
  savedCommands: SavedCommand[];
  activeCollectionId: string;
  flyMode: boolean;
  walkMode: boolean;
  snapSize: number;
  rulerMode: boolean;
  measureStart: [number, number] | null;
  measureEnd: [number, number] | null;
  outputOpen: boolean;
  toasts: Toast[];
  setPage: (page: PageKey) => void;
  setSelectedPreset: (name: string) => void;
  setSelectedObjectId: (id: string) => void;
  setFlyMode: (enabled: boolean) => void;
  setWalkMode: (enabled: boolean) => void;
  setSnapSize: (size: number) => void;
  setRulerMode: (enabled: boolean) => void;
  setMeasurePoint: (point: [number, number]) => void;
  setOutputOpen: (open: boolean) => void;
  addToast: (message: string) => void;
  removeToast: (id: string) => void;
  addObject: () => void;
  updateObject: (id: string, patch: Partial<PlacedObject>) => void;
  duplicateObject: (id: string) => void;
  deleteObject: (id: string) => void;
  saveSelectedToCollection: () => void;
  addSavedCommand: (command: SavedCommand) => void;
  duplicateCommand: (id: string) => void;
  deleteCommand: (id: string) => void;
  deleteCollection: (id: string) => void;
  setActiveCollectionId: (id: string) => void;
};

const useAdminStore = create<AdminStore>((set, get) => ({
  page: "overview",
  objects: initialObjects,
  selectedObjectId: initialObjects[0].id,
  selectedPreset: "Dungeon Door",
  savedCommands: initialCommands,
  activeCollectionId: "Custom Cave Alpha",
  flyMode: false,
  walkMode: false,
  snapSize: 500,
  rulerMode: false,
  measureStart: null,
  measureEnd: null,
  outputOpen: true,
  toasts: [],
  setPage: (page) => set({ page }),
  setSelectedPreset: (selectedPreset) => set({ selectedPreset }),
  setSelectedObjectId: (selectedObjectId) => set({ selectedObjectId }),
  setFlyMode: (flyMode) => set({ flyMode }),
  setWalkMode: (walkMode) => set({ walkMode }),
  setSnapSize: (snapSize) => set({ snapSize }),
  setRulerMode: (rulerMode) => set({ rulerMode, measureStart: null, measureEnd: null }),
  setMeasurePoint: (point) => set((state) => state.measureStart && !state.measureEnd ? { measureEnd: point } : { measureStart: point, measureEnd: null }),
  setOutputOpen: (outputOpen) => set({ outputOpen }),
  addToast: (message) => {
    const id = cryptoId();
    set((state) => ({ toasts: [...state.toasts, { id, message }] }));
    window.setTimeout(() => get().removeToast(id), 2400);
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
  addObject: () => {
    const snap = get().snapSize;
    const next = makeObject(get().selectedPreset, snapValue(get().objects.length * 700 - 1400, snap), snapValue(get().objects.length * 500 - 900, snap), 120);
    set((state) => ({ objects: [...state.objects, next], selectedObjectId: next.id, outputOpen: true }));
  },
  updateObject: (id, patch) => set((state) => ({ objects: state.objects.map((object) => (object.id === id ? { ...object, ...patch } : object)) })),
  duplicateObject: (id) => {
    const source = get().objects.find((object) => object.id === id);
    if (!source) return;
    const duplicate = { ...source, id: cryptoId(), name: `${source.name} Copy`, x: source.x + 120, y: source.y + 120 };
    set((state) => ({ objects: [...state.objects, duplicate], selectedObjectId: duplicate.id }));
  },
  deleteObject: (id) => {
    set((state) => {
      const objects = state.objects.filter((object) => object.id !== id);
      return { objects, selectedObjectId: objects[0]?.id ?? "" };
    });
  },
  saveSelectedToCollection: () => {
    const object = get().objects.find((candidate) => candidate.id === get().selectedObjectId);
    if (!object) return;
    const command = commandFromObject(object);
    set((state) => ({ savedCommands: [command, ...state.savedCommands] }));
    get().addToast("Saved command to collection");
  },
  addSavedCommand: (command) => set((state) => ({ savedCommands: [command, ...state.savedCommands] })),
  duplicateCommand: (id) => {
    const source = get().savedCommands.find((command) => command.id === id);
    if (!source) return;
    set((state) => ({ savedCommands: [{ ...source, id: cryptoId(), name: `${source.name} Copy`, updated: "Today" }, ...state.savedCommands] }));
  },
  deleteCommand: (id) => set((state) => ({ savedCommands: state.savedCommands.filter((command) => command.id !== id) })),
  deleteCollection: (id) => {
    set((state) => ({ savedCommands: state.savedCommands.filter((command) => command.collection !== id) }));
    get().addToast(`Deleted collection ${id}`);
  },
  setActiveCollectionId: (activeCollectionId) => set({ activeCollectionId }),
}));

const navItems: Array<[PageKey, string, React.ElementType]> = [
  ["overview", "Overview", LayoutDashboard],
  ["editor", "3D Map Editor", Map],
  ["builder", "Command Builder", FileCode2],
  ["library", "Command Library", Database],
  ["collections", "Collections", Layers3],
  ["structures", "Structure Database", Boxes],
  ["settings", "Settings", Settings],
];

export function AdminDashboard() {
  const [authenticated, setAuthenticated] = React.useState(false);

  if (!authenticated) return <LoginScreen onSuccess={() => setAuthenticated(true)} />;
  return <DashboardShell onLogout={() => setAuthenticated(false)} />;
}

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      onSuccess();
      return;
    }
    setError("Invalid admin credentials");
  }

  return (
    <main className="admin-login">
      <Card className="login-card">
        <CardHeader>
          <Badge variant="outline">ARK Save Builder</Badge>
          <CardTitle>Admin Dashboard</CardTitle>
          <CardDescription>Sign in to build collections, place objects, and generate SpawnActor commands.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="login-form" onSubmit={submit}>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            {error ? <p className="form-error">{error}</p> : null}
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

function DashboardShell({ onLogout }: { onLogout: () => void }) {
  const page = useAdminStore((state) => state.page);
  const toasts = useAdminStore((state) => state.toasts);
  const removeToast = useAdminStore((state) => state.removeToast);

  return (
    <main className="admin-shell">
      <Sidebar />
      <section className="admin-workspace">
        <TopBar onLogout={onLogout} />
        <ScrollArea className="admin-main">
          {page === "overview" ? <OverviewPage /> : null}
          {page === "editor" ? <MapEditorPage /> : null}
          {page === "builder" ? <DoorCommandCreatorPage /> : null}
          {page === "library" ? <CommandLibraryPage /> : null}
          {page === "collections" ? <CollectionsPage /> : null}
          {page === "structures" ? <StructureDatabasePage /> : null}
          {page === "settings" ? <SettingsPage /> : null}
        </ScrollArea>
      </section>
      <div className="toast-viewport">
        {toasts.map((toast) => (
          <button className="toast" key={toast.id} type="button" onClick={() => removeToast(toast.id)}>
            <Check aria-hidden="true" />
            {toast.message}
          </button>
        ))}
      </div>
    </main>
  );
}

function Sidebar() {
  const page = useAdminStore((state) => state.page);
  const setPage = useAdminStore((state) => state.setPage);

  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <span>A</span>
        <div>
          <strong>Save Builder</strong>
          <small>ARK Mobile Admin</small>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(([key, label, Icon]) => (
          <button className={page === key ? "sidebar-item active" : "sidebar-item"} key={key} type="button" onClick={() => setPage(key)}>
            <Icon aria-hidden="true" />
            {label}
          </button>
        ))}
      </nav>
      <Card className="sidebar-status">
        <CardContent>
          <Radio aria-hidden="true" />
          <div>
            <strong>Local mock mode</strong>
            <span>Supabase-ready data shape</span>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}

function TopBar({ onLogout }: { onLogout: () => void }) {
  const page = useAdminStore((state) => state.page);
  const title = navItems.find(([key]) => key === page)?.[1] ?? "Dashboard";

  return (
    <header className="admin-topbar">
      <div>
        <span>ARK Save Builder</span>
        <h1>{title}</h1>
      </div>
      <div className="topbar-actions">
        <div className="search-box">
          <Search aria-hidden="true" />
          <input placeholder="Search commands, collections, presets" />
        </div>
        <Button variant="outline" size="sm" onClick={onLogout}>
          <LogOut aria-hidden="true" />
          Logout
        </Button>
      </div>
    </header>
  );
}

function OverviewPage() {
  const objects = useAdminStore((state) => state.objects);
  const commands = useAdminStore((state) => state.savedCommands);
  const setPage = useAdminStore((state) => state.setPage);
  const collections = getCollections(commands);

  return (
    <div className="admin-page">
      <div className="metric-grid">
        <Metric label="Total saved commands" value={commands.length} />
        <Metric label="Total collections" value={collections.length} />
        <Metric label="Total placed objects" value={objects.length} />
        <Metric label="Last edited collection" value={collections[0]?.name ?? "None"} />
      </div>
      <div className="overview-grid">
        <Card>
          <CardHeader>
            <CardTitle>Recent commands</CardTitle>
            <CardDescription>Latest generated SpawnActor output.</CardDescription>
          </CardHeader>
          <CardContent>
            <CommandRows commands={commands.slice(0, 5)} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>Jump into common admin workflows.</CardDescription>
          </CardHeader>
          <CardContent className="quick-actions">
            <Button onClick={() => setPage("editor")}><Move3D aria-hidden="true" /> Open 3D Editor</Button>
            <Button variant="outline" onClick={() => setPage("builder")}><FileCode2 aria-hidden="true" /> Generate Command</Button>
            <Button variant="outline" onClick={() => setPage("collections")}><Clipboard aria-hidden="true" /> Copy Collection</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Card className="metric-card">
      <CardContent>
        <span>{label}</span>
        <strong>{value}</strong>
      </CardContent>
    </Card>
  );
}

function MapEditorPage() {
  return (
    <section className="editor-shell" id="editor">
      <div className="viewport-panel">
        <div className="viewport-topbar">
          <div>
            <span>3D Viewport</span>
            <strong>Door 1</strong>
          </div>
          <div className="tool-toggle" aria-label="Transform mode">
            <button className="active" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move3d" aria-hidden="true"><path d="M5 3v16h16" /><path d="m5 19 6-6" /><path d="m2 6 3-3 3 3" /><path d="m18 16 3 3-3 3" /></svg>Move
            </button>
            <button className="" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw" aria-hidden="true"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>Rotate
            </button>
          </div>
        </div>
        <div className="ark-editor">
          <div className="ark-canvas">
            <canvas data-engine="three.js r184" width="1030" height="1845" style={{ display: "block", touchAction: "none" }} />
          </div>
          <div className="viewport-hint">Click a door to select. Drag arrows to move. Switch to rotate for yaw.</div>
        </div>
      </div>
      <aside className="control-panel">
        <div className="panel-card">
          <div className="panel-heading">
            <div>
              <h2>Doors</h2>
              <p>51 placed actors</p>
            </div>
            <span className="save-state">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Saved
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
            <button className="btn btn-primary btn-md" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14" /><path d="M12 5v14" /></svg>Add Door</button>
            <button className="btn btn-secondary btn-md" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2" aria-hidden="true"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>Delete</button>
          </div>
          <div className="door-list">
            <button className="door-list-item active" type="button"><span>Door 1</span><small>-5000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 2</span><small>-4800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 3</span><small>-4600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 4</span><small>-4400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 5</span><small>-4200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 6</span><small>-4000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 7</span><small>-3800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 8</span><small>-3600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 9</span><small>-3400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 10</span><small>-3200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 11</span><small>-3000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 12</span><small>-2800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 13</span><small>-2600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 14</span><small>-2400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 15</span><small>-2200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 16</span><small>-2000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 17</span><small>-1800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 18</span><small>-1600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 19</span><small>-1400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 20</span><small>-1200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 21</span><small>-1000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 22</span><small>-800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 23</span><small>-600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 24</span><small>-400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 25</span><small>0, 5000, 400</small></button>
            <button className="door-list-item" type="button"><span>Door 26</span><small>0, 5000, 400</small></button>
            <button className="door-list-item" type="button"><span>Door 27</span><small>200, 5000, 400</small></button>
            <button className="door-list-item" type="button"><span>Door 28</span><small>400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 29</span><small>600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 30</span><small>800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 31</span><small>1000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 32</span><small>1200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 33</span><small>1400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 34</span><small>1600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 35</span><small>1800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 36</span><small>2000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 37</span><small>2200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 38</span><small>2400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 39</span><small>2600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 40</span><small>2800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 41</span><small>3000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 42</span><small>3200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 43</span><small>3400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 44</span><small>3600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 45</span><small>3800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 46</span><small>4000, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 47</span><small>4200, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 48</span><small>4400, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 49</span><small>4600, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 50</span><small>4800, 5000, 0</small></button>
            <button className="door-list-item" type="button"><span>Door 51</span><small>5000, 5000, 0</small></button>
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
            <label className="transform-field"><span>Amount</span><input inputMode="numeric" type="text" defaultValue="51" /></label>
            <label className="transform-field"><span>Start X (front/back)</span><input inputMode="numeric" type="text" defaultValue="-5000" /></label>
            <label className="transform-field"><span>Offset X (front/back)</span><input inputMode="numeric" type="text" defaultValue="200" /></label>
            <label className="transform-field"><span>Start Y (left/right)</span><input inputMode="numeric" type="text" defaultValue="5000" /></label>
            <label className="transform-field"><span>Offset Y (left/right)</span><input inputMode="numeric" type="text" defaultValue="0" /></label>
            <label className="transform-field"><span>Start Z (up/down)</span><input inputMode="numeric" type="text" defaultValue="0" /></label>
            <label className="transform-field"><span>Offset Z (up/down)</span><input inputMode="numeric" type="text" defaultValue="0" /></label>
          </div>
          <div className="batch-checks">
            <label className="checkbox-row" htmlFor="batch-x">
              <span className="checkbox-shell">
                <input id="batch-x" type="checkbox" defaultChecked />
                <span className="checkbox-control"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>
              </span>
              <span>Increment X</span>
            </label>
            <label className="checkbox-row" htmlFor="batch-y">
              <span className="checkbox-shell">
                <input id="batch-y" type="checkbox" />
                <span className="checkbox-control"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>
              </span>
              <span>Increment Y</span>
            </label>
            <label className="checkbox-row" htmlFor="batch-z">
              <span className="checkbox-shell">
                <input id="batch-z" type="checkbox" />
                <span className="checkbox-control"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>
              </span>
              <span>Increment Z</span>
            </label>
          </div>
          <button className="btn btn-primary btn-md" type="button">Generate Doors Into 3D</button>
        </div>
        <div className="panel-card">
          <div className="panel-heading">
            <div>
              <h2>Selected transform</h2>
              <p>Fine tune exact values</p>
            </div>
          </div>
          <div className="transform-grid">
            <label className="transform-field"><span>Name</span><input type="text" defaultValue="Door 1" /></label>
            <label className="transform-field"><span>X (front/back)</span><input inputMode="numeric" type="text" defaultValue="-5000" /></label>
            <label className="transform-field"><span>Y (left/right)</span><input inputMode="numeric" type="text" defaultValue="5000" /></label>
            <label className="transform-field"><span>Z (up/down)</span><input inputMode="numeric" type="text" defaultValue="0" /></label>
            <label className="transform-field"><span>Yaw (rotation)</span><input inputMode="numeric" type="text" defaultValue="0" /></label>
          </div>
          <p className="axis-help">X = front/back · Y = left/right · Z = up/down · Yaw = 0°-360°</p>
          <button className="btn btn-ghost btn-md" type="button">Reset Scene</button>
        </div>
        <div className="panel-card command-card" id="commands">
          <div className="panel-heading">
            <div>
              <h2>Generated commands</h2>
              <p>51 command lines</p>
            </div>
          </div>
          <pre className="command-box">
            <code>{`SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -5000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -4800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -4600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -4400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -4200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -4000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -3800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -3600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -3400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -3200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -3000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -2800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -2600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -2400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -2200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -2000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -1800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -1600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -1400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -1200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -1000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" -400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 0 5000 400 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 0 5000 400 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 200 5000 400 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 1000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 1200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 1400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 1600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 1800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 2000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 2200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 2400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 2600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 2800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 3000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 3200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 3400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 3600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 3800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 4000 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 4200 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 4400 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 4600 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 4800 5000 0 |
SpawnActor "Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'" 5000 5000 0 |`}</code>
          </pre>
          <div className="button-row">
            <button className="btn btn-primary btn-md" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>Copy Commands</button>
            <button className="btn btn-secondary btn-md" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>Export</button>
          </div>
        </div>
      </aside>
    </section>
  );
}

function AdminMapScene() {
  const flyMode = useAdminStore((state) => state.flyMode);
  const walkMode = useAdminStore((state) => state.walkMode);
  const rulerMode = useAdminStore((state) => state.rulerMode);
  const measureStart = useAdminStore((state) => state.measureStart);
  const measureEnd = useAdminStore((state) => state.measureEnd);
  const setMeasurePoint = useAdminStore((state) => state.setMeasurePoint);
  const objects = useAdminStore((state) => state.objects);
  const selectedId = useAdminStore((state) => state.selectedObjectId);
  const setSelectedObjectId = useAdminStore((state) => state.setSelectedObjectId);
  const overlappingIds = React.useMemo(() => overlappingObjectIds(objects), [objects]);

  return (
    <div className="admin-map-canvas">
      <Canvas camera={{ position: walkMode ? [0, 0.86, 10.8] : flyMode ? [10.5, 7.4, 13.2] : [18, 13.5, 19], fov: walkMode ? 72 : flyMode ? 58 : 39 }} shadows dpr={[1, 1.8]}>
        <color attach="background" args={["#09090B"]} />
        <fog attach="fog" args={["#09090B", 7.5, 15.5]} />
        <hemisphereLight args={["#b8d4ff", "#172012", 1.15]} />
        <ambientLight intensity={0.38} />
        <directionalLight position={[4, 8, 4]} intensity={2.75} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <pointLight position={[-4, 1.6, 2.5]} intensity={4.5} distance={8} color="#8B5CF6" />
        <Environment preset="night" />
        <ArkMapTerrain onMeasure={rulerMode ? setMeasurePoint : undefined} />
        {measureStart ? <MeasureMarker point={measureStart} label="A" /> : null}
        {measureEnd ? <MeasureMarker point={measureEnd} label="B" /> : null}
        {measureStart && measureEnd ? <MeasureLine start={measureStart} end={measureEnd} /> : null}
        <CaveAndObeliskMarkers />
        {objects.map((object) => (
          <ObjectPreview
            key={object.id}
            object={object}
            selected={object.id === selectedId}
            overlapping={overlappingIds.has(object.id)}
            onSelect={() => setSelectedObjectId(object.id)}
          />
        ))}
        {walkMode ? <PlayerWalkControls /> : <OrbitControls enablePan enableZoom enableRotate maxDistance={34} minDistance={7.5} />}
      </Canvas>
      {walkMode ? (
        <div className="walk-mode-hud">
          <strong>Walk mode</strong>
          <span>WASD move / drag mouse to look / scroll wheel still works in browser page</span>
        </div>
      ) : null}
    </div>
  );
}

function ArkMapTerrain({ onMeasure }: { onMeasure?: (point: [number, number]) => void }) {
  const mapTexture = useTexture("/ark-map.webp");
  React.useMemo(() => {
    mapTexture.colorSpace = THREE.SRGBColorSpace;
    mapTexture.anisotropy = 8;
    mapTexture.wrapS = THREE.ClampToEdgeWrapping;
    mapTexture.wrapT = THREE.ClampToEdgeWrapping;
  }, [mapTexture]);

  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.08, 0]}
        receiveShadow
        onClick={(event) => {
          if (!onMeasure) return;
          event.stopPropagation();
          onMeasure([snapValue(renderToArk(event.point.x), useAdminStore.getState().snapSize), snapValue(renderToArk(event.point.z), useAdminStore.getState().snapSize)]);
        }}
      >
        <planeGeometry args={[mapWorldSize, mapWorldSize, 300, 300]} />
        <meshStandardMaterial
          map={mapTexture}
          displacementMap={mapTexture}
          displacementScale={0.12}
          displacementBias={-0.045}
          roughness={0.86}
          metalness={0.02}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]} receiveShadow>
        <planeGeometry args={[mapWorldSize + 8, mapWorldSize + 8, 1, 1]} />
        <meshStandardMaterial color="#122033" roughness={0.45} metalness={0.18} />
      </mesh>
      <WaterSurface />
      <BeachAndShallows />
      <PalmForest />
      <RockField />
      <GrassAndGroundCover />
      <DoorBuildScalePreview />
    </group>
  );
}

function WaterSurface() {
  const ref = React.useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = -0.095 + Math.sin(state.clock.elapsedTime * 0.8) * 0.004;
  });
  return (
    <group>
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.095, 0]}>
        <planeGeometry args={[mapWorldSize + 8, mapWorldSize + 8, 1, 1]} />
        <meshStandardMaterial color="#1f5f8f" transparent opacity={0.2} roughness={0.16} metalness={0.36} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0.35]} position={[0, -0.088, 0]}>
        <ringGeometry args={[mapWorldSize * 0.28, mapWorldSize * 0.55, 128]} />
        <meshStandardMaterial color="#86c7d8" transparent opacity={0.08} roughness={0.22} metalness={0.2} />
      </mesh>
    </group>
  );
}

function MeasureMarker({ point, label }: { point: [number, number]; label: string }) {
  return (
    <group position={[arkToRender(point[0]), 0.18, arkToRender(point[1])]}>
      <mesh>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.8} />
      </mesh>
      <HtmlLabel text={label} />
    </group>
  );
}

function MeasureLine({ start, end }: { start: [number, number]; end: [number, number] }) {
  const distance = Math.hypot(end[0] - start[0], end[1] - start[1]);
  const mid: [number, number, number] = [arkToRender((start[0] + end[0]) / 2), 0.16, arkToRender((start[1] + end[1]) / 2)];
  const length = arkToRender(distance);
  const angle = Math.atan2(end[1] - start[1], end[0] - start[0]);
  return (
    <group>
      <mesh position={mid} rotation={[0, -angle, 0]}>
        <boxGeometry args={[length, 0.035, 0.035]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.45} />
      </mesh>
      <group position={[mid[0], mid[1] + 0.22, mid[2]]}>
        <HtmlLabel text={`${Math.round(distance)} units`} />
      </group>
    </group>
  );
}

function HtmlLabel({ text }: { text: string }) {
  return (
    <Html center distanceFactor={9} position={[0, 0.22, 0]}>
      <span className="measure-label">{text}</span>
    </Html>
  );
}

function BeachAndShallows() {
  return (
    <group>
      {[
        [-4.9, -4.4, 0.8, 0.16],
        [-4.5, 3.8, 1.1, 0.18],
        [3.6, -4.7, 1.3, 0.16],
        [4.7, 3.6, 0.9, 0.14],
        [0.6, -5.2, 1.4, 0.14],
      ].map(([x, z, scaleX, scaleZ], index) => (
        <mesh key={index} rotation={[-Math.PI / 2, 0, index * 0.62]} position={[x * 2.65, -0.058, z * 2.65]} scale={[scaleX * 1.8, scaleZ * 1.8, 1]}>
          <circleGeometry args={[1, 48]} />
          <meshStandardMaterial color="#b8a76b" transparent opacity={0.34} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function PalmForest() {
  const palms = React.useMemo(
    () => [
      [-4.8, -2.5, 0.95], [-4.1, -1.8, 0.82], [-3.3, -2.6, 0.72], [-2.4, -3.1, 0.9],
      [3.8, -2.7, 0.8], [4.5, -1.8, 0.95], [3.4, -3.5, 0.76], [2.6, -4.2, 0.68],
      [3.5, 2.7, 0.86], [4.5, 3.5, 0.72], [2.8, 3.8, 0.7], [1.8, 3.2, 0.64],
      [-1.8, 2.8, 0.7], [-0.9, 3.4, 0.76], [0.4, 3.6, 0.68], [-2.7, 1.7, 0.62],
    ] as Array<[number, number, number]>,
    [],
  );
  return (
    <group>
      {palms.map(([x, z, height], index) => (
        <PalmTree key={index} position={[x * 2.7, -0.03, z * 2.7]} height={height * 0.72} rotation={index * 0.48} />
      ))}
    </group>
  );
}

function PalmTree({ position, height, rotation }: { position: [number, number, number]; height: number; rotation: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[0, height / 2, 0]} rotation={[0.08, 0, -0.12]}>
        <cylinderGeometry args={[0.025, 0.045, height, 7]} />
        <meshStandardMaterial color="#6f5432" roughness={0.88} />
      </mesh>
      {Array.from({ length: 7 }).map((_, index) => (
        <mesh key={index} castShadow position={[0, height + 0.03, 0]} rotation={[0.48, (index / 7) * Math.PI * 2, 0.18]}>
          <coneGeometry args={[0.055, 0.52, 5]} />
          <meshStandardMaterial color="#2f6b3e" roughness={0.78} />
        </mesh>
      ))}
    </group>
  );
}

function RockField() {
  return (
    <group>
      {[
        [-4.2, -3.2, 0.22], [-3.1, 1.9, 0.28], [-1.0, -2.2, 0.32], [1.4, -0.6, 0.24],
        [2.6, 2.0, 0.3], [4.2, -0.4, 0.26], [0.2, 4.1, 0.22], [-2.6, 3.4, 0.2],
      ].map(([x, z, scale], index) => (
        <mesh key={index} castShadow receiveShadow position={[x * 2.7, 0.02, z * 2.7]} rotation={[0.2, index, 0.1]}>
          <dodecahedronGeometry args={[scale * 0.72, 0]} />
          <meshStandardMaterial color="#6c6a5f" roughness={0.95} />
        </mesh>
      ))}
    </group>
  );
}

function GrassAndGroundCover() {
  const tufts = React.useMemo(() => {
    return Array.from({ length: 90 }, (_, index): [number, number, number, number] => {
      const ring = 3.2 + (index % 18) * 0.58;
      const angle = index * 2.399;
      const x = Math.cos(angle) * ring + Math.sin(index * 0.7) * 0.35;
      const z = Math.sin(angle) * ring + Math.cos(index * 0.4) * 0.35;
      const height = 0.08 + (index % 5) * 0.018;
      return [x, z, height, angle];
    });
  }, []);

  return (
    <group>
      {tufts.map(([x, z, height, rotation], index) => (
        <group key={index} position={[x, -0.015, z]} rotation={[0, rotation, 0]}>
          {[0, 1, 2].map((blade) => (
            <mesh key={blade} castShadow position={[blade * 0.018 - 0.018, height / 2, 0]} rotation={[0.18, blade * 0.9, blade === 1 ? 0.22 : -0.18]}>
              <boxGeometry args={[0.012, height, 0.006]} />
              <meshStandardMaterial color={index % 4 === 0 ? "#52683b" : "#34512e"} roughness={0.92} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function DoorBuildScalePreview() {
  const doorPreset = presets[0];
  const [doorWidth, doorHeight, doorDepth] = doorPreset.dimensions.map(arkToRender) as [number, number, number];
  const segments = 16;
  const spacing = doorWidth * 1.05;
  const baseX = -1.0;
  const baseZ = 8.6;

  return (
    <group position={[baseX, 0.02, baseZ]}>
      {Array.from({ length: segments }).map((_, index) => (
        <group key={`front-${index}`} position={[index * spacing, 0, 0]}>
          <DungeonDoorPreview selected={false} width={doorWidth} height={doorHeight} depth={doorDepth} />
        </group>
      ))}
      {Array.from({ length: segments }).map((_, index) => (
        <group key={`back-${index}`} position={[index * spacing, 0, spacing * 8]} rotation={[0, Math.PI, 0]}>
          <DungeonDoorPreview selected={false} width={doorWidth} height={doorHeight} depth={doorDepth} />
        </group>
      ))}
      {Array.from({ length: 8 }).map((_, index) => (
        <group key={`left-${index}`} position={[0, 0, index * spacing]} rotation={[0, Math.PI / 2, 0]}>
          <DungeonDoorPreview selected={false} width={doorWidth} height={doorHeight} depth={doorDepth} />
        </group>
      ))}
      {Array.from({ length: 8 }).map((_, index) => (
        <group key={`right-${index}`} position={[spacing * (segments - 1), 0, index * spacing]} rotation={[0, -Math.PI / 2, 0]}>
          <DungeonDoorPreview selected={false} width={doorWidth} height={doorHeight} depth={doorDepth} />
        </group>
      ))}
    </group>
  );
}

function PlayerWalkControls() {
  const { camera, gl } = useThree();
  const velocity = React.useRef(new THREE.Vector3());
  const yaw = React.useRef(0);
  const pitch = React.useRef(-0.18);
  const keys = React.useRef<Record<string, boolean>>({});
  const dragging = React.useRef(false);

  React.useEffect(() => {
    camera.position.set(0, 0.62, 10.8);
    camera.rotation.order = "YXZ";

    function keyDown(event: KeyboardEvent) {
      keys.current[event.key.toLowerCase()] = true;
    }

    function keyUp(event: KeyboardEvent) {
      keys.current[event.key.toLowerCase()] = false;
    }

    function pointerDown() {
      dragging.current = true;
    }

    function pointerUp() {
      dragging.current = false;
    }

    function pointerMove(event: PointerEvent) {
      if (!dragging.current) return;
      yaw.current -= event.movementX * 0.003;
      pitch.current = THREE.MathUtils.clamp(pitch.current - event.movementY * 0.003, -0.82, 0.42);
    }

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    window.addEventListener("pointerup", pointerUp);
    gl.domElement.addEventListener("pointerdown", pointerDown);
    gl.domElement.addEventListener("pointermove", pointerMove);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
      window.removeEventListener("pointerup", pointerUp);
      gl.domElement.removeEventListener("pointerdown", pointerDown);
      gl.domElement.removeEventListener("pointermove", pointerMove);
    };
  }, [camera, gl.domElement]);

  useFrame((_, delta) => {
    const forward = Number(Boolean(keys.current.w)) - Number(Boolean(keys.current.s));
    const strafe = Number(Boolean(keys.current.d)) - Number(Boolean(keys.current.a));
    const speed = keys.current.shift ? 2.8 : 1.45;
    velocity.current.set(strafe, 0, -forward).normalize().multiplyScalar(speed * delta);
    velocity.current.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw.current);
    camera.position.add(velocity.current);
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -17.2, 17.2);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -17.2, 17.2);
    const rollingHeight = 0.58 + Math.sin(camera.position.x * 0.72) * 0.035 + Math.cos(camera.position.z * 0.74) * 0.035;
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, rollingHeight, 0.08);
    camera.rotation.set(pitch.current, yaw.current, 0);
  });

  return null;
}

function CaveAndObeliskMarkers() {
  return (
    <group>
      {[
        [-1.9, 0.28, -0.6],
        [1.4, 0.25, -0.1],
        [0.5, 0.32, 1.5],
      ].map(([x, y, z], index) => (
        <mesh key={`cave-${index}`} position={[x * 3.0, y, z * 3.0]}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.7} />
        </mesh>
      ))}
      {[
        [-2.2, 0.6, 1.4],
        [2.0, 0.6, -1.3],
      ].map(([x, y, z], index) => (
        <mesh key={`obelisk-${index}`} position={[x * 3.0, y, z * 3.0]}>
          <octahedronGeometry args={[0.22]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function ObjectPreview({ object, selected, overlapping, onSelect }: { object: PlacedObject; selected: boolean; overlapping: boolean; onSelect: () => void }) {
  const ref = React.useRef<THREE.Group>(null);
  const position: [number, number, number] = [arkToRender(object.x), arkToRender(object.z) + 0.04, arkToRender(object.y)];
  const preset = presets.find((candidate) => candidate.name === object.name) ?? presets.find((candidate) => candidate.category === object.category) ?? presets[4];
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.degToRad(object.rotation);
    ref.current.position.y = position[1] + (selected ? Math.sin(state.clock.elapsedTime * 3) * 0.025 : 0);
  });
  return (
    <group ref={ref} position={position} onClick={(event) => { event.stopPropagation(); onSelect(); }}>
      <StructurePreview preset={preset} selected={selected} overlapping={overlapping} />
      {selected || overlapping ? <FootprintPreview preset={preset} overlapping={overlapping} /> : null}
    </group>
  );
}

function StructurePreview({ preset, selected, overlapping }: { preset: Preset; selected: boolean; overlapping: boolean }) {
  const color = overlapping ? "#7f1d1d" : selected ? "#8B5CF6" : "#27272A";
  const emissive = overlapping ? "#ef4444" : selected ? "#8B5CF6" : "#000000";
  const [width, height, depth] = preset.dimensions.map(arkToRender) as [number, number, number];

  if (preset.name === "Dungeon Door") {
    return (
      <group>
        <DungeonDoorPreview selected={selected} overlapping={overlapping} width={width} height={height} depth={depth} />
      </group>
    );
  }

  if (preset.name === "Arena Teleporter") {
    return (
      <group>
        <mesh castShadow position={[0, 0.02, 0]}>
          <cylinderGeometry args={[width / 2, width / 2, 0.05, 48]} />
          <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={selected ? 0.28 : 0} roughness={0.55} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
          <ringGeometry args={[width * 0.22, width * 0.42, 48]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.45} roughness={0.38} />
        </mesh>
      </group>
    );
  }

  if (preset.name === "Metal Tree Platform") {
    return (
      <group>
        <mesh castShadow position={[0, height / 2 + 0.08, 0]}>
          <cylinderGeometry args={[width * 0.12, width * 0.14, height + 0.18, 16]} />
          <meshStandardMaterial color="#5a442d" roughness={0.92} />
        </mesh>
        <mesh castShadow position={[0, height / 2, 0]}>
          <cylinderGeometry args={[width / 2, width / 2, height, 64]} />
          <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={selected ? 0.16 : 0} roughness={0.48} metalness={0.28} />
        </mesh>
        <mesh position={[0, height + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[width * 0.12, width * 0.5, 64]} />
          <meshStandardMaterial color="#111113" roughness={0.7} metalness={0.2} />
        </mesh>
        {Array.from({ length: 8 }).map((_, index) => (
          <mesh key={index} castShadow position={[0, height + 0.025, 0]} rotation={[0, (index / 8) * Math.PI * 2, 0]}>
            <boxGeometry args={[width * 0.46, 0.018, 0.018]} />
            <meshStandardMaterial color="#09090B" roughness={0.58} metalness={0.3} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh castShadow position={[0, height / 2, 0]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={selected ? 0.2 : 0} roughness={0.66} metalness={0.18} />
    </mesh>
  );
}

function FootprintPreview({ preset, overlapping }: { preset: Preset; overlapping: boolean }) {
  const [width, height, depth] = preset.dimensions.map(arkToRender) as [number, number, number];
  const color = overlapping ? "#ef4444" : "#8B5CF6";
  if (preset.footprint === "cylinder") {
    return (
      <mesh position={[0, 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[Math.max(width, depth) / 2, Math.max(width, depth) / 2 + 0.04, 80]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} transparent opacity={0.72} />
      </mesh>
    );
  }
  return (
    <mesh position={[0, height / 2, 0]}>
      <boxGeometry args={[width, height, depth]} />
      <meshBasicMaterial color={color} transparent opacity={0.16} wireframe />
    </mesh>
  );
}

function DungeonDoorPreview({ selected, overlapping = false, width, height, depth }: { selected: boolean; overlapping?: boolean; width: number; height: number; depth: number }) {
  const accentGlow = overlapping ? 0.65 : selected ? 0.42 : 0.16;
  const stoneColor = "#504f48";
  const darkMetal = "#171717";
  const agedMetal = "#3f433f";

  return (
    <group>
      <mesh castShadow receiveShadow position={[-width * 0.62, height * 0.48, -depth * 0.2]}>
        <boxGeometry args={[width * 0.22, height * 1.06, depth * 2.4]} />
        <meshStandardMaterial color={stoneColor} roughness={0.96} metalness={0.02} />
      </mesh>
      <mesh castShadow receiveShadow position={[width * 0.62, height * 0.48, -depth * 0.2]}>
        <boxGeometry args={[width * 0.22, height * 1.06, depth * 2.4]} />
        <meshStandardMaterial color={stoneColor} roughness={0.96} metalness={0.02} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, height * 1.02, -depth * 0.2]}>
        <boxGeometry args={[width * 1.38, height * 0.14, depth * 2.45]} />
        <meshStandardMaterial color={stoneColor} roughness={0.96} metalness={0.02} />
      </mesh>

      <mesh castShadow position={[0, height * 0.5, 0]}>
        <boxGeometry args={[width * 1.06, height * 0.96, depth * 0.72]} />
        <meshStandardMaterial color={agedMetal} roughness={0.58} metalness={0.68} emissive="#111113" emissiveIntensity={0.08} />
      </mesh>

      <mesh position={[0, height * 0.5, depth * 0.42]}>
        <boxGeometry args={[width * 0.82, height * 0.74, depth * 0.08]} />
          <meshStandardMaterial color={overlapping ? "#3f1111" : "#132524"} emissive={overlapping ? "#ef4444" : "#2dd4bf"} emissiveIntensity={accentGlow} transparent opacity={0.42} roughness={0.28} />
      </mesh>

      {[-0.42, 0.42].map((x) => (
        <mesh castShadow key={`outer-${x}`} position={[x * width, height * 0.5, depth * 0.58]}>
          <boxGeometry args={[width * 0.09, height * 0.94, depth * 0.18]} />
          <meshStandardMaterial color={darkMetal} roughness={0.52} metalness={0.82} />
        </mesh>
      ))}
      {[0.08, 0.5, 0.92].map((y) => (
        <mesh castShadow key={`rail-${y}`} position={[0, height * y, depth * 0.62]}>
          <boxGeometry args={[width * 1.0, height * 0.055, depth * 0.2]} />
          <meshStandardMaterial color={darkMetal} roughness={0.52} metalness={0.82} />
        </mesh>
      ))}
      {[-0.27, -0.09, 0.09, 0.27].map((x) => (
        <mesh castShadow key={`bar-${x}`} position={[x * width, height * 0.5, depth * 0.72]}>
          <cylinderGeometry args={[width * 0.024, width * 0.024, height * 0.78, 12]} />
          <meshStandardMaterial color="#09090B" roughness={0.38} metalness={0.9} />
        </mesh>
      ))}
      <mesh castShadow position={[0, height * 0.38, depth * 0.86]}>
        <boxGeometry args={[width * 0.26, height * 0.2, depth * 0.16]} />
        <meshStandardMaterial color="#58534b" roughness={0.48} metalness={0.74} />
      </mesh>
      <mesh castShadow position={[0, height * 0.38, depth * 0.98]}>
        <torusGeometry args={[width * 0.07, width * 0.012, 8, 20]} />
        <meshStandardMaterial color="#09090B" roughness={0.38} metalness={0.88} />
      </mesh>
      {[-0.42, -0.22, 0.22, 0.42].flatMap((x) =>
        [0.16, 0.84].map((y) => (
          <mesh castShadow key={`rivet-${x}-${y}`} position={[x * width, y * height, depth * 0.84]}>
            <sphereGeometry args={[width * 0.028, 12, 8]} />
            <meshStandardMaterial color="#6a6257" roughness={0.42} metalness={0.74} />
          </mesh>
        )),
      )}
    </group>
  );
}

function InspectorPanel() {
  const object = useAdminStore((state) => state.objects.find((item) => item.id === state.selectedObjectId));
  const objects = useAdminStore((state) => state.objects);
  const updateObject = useAdminStore((state) => state.updateObject);
  const duplicateObject = useAdminStore((state) => state.duplicateObject);
  const deleteObject = useAdminStore((state) => state.deleteObject);
  const saveSelectedToCollection = useAdminStore((state) => state.saveSelectedToCollection);

  if (!object) {
    return (
      <Card className="inspector-panel">
        <CardHeader><CardTitle>Inspector</CardTitle><CardDescription>Select or place an object.</CardDescription></CardHeader>
      </Card>
    );
  }
  const preset = presetForObject(object);
  const bounds = objectBounds(object);
  const overlaps = overlappingObjectIds(objects).has(object.id);

  function updateNumber(field: keyof Pick<PlacedObject, "x" | "y" | "z" | "rotation">, value: string) {
    updateObject(object.id, { [field]: Number(value || 0) });
  }

  return (
    <Card className="inspector-panel">
      <CardHeader>
        <Badge variant="outline">{object.category}</Badge>
        <CardTitle>Inspector</CardTitle>
        <CardDescription>{object.name}</CardDescription>
      </CardHeader>
      <CardContent className="inspector-form">
        <Field label="Name"><Input value={object.name} onChange={(event) => updateObject(object.id, { name: event.target.value })} /></Field>
        <Field label="Category"><Input value={object.category} onChange={(event) => updateObject(object.id, { category: event.target.value })} /></Field>
        <Field label="Blueprint path"><Textarea value={object.blueprint} onChange={(event) => updateObject(object.id, { blueprint: event.target.value })} /></Field>
        <div className="coord-grid">
          <Field label="X"><Input value={object.x} onChange={(event) => updateNumber("x", event.target.value)} /></Field>
          <Field label="Y"><Input value={object.y} onChange={(event) => updateNumber("y", event.target.value)} /></Field>
          <Field label="Z"><Input value={object.z} onChange={(event) => updateNumber("z", event.target.value)} /></Field>
          <Field label="Rotation"><Input value={object.rotation} onChange={(event) => updateNumber("rotation", event.target.value)} /></Field>
        </div>
        <Field label="Spacing"><Input defaultValue="100" /></Field>
        <Field label="Notes"><Textarea value={object.notes} onChange={(event) => updateObject(object.id, { notes: event.target.value })} /></Field>
        <div className={overlaps ? "validation-card danger" : "validation-card"}>
          <strong>{overlaps ? "Collision detected" : "Placement valid"}</strong>
          <span>Size: {preset.dimensions[0]} W x {preset.dimensions[1]} H x {preset.dimensions[2]} D units</span>
          <span>Occupied X: {Math.round(bounds.minX)} to {Math.round(bounds.maxX)}</span>
          <span>Occupied Y: {Math.round(bounds.minY)} to {Math.round(bounds.maxY)}</span>
          <span>Height: {Math.round(bounds.minZ)} to {Math.round(bounds.maxZ)}</span>
        </div>
      </CardContent>
      <CardFooter className="inspector-actions">
        <Button onClick={saveSelectedToCollection}><Save aria-hidden="true" /> Save</Button>
        <Button variant="outline" onClick={() => duplicateObject(object.id)}><Copy aria-hidden="true" /> Duplicate</Button>
        <Button variant="outline" onClick={() => deleteObject(object.id)}><Trash2 aria-hidden="true" /> Delete</Button>
      </CardFooter>
    </Card>
  );
}

function CommandOutputDrawer() {
  const objects = useAdminStore((state) => state.objects);
  const output = objects.map(spawnCommand).join("\n");
  return (
    <div className="command-drawer">
      <div>
        <strong>Command output</strong>
        <span>{objects.length} placed objects</span>
      </div>
      <Textarea readOnly value={output} />
      <CopyButton text={output} />
    </div>
  );
}

function CommandBuilderPage() {
  const addSavedCommand = useAdminStore((state) => state.addSavedCommand);
  const addToast = useAdminStore((state) => state.addToast);
  const categories = React.useMemo(() => Array.from(new Set(presets.map((preset) => preset.category))), []);
  const [form, setForm] = React.useState({
    preset: presets[3].name,
    name: presets[3].name,
    category: presets[3].category,
    blueprint: presets[3].blueprint,
    startX: 0,
    endX: 500,
    startY: 0,
    endY: 0,
    z: 100,
    spacing: 500,
    type: "Line" as GenerateType,
    collection: "Custom Cave Alpha",
  });
  const [output, setOutput] = React.useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: ["startX", "endX", "startY", "endY", "z", "spacing"].includes(field) ? Number(value || 0) : value }));
  }

  function selectPreset(presetName: string) {
    const preset = presets.find((candidate) => candidate.name === presetName);
    if (!preset) return;
    setForm((current) => ({
      ...current,
      preset: preset.name,
      name: preset.name,
      category: preset.category,
      blueprint: preset.blueprint,
    }));
  }

  function generate() {
    const commands = generateCommands(form);
    setOutput(commands.join("\n"));
  }

  function save() {
    if (!output) generate();
    addSavedCommand({
      id: cryptoId(),
      name: form.name,
      category: form.category,
      blueprint: form.blueprint,
      objectCount: Math.max(1, output.split("\n").filter(Boolean).length),
      collection: form.collection,
      updated: "Today",
      command: output || generateCommands(form).join("\n"),
    });
    addToast("Saved generated command");
  }

  return (
    <div className="admin-page builder-grid">
      <Card>
        <CardHeader>
          <CardTitle>Manual command generator</CardTitle>
          <CardDescription>Create single, line, wall, grid, ceiling, or room SpawnActor batches.</CardDescription>
        </CardHeader>
        <CardContent className="builder-form">
          <Field label="Preset">
            <Select value={form.preset} onChange={(event) => selectPreset(event.target.value)}>
              {presets.map((preset) => <option key={preset.name}>{preset.name}</option>)}
            </Select>
          </Field>
          <Field label="Command name"><Input value={form.name} onChange={(event) => update("name", event.target.value)} /></Field>
          <Field label="Category">
            <Select value={form.category} onChange={(event) => update("category", event.target.value)}>
              {categories.map((category) => <option key={category}>{category}</option>)}
            </Select>
          </Field>
          <Field label="Blueprint path"><Textarea value={form.blueprint} onChange={(event) => update("blueprint", event.target.value)} /></Field>
          <div className="coord-grid">
            <Field label="Start X"><Input value={form.startX} onChange={(event) => update("startX", event.target.value)} /></Field>
            <Field label="End X"><Input value={form.endX} onChange={(event) => update("endX", event.target.value)} /></Field>
            <Field label="Start Y"><Input value={form.startY} onChange={(event) => update("startY", event.target.value)} /></Field>
            <Field label="End Y"><Input value={form.endY} onChange={(event) => update("endY", event.target.value)} /></Field>
            <Field label="Z height"><Input value={form.z} onChange={(event) => update("z", event.target.value)} /></Field>
            <Field label="Spacing"><Input value={form.spacing} onChange={(event) => update("spacing", event.target.value)} /></Field>
          </div>
          <Field label="Generate type">
            <Select value={form.type} onChange={(event) => update("type", event.target.value)}>
              {(["Single", "Line", "Wall", "Grid", "Ceiling", "Room"] as GenerateType[]).map((type) => <option key={type}>{type}</option>)}
            </Select>
          </Field>
        </CardContent>
        <CardFooter>
          <Button onClick={generate}><Grid3X3 aria-hidden="true" /> Generate</Button>
          <Button variant="outline" onClick={save}><Save aria-hidden="true" /> Save to Collection</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Generated output</CardTitle>
          <CardDescription>Copy this into ARK Mobile admin command flow.</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea className="output-textarea" readOnly value={output} />
        </CardContent>
        <CardFooter>
          <CopyButton text={output} />
        </CardFooter>
      </Card>
    </div>
  );
}

function generateCommands(form: { blueprint: string; startX: number; endX: number; startY: number; endY: number; z: number; spacing: number; type: GenerateType }) {
  const spacing = Math.max(1, form.spacing);
  const xSteps = Math.max(1, Math.floor(Math.abs(form.endX - form.startX) / spacing) + 1);
  const ySteps = Math.max(1, Math.floor(Math.abs(form.endY - form.startY) / spacing) + 1);
  const xDir = form.endX >= form.startX ? 1 : -1;
  const yDir = form.endY >= form.startY ? 1 : -1;
  const make = (x: number, y: number, z = form.z) => spawnCommand({ blueprint: form.blueprint, x, y, z, rotation: 0 });

  if (form.type === "Single") return [make(form.startX, form.startY)];
  if (form.type === "Line") return Array.from({ length: xSteps }, (_, index) => make(form.startX + index * spacing * xDir, form.startY));
  if (form.type === "Wall") return Array.from({ length: xSteps }, (_, x) => [0, 1, 2].map((level) => make(form.startX + x * spacing * xDir, form.startY, form.z + level * spacing))).flat();
  if (form.type === "Grid" || form.type === "Ceiling") return Array.from({ length: xSteps }, (_, x) => Array.from({ length: ySteps }, (_, y) => make(form.startX + x * spacing * xDir, form.startY + y * spacing * yDir))).flat();
  return [
    ...generateCommands({ ...form, type: "Grid" }),
    ...Array.from({ length: xSteps }, (_, x) => make(form.startX + x * spacing * xDir, form.startY, form.z + spacing)),
    ...Array.from({ length: ySteps }, (_, y) => make(form.startX, form.startY + y * spacing * yDir, form.z + spacing)),
  ];
}

function CommandLibraryPage() {
  const commands = useAdminStore((state) => state.savedCommands);
  const duplicateCommand = useAdminStore((state) => state.duplicateCommand);
  const deleteCommand = useAdminStore((state) => state.deleteCommand);
  return (
    <div className="admin-page">
      <Card>
        <CardHeader>
          <CardTitle>Command Library</CardTitle>
          <CardDescription>Saved commands ready for copy, edit, duplicate, and delete actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Blueprint</TableHead>
                <TableHead>Object count</TableHead>
                <TableHead>Collection</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commands.map((command) => (
                <TableRow key={command.id}>
                  <TableCell>{command.name}</TableCell>
                  <TableCell><Badge variant="secondary">{command.category}</Badge></TableCell>
                  <TableCell className="mono-cell">{command.blueprint}</TableCell>
                  <TableCell>{command.objectCount}</TableCell>
                  <TableCell>{command.collection}</TableCell>
                  <TableCell>{command.updated}</TableCell>
                  <TableCell><ActionMenu command={command} onDuplicate={() => duplicateCommand(command.id)} onDelete={() => deleteCommand(command.id)} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function ActionMenu({ command, onDuplicate, onDelete }: { command: SavedCommand; onDuplicate: () => void; onDelete: () => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon"><MoreHorizontal aria-hidden="true" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => copyText(command.command)}>Copy</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={onDuplicate}>Duplicate</DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CollectionsPage() {
  const commands = useAdminStore((state) => state.savedCommands);
  const activeCollectionId = useAdminStore((state) => state.activeCollectionId);
  const setActiveCollectionId = useAdminStore((state) => state.setActiveCollectionId);
  const deleteCollection = useAdminStore((state) => state.deleteCollection);
  const collections = getCollections(commands);
  const active = collections.find((collection) => collection.id === activeCollectionId) ?? collections[0];

  return (
    <div className="admin-page collections-grid">
      <Card>
        <CardHeader>
          <CardTitle>Collections</CardTitle>
          <CardDescription>Step-by-step build groups for ARK Mobile save creation.</CardDescription>
        </CardHeader>
        <CardContent className="collection-list">
          {collections.map((collection) => (
            <button className={active?.id === collection.id ? "collection-item active" : "collection-item"} key={collection.id} type="button" onClick={() => setActiveCollectionId(collection.id)}>
              <strong>{collection.name}</strong>
              <span>{collection.commands.length} commands</span>
            </button>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Badge variant="outline">Build workflow</Badge>
          <CardTitle>{active?.name}</CardTitle>
          <CardDescription>Copy one command, paste it in ARK, return here, then continue with the next command.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="collection-toolbar">
            <CopyButton text={active?.commands.map((command) => command.command).join("\n") ?? ""} label="Copy All" />
            <Button variant="outline"><Plus aria-hidden="true" /> Add Command</Button>
            <Button variant="outline">Edit Collection</Button>
            <Button variant="destructive" onClick={() => deleteCollection(active?.id ?? "")} type="button">Delete Collection</Button>
          </div>
          <div className="step-list">
            {active?.commands.map((command, index) => (
              <div className="step-command" key={command.id}>
                <span>Command {index + 1}</span>
                <code>{command.command}</code>
                <CopyButton text={command.command} label={`Copy command ${index + 1}`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getCollections(commands: SavedCommand[]): BuildCollection[] {
  const names = ["Custom Cave Alpha", "BedWars Arena", "Raid Base 01", "Teleporter Roof"];
  return names.map((name) => ({
    id: name,
    name,
    updated: "Today",
    commands: commands.filter((command) => command.collection === name),
  })).map((collection) => collection.commands.length ? collection : {
    ...collection,
    commands: [{
      id: cryptoId(),
      name: `${collection.name} placeholder`,
      category: "Workflow",
      blueprint: presets[0].blueprint,
      objectCount: 1,
      collection: collection.name,
      updated: "Mock",
      command: spawnCommand({ blueprint: presets[0].blueprint, x: 0, y: 0, z: 100, rotation: 0 }),
    }],
  });
}

function StructureDatabasePage() {
  const [openPreset, setOpenPreset] = React.useState<Preset | null>(null);
  return (
    <div className="admin-page">
      <Card>
        <CardHeader>
          <CardTitle>Structure Database</CardTitle>
          <CardDescription>Preset library for known ARK Mobile structures and custom placeholders.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Default size preview</TableHead>
                <TableHead>Blueprint path</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {presets.map((preset) => (
                <TableRow key={preset.name}>
                  <TableCell>{preset.name}</TableCell>
                  <TableCell><Badge variant="secondary">{preset.category}</Badge></TableCell>
                  <TableCell>{preset.size}</TableCell>
                  <TableCell className="mono-cell">{preset.blueprint}</TableCell>
                  <TableCell><Button variant="outline" size="sm" onClick={() => setOpenPreset(preset)}>View</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Dialog open={Boolean(openPreset)}>
        <DialogContent onClose={() => setOpenPreset(null)}>
          <DialogHeader>
            <DialogTitle>{openPreset?.name}</DialogTitle>
            <DialogDescription>{openPreset?.notes}</DialogDescription>
          </DialogHeader>
          <div className="preset-preview">
            <div />
            <code>{openPreset?.blueprint}</code>
            <Badge variant="outline">{openPreset?.size}</Badge>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="admin-page settings-grid">
      <Card>
        <CardHeader>
          <CardTitle>Builder defaults</CardTitle>
          <CardDescription>Local settings now, Supabase persistence later.</CardDescription>
        </CardHeader>
        <CardContent className="settings-form">
          <Field label="Theme"><Select defaultValue="dark"><option value="dark">Dark</option></Select></Field>
          <Field label="Grid size"><Input defaultValue="100" /></Field>
          <Field label="Default Z height"><Input defaultValue="100" /></Field>
          <Field label="Default spacing"><Select defaultValue="500">{snapSizes.map((size) => <option key={size} value={size}>{size}</option>)}</Select></Field>
          <Field label="Copy format"><Select defaultValue="spawnactor"><option value="spawnactor">SpawnActor pipe-separated</option><option value="line">One command per line</option></Select></Field>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Admin account</CardTitle>
          <CardDescription>Temporary local credentials for prototype access.</CardDescription>
        </CardHeader>
        <CardContent className="settings-form">
          <Field label="Username"><Input defaultValue="admin" /></Field>
          <Field label="Password"><Input type="password" defaultValue="admin" /></Field>
          <Button><Save aria-hidden="true" /> Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function CommandRows({ commands }: { commands: SavedCommand[] }) {
  return (
    <div className="command-rows">
      {commands.map((command) => (
        <div key={command.id}>
          <strong>{command.name}</strong>
          <span>{command.collection} / {command.objectCount} object</span>
        </div>
      ))}
    </div>
  );
}

type DoorCommandDoor = {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
};

type DoorBatchForm = {
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

const initialDoorBatchForm: DoorBatchForm = {
  amount: 51,
  startX: -5000,
  startY: 5000,
  startZ: 0,
  offsetX: 200,
  offsetY: 0,
  offsetZ: 0,
  incrementX: true,
  incrementY: false,
  incrementZ: false,
};

function DoorCommandCreatorPage() {
  const addSavedCommand = useAdminStore((state) => state.addSavedCommand);
  const addToast = useAdminStore((state) => state.addToast);
  const [batchForm, setBatchForm] = React.useState<DoorBatchForm>(initialDoorBatchForm);
  const [doors, setDoors] = React.useState<DoorCommandDoor[]>(() => makeDoorBatch(initialDoorBatchForm));
  const [selectedDoorId, setSelectedDoorId] = React.useState(() => doors[0]?.id ?? "");
  const [doorPreset, setDoorPreset] = React.useState(presets[0].name);

  const selectedDoor = doors.find((door) => door.id === selectedDoorId) ?? doors[0];
  const selectedDoorPreset = presets.find((preset) => preset.name === doorPreset) ?? presets[0];
  const commands = doors.map((door) => makeDoorCommand(door, selectedDoorPreset.blueprint)).join("\n");

  function updateBatchNumber(field: keyof Pick<DoorBatchForm, "amount" | "startX" | "startY" | "startZ" | "offsetX" | "offsetY" | "offsetZ">, value: string) {
    setBatchForm((current) => ({ ...current, [field]: value === "" ? "" : Number(value || 0) }));
  }

  function updateBatchCheckbox(field: keyof Pick<DoorBatchForm, "incrementX" | "incrementY" | "incrementZ">, checked: boolean) {
    setBatchForm((current) => ({ ...current, [field]: checked }));
  }

  function generateBatchDoors() {
    const nextDoors = makeDoorBatch(batchForm);
    setDoors(nextDoors);
    setSelectedDoorId(nextDoors[0]?.id ?? "");
  }

  function addDoor() {
    const last = doors[doors.length - 1];
    const next: DoorCommandDoor = {
      id: cryptoId(),
      name: `${selectedDoorPreset.name} ${doors.length + 1}`,
      x: (last?.x ?? 0) + 200,
      y: last?.y ?? 0,
      z: last?.z ?? 0,
      yaw: last?.yaw ?? 0,
    };
    setDoors((current) => [...current, next]);
    setSelectedDoorId(next.id);
  }

  function deleteSelectedDoor() {
    if (!selectedDoor) return;
    setDoors((current) => {
      const next = current.filter((door) => door.id !== selectedDoor.id);
      setSelectedDoorId(next[0]?.id ?? "");
      return next;
    });
  }

  function updateSelectedDoor(patch: Partial<DoorCommandDoor>) {
    if (!selectedDoor) return;
    setDoors((current) => current.map((door) => (door.id === selectedDoor.id ? { ...door, ...patch } : door)));
  }

  function saveToCollection() {
    addSavedCommand({
      id: cryptoId(),
      name: `${selectedDoorPreset.name} Batch`,
      category: selectedDoorPreset.category,
      blueprint: selectedDoorPreset.blueprint,
      objectCount: doors.length,
      collection: "Custom Cave Alpha",
      updated: "Today",
      command: commands,
    });
    addToast("Saved door batch to collection");
  }

  function exportCommands() {
    const blob = new Blob([commands], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ark-mobile-dungeon-door-commands.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="admin-page old-command-creator">
      <div className="old-command-grid">
        <Card>
          <CardHeader>
            <CardTitle>Dungeon Door Command Creator</CardTitle>
            <CardDescription>Old batch workflow for building walls, cages, and cave layouts from repeated dungeon doors.</CardDescription>
          </CardHeader>
          <CardContent>
            <Field label="Preset">
              <Select value={doorPreset} onChange={(event) => setDoorPreset(event.target.value)}>
                {presets.map((preset) => <option key={preset.name}>{preset.name}</option>)}
              </Select>
            </Field>
            <div className="door-reference compact">
              <div className="door-reference-model">
                <span className="door-ref-bars" />
                <span className="door-ref-plate" />
              </div>
              <div>
                <strong>{selectedDoorPreset.name}</strong>
                <p>{selectedDoorPreset.notes}</p>
              </div>
            </div>
            <div className="button-row">
              <Button onClick={addDoor}><Plus aria-hidden="true" /> Add Door</Button>
              <Button variant="outline" onClick={deleteSelectedDoor} disabled={!selectedDoor}><Trash2 aria-hidden="true" /> Delete</Button>
            </div>
            <div className="door-list restored">
              {doors.map((door) => (
                <button className={door.id === selectedDoor?.id ? "door-list-item active" : "door-list-item"} key={door.id} type="button" onClick={() => setSelectedDoorId(door.id)}>
                  <span>{door.name}</span>
                  <small>{formatCommandNumber(door.x)}, {formatCommandNumber(door.y)}, {formatCommandNumber(door.z)}</small>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="creator-side-stack">
          <Card>
            <CardHeader>
              <CardTitle>Batch generator</CardTitle>
              <CardDescription>Create doors from the old command inputs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="batch-grid restored">
                <BatchField label="Amount" value={batchForm.amount} onChange={(value) => updateBatchNumber("amount", value)} />
                <BatchField label="Start X (front/back)" value={batchForm.startX} onChange={(value) => updateBatchNumber("startX", value)} />
                <BatchField label="Offset X (front/back)" value={batchForm.offsetX} onChange={(value) => updateBatchNumber("offsetX", value)} />
                <BatchField label="Start Y (left/right)" value={batchForm.startY} onChange={(value) => updateBatchNumber("startY", value)} />
                <BatchField label="Offset Y (left/right)" value={batchForm.offsetY} onChange={(value) => updateBatchNumber("offsetY", value)} />
                <BatchField label="Start Z (up/down)" value={batchForm.startZ} onChange={(value) => updateBatchNumber("startZ", value)} />
                <BatchField label="Offset Z (up/down)" value={batchForm.offsetZ} onChange={(value) => updateBatchNumber("offsetZ", value)} />
              </div>
              <div className="batch-checks restored">
                <Checkbox id="batch-x" checked={batchForm.incrementX} label="Increment X" onChange={(event) => updateBatchCheckbox("incrementX", event.target.checked)} />
                <Checkbox id="batch-y" checked={batchForm.incrementY} label="Increment Y" onChange={(event) => updateBatchCheckbox("incrementY", event.target.checked)} />
                <Checkbox id="batch-z" checked={batchForm.incrementZ} label="Increment Z" onChange={(event) => updateBatchCheckbox("incrementZ", event.target.checked)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={generateBatchDoors}>Generate Doors</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Selected transform</CardTitle>
              <CardDescription>Fine tune exact command values.</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDoor ? (
                <div className="transform-grid restored">
                  <Field label="Name"><Input value={selectedDoor.name} onChange={(event) => updateSelectedDoor({ name: event.target.value })} /></Field>
                  <Field label="X (front/back)"><Input inputMode="numeric" value={selectedDoor.x} onChange={(event) => updateSelectedDoor({ x: Number(event.target.value || 0) })} /></Field>
                  <Field label="Y (left/right)"><Input inputMode="numeric" value={selectedDoor.y} onChange={(event) => updateSelectedDoor({ y: Number(event.target.value || 0) })} /></Field>
                  <Field label="Z (up/down)"><Input inputMode="numeric" value={selectedDoor.z} onChange={(event) => updateSelectedDoor({ z: Number(event.target.value || 0) })} /></Field>
                  <Field label="Yaw (rotation)"><Input inputMode="numeric" value={selectedDoor.yaw} onChange={(event) => updateSelectedDoor({ yaw: Number(event.target.value || 0) })} /></Field>
                </div>
              ) : (
                <CardDescription>No door selected.</CardDescription>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generated commands</CardTitle>
          <CardDescription>{doors.length} command lines</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="command-box restored"><code>{commands}</code></pre>
        </CardContent>
        <CardFooter className="button-row">
          <Button onClick={() => { copyText(commands); addToast("Copied commands"); }}><Copy aria-hidden="true" /> Copy Commands</Button>
          <Button variant="outline" onClick={exportCommands}><Download aria-hidden="true" /> Export</Button>
          <Button variant="outline" onClick={saveToCollection}><Save aria-hidden="true" /> Save to Collection</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function BatchField({ label, value, onChange }: { label: string; value: number | ""; onChange: (value: string) => void }) {
  return (
    <label className="transform-field restored">
      <span>{label}</span>
      <input inputMode="numeric" type="text" value={String(value)} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function makeDoorBatch(form: DoorBatchForm) {
  const amount = Math.max(1, Math.min(500, Math.floor(numberOrZero(form.amount) || 1)));
  return Array.from({ length: amount }, (_, index): DoorCommandDoor => ({
    id: cryptoId(),
    name: `Door ${index + 1}`,
    x: numberOrZero(form.startX) + (form.incrementX ? numberOrZero(form.offsetX) * index : 0),
    y: numberOrZero(form.startY) + (form.incrementY ? numberOrZero(form.offsetY) * index : 0),
    z: numberOrZero(form.startZ) + (form.incrementZ ? numberOrZero(form.offsetZ) * index : 0),
    yaw: 0,
  }));
}

function numberOrZero(value: number | "") {
  return value === "" ? 0 : value;
}

function formatCommandNumber(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function makeDoorCommand(door: DoorCommandDoor, blueprint: string) {
  return `SpawnActor "${blueprint}" ${formatCommandNumber(door.x)} ${formatCommandNumber(door.y)} ${formatCommandNumber(door.z)} |`;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const addToast = useAdminStore((state) => state.addToast);
  return (
    <Button variant="outline" onClick={() => {
      copyText(text);
      addToast("Copied to clipboard");
    }}>
      <Copy aria-hidden="true" />
      {label}
    </Button>
  );
}

function copyText(text: string) {
  navigator.clipboard?.writeText(text);
}
