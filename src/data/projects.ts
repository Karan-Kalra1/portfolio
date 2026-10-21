export type MediaItem = {
  type: 'image' | 'gif' | 'video' | 'embed';
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  repo: string;
  externalUrl?: string;
  tech: string[];
  features: string[];
  contributions?: string[];
  media: MediaItem[];
  demoUrl?: string;
  coverImage: {
    src: string;
    alt: string;
  };
};




export const projects: Project[] = [
  {
    slug: 'risky-business', title: 'Risky Business', category: 'Game / Unity / Group Project', year: '2026',
    shortDescription: 'A four-player local PvP game where rival shop owners compete to build the most profitable and appealing store.',
    description: 'Risky Business is a local multiplayer game set in an abandoned warehouse made by 6 people over the course of 6 weeks. Players claim a store, collect and arrange goods, and compete for money and customer ratings. Customers roam the space, choose stores and can even be carried to influence where they shop.',
    repo: 'https://araarathain.itch.io/gp01riskybusiness', externalUrl: 'https://araarathain.itch.io/gp01riskybusiness', tech: ['Unity', 'C#', 'Local Multiplayer', 'Gameplay AI', 'Pathfinding', 'Grid Systems'],
    contributions: ['Designed gameplay interfaces for item effects(Prefer Composition over Inheritance) and other gameplay features like throwing.', 'Implemented customer checkout queue systems and Behaviors.', 'Built customer AI behavior for roaming, selecting stores and interacting with shops.', 'Implemented pathfinding systems for customer navigation.', 'Built grid systems used to organize and navigate the store space.','Built tile reserving system and AI avoidance systems for Customers.'],
    features: ['Four-player local PvP competition with store selection.', 'Pick up and arrange goods to influence store appeal and customer ratings.', 'Customers choose stores and move through shopping interactions.', 'Compete for money, shop appeal and the best end-of-day rating.'],
    media: [
      { type: 'embed', src: "https://www.youtube.com/embed/3VRsVRNgOzQ?si=ZWLlTacLPgZx9iU-", alt: 'Risky Business Trailer', caption: '' },
      { type: 'image', src: 'images/projects/risky-business/Group01_RiskyBusiness_06.png', alt: 'Risky Business game cover', caption: '' },
      { type: 'image', src: 'images/projects/risky-business/Group01_RiskyBusiness_09.png', alt: 'Risky Business gameplay systems', caption: '' }
      
    ],
    coverImage: {
    src: 'images/projects/risky-business/Group01_RiskyBusiness_02.png',
    alt: 'Risky Business cover',
    }
  },
  {
    slug: 'programming4-digger', title: 'Digger — C++ Game Engine', category: 'Game / C++', year: '2026',
    shortDescription: 'A C++ remake of Digger built on a custom Minigin engine, emphasizing reusable architecture and game-programming patterns.',
    description: 'A C++ remake of Digger built on top of a custom engine. The project applies design patterns to input, events, audio, enemy state, level loading and game-system organization, while supporting keyboard and controller input.',
    repo: 'https://github.com/Karan-Kalra1/Programming4', tech: ['C++20', 'SDL3', 'CMake', 'Command Pattern', 'Event Bus', 'Service Locator', 'Threaded Audio', 'Emscripten'],
    features: ['InputManager binds gamepad buttons or keyboard scancode to a Command using a Command Inferface', 'The Subject maintains a list of Observer pointers and notifies them when an event occurs.','There is an EventBus Singleton that provides centralized access to a shared Subject. Events contain an event type and an associated GameObject pointer. When an event is published, the subject notifies all registered observers.', 'A Service Locator is used for for the Audio, with a null audio implementation as a fallback when nothing is registered.(Used in the web build)', 'All the audio requests are processed by a dedicated worker thread.The Pimpl pattern is used to hide implementation details behind a clean interface, while a mutex and condition variable is used to manage the request queue.', 'State pattern is used for Nobbin and Hobbin enemy behavior.', 'Levels are parsed and loaded from a text file and tile-based digging is used for gradually removing dirt pieces.', 'Component-Based Architecture is used to provide functionality to gameObjects .Unique pointers are used to ensure ownership of the components is managed by the gameObject'],

    demoUrl: 'https://karan-kalra1.github.io/Programming4/',
    media: [],
    coverImage: {
    src: 'images/projects/digger/digger-cover.png',
    alt: 'Digger gameplay',
    }
  },
  {
    slug: 'multiplayer-dodgeball', title: 'Multiplayer Dodgeball', category: 'Game / Unity / Backend', year: '2026',
    shortDescription: 'An online two-player dodgeball game with authoritative multiplayer gameplay, PlayFab economy and a custom ASP.NET Core API.',
    description: 'A networked dodgeball project built with Unity and a custom backend. Players create or join sessions, select teams, ready up and play online matches. Gameplay is combined with persistent player identity, virtual currency, match records and a match-specific crown system.',
    repo: 'https://github.com/Howest-DAE/pd4-ep1-project-Karan-Kalra1', tech: ['Unity', 'C#', 'Netcode for GameObjects', 'Unity Gaming Services', 'PlayFab', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core'],
    features: ['Online two-player sessions using Unity Sessions, Relay and Netcode for GameObjects.', 'Lobby creation/joining, team selection and ready states.', 'Networked movement, ball pickup, aiming, throwing and hit detection.', 'Server-authoritative hit validation and score updates.', 'PlayFab login, player display names and Gold virtual currency.', 'Custom ASP.NET Core REST API with Entity Framework Core and SQL Server/Azure SQL.', 'Match-specific crowns, synchronized match timer and final match statistics.'],
    media: [
      { type: 'gif', src: 'images/projects/dodgeball/end.gif', alt: 'Multiplayer Dodgeball match gameplay', caption: '' },
      { type: 'gif', src: 'images/projects/dodgeball/getball.gif', alt: 'Multiplayer Dodgeball match gameplay', caption: '' },
     { type: 'gif', src: 'images/projects/dodgeball/ready.gif', alt: 'Multiplayer Dodgeball match gameplay', caption: '' },
     { type: 'gif', src: 'images/projects/dodgeball/login.gif', alt: 'Multiplayer Dodgeball match gameplay', caption: '' }
    ],
    coverImage: {
    src: 'images/projects/dodgeball/getball.gif',
    alt: 'dodgeball',
    }
  },
  {
    slug: 'dual-rasterizer', title: 'Dual Rasterizer', category: 'Rendering / C++ / DirectX 11', year: '2025',
    shortDescription: 'A feature-matched software C++ rasterizer and DirectX 11 hardware renderer with runtime switching.',
    description: 'A hybrid rendering engine that implements a CPU software rasterizer alongside a DirectX 11 GPU pipeline. It explores triangle rasterization, depth testing, interpolation, multithreading, custom lighting and HLSL shader-based rendering in a single interactive application.',
    repo: 'https://github.com/Karan-Kalra1/Dual-Rasterizer', tech: ['C++', 'DirectX 11', 'HLSL', 'Multithreading', 'Rasterization', 'Normal Mapping'],
    features: ['Switch between software and DirectX 11 hardware rendering at runtime.', 'Software triangle rasterization with depth buffer and perspective-correct interpolation.', 'Multithreaded tile / bounding-box rasterization with early depth and back-face culling.', 'Lambert, Phong/Blinn-Phong and tangent-space normal mapping.', 'Hardware shaders support diffuse, specular, glossiness and normal maps.', 'Debug views for depth buffer, bounding boxes, culling modes and FPS.'],
    media: [
      { type: 'gif', src: 'images/projects/dual-rasterizer/DualRasterizer.gif', alt: 'Switching between rasterizer implementations', caption: '' },
      { type: 'image', src: 'images/projects/dual-rasterizer/DualRasterizer_Software.png', alt: 'DirectX hardware rasterizer output', caption: '' },
      { type: 'image', src: 'images/projects/dual-rasterizer/Normals.png', alt: 'C++ software rasterizer output', caption: '' },
      
    ],
    coverImage: {
    src: 'images/projects/dual-rasterizer/DualRasterizer.gif',
    alt: 'Rasterizer',
    }
  },
  {
    slug: 'raytracer', title: 'CPU 3D Ray Tracer', category: 'Rendering / C++', year: '2025',
    shortDescription: 'An offline CPU ray tracer with multithreaded rendering, custom BRDF lighting, AABB acceleration and an interactive camera.',
    description: 'A modern C++ offline 3D ray tracer built in Visual Studio. The project focuses on rendering fundamentals and performance: parallel pixel work, configurable lighting models, bounding-box intersection tests and a camera that can move around the scene.',
    repo: 'https://github.com/Karan-Kalra1/Raytracer', tech: ['C++', 'Multithreading', 'BRDF', 'AABB', 'Phong / Blinn-Phong', 'Visual Studio'],
    features: ['Multithreaded pixel pipeline using C++ threads.', 'Lambertian diffuse and Phong / Blinn-Phong specular lighting.', 'Runtime shading views for combined lighting, observed area, radiance and BRDF components.', 'AABB slab-test acceleration to reject objects before expensive intersection checks.', 'Interactive camera with FOV, target tracking and keyboard/mouse movement.'],
    media: [
      { type: 'gif', src: 'images/projects/raytracer/RayTracer.gif', alt: 'Interactive ray tracer viewport', caption: '' },
      { type: 'image', src: 'images/projects/raytracer/bunny.png', alt: 'Ray tracer rendered scene', caption: '' } 
    ],
    coverImage: {
    src: 'images/projects/raytracer/RayTracer.gif',
    alt: 'raytracer',
    }
  },
  
  {
    slug: 'game-ai-steering-pathfinding', title: 'Game AI — Steering & Pathfinding', category: 'AI / Unreal Engine', year: '2026',
    shortDescription: 'A collection of AI assignments exploring steering behaviors, spatial partitioning, navmesh pathfinding and graph coloring.',
    description: 'An Unreal Engine C++ project focused on practical game-AI techniques. It combines a flocking simulation with configurable steering behaviors and an optimized spatial-partition grid, alongside a navmesh-based A* pathfinding implementation with funnel-algorithm path smoothing.',
    repo: 'https://github.com/DAE-GD-2025-2026/game-ai-project-Karan-Kalra1', tech: ['Unreal Engine 5', 'C++', 'A*', 'Steering Behaviors', 'Spatial Partitioning', 'ImGui'],
    features: ['Flocking with cohesion, separation and velocity matching, plus seek, flee, wander and evade.', 'Blended and priority steering systems with tunable behavior weights.', 'Spatial partitioning grid with debug overlays for cells, neighbors and agent counts.', 'Navmesh-derived graph with A* search and optional SSFA/Funnel path smoothing.', 'Interactive debug visualizations for nodes, portals, connections and final paths.', 'Graph-coloring assignment: color connected graphs without adjacent nodes sharing a color.'],
    media: [
      { type: 'gif', src: 'images/projects/game-ai/Flocking.gif', alt: 'Flocking and steering behavior simulation', caption: '' },
      { type: 'gif', src: 'images/projects/game-ai/AStar.gif', alt: 'Spatial partitioning visualization', caption: '' },
      { type: 'gif', src: 'images/projects/game-ai/Navmesh.gif', alt: 'Navmesh pathfinding debug view', caption: '' }
    ],
    coverImage: {
    src: 'images/projects/game-ai/Flocking.gif',
    alt: 'Flocking',
    }
  },
  {
    slug: 'zombie-survival-ai', title: 'Zombie Survival AI', category: 'AI / Unreal Engine', year: '2026',
    shortDescription: 'An autonomous survivor AI that senses threats, remembers useful locations, manages supplies and chooses when to fight or flee.',
    description: 'A C++ Game Feature Plugin for Unreal Engine 5.6 that extends a zombie-survival project with an autonomous survivor. AI Perception feeds a persistent memory and world-state evaluation system, while a Behavior Tree chooses survival actions based on danger, equipment, health, stamina and available information.',
    repo: 'https://github.com/DAE-GD-2025-2026/gameai-zombie-Karan-Kalra1', tech: ['Unreal Engine 5.6', 'C++', 'AI Perception', 'Behavior Trees', 'Blackboard', 'NavMesh'],
    features: [ 'AI Perception & Persistent Memory — to classify zombies, weapons, medkits, food, garbage and houses. Stores information so the AI can react to targets outside its field of view.','Behavior Tree & Blackboard Architecture — Separated decision-making into custom UBTTaskNode tasks and UBTService services.A world-state service periodically updates its decisions based on Blackboard Values.','Dynamic Survival Priorities — checks survivor’s condition and prioritize urgent needs, including healing with medkits, restoring stamina with food and finding weapons.','Combat & Threat Response — Custom attack and target-selection tasks for the survivor to engage known zombies when appropriately equipped. If attacked from outside the fov, an active scanning task searches for the attacker.','Navigation-Aware Fleeing — check for potential escape destinations instead of choosing a random direction. Navigation checks reject routes that initially lead toward zombies, helping the survivor move toward safer areas.','Memory-Guided Exploration — Uses remembered house locations and visit states to prioritize unexplored buildings. When no useful remembered destination exists, fallback exploration tasks select reachable points to keep the AI moving.','Stuck Detection & Movement Recovery — Detects unsuccessful movement and selects alternative destinations. Handle blocked fleeing by choosing a side-step, allowing the survivor to re-plan when enemies obstruct its path.','Inventory-Aware Item Handling — Custom pickup and consumption tasks handle failed collection attempts, and separate garbage cleanup from useful-item collection so garbage can be removed to free spawn locations.'],
    media: [
      { type: 'gif', src: 'images/projects/zombie-ai/destroy.gif', alt: 'Survivor AI exploring houses', caption: '' },
      { type: 'gif', src: 'images/projects/zombie-ai/picking.gif', alt: 'Survivor AI responding to zombie threats', caption: '' },
      { type: 'gif', src: 'images/projects/zombie-ai/attack.gif', alt: 'AI decision making and behavior tree', caption: '' }
    ],
    coverImage: {
    src: 'images/projects/zombie-ai/attack.gif',
    alt: 'zombie AI',
    }
  },
  
  {
    slug: 'stress-island', title: 'Stress Island', category: 'Game / Unreal Engine', year: '2025',
    shortDescription: 'A first-person survival prototype exploring inventory, crafting, harvesting, survival stats and modular item effects.',
    description: 'An open-world survival demo created to learn Unreal Engine, using a hybrid C++ and Blueprint foundation. The player manages health, stamina, hunger and thirst while collecting resources, crafting tools, cooking food and dealing with aggressive enemies.',
    repo: 'https://github.com/Karan-Kalra1/Stress-Island', tech: ['Unreal Engine 5.6', 'C++', 'Blueprints', 'Data Assets', 'Inventory', 'Crafting'],
    features: ['Interdependent health, stamina, hunger and thirst systems.', 'Resource harvesting with different tool efficiencies.', 'Inventory UI to inspect, use and drop items.', 'Crafting recipes dynamically available based on current inventory.', 'Campfire cooking that improves food effects.', 'Enemy AI with pursuit behavior and resource rewards.', 'Data-driven item definitions, recipes and modular item-effect classes.'],
    media: [
      { type: 'gif', src: 'images/projects/stress-island/makeaxe.gif', alt: 'Stress Island survival gameplay', caption: '' },
      { type: 'gif', src: 'images/projects/stress-island/chop.gif', alt: 'Stress Island inventory and crafting UI', caption: '' },
      { type: 'gif', src: 'images/projects/stress-island/makefire.gif', alt: 'Stress Island crafting interface', caption: '' },
      { type: 'gif', src: 'images/projects/stress-island/cook.gif', alt: 'Stress Island crafting interface', caption: '' },
      { type: 'gif', src: 'images/projects/stress-island/eat.gif', alt: 'Stress Island crafting interface', caption: '' }
    ],
    coverImage: {
    src: 'images/projects/stress-island/cover.png',
    alt: 'Stress Island',
    }
  }
  
];
export const tools = ['C++', 'C#', 'Unity', 'Unreal Engine', 'Astro', 'SQL', 'Perforce', 'HLSL', 'Photoshop', 'WPF', 'DirectX 11', 'SDL3', 'ASP.NET Core', 'Git', 'CMake'];
