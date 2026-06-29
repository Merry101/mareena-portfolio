import React from 'react';
import { Terminal, Cpu, Cloud, Mail, Briefcase, Award } from 'lucide-react';

export default function App() {
  const skills = {
    "Backend & Architecture": ["C#", ".NET 8 / .NET Core", "Clean Architecture", "SOLID Principles", "Event-Driven Design", "RESTful / SOAP APIs"],
    "Cloud & DevOps": ["Azure (Functions, Service Bus, App Service)", "Azure DevOps", "CI/CD Pipelines", "Octopus Deploy", "Jenkins", "TeamCity"],
    "Data & Storage": ["SQL Server", "MongoDB", "Oracle", "DB2", "Entity Framework", "Dapper", "NHibernate"],
    "Frontend & Testing": ["Angular 15/6", "React", "Figma (Wireframing)", "jQuery", "HTML5/CSS3", "NUnit", "Jest", "SonarQube"]
  };

  const caseStudies = [
    {
      title: "Modular Cloud Integration & Database Engineering",
      company: "Spenda",
      period: "03/2025 - 06/2026",
      role: "Backend Engineer",
      challenge: "Build and maintain scalable, decoupled backend modules to power core enterprise operations including quoting, inventory management, warehousing, service jobs, and secure payment processing.",
      solution: "Engineered specialized serverless backend logic using .NET 8 Azure Functions across independent business domains (QuoteMgmt, Inventory, WarehouseMgmt, and ServiceJobMgmt). Integrated external payment APIs to handle secure financial transactions. Designed optimized database tables and wrote complex stored procedures (SProcs) in SQL Server to ensure data integrity, while validating API behavior using Postman and enforcing stability via rigorous unit and integration testing.",
      tags: [".NET 8", "Azure Service Bus", "Azure Functions", "SQL Server", "Azure DevOps"]
    },
    {
      title: "Enterprise Legacy Modernization (COBOL Mainframe)",
      company: "Insurance Commission of Western Australia",
      period: "05/2023 - 02/2025",
      role: "Angular - .NET Developer",
      challenge: "Decommission and replace a massive legacy institutional COBOL mainframe system without interrupting live, active business operational data.",
      solution: "Spearheaded the digital transformation by engineering a highly scalable .NET backend ecosystem paired with a modern Angular single-page frontend. Developed complex integration and database layers to safely sync application logic across legacy DB2 and Oracle environments while maintaining total data normalization and consistency throughout the multi-year migration phase.",
      tags: ["Angular", ".NET Core", "DB2", "Oracle", "Jenkins"]
    },
    {
      title: "Cloud-Native Industrial Data Applications",
      company: "Capgemini",
      period: "07/2022 - 04/2023",
      role: "Consultant",
      challenge: "Deliver high-fidelity data monitoring systems for mining clients while adhering strictly to rigorous enterprise-level PII compliance rules.",
      solution: "Designed and built full-stack software applications utilizing React, Azure App Services, and .NET Core. Engineered standalone custom PII Anonymization modules using .NET and Oracle to maintain strict privacy laws. Reduced infrastructure compute costs via targeted Azure Functions deployments and streamlined deployment environments via Octopus Deploy and TeamCity workflows.",
      tags: ["React", ".NET Core", "Azure App Service", "Octopus Deploy", "PII Security"]
    },
    {
      title: "Enterprise Benchmarking & Data Analytics Engine",
      company: "MOA Benchmarking",
      period: "02/2021 - 06/2022",
      role: ".NET Developer",
      challenge: "Maintain and scale high-performance data analytics reporting tools used by clients for institutional benchmarking evaluation metrics.",
      solution: "Programmed robust backend APIs using .NET Framework and structured data mapping strategies with NHibernate. Optimized relational database layers via SQL Server to process heavy numerical analysis datasets. Designed and updated highly interactive web interfaces using jQuery, HTML5, and CSS3 to output clear data tables and visuals for end-users.",
      tags: [".NET Framework", "NHibernate", "SQL Server", "jQuery", "Data Tracking"]
    },
    {
      title: "Legacy VB.NET Core Platform Migration",
      company: "Odyssey Gaming",
      period: "03/2020 - 02/2021",
      role: "Software Developer",
      challenge: "Port aging legacy business logic into modern object-oriented structures to increase computational durability and reduce operational system errors.",
      solution: "Successfully translated legacy VB.NET code components over into fully optimized C# MVC codebases. Structured modular, highly reusable presentation components to improve platform rendering scales. Conducted rigorous live testing, handled active bug resolution, and performed high-pressure system debugging during live test cycles.",
      tags: ["C#", "ASP.NET MVC", "VB.NET Migration", "Component Optimization", "Debugging"]
    }
  ];

  const workHistory = [
    {
      role: "Backend Engineer",
      company: "Spenda",
      period: "03/2025 - 06/2026",
      highlights: [
        "Developed and deployed robust serverless backend modules via Azure Functions to cleanly isolate Quote, Inventory, Warehouse, and Service Job application logic.",
        "Successfully integrated a secure transactional payment API into the core application ecosystem.",
        "Designed relational database tables, authored optimized stored procedures (SProcs), and implemented extensive unit and integration testing suites to protect code quality.",
        "Performed comprehensive API contract validation using Postman, conducted peer code reviews, and managed functional bug fixes across deployment environments."
      ]
    },
    {
      role: "Angular - .NET Developer",
      company: "Insurance Commission of Western Australia",
      period: "05/2023 - 02/2025",
      highlights: [
        "Successfully managed database structures and legacy migration pipelines.",
        "Automated multi-environment deployment steps into SIT, UAT, and Production with Jenkins.",
        "Authored system architecture maps and API contracts for continuous system maintainability."
      ]
    },
    {
      role: "Consultant",
      company: "Capgemini",
      period: "07/2022 - 04/2023",
      highlights: [
        "Architected real-time telemetry systems for enterprise resources.",
        "Managed UI design pipelines using Figma prior to native front-end assembly.",
        "Optimized processing overhead using customized cloud configurations."
      ]
    },
    {
      role: ".NET Developer",
      company: "MOA Benchmarking",
      period: "02/2021 - 06/2022",
      highlights: [
        "Designed and maintained benchmark APIs leveraging .NET Framework, NHibernate, and SQL Server components.",
        "Constructed responsive, dynamic client reporting interfaces utilizing interactive jQuery elements.",
        "Participated within structured sprint guidelines and managed task lifecycles through Jira workflow environments."
      ]
    },
    {
      role: "Software Developer",
      company: "Odyssey Gaming",
      period: "03/2020 - 02/2021",
      highlights: [
        "Ported outdated legacy VB.NET applications cleanly over into high-performance C# MVC structures.",
        "Built reusable UI modules to provide responsive UI rendering scales across core systems.",
        "Executed real-time production troubleshooting, system debugging, and active patch development."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header / Hero */}
        <header className="mb-16 border-b border-slate-900 pb-12">
          {/* <div className="flex items-center space-x-2 text-teal-400 font-mono text-sm mb-3">
            <Terminal size={16} />
            <span>SYSTEM.INIT()</span>
          </div> */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Mareena Joseph
          </h1>
          <p className="text-xl md:text-2xl font-medium text-teal-400 mt-1">
            Full Stack Developer
          </p>
          <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed text-base">
            Full-stack developer with comprehensive expertise in both front-end and back-end technologies. Skilled in writing robust enterprise APIs, building decoupled event-driven systems on Azure, and executing technical deliverables for complex legacy modernizations. Grounded firmly in applying Clean Architecture, SOLID design patterns, and high operational precision.
          </p>
          
          {/* Action Links */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href="mailto:reachmareena@gmail.com" className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-teal-500/50 px-4 py-2 rounded-lg text-slate-300 transition-colors">
              <Mail size={15} className="text-teal-400" /> reachmareena@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mareena-joseph-33390765" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-teal-500/50 px-4 py-2 rounded-lg text-slate-300 transition-colors">
              <span className="text-teal-400 font-bold font-mono">in</span> LinkedIn
            </a>
          </div>
        </header>

        {/* Skills Matrix */}
        <section className="mb-20">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Cpu size={20} className="text-teal-400" /> Core Expertise & Toolkit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-5 bg-slate-900/40 border border-slate-900 rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(item => (
                      <span key={item} className="px-2 py-0.5 bg-slate-950 text-slate-300 border border-slate-800/80 text-xs rounded font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cloud size={20} className="text-teal-400" /> Featured Architecture Case Studies
            </h2>
          </div>

          <div className="space-y-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-slate-900/20 border border-slate-900 hover:border-slate-800/80 transition-all rounded-xl group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-teal-400 bg-teal-950/40 border border-teal-900/60 px-2 py-0.5 rounded">
                      {cs.company} — {cs.role}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-teal-400 transition-colors">{cs.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 sm:text-right whitespace-nowrap">{cs.period}</span>
                </div>
                
                <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
                  <p><strong className="text-slate-300">The Problem:</strong> {cs.challenge}</p>
                  <p><strong className="text-slate-300">Engineering Approach:</strong> {cs.solution}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                  {cs.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800/50 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-8">
            <Briefcase size={20} className="text-teal-400" /> Professional Track Record
          </h2>
          <div className="relative border-l border-slate-900 ml-3 space-y-10">
            {workHistory.map((job, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-slate-950 border border-teal-400" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-slate-200">
                    {job.role} <span className="text-teal-400 font-normal">@ {job.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500">{job.period}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400 leading-relaxed">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-900 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-slate-500" />
            <span>Bachelor of Engineering</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Mareena Joseph. Compiled via React + Tailwind v4. Hosted on Azure SWA.
          </div>
        </footer>

      </div>
    </div>
  );
}
