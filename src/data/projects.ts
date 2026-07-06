export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: "Logistics" | "ICT" | "Consulting" | "Petrochemicals" | "Mining";
  sectorSlug: string;
  country: string;
  year: string;
  status: "Delivered" | "In Execution" | "Advisory Mandate" | "Framework Agreement";
  value?: string;
  image: string;
  summary: string;
  scope: string[];
  challenge: string;
  approach: string[];
  outcome: { metric: string; label: string }[];
  narrative: string;
  partners?: string[];
};

export const projects: Project[] = [
  {
    slug: "dar-hinterland-corridor",
    title: "Dar es Salaam Hinterland Freight Orchestration",
    client: "Regional Cargo Consortium",
    sector: "Logistics",
    sectorSlug: "logistics",
    country: "Tanzania → DRC / Zambia",
    year: "2025",
    status: "In Execution",
    value: "USD 14M annualised throughput",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=85",
    summary:
      "End-to-end corridor management from port gate to Lubumbashi and Ndola — customs, bonded warehousing, multimodal freight, and real-time cargo visibility.",
    scope: [
      "Central Corridor route engineering",
      "Bonded warehousing at Dar es Salaam ICD",
      "TRA & ZRA customs facilitation",
      "Cross-border escort and tracking",
      "Consignee-side last-mile distribution",
    ],
    challenge:
      "Consortium members were losing 9-14 days per container to fragmented clearance, unverified sub-hauliers, and undocumented handovers between Tanzanian, Zambian and Congolese operators — eroding landed-cost competitiveness against the Walvis Bay alternative.",
    approach: [
      "Mapped the full corridor into 6 measurable handover points with SLA thresholds",
      "Consolidated three clearing agents into a single Evenor-managed clearance desk",
      "Deployed IoT tracking + digital PoD across the full route",
      "Negotiated priority berthing windows and pre-arrival lodgement",
    ],
    outcome: [
      { metric: "58%", label: "reduction in port-to-consignee lead time" },
      { metric: "USD 480/TEU", label: "average landed-cost saving" },
      { metric: "100%", label: "digital chain-of-custody coverage" },
      { metric: "0", label: "customs disputes since launch" },
    ],
    narrative:
      "Evenor now operates as the consortium's exclusive corridor manager under a rolling 24-month framework, with quarterly performance reviews chaired at principal level.",
    partners: ["TRA-Accredited Clearing Agent", "Bonded Warehouse Operator", "Regional Tracking Provider"],
  },
  {
    slug: "national-fibre-backbone",
    title: "National Fibre Backbone — Metro Ring Deployment",
    client: "Public Sector ICT Authority",
    sector: "ICT",
    sectorSlug: "ict",
    country: "East Africa",
    year: "2025 – 2027",
    status: "In Execution",
    value: "Tier-1 EPCC subcontract",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=85",
    summary:
      "Design, supply and commissioning of a metropolitan fibre ring interconnecting government data centres, parastatal HQs, and two international submarine cable landing points.",
    scope: [
      "OSP fibre design to ITU-T G.652.D",
      "OLT/ONT core equipment supply",
      "DWDM ring engineering",
      "Handover to national CERT-aligned NOC",
    ],
    challenge:
      "The Authority required a Tier-1 execution partner with proven multi-vendor integration capability and the local delivery footprint to sustain a 24-month rollout across three cities without exposing the client to single-vendor lock-in.",
    approach: [
      "Structured a consortium with a global Tier-1 EPCC and two national civils contractors",
      "Locked equipment specifications to open-standard, dual-vendor architecture",
      "Sequenced deployment to activate revenue-generating segments first",
      "Embedded local skills-transfer KPIs into every work package",
    ],
    outcome: [
      { metric: "3", label: "metros interconnected" },
      { metric: "112 km", label: "resilient DWDM ring commissioned" },
      { metric: "18", label: "local engineers certified" },
      { metric: "99.995%", label: "target ring availability" },
    ],
    narrative:
      "Executed under a principal-led governance structure with monthly steerco reporting into the client's board technology sub-committee.",
    partners: ["Tier-1 Global EPCC", "Local Civils JV", "Certified OSP Contractor"],
  },
  {
    slug: "psu-digital-transformation",
    title: "Parastatal Digital Transformation Roadmap",
    client: "Ministerial Portfolio Entity",
    sector: "Consulting",
    sectorSlug: "consulting",
    country: "Southern Africa",
    year: "2024 – 2025",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1800&q=85",
    summary:
      "36-week advisory mandate covering operating model redesign, ICT modernisation blueprint, and treasury-approved 5-year capex framework for a state-owned enterprise.",
    scope: [
      "Current-state diagnostic across 4 business units",
      "Target operating model design",
      "ICT modernisation architecture",
      "5-year capex + funding framework",
      "Change management and executive coaching",
    ],
    challenge:
      "The entity faced Treasury pressure to demonstrate a credible turnaround plan within a single financial cycle, with a board fractured between operational and reform-minded factions.",
    approach: [
      "Ran a principal-led diagnostic engaging 42 executives and 6 unions",
      "Facilitated a board off-site aligning reform priorities into a single mandate",
      "Sequenced a 5-year plan with quick-win quarters and hard-milestone accountability",
      "Structured a monthly Treasury reporting cadence to protect capital allocation",
    ],
    outcome: [
      { metric: "5-yr", label: "Treasury-approved capex framework" },
      { metric: "R 2.1bn", label: "capital allocation unlocked" },
      { metric: "4", label: "business units restructured" },
      { metric: "12", label: "quick wins delivered in year one" },
    ],
    narrative:
      "The engagement transitioned into a two-year implementation oversight mandate, with Evenor's principals seated on the client's transformation steerco.",
  },
  {
    slug: "coastal-fuel-terminal",
    title: "Coastal Fuel Storage Terminal Commissioning",
    client: "Downstream Energy Operator",
    sector: "Petrochemicals",
    sectorSlug: "petrochemicals",
    country: "Southern Africa Coast",
    year: "2025",
    status: "Framework Agreement",
    value: "40,000 m³ capacity",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1800&q=85",
    summary:
      "HSE-compliant commissioning of a coastal petroleum products terminal — storage tanks, transfer manifolds, jetty interface, and fire-safety systems.",
    scope: [
      "Storage tank pre-commissioning oversight",
      "API 650 / API 2610 compliance review",
      "Firewater and foam system integration",
      "Regulator liaison (NERSA / national HSE authority)",
    ],
    challenge:
      "The operator needed an independent partner able to hold both the EPC contractor and the regulator accountable during a compressed pre-commissioning window ahead of the winter demand cycle.",
    approach: [
      "Deployed a resident HSE and mechanical completion team on site",
      "Structured a 42-point commissioning gate register with regulator sign-off at each stage",
      "Ran daily 15-minute principal briefings during the final month",
      "Coordinated first-cargo receipt and custody transfer",
    ],
    outcome: [
      { metric: "40,000 m³", label: "capacity brought online" },
      { metric: "0", label: "reportable HSE incidents" },
      { metric: "On-time", label: "regulator sign-off achieved" },
      { metric: "42/42", label: "commissioning gates cleared" },
    ],
    narrative:
      "Evenor was subsequently retained under a rolling framework for the operator's East Coast expansion programme.",
    partners: ["EPC Contractor of Record", "Certified HSE Auditor"],
  },
  {
    slug: "mine-to-port-optimisation",
    title: "Mine-to-Port Logistics Optimisation",
    client: "Mid-Tier Base Metals Producer",
    sector: "Mining",
    sectorSlug: "mining",
    country: "Central Africa → Coast",
    year: "2024 – 2025",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=85",
    summary:
      "Full mine-gate-to-vessel value chain redesign — haul contracts, siding utilisation, port slot booking, and vessel nomination for a copper concentrate producer.",
    scope: [
      "Haul contractor rationalisation",
      "Rail siding utilisation study",
      "Port slot & stockpile management",
      "Vessel nomination and demurrage control",
    ],
    challenge:
      "Concentrate was accumulating at the mine gate while vessels sat at demurrage 1,900 km away — the disconnect was costing the producer roughly USD 2.4M per quarter in stranded working capital and demurrage penalties.",
    approach: [
      "Rebuilt the S&OP cadence linking mine plan, rail plan, and vessel plan",
      "Consolidated 5 haul contractors into 2 performance-based contracts",
      "Introduced a rolling 12-week port-slot commitment protocol",
      "Deployed weekly principal-level tripartite reviews with rail and port",
    ],
    outcome: [
      { metric: "63%", label: "reduction in mine-gate inventory days" },
      { metric: "USD 1.9M", label: "quarterly working capital release" },
      { metric: "-71%", label: "demurrage penalty exposure" },
      { metric: "2x", label: "haul contract accountability" },
    ],
    narrative:
      "The producer extended the engagement into an operational advisory retainer covering the next expansion phase.",
    partners: ["National Rail Operator", "Bulk Terminal Concessionaire"],
  },
  {
    slug: "port-campus-connectivity",
    title: "Port Campus Wi-Fi 6 & Enterprise Networking",
    client: "Port Authority",
    sector: "ICT",
    sectorSlug: "ict",
    country: "East African Coast",
    year: "2024",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1800&q=85",
    summary:
      "Turnkey enterprise networking and Wi-Fi 6 coverage across a 240-hectare port campus — administration, gate complex, container yard, and marine offices.",
    scope: [
      "Site survey and RF design",
      "Core switching + enterprise Wi-Fi 6",
      "Segmented networks for OT and IT",
      "NOC handover and staff training",
    ],
    challenge:
      "The Authority required uninterrupted 24/7 network coverage across an active operational port, without service disruption to terminal operating systems or gate throughput.",
    approach: [
      "Night-window installation sequencing to protect gate operations",
      "OT/IT segmentation aligned to IEC 62443 principles",
      "Redundant core with sub-second failover",
      "Structured knowledge transfer to the Authority's in-house team",
    ],
    outcome: [
      { metric: "240 ha", label: "seamless campus coverage" },
      { metric: "0", label: "operational disruptions during rollout" },
      { metric: "Sub-second", label: "core failover" },
      { metric: "24", label: "Authority staff certified" },
    ],
    narrative:
      "Handover completed on programme with the Authority's NOC assuming Tier-1 and Tier-2 responsibility from month two.",
  },
];

export const sectorFilters = ["All", "Logistics", "ICT", "Consulting", "Petrochemicals", "Mining"] as const;
