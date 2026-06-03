"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { create } from "zustand";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  MapPin,
  MessageCircle,
  Play,
  Radio,
  Shield,
  ShoppingBag,
  Skull,
  Sparkles,
  Swords,
  Trophy,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import * as THREE from "three";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Select } from "./components/ui/select";
import { Separator } from "./components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Textarea } from "./components/ui/textarea";

type Cave = {
  id: string;
  name: string;
  tier: "Alpha" | "Beta" | "Omega";
  difficulty: "Medium" | "Hard" | "Extreme";
  status: "Live" | "Contested" | "Wipe locked";
  position: [number, number, number];
  note: string;
};

export type Door = {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
};

const caves: Cave[] = [
  {
    id: "vault",
    name: "The Vault",
    tier: "Omega",
    difficulty: "Extreme",
    status: "Contested",
    position: [-1.9, 0.44, -0.75],
    note: "Deep mountain entry, compact turret angles, premium raid defense terrain.",
  },
  {
    id: "hive",
    name: "The Hive",
    tier: "Beta",
    difficulty: "Hard",
    status: "Live",
    position: [1.55, 0.33, -0.32],
    note: "Jungle cave network with split chambers and multiple flank routes.",
  },
  {
    id: "citadel",
    name: "The Citadel",
    tier: "Alpha",
    difficulty: "Hard",
    status: "Live",
    position: [0.22, 0.62, -1.72],
    note: "High-ground base spot built for competitive tribe pressure.",
  },
  {
    id: "bunker",
    name: "The Bunker",
    tier: "Beta",
    difficulty: "Medium",
    status: "Wipe locked",
    position: [-1.15, 0.3, 1.18],
    note: "Seasonal bunker route, opened after early wipe progression stabilizes.",
  },
  {
    id: "abyss",
    name: "The Abyss",
    tier: "Omega",
    difficulty: "Extreme",
    status: "Live",
    position: [1.0, 0.28, 1.35],
    note: "Coastal descent with hidden water approach and hard counterplay.",
  },
];

type MapState = {
  selectedCaveId: string;
  hoveredCaveId: string | null;
  setSelectedCaveId: (id: string) => void;
  setHoveredCaveId: (id: string | null) => void;
};

const useMapStore = create<MapState>((set) => ({
  selectedCaveId: "vault",
  hoveredCaveId: null,
  setSelectedCaveId: (selectedCaveId) => set({ selectedCaveId }),
  setHoveredCaveId: (hoveredCaveId) => set({ hoveredCaveId }),
}));

const events = [
  ["BedWars 5 Teams", "Five-tribe bracket with protected starts, timed mid control, and clean win conditions.", Swords],
  ["Raid Base Events", "Admin-built compounds tuned for real raid strategy instead of loot pinatas.", Shield],
  ["King of the Hill", "Rotating capture zones with short windows and public scoreboards.", Trophy],
  ["Hidden Loot Hunt", "Clue-based drops tucked into custom caves, rat holes, and underwater paths.", MapPin],
  ["Boss Rush", "Scheduled boss runs with tribe limits, cooldowns, and reward caps.", Skull],
] as const;

const shopItems = [
  ["Amber Scout", "Light amber bundle", "$4.99", "Cosmetic convenience, small boosts, no raid power."],
  ["Amber Core", "Popular amber bundle", "$9.99", "Balanced for active players who want faster upkeep."],
  ["VIP Queue", "Priority access", "$7.99", "Queue priority, profile badge, Discord role, no combat buffs."],
  ["Starter Kit", "Fresh wipe recovery", "$5.99", "Starter tools and tame support with cooldown limits."],
  ["Dino Pack", "Utility tames", "$11.99", "Utility-focused dinos, level capped for fair PvP."],
] as const;

const creators = [
  ["PvP Videos", "Long-form raid recaps, base tours, and tribe wars.", "Amber + Discord feature"],
  ["Survival Videos", "Progression stories from fresh spawn to alpha pressure.", "Shop credit"],
  ["TikTok / Shorts", "Fast clips, cave reveals, wipe moments, and event highlights.", "Weekly rewards"],
] as const;

function selectedCave() {
  const id = useMapStore.getState().selectedCaveId;
  return caves.find((cave) => cave.id === id) ?? caves[0];
}

export function App() {
  const currentCave = useMapStore((state) => caves.find((cave) => cave.id === state.selectedCaveId) ?? caves[0]);

  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <InteractiveMap currentCave={currentCave} />
      <CustomSaveSection />
      <EventsSection />
      <StoreSection />
      <CreatorRewardsSection />
      <SupportSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ARK Mobile PvP home">
        <span className="brand-mark">A</span>
        <span>ARK Mobile PvP</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#map">Map</a>
        <a href="#save">Custom Save</a>
        <a href="#events">Events</a>
        <a href="#store">Store</a>
        <a href="#creators">Creators</a>
      </nav>
      <div className="header-actions">
        <Button size="sm" variant="outline" onClick={() => window.open("https://discord.com", "_blank")}>
          <MessageCircle aria-hidden="true" />
          Discord
        </Button>
        <Button size="sm" onClick={() => { window.location.href = "/dashboard"; }}>
          Login
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <Badge variant="outline">50-slot competitive PvP server</Badge>
        <h1>The First Custom Save ARK Mobile PvP Server</h1>
        <p>
          Custom caves, hidden base spots, BedWars events, seasonal wipes, and a world players have
          never seen before.
        </p>
        <div className="hero-actions">
          <Button size="lg" onClick={() => window.open("https://discord.com", "_blank")}>
            <MessageCircle aria-hidden="true" />
            Join Discord
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("save")?.scrollIntoView({ behavior: "smooth" })}>
            View Server Features
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
        <div className="hero-stats" aria-label="Server highlights">
          <Stat label="Slots" value="50" />
          <Stat label="Wipe cycle" value="Seasonal" />
          <Stat label="Map" value="Custom Save" />
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.08 }}
      >
        <MapCanvas compact />
        <div className="visual-label">
          <span>Live custom cave network</span>
          <strong>{selectedCave().name}</strong>
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function InteractiveMap({ currentCave }: { currentCave: Cave }) {
  const setSelectedCaveId = useMapStore((state) => state.setSelectedCaveId);

  return (
    <section className="section" id="map">
      <SectionIntro
        eyebrow="Interactive map"
        title="Explore custom cave locations before the wipe starts."
        description="Rotate, zoom, hover, and click through the custom save. Every marker represents an admin-built location designed for PvP pressure and counterplay."
      />
      <div className="map-grid">
        <Card className="map-card">
          <MapCanvas />
        </Card>
        <Card className="map-panel">
          <CardHeader>
            <Badge variant="outline">Selected cave</Badge>
            <CardTitle>{currentCave.name}</CardTitle>
            <CardDescription>{currentCave.note}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="detail-grid">
              <Detail label="Tier" value={currentCave.tier} />
              <Detail label="Difficulty" value={currentCave.difficulty} />
              <Detail label="Status" value={currentCave.status} />
            </div>
            <Separator />
            <div className="cave-list">
              {caves.map((cave) => (
                <button
                  className={cave.id === currentCave.id ? "cave-row active" : "cave-row"}
                  key={cave.id}
                  type="button"
                  onClick={() => setSelectedCaveId(cave.id)}
                >
                  <span>
                    <MapPin aria-hidden="true" />
                    {cave.name}
                  </span>
                  <Badge variant="secondary">{cave.status}</Badge>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function MapCanvas({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "map-canvas compact" : "map-canvas"}>
      <Canvas camera={{ position: [4.8, 4.1, 5.6], fov: 42 }} shadows dpr={[1, 1.8]}>
        <color attach="background" args={["#09090B"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={2.2} castShadow />
        <Environment preset="night" />
        <IslandScene compact={compact} />
        <OrbitControls
          autoRotate={compact}
          autoRotateSpeed={0.45}
          enablePan={false}
          enableZoom={!compact}
          maxDistance={8}
          minDistance={3.4}
          minPolarAngle={0.62}
          maxPolarAngle={1.38}
        />
      </Canvas>
    </div>
  );
}

function IslandScene({ compact }: { compact: boolean }) {
  return (
    <group rotation={[0, -0.42, 0]}>
      <Ocean />
      <IslandBase />
      <Mountains />
      <Volcano />
      <Jungle />
      <Obelisks />
      {caves.map((cave) => (
        <CaveMarker cave={cave} key={cave.id} compact={compact} />
      ))}
    </group>
  );
}

function Ocean() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]}>
      <circleGeometry args={[4.25, 80]} />
      <meshStandardMaterial color="#111113" metalness={0.25} roughness={0.72} />
    </mesh>
  );
}

function IslandBase() {
  const shape = React.useMemo(() => {
    const islandShape = new THREE.Shape();
    islandShape.moveTo(-2.5, -0.4);
    islandShape.bezierCurveTo(-2.1, -1.7, -0.4, -2.4, 1.2, -2.0);
    islandShape.bezierCurveTo(2.3, -1.7, 2.8, -0.5, 2.45, 0.55);
    islandShape.bezierCurveTo(2.0, 1.85, 0.42, 2.35, -0.9, 1.85);
    islandShape.bezierCurveTo(-2.25, 1.45, -2.95, 0.7, -2.5, -0.4);
    return islandShape;
  }, []);

  return (
    <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <extrudeGeometry args={[shape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, steps: 1 }]} />
      <meshStandardMaterial color="#111113" roughness={0.92} />
    </mesh>
  );
}

function Mountains() {
  return (
    <group>
      {[
        [-0.85, 0.28, -0.65, 0.9, 1.05],
        [0.1, 0.24, -0.25, 0.72, 0.86],
        [0.88, 0.2, 0.28, 0.58, 0.68],
        [-1.25, 0.12, 0.72, 0.45, 0.48],
      ].map(([x, y, z, radius, height], index) => (
        <mesh castShadow receiveShadow key={index} position={[x, y, z]} rotation={[0, index * 0.58, 0]}>
          <coneGeometry args={[radius, height, 7]} />
          <meshStandardMaterial color="#27272A" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Volcano() {
  return (
    <group position={[0.25, 0.58, -0.92]}>
      <mesh castShadow receiveShadow>
        <coneGeometry args={[0.52, 1.25, 9, 1, true]} />
        <meshStandardMaterial color="#27272A" roughness={0.86} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.11, 0.2, 18]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.55} />
      </mesh>
    </group>
  );
}

function Jungle() {
  const trees = [
    [-1.7, 0.17, -0.05],
    [-1.45, 0.18, 0.28],
    [-0.6, 0.18, 1.0],
    [0.72, 0.18, 1.08],
    [1.42, 0.18, 0.52],
    [1.82, 0.18, -0.2],
    [-0.12, 0.18, 1.55],
  ];

  return (
    <group>
      {trees.map(([x, y, z], index) => (
        <group key={index} position={[x, y, z]}>
          <mesh castShadow position={[0, 0.11, 0]}>
            <cylinderGeometry args={[0.025, 0.035, 0.22, 5]} />
            <meshStandardMaterial color="#27272A" roughness={0.8} />
          </mesh>
          <mesh castShadow position={[0, 0.31, 0]}>
            <coneGeometry args={[0.16, 0.36, 6]} />
            <meshStandardMaterial color="#111113" roughness={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Obelisks() {
  return (
    <group>
      {[
        [-2.2, 0.45, 0.4],
        [1.95, 0.42, -0.85],
        [0.1, 0.46, 1.85],
      ].map(([x, y, z], index) => (
        <Float floatIntensity={0.25} key={index} rotationIntensity={0.15}>
          <mesh castShadow position={[x, y, z]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.3} roughness={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CaveMarker({ cave, compact }: { cave: Cave; compact: boolean }) {
  const ref = React.useRef<THREE.Mesh>(null);
  const selectedCaveId = useMapStore((state) => state.selectedCaveId);
  const hoveredCaveId = useMapStore((state) => state.hoveredCaveId);
  const setSelectedCaveId = useMapStore((state) => state.setSelectedCaveId);
  const setHoveredCaveId = useMapStore((state) => state.setHoveredCaveId);
  const active = selectedCaveId === cave.id || hoveredCaveId === cave.id;

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = cave.position[1] + Math.sin(state.clock.elapsedTime * 2.2) * 0.035;
    ref.current.scale.setScalar(active ? 1.18 : 1);
  });

  return (
    <group position={cave.position}>
      <mesh
        castShadow
        ref={ref}
        onClick={(event) => {
          event.stopPropagation();
          setSelectedCaveId(cave.id);
        }}
        onPointerOut={() => setHoveredCaveId(null)}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHoveredCaveId(cave.id);
        }}
      >
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={active ? 1.2 : 0.55} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.035, 0]}>
        <ringGeometry args={[0.13, 0.18, 26]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={active ? 0.9 : 0.36} />
      </mesh>
      {!compact && active ? (
        <Html center distanceFactor={6.4} position={[0, 0.26, 0]}>
          <div className="marker-tooltip">
            <strong>{cave.name}</strong>
            <span>{cave.tier} / {cave.difficulty}</span>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="detail">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CustomSaveSection() {
  return (
    <section className="section" id="save">
      <SectionIntro
        eyebrow="Custom save"
        title="A world tuned for competitive ARK Mobile PvP."
        description="The map is rebuilt around playable conflict: strongholds, rat holes, seasonal routes, and locations that reward scouting instead of memorized official-map habits."
      />
      <Tabs defaultValue="caves" className="feature-tabs">
        <TabsList>
          <TabsTrigger value="caves">Custom Caves</TabsTrigger>
          <TabsTrigger value="holes">Rat Holes</TabsTrigger>
          <TabsTrigger value="pvp">PvP Locations</TabsTrigger>
          <TabsTrigger value="wipes">Seasonal Updates</TabsTrigger>
        </TabsList>
        <TabsContent value="caves">
          <FeaturePanel icon={MapPin} title="Admin-built cave routes" body="Every cave has defined entrances, defendable chambers, flank routes, and loot restrictions so raids stay strategic." />
        </TabsContent>
        <TabsContent value="holes">
          <FeaturePanel icon={Zap} title="Hidden base spots" body="Small-tribe rat holes are added each wipe, then rotated to keep scouting meaningful and prevent stale meta spots." />
        </TabsContent>
        <TabsContent value="pvp">
          <FeaturePanel icon={Swords} title="Built for pressure" body="Open-world arenas, bunker routes, and contested high grounds are placed to create daily PvP without cluttering the map." />
        </TabsContent>
        <TabsContent value="wipes">
          <FeaturePanel icon={Sparkles} title="New locations every wipe" body="Seasonal save updates introduce fresh caves, event arenas, hidden loot paths, and restricted early-wipe unlocks." />
        </TabsContent>
      </Tabs>
    </section>
  );
}

function FeaturePanel({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <Card className="feature-panel">
      <CardContent>
        <div className="icon-shell"><Icon aria-hidden="true" /></div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{body}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}

function EventsSection() {
  return (
    <section className="section" id="events">
      <SectionIntro
        eyebrow="Events"
        title="Scheduled PvP that respects serious players."
        description="Events are structured, capped, and announced in Discord so wins feel earned and rewards stay healthy for the server economy."
      />
      <div className="event-grid">
        {events.map(([title, description, Icon]) => (
          <Card key={title}>
            <CardHeader>
              <div className="icon-shell"><Icon aria-hidden="true" /></div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function StoreSection() {
  return (
    <section className="section" id="store">
      <SectionIntro
        eyebrow="Store"
        title="Clean monetization without pay-to-win pressure."
        description="Amber packages, VIP, starter kits, and dino packs are capped around convenience, cosmetics, and recovery so raids are still decided in-game."
      />
      <div className="pricing-grid">
        {shopItems.map(([name, label, price, description]) => (
          <Card className="pricing-card" key={name}>
            <CardHeader>
              <Badge variant="secondary">{label}</Badge>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <strong className="price">{price}</strong>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <ShoppingBag aria-hidden="true" />
                View Package
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <StorePolicy />
    </section>
  );
}

function StorePolicy() {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="policy-card">
      <button className="accordion-trigger" type="button" onClick={() => setOpen((value) => !value)}>
        <span>
          <BadgeCheck aria-hidden="true" />
          Fair-play store policy
        </span>
        <ChevronDown aria-hidden="true" className={open ? "chevron open" : "chevron"} />
      </button>
      {open ? (
        <div className="accordion-content">
          No package includes uncapped damage, raid-proof dinos, admin structures, or exclusive combat power.
          Store rewards are reviewed every wipe and adjusted around server balance.
        </div>
      ) : null}
    </Card>
  );
}

function CreatorRewardsSection() {
  return (
    <section className="section" id="creators">
      <SectionIntro
        eyebrow="Creator rewards"
        title="Turn server moments into real wipe value."
        description="PvP videos, survival episodes, and Shorts can earn capped rewards when they bring useful attention to the server."
      />
      <div className="creator-grid">
        {creators.map(([title, description, reward]) => (
          <Card key={title}>
            <CardHeader>
              <div className="icon-shell"><Video aria-hidden="true" /></div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Badge variant="outline">{reward}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      <CreatorForm />
    </section>
  );
}

function CreatorForm() {
  return (
    <Card className="creator-form">
      <CardHeader>
        <CardTitle>Submit a creator clip</CardTitle>
        <CardDescription>Submissions are reviewed weekly by staff before rewards are issued.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="form-grid">
          <div>
            <Label htmlFor="creator-name">Creator name</Label>
            <Input id="creator-name" placeholder="Discord or channel name" />
          </div>
          <div>
            <Label htmlFor="content-type">Content type</Label>
            <Select id="content-type" defaultValue="pvp">
              <option value="pvp">PvP video</option>
              <option value="survival">Survival video</option>
              <option value="short">TikTok / Shorts</option>
            </Select>
          </div>
          <div className="form-wide">
            <Label htmlFor="clip-url">Clip URL</Label>
            <Input id="clip-url" placeholder="https://..." />
          </div>
          <div className="form-wide">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Tribe, wipe day, event, or reward context" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          <Play aria-hidden="true" />
          Submit Clip
        </Button>
      </CardFooter>
    </Card>
  );
}

function SupportSection() {
  return (
    <section className="section support-section">
      <Card className="status-card">
        <CardHeader>
          <Badge variant="outline"><Radio aria-hidden="true" /> Server status</Badge>
          <CardTitle>Online checks, wipe rules, and support in one place.</CardTitle>
          <CardDescription>
            Use Discord for tickets, rule disputes, shop support, and season announcements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="status-table" role="table" aria-label="Server status table">
            <div role="row">
              <span role="cell">Capacity</span>
              <strong role="cell">50 slots</strong>
            </div>
            <div role="row">
              <span role="cell">Mode</span>
              <strong role="cell">PvP / Custom Save</strong>
            </div>
            <div role="row">
              <span role="cell">Wipes</span>
              <strong role="cell">Seasonal</strong>
            </div>
            <div role="row">
              <span role="cell">Support</span>
              <strong role="cell">Discord tickets</strong>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>ARK Mobile PvP</strong>
        <span>Custom saves, competitive wipes, serious server operations.</span>
      </div>
      <nav aria-label="Footer navigation">
        <a href="https://discord.com">Discord</a>
        <a href="#rules">Rules</a>
        <a href="#support">Support</a>
        <a href="#status">Server Status</a>
        <a href="mailto:support@example.com">Contact</a>
      </nav>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-intro">
      <Badge variant="outline">{eyebrow}</Badge>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
