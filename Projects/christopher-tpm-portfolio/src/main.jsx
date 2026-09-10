import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    eyebrow: ["ENTERPRISE APPLICATIONS", "SUPPLY CHAIN"],
    title: "Enterprise Supply Chain Platform",
    description:
      "End-to-end integration across Marketplace → Middleware / OMS → WMS → ERP → 3PL, supporting centralized order management, fulfillment, inventory, shipment, and operational workflows.",
    role: "Technical Project Manager / Product Owner",
    delivery: "Agile / Scrum",
    className: "supply-chain",
  },
  {
    number: "02",
    eyebrow: ["HEALTHCARE TECHNOLOGY", "REGULATED DELIVERY"],
    title: "Medical Early Warning & Patient Monitoring Platform",
    description:
      "A connected healthcare platform spanning mobile software, backend services, firmware, connected hardware and cloud infrastructure, delivered within a regulated quality and software lifecycle environment.",
    role: "Senior Project Manager",
    delivery: "Hybrid Agile / Waterfall",
    standards: "ISO 13485 · IEC 62304 · ISO 14971",
    className: "medical",
  },
  {
    number: "03",
    eyebrow: ["LOGISTICS", "IoT / GPS"],
    title: "Fleet & Transport Management",
    description:
      "A logistics platform that evolved from fleet tracking and dispatch into broader transport operations, route planning, real-time monitoring, driver activity and operational analytics.",
    role: "Project Manager / Product Owner",
    delivery: "Waterfall",
    className: "fleet",
  },
  {
    number: "04",
    eyebrow: ["E-COMMERCE", "AUTOMATION"],
    title: "Order & Delivery Tracking Platform",
    description:
      "A current technology initiative connecting Shopify order synchronization, logistics workflows, delivery tracking, operational dashboards and workspace automation.",
    role: "Technical Delivery / Product Ownership",
    delivery: "Iterative Delivery",
    className: "logivis",
  },
  {
    number: "05",
    eyebrow: ["BUSINESS INTELLIGENCE", "DATA WAREHOUSING"],
    title: "Data Warehousing & Analytics",
    description:
      "A data warehousing and business intelligence initiative supporting operational reporting, analytics and data-driven decision making across enterprise information.",
    role: "Business Analysis / Technical Delivery",
    delivery: "Enterprise Data & BI",
    href: "https://github.com/christopheranthonyagustin/portfolio/tree/main/Projects/Data%20Warehousing",
    className: "data-warehouse",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.style.setProperty("--reveal-delay", `${delay}ms`);
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.className}`} aria-hidden="true">
      <div className="visual-noise" />
      {project.className === "supply-chain" && (
        <div className="flow-visual">
          <div className="flow-node">MARKETPLACES</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-node accent">MIDDLEWARE / OMS</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-split"><span>WMS</span><span>ERP</span></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-node">3PL</div>
        </div>
      )}
      {project.className === "medical" && (
        <div className="medical-visual">
          <div className="medical-circle"><span>MEWS</span></div>
          <div className="medical-line l1" />
          <div className="medical-line l2" />
          <div className="medical-node n1">MOBILE</div>
          <div className="medical-node n2">CLOUD</div>
          <div className="medical-node n3">DEVICE</div>
          <div className="medical-node n4">FIRMWARE</div>
          <div className="medical-label">QUALITY · RISK · LIFECYCLE</div>
        </div>
      )}
      {project.className === "fleet" && (
        <div className="fleet-visual">
          <div className="route route-a" />
          <div className="route route-b" />
          <div className="map-dot d1" /><div className="map-dot d2" /><div className="map-dot d3" /><div className="map-dot d4" />
          <div className="fleet-panel">
            <span>LIVE OPERATIONS</span>
            <strong>GPS / DISPATCH / ROUTES</strong>
          </div>
        </div>
      )}
      {project.className === "logivis" && (
        <div className="logivis-visual">
          <div className="dash-top"><span>ORDER TRACKING</span><span>LIVE</span></div>
          <div className="dash-kpis"><b>ORDERS</b><b>SHIPMENTS</b><b>STATUS</b></div>
          <div className="dash-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="dash-footer">SHOPIFY · LARK · LOGISTICS</div>
        </div>
      )}
      {project.className === "data-warehouse" && (
        <div className="warehouse-visual">
          <div className="warehouse-label">BUSINESS INTELLIGENCE</div>
          <div className="warehouse-stack">
            <span>DATA SOURCES</span>
            <i>↓</i>
            <span className="warehouse-accent">DATA WAREHOUSE</span>
            <i>↓</i>
            <span>BI / ANALYTICS</span>
          </div>
          <div className="warehouse-bars"><i /><i /><i /><i /><i /><i /></div>
          <div className="warehouse-footer">DATA · REPORTING · INSIGHT</div>
        </div>
      )}
      <span className="visual-index">{project.number}</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a className="monogram" href="#top" aria-label="Home">CA</a>
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact" aria-label="Email"><Mail size={18} strokeWidth={1.7} /></a>
        <a href="https://github.com/christopheranthonyagustin" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} strokeWidth={1.7} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-kicker hero-reveal">TECHNICAL PROJECT MANAGER</div>
        <h1 className="hero-title" aria-label="Hi, I'm Christopher, a Technical PM who bridges business and technology.">
          <span className="hero-line"><span className="hero-word">Hi,</span> <span className="hero-word">I'm</span> <span className="hero-word">Christopher,</span></span>
          <span className="hero-line muted"><span className="hero-word">a</span> <span className="hero-word">Technical</span> <span className="hero-word">PM</span></span>
          <span className="hero-line muted"><span className="hero-word">who</span> <span className="hero-word">bridges</span></span>
          <span className="hero-line muted"><span className="hero-word">business</span> <span className="hero-word">and</span> <span className="hero-word">technology.</span></span>
        </h1>
        <p className="hero-summary hero-reveal delayed">
          Technical Project Manager with 15+ years of technology experience, leading requirements, project planning, stakeholder management, technical delivery, risk and issue management, UAT and go-live across enterprise applications, cloud infrastructure, systems integration, healthcare, logistics and e-commerce.
        </p>
        <a className="scroll-cue hero-reveal delayed-more" href="#work">Scroll to explore <span>↓</span></a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section" id="work">
      <div className="section-heading">
        <Reveal><span className="section-label">SELECTED WORK</span></Reveal>
        <Reveal delay={70}><h2>Work that connects<br /><em>business and technology.</em></h2></Reveal>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.number} className={`project ${index % 2 ? "reverse" : ""}`} delay={index * 40}>
            <div className="project-media"><ProjectVisual project={project} /></div>
            <div className="project-copy">
              <div className="eyebrows">{project.eyebrow.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-meta">
                <div><span>ROLE</span>{project.role}</div>
                <div><span>DELIVERY</span>{project.delivery}</div>
                {project.standards && <div><span>STANDARDS</span>{project.standards}</div>}
              </div>
              <a className="read-more" href={project.href || "https://github.com/christopheranthonyagustin/portfolio"} target="_blank" rel="noreferrer">VIEW PROJECT <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="delivery section">
      <Reveal className="delivery-layout">
        <div>
          <span className="section-label">HOW I DELIVER</span>
          <h2>From business need<br /><em>to working technology.</em></h2>
          <p className="delivery-intro">I lead technology delivery across the full project lifecycle — translating business needs into requirements, plans, technical solutions and coordinated execution while managing scope, stakeholders, risks, dependencies, testing, UAT and go-live.</p>
          <div className="standards-line">SDLC <span>·</span> Agile / Hybrid <span>·</span> ISO 13485 <span>·</span> IEC 62304 <span>·</span> ISO 14971</div>
        </div>
        <div className="lifecycle">
          {[
            ["01", "Business Need"], ["02", "Requirements"], ["03", "Planning & Design"], ["04", "Development / Implementation"], ["05", "Verification & Validation"], ["06", "UAT / Go-Live"]
          ].map(([num, label], i) => (
            <div className="life-row" key={num}>
              <span>{num}</span><strong>{label}</strong>{i < 5 && <i />}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    {
      number: "01",
      title: "Project Leadership & Governance",
      text: "I lead technology initiatives across scope, requirements, planning, estimation, stakeholders, vendors, risks, dependencies, UAT, release, go-live and operational improvement."
    },
    {
      number: "02",
      title: "Technical PM — Cloud & Infrastructure",
      text: "I understand cloud and infrastructure architectures, deployment environments and operational dependencies, allowing me to adapt quickly to different technology stacks and work effectively with engineers, architects, MSPs and vendors."
    },
    {
      number: "03",
      title: "Enterprise Applications & Integration",
      text: "I understand the systems behind enterprise projects and can work across APIs, webhooks, EDI, middleware, authentication and third-party integrations from requirements through delivery."
    },
    {
      number: "04",
      title: "Shopify Apps & Integrations",
      text: "I can build Shopify apps and custom integrations that connect e-commerce workflows with external systems, APIs, logistics platforms and business workspaces."
    },
    {
      number: "05",
      title: "Messaging & AI Integration",
      text: "I can connect customer and team messaging channels such as WhatsApp, Facebook Messenger, Viber and Lark, then add AI for support, inquiry handling, translation, issue capture and workflow automation."
    },
    {
      number: "06",
      title: "Business Intelligence & Data",
      text: "I can work across data warehousing, SQL, reporting, Power BI and operational analytics to turn enterprise data into information that supports project and business decisions."
    },
    {
      number: "07",
      title: "AI as a Management Tool",
      text: "I use AI as a practical management and delivery tool for requirements analysis, documentation, research, task structuring, meeting summaries, reporting and decision support."
    },
    {
      number: "08",
      title: "Regulated & Connected Technology",
      text: "I have project experience across regulated healthcare software, connected hardware and IoT, with exposure to ISO 13485, IEC 62304 and ISO 14971 delivery environments."
    }
  ];

  return (
    <section className="capabilities section" id="capabilities">
      <div className="section-heading">
        <Reveal><span className="section-label">MODERN DELIVERY</span></Reveal>
        <Reveal delay={70}><h2>Technology that<br /><em>extends the PM role.</em></h2></Reveal>
      </div>
      <div className="capability-list">
        {capabilities.map((item, index) => (
          <Reveal key={item.number} delay={index * 60} className="capability-row">
            <span className="capability-number">{item.number}</span>
            <div className="capability-main">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <ArrowUpRight className="capability-arrow" size={22} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <Reveal><span className="section-label">ABOUT ME</span></Reveal>
        <Reveal delay={70}><h2>Technical depth.<br /><em>Project leadership.</em></h2></Reveal>
      </div>
      <div className="about-grid">
        <Reveal className="about-copy"><p className="large-copy">My career evolved from software engineering into enterprise technology delivery and technical project management.</p><p>That engineering foundation lets me understand what teams are building while keeping focus on business objectives, stakeholders, scope, risks, delivery and outcomes.</p><p>I work across healthcare, logistics, e-commerce, transportation, warehouse management, manufacturing and enterprise IT.</p></Reveal>
        <Reveal className="facts" delay={100}>
          <div><span>EXPERIENCE</span><strong>15+ Years</strong><small>Technology</small></div>
          <div><span>POSITIONING</span><strong>Technical PM</strong><small>Project Leadership & Delivery</small></div>
          <div><span>STRENGTH</span><strong>Business ↔ Technical</strong><small>Translation, Coordination & Delivery</small></div>
          <div><span>BACKGROUND</span><strong>Software Engineering</strong><small>→ Project Management</small></div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <Reveal>
        <span className="section-label">LET'S CONNECT</span>
        <h2>Have a technology problem<br /><em>worth solving?</em></h2>
        <p>I'm interested in Technical Project Management and technology initiatives where project leadership, technical understanding and business context need to work together.</p>
        <div className="contact-links">
          <a href="mailto:YOUR_EMAIL_HERE">Email me <ArrowUpRight size={18} /></a>
          <a href="https://github.com/christopheranthonyagustin" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return <footer><span>CHRISTOPHER ANTHONY AGUSTIN</span><span>TECHNICAL PROJECT MANAGER</span><a href="#top">BACK TO TOP ↑</a></footer>;
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const update = () => document.documentElement.style.setProperty("--scroll-progress", `${(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100}%`);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <><div className="scroll-progress" /><Nav /><main><Hero /><Work /><Delivery /><Capabilities /><About /><Contact /></main><Footer /></>;
}

createRoot(document.getElementById("root")).render(<App />);
