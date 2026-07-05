export type SectorContent = {
  slug: string;
  nav: string;
  eyebrow: string;
  title: string;
  heroImage: string;
  intro: string[];
  pillars: { title: string; desc: string }[];
  capabilities: { group: string; items: string[] }[];
  approach: { step: string; title: string; desc: string }[];
  metrics: { value: string; label: string }[];
  caseStudy: {
    client: string;
    location: string;
    scope: string;
    outcome: string;
    image: string;
  };
  partners?: string[];
  cta: string;
};

export const sectors: SectorContent[] = [
  {
    slug: "logistics",
    nav: "Logistics & Supply Chain",
    eyebrow: "Sector 01 — Logistics & Supply Chain",
    title: "Moving Africa's Economy Forward.",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=85",
    intro: [
      "Evenor Holdings' Logistics division delivers integrated supply chain solutions engineered specifically for Sub-Saharan Africa's corridor economics. From bonded warehousing at Dar es Salaam and Durban to last-mile distribution in Nairobi's peri-urban belt, we build the physical and digital backbone that lets commodities, containers, and consumer goods move at the speed the continent demands.",
      "We operate at the intersection of Port Authorities, National Roads Agencies, Revenue Authorities and private cargo owners — reducing dwell time, digitising documentation, and structuring corridor solutions that hold up under regulatory scrutiny and commercial pressure alike.",
    ],
    pillars: [
      {
        title: "Corridor Intelligence",
        desc: "We map, price, and de-risk the SADC, EAC, and Central Corridor routes end-to-end — not as a shipper, but as a strategic operator.",
      },
      {
        title: "Institutional Access",
        desc: "Direct working relationships with TPA, TRA, SARS, KRA, KPA, KenTrade and border-post commanders across seven markets.",
      },
      {
        title: "Digital-First Execution",
        desc: "Every consignment tracked on telematics and integrated into client ERPs. No paper. No blind spots.",
      },
    ],
    capabilities: [
      {
        group: "Port & Terminal",
        items: [
          "Port logistics management & stevedoring advisory",
          "Bonded warehouse establishment & operation",
          "Container yard optimisation & TOS advisory",
          "Cold-chain & hazmat cargo handling",
        ],
      },
      {
        group: "Freight & Corridor",
        items: [
          "Multimodal freight forwarding (road, rail, sea, air)",
          "Cross-border corridor management (SADC / EAC)",
          "Customs brokerage facilitation & AEO compliance",
          "Fuel & bulk liquid transport coordination",
        ],
      },
      {
        group: "Last-Mile & Digital",
        items: [
          "Urban & peri-urban distribution networks",
          "Fleet telematics & control-tower monitoring",
          "Warehouse Management System (WMS) integration",
          "Supply chain digitisation & analytics",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Diagnose", desc: "Deep corridor and node assessment — commercial, regulatory, physical." },
      { step: "02", title: "Design", desc: "Route architecture, dwell modelling, cost-to-serve engineering." },
      { step: "03", title: "Deploy", desc: "Mobilise operators, systems, licences and cross-border agents." },
      { step: "04", title: "Deliver", desc: "24/7 control tower, KPI reporting, continuous corridor optimisation." },
    ],
    metrics: [
      { value: "7", label: "Active Corridor Markets" },
      { value: "40%", label: "Avg. Dwell Time Reduction" },
      { value: "24/7", label: "Control-Tower Coverage" },
      { value: "3PL+", label: "Delivery Model" },
    ],
    caseStudy: {
      client: "East African Bulk Commodity Trader",
      location: "Dar es Salaam → Lubumbashi Corridor",
      scope:
        "Corridor redesign, bonded warehouse mobilisation, customs facilitation, and telematics-integrated haulage across a 2,150 km route.",
      outcome:
        "Dwell time cut from 11 days to 4. Documentation cycle reduced by 62%. Full corridor visibility delivered to the client's ERP within 90 days of mobilisation.",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1400&q=85",
    },
    cta: "Discuss a logistics mandate",
  },
  {
    slug: "ict",
    nav: "ICT Infrastructure",
    eyebrow: "Sector 02 — ICT Infrastructure",
    title: "Engineering Connectivity at National Scale.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=85",
    intro: [
      "In an era where digital infrastructure is as foundational as roads and power, Evenor Holdings delivers turnkey ICT solutions capable of transforming ports, government campuses, and industrial zones into digitally sovereign operational environments.",
      "Our technical delivery is executed through SinoConnect Infrastructure Solutions Ltd (Shenzhen), one of the most experienced port ICT EPCC contractors serving African infrastructure, under Evenor's prime contract responsibility. We manage the full lifecycle: design, procurement, civil works, installation, commissioning, and post-warranty managed services — all under a single accountable entity.",
    ],
    pillars: [
      { title: "EPCC Prime Contracting", desc: "Single point of accountability from feasibility to commissioning and 5-year managed service." },
      { title: "Carrier-Grade Standards", desc: "ITU-T, IEC, ISO 27001 and TCRA/ICASA-compliant design at every layer of the stack." },
      { title: "Sovereign by Design", desc: "In-country data residency, local NOC establishment, and skills transfer written into every contract." },
    ],
    capabilities: [
      {
        group: "Passive Infrastructure",
        items: [
          "Fibre optic backbone design & deployment (OS2 G.652D)",
          "Structured cabling & data cabinet fit-out",
          "OSP civil works & duct network installation",
          "Marine-rated Wi-Fi 6 & outdoor RF planning",
        ],
      },
      {
        group: "Active Infrastructure",
        items: [
          "Enterprise core switching & SD-WAN routing",
          "Internet gateway, NGFW & DDoS protection",
          "Voice-over-IP & unified communications",
          "Video surveillance & IP-CCTV integration",
        ],
      },
      {
        group: "Managed Services",
        items: [
          "24/7 NOC establishment & staffing",
          "TCRA / ICASA regulatory registration",
          "Data centre fit-out & Tier-III advisory",
          "Post-warranty managed services (SLA-backed)",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Feasibility", desc: "Site survey, HLD, spectrum & regulatory review." },
      { step: "02", title: "Engineering", desc: "LLD, BOQ, vendor selection, procurement." },
      { step: "03", title: "Deployment", desc: "Civil, installation, commissioning, acceptance testing." },
      { step: "04", title: "Operate", desc: "NOC handover, SLA monitoring, lifecycle management." },
    ],
    metrics: [
      { value: "EPCC", label: "Full Lifecycle Delivery" },
      { value: "SDN", label: "-Native Architecture" },
      { value: "24/7", label: "NOC Coverage" },
      { value: "5-Yr", label: "Managed Service Horizon" },
    ],
    caseStudy: {
      client: "Port Authority — East African Coast",
      location: "Confidential (Tender-Stage Engagement)",
      scope:
        "Full ICT modernisation: fibre backbone, enterprise LAN, Wi-Fi 6 across yards, NGFW gateway, TOS integration, and NOC establishment.",
      outcome:
        "Design endorsed by port ICT committee. Skills-transfer framework agreed with local university. Positioning secured as prime EPCC contractor for the modernisation programme.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=85",
    },
    partners: ["SinoConnect Infrastructure Solutions Ltd (Shenzhen)"],
    cta: "Scope an ICT infrastructure programme",
  },
  {
    slug: "consulting",
    nav: "Management Consulting",
    eyebrow: "Sector 03 — Management Consulting",
    title: "Strategy Built for African Complexity.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=85",
    intro: [
      "African markets do not respond to generic frameworks. The political economy of infrastructure delivery, the layered decision-making architecture of state-owned enterprises, and the trust dynamics that govern public-private partnerships on this continent demand advisors who have operated inside these systems — not merely studied them.",
      "Evenor Holdings' consulting practice brings together expertise in public sector reform, regulatory strategy, investment facilitation, organisational turnaround, and digital transformation advisory. Our principals engage at Principal Secretary, Director General, and Board level — structuring interventions that create durable, measurable improvement in institutional performance.",
    ],
    pillars: [
      { title: "Principal-Led", desc: "Every mandate is led by a named principal with continuous C-suite and Board access." },
      { title: "Institutionally Fluent", desc: "We understand parastatals, tender committees, cabinet memos, and how they actually move." },
      { title: "Delivery-Oriented", desc: "We do not stop at the deck. We stay until the recommendation is operational reality." },
    ],
    capabilities: [
      {
        group: "Public Sector & Governance",
        items: [
          "Government & parastatal strategic advisory",
          "Public-private partnership (PPP) structuring",
          "Organisational design & institutional reform",
          "Regulatory environment navigation",
        ],
      },
      {
        group: "Investment & Trade",
        items: [
          "Investment facilitation & trade linkage",
          "Feasibility studies & bankable business cases",
          "Sovereign & DFI engagement strategy",
          "Cross-border market entry advisory",
        ],
      },
      {
        group: "Digital & Transformation",
        items: [
          "Digital transformation roadmapping",
          "Operating model redesign",
          "Tender documentation & proposal engineering",
          "M&A and post-merger integration advisory",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Frame", desc: "Executive interviews, stakeholder mapping, hypothesis design." },
      { step: "02", title: "Analyse", desc: "Quantitative modelling, benchmarking, regulatory review." },
      { step: "03", title: "Recommend", desc: "Board-grade options, trade-offs, and implementation roadmap." },
      { step: "04", title: "Implement", desc: "Embedded delivery support until adoption is real." },
    ],
    metrics: [
      { value: "C-Suite", label: "Access Standard" },
      { value: "7", label: "African Markets Served" },
      { value: "SOEs", label: "& Ministries Advised" },
      { value: "PPP", label: "Structuring Depth" },
    ],
    caseStudy: {
      client: "Ministerial Portfolio — Regional African Government",
      location: "Confidential",
      scope:
        "Institutional review of a strategic infrastructure parastatal: mandate clarification, board recomposition advisory, and 3-year turnaround roadmap.",
      outcome:
        "Roadmap adopted by portfolio Minister. Governance charter revised. Follow-on mandate secured for implementation oversight.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85",
    },
    cta: "Commission a consulting mandate",
  },
  {
    slug: "petrochemicals",
    nav: "Petrochemicals Solutions",
    eyebrow: "Sector 04 — Petrochemicals Solutions",
    title: "Downstream Energy. Upstream Ambition.",
    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1800&q=85",
    intro: [
      "Africa's hydrocarbon economy is entering its most consequential decade — with new offshore discoveries, growing refinery capacity, and the urgent infrastructure requirement to distribute refined products across vast, underserved hinterlands. Evenor Holdings is positioned to serve this moment.",
      "Our Petrochemicals division provides petroleum product procurement and trading, fuel storage terminal design and commissioning, downstream distribution network engineering, and HSE compliance consulting for port fuel installations, storage farms, and industrial fuel facilities. We interface directly with National Energy Regulators, Petroleum Authorities, and Port Fuel Committees across East and Southern Africa.",
    ],
    pillars: [
      { title: "Regulatory-Grade", desc: "OSHA, NEMA, EWURA, NERSA and PPRA compliance embedded from concept to commissioning." },
      { title: "Terminal-to-Truck", desc: "Full downstream integration: procurement, storage, pipeline, road, aviation & marine bunker." },
      { title: "HSE Uncompromised", desc: "Safety case engineering, ATEX/IECEx design, and independent risk assurance at every gate." },
    ],
    capabilities: [
      {
        group: "Trading & Procurement",
        items: [
          "Petroleum product trading (PMS, AGO, Jet A-1, HFO)",
          "Structured procurement & offtake advisory",
          "Bunker fuel solutions for port operators",
          "LPG procurement & distribution structuring",
        ],
      },
      {
        group: "Infrastructure",
        items: [
          "Fuel storage terminal design & commissioning",
          "Pipeline distribution advisory",
          "Retail forecourt & depot engineering",
          "Aviation fuel handling systems",
        ],
      },
      {
        group: "Compliance & HSE",
        items: [
          "HSE compliance for fuel facilities (OSHA, NEMA)",
          "Energy regulatory navigation & licensing",
          "ATEX / IECEx hazardous area classification",
          "Environmental & social impact assessment",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Concept", desc: "Market sizing, product mix, siting and regulatory pathway." },
      { step: "02", title: "License", desc: "Regulator engagement, licence acquisition, HSE case." },
      { step: "03", title: "Build", desc: "EPC oversight, commissioning, operator readiness." },
      { step: "04", title: "Trade", desc: "Sourcing, offtake, distribution network activation." },
    ],
    metrics: [
      { value: "PMS", label: "AGO · Jet A-1 · HFO" },
      { value: "HSE", label: "OSHA & NEMA Aligned" },
      { value: "Port", label: "Fuel Committee Access" },
      { value: "EPC", label: "Terminal Delivery" },
    ],
    caseStudy: {
      client: "Regional Petroleum Marketer — Southern Africa",
      location: "Coastal Storage Terminal (Confidential)",
      scope:
        "Feasibility, regulatory pathway, and HSE case for a 45,000 m³ multi-product storage terminal serving inland distribution networks.",
      outcome:
        "Terminal concept endorsed by regulator. Environmental authorisation pathway secured. Positioned as advisor of record through commissioning.",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1400&q=85",
    },
    cta: "Explore a petrochemicals mandate",
  },
  {
    slug: "mining",
    nav: "Mining Solutions",
    eyebrow: "Sector 05 — Mining Solutions",
    title: "Precision Engineering for Africa's Mineral Wealth.",
    heroImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=85",
    intro: [
      "Sub-Saharan Africa holds an estimated 30% of the world's mineral reserves — yet value capture remains chronically underoptimised. Evenor Holdings' Mining Solutions division works with junior and mid-tier mining operators, national mining commissions, and mineral export authorities to bridge the gap between resource endowment and operational excellence.",
      "We deploy expertise across the mine-to-port value chain: operational efficiency advisory, environmental compliance engineering, processing technology integration, tailings management systems, and the mine logistics infrastructure required to move ore to market reliably and profitably.",
    ],
    pillars: [
      { title: "Mine-to-Port Fluency", desc: "We understand the pit as intimately as the port stockyard, and every kilometre in between." },
      { title: "Beneficiation Bias", desc: "Every mandate is oriented towards moving value up the chain — not just exporting raw tonnage." },
      { title: "Social Licence", desc: "ESIA, community frameworks and beneficial ownership advisory embedded in every engagement." },
    ],
    capabilities: [
      {
        group: "Operations & Processing",
        items: [
          "Mine operational efficiency advisory",
          "Mineral processing technology integration",
          "Beneficiation strategy & value-addition advisory",
          "Equipment & OEM sourcing",
        ],
      },
      {
        group: "Logistics & Trade",
        items: [
          "Mine-to-port logistics optimisation",
          "Concentrate & bulk export coordination",
          "Corridor structuring for landlocked mines",
          "Offtake structuring advisory",
        ],
      },
      {
        group: "Compliance & ESG",
        items: [
          "Environmental & tailings management",
          "Mining regulatory compliance & licensing",
          "Community & social impact frameworks (ESIA)",
          "Beneficial ownership advisory",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Assess", desc: "Resource, operational, regulatory and ESG baseline." },
      { step: "02", title: "Design", desc: "Value-chain optimisation and beneficiation pathway." },
      { step: "03", title: "Enable", desc: "Licensing, corridor, and offtake structuring." },
      { step: "04", title: "Sustain", desc: "ESG monitoring, community engagement, continuous improvement." },
    ],
    metrics: [
      { value: "Mine→Port", label: "Value Chain View" },
      { value: "ESIA", label: "Aligned Delivery" },
      { value: "Mid-Tier", label: "& Junior Focus" },
      { value: "30%", label: "of Global Reserves — Our Region" },
    ],
    caseStudy: {
      client: "Junior Mining Operator — Copperbelt",
      location: "Zambia → DRC Corridor",
      scope:
        "Mine-to-port logistics diagnostic, offtake structuring advisory, and ESIA framework alignment for a copper concentrate export programme.",
      outcome:
        "Corridor cost-per-tonne reduced by 22%. Offtake negotiation supported to conclusion. ESIA framework accepted by local regulator.",
      image:
        "https://images.unsplash.com/photo-1552862750-746b9805ec1a?w=1400&q=85",
    },
    cta: "Discuss a mining mandate",
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
