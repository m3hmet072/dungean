import * as React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import type { Door } from "../App";

type EditorMode = "translate" | "rotate";

type ArkDoorEditorProps = {
  doors: Door[];
  mode: EditorMode;
  selectedDoorId: string;
  onChangeDoor: (door: Door) => void;
  onSelectDoor: (doorId: string) => void;
};

const worldScale = 0.004;
const commandScale = 1 / worldScale;
const commandSnap = 100;
const worldSnap = commandSnap * worldScale;

function toWorld(value: number) {
  return value * worldScale;
}

function toCommand(value: number) {
  return Math.round((value * commandScale) / commandSnap) * commandSnap;
}

function worldCoordFromDoor(door: Door) {
  return {
    x: toWorld(door.y),
    y: toWorld(door.z),
    z: toWorld(-door.x),
  };
}

function doorCoordFromWorld(position: THREE.Vector3) {
  return {
    x: toCommand(-position.z),
    y: toCommand(position.x),
    z: toCommand(position.y),
  };
}

function normalizeYaw(radians: number) {
  const degrees = THREE.MathUtils.radToDeg(radians);
  return Math.round(((degrees % 360) + 360) % 360);
}

function worldRotationFromDoorYaw(yaw: number) {
  return THREE.MathUtils.degToRad(yaw + 90);
}

function doorYawFromWorldRotation(radians: number) {
  return normalizeYaw(radians - THREE.MathUtils.degToRad(90));
}

function createDoorMesh() {
  const group = new THREE.Group();
  group.name = "ark-door";

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x2f3a3f,
    metalness: 0.65,
    roughness: 0.38,
    emissive: 0x071f1d,
    emissiveIntensity: 0.16,
  });
  const barMaterial = new THREE.MeshStandardMaterial({
    color: 0x050708,
    metalness: 0.78,
    roughness: 0.38,
  });
  const plateMaterial = new THREE.MeshStandardMaterial({
    color: 0x465158,
    metalness: 0.38,
    roughness: 0.58,
  });
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0x1acbb8,
    emissive: 0x0f7d72,
    emissiveIntensity: 0.28,
    transparent: true,
    opacity: 0.2,
    roughness: 0.22,
  });

  const verticalFrame = new THREE.BoxGeometry(0.14, 2.55, 0.16);
  const horizontalFrame = new THREE.BoxGeometry(1.95, 0.14, 0.16);
  const verticalBar = new THREE.BoxGeometry(0.055, 2.24, 0.09);
  const horizontalBar = new THREE.BoxGeometry(1.62, 0.055, 0.09);

  const backGlow = new THREE.Mesh(new THREE.BoxGeometry(1.72, 2.2, 0.035), glassMaterial);
  backGlow.position.set(0, 1.28, -0.03);
  group.add(backGlow);

  [
    [-1, 1.28, 0],
    [1, 1.28, 0],
  ].forEach(([x, y, z]) => {
    const mesh = new THREE.Mesh(verticalFrame, frameMaterial);
    mesh.position.set(x, y, z);
    group.add(mesh);
  });

  [
    [0, 2.52, 0],
    [0, 0.04, 0],
  ].forEach(([x, y, z]) => {
    const mesh = new THREE.Mesh(horizontalFrame, frameMaterial);
    mesh.position.set(x, y, z);
    group.add(mesh);
  });

  [-0.62, -0.26, 0.26, 0.62].forEach((x) => {
    const mesh = new THREE.Mesh(verticalBar, barMaterial);
    mesh.position.set(x, 1.27, 0.04);
    group.add(mesh);
  });

  [0.42, 0.84, 1.26, 1.68, 2.1].forEach((y) => {
    const mesh = new THREE.Mesh(horizontalBar, barMaterial);
    mesh.position.set(0, y, 0.06);
    group.add(mesh);
  });

  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.64, 0.12), plateMaterial);
  plate.position.set(0, 0.56, 0.12);
  group.add(plate);

  const invisiblePicker = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 2.7, 0.36),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
  );
  invisiblePicker.position.set(0, 1.35, 0);
  invisiblePicker.name = "picker";
  group.add(invisiblePicker);

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return group;
}

function createPlayerMarker() {
  const group = new THREE.Group();
  group.name = "player-marker";

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0xdbeafe,
    roughness: 0.55,
    metalness: 0.08,
  });
  const faceMaterial = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.7,
  });
  const directionMaterial = new THREE.MeshStandardMaterial({
    color: 0x5eead4,
    emissive: 0x19786f,
    emissiveIntensity: 0.45,
  });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.7, 6, 14), bodyMaterial);
  body.position.y = 0.66;
  body.castShadow = true;
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 18), bodyMaterial);
  head.position.y = 1.32;
  head.castShadow = true;
  group.add(head);

  const face = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.035), faceMaterial);
  face.position.set(0, 1.32, -0.22);
  group.add(face);

  const direction = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.42, 24), directionMaterial);
  direction.rotation.x = -Math.PI / 2;
  direction.position.set(0, 0.08, -0.58);
  group.add(direction);

  group.position.set(0, 0, 0);
  return group;
}

export function ArkDoorEditor({
  doors,
  mode,
  selectedDoorId,
  onChangeDoor,
  onSelectDoor,
}: ArkDoorEditorProps) {
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const sceneRef = React.useRef<THREE.Scene | null>(null);
  const cameraRef = React.useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = React.useRef<THREE.WebGLRenderer | null>(null);
  const orbitRef = React.useRef<OrbitControls | null>(null);
  const transformRef = React.useRef<TransformControls | null>(null);
  const doorMeshesRef = React.useRef(new Map<string, THREE.Group>());
  const doorsRef = React.useRef(doors);
  const selectedDoorIdRef = React.useRef(selectedDoorId);
  const onChangeDoorRef = React.useRef(onChangeDoor);
  const onSelectDoorRef = React.useRef(onSelectDoor);

  React.useEffect(() => {
    doorsRef.current = doors;
    selectedDoorIdRef.current = selectedDoorId;
    onChangeDoorRef.current = onChangeDoor;
    onSelectDoorRef.current = onSelectDoor;
  }, [doors, onChangeDoor, onSelectDoor, selectedDoorId]);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const currentMount = mount;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1117);
    scene.fog = new THREE.Fog(0x0d1117, 16, 36);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(7.5, 6.2, 9.5);
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.08;
    orbit.target.set(0, 1, 0);
    orbitRef.current = orbit;

    const transform = new TransformControls(camera, renderer.domElement);
    transform.setSize(0.82);
    transform.setTranslationSnap(worldSnap);
    transform.setRotationSnap(THREE.MathUtils.degToRad(15));
    transform.addEventListener("dragging-changed", (event) => {
      orbit.enabled = !event.value;
    });
    transform.addEventListener("objectChange", () => {
      const object = transform.object;
      if (!object) return;
      const door = doorsRef.current.find((candidate) => candidate.id === selectedDoorIdRef.current);
      if (!door) return;
      const worldPosition = object.position.clone();
      const doorPosition = doorCoordFromWorld(worldPosition);
      onChangeDoorRef.current({
        ...door,
        x: doorPosition.x,
        y: doorPosition.y,
        z: doorPosition.z,
        yaw: doorYawFromWorldRotation(object.rotation.y),
      });
    });
    scene.add(transform.getHelper());
    transformRef.current = transform;

    const ambient = new THREE.HemisphereLight(0xe7fff9, 0x111318, 1.8);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xedfffb, 2.8);
    key.position.set(6, 8, 5);
    key.castShadow = true;
    key.shadow.mapSize.width = 2048;
    key.shadow.mapSize.height = 2048;
    scene.add(key);

    const fill = new THREE.PointLight(0x36d7c6, 18, 16);
    fill.position.set(-4, 3, 4);
    scene.add(fill);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(48, 48),
      new THREE.MeshStandardMaterial({ color: 0x151b22, roughness: 0.82, metalness: 0.04 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(48, 48, 0x2ac7b8, 0x26313a);
    grid.position.y = 0.01;
    scene.add(grid);

    const origin = new THREE.AxesHelper(2.5);
    origin.position.y = 0.03;
    scene.add(origin);

    scene.add(createPlayerMarker());

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function handlePointerDown(event: PointerEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const pickers = [...doorMeshesRef.current.values()]
        .map((door) => door.getObjectByName("picker"))
        .filter((picker): picker is THREE.Object3D => Boolean(picker));
      const intersections = raycaster.intersectObjects(pickers, false);
      if (!intersections[0]) return;
      const doorGroup = intersections[0].object.parent;
      if (!doorGroup?.userData.id) return;
      onSelectDoorRef.current(doorGroup.userData.id);
    }

    renderer.domElement.addEventListener("pointerdown", handlePointerDown);

    function resize() {
      const { width, height } = currentMount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(currentMount);

    let frame = 0;
    function animate() {
      frame = window.requestAnimationFrame(animate);
      orbit.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      transform.dispose();
      orbit.dispose();
      renderer.dispose();
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  React.useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const knownDoorIds = new Set(doors.map((door) => door.id));

    doorMeshesRef.current.forEach((mesh, id) => {
      if (!knownDoorIds.has(id)) {
        scene.remove(mesh);
        doorMeshesRef.current.delete(id);
      }
    });

    doors.forEach((door) => {
      let mesh = doorMeshesRef.current.get(door.id);
      if (!mesh) {
        mesh = createDoorMesh();
        mesh.userData.id = door.id;
        doorMeshesRef.current.set(door.id, mesh);
        scene.add(mesh);
      }

      const worldPosition = worldCoordFromDoor(door);
      mesh.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
      mesh.rotation.y = worldRotationFromDoorYaw(door.yaw);

      const selected = door.id === selectedDoorId;
      mesh.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name !== "picker") {
          child.material = child.material.clone();
          if ("emissive" in child.material) {
            child.material.emissive = new THREE.Color(selected ? 0x113c38 : 0x000000);
            child.material.emissiveIntensity = selected ? 0.45 : 0;
          }
        }
      });
    });

    const selectedMesh = doorMeshesRef.current.get(selectedDoorId);
    if (selectedMesh) {
      transformRef.current?.attach(selectedMesh);
    } else {
      transformRef.current?.detach();
    }
  }, [doors, selectedDoorId]);

  React.useEffect(() => {
    const transform = transformRef.current;
    if (!transform) return;
    transform.setMode(mode);
    transform.showX = true;
    transform.showY = mode === "translate";
    transform.showZ = true;
  }, [mode]);

  return (
    <div className="ark-editor">
      <div ref={mountRef} className="ark-canvas" />
      <div className="viewport-hint">
        Click a door to select. Drag arrows to move. Switch to rotate for yaw.
      </div>
    </div>
  );
}
