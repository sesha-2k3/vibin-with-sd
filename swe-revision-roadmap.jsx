import { useState } from "react";

const DAYS = [
  {
    day: 1,
    title: "Software Architecture & Design Patterns",
    icon: "🏗️",
    accent: "#E8453C",
    why: "You've built ML pipelines and REST APIs — now learn how production software is actually structured. This is the biggest gap between 'ML engineer who can code' and 'software developer.'",
    concepts: [
      "SOLID Principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)",
      "Design Patterns: Factory, Singleton, Observer, Strategy, Decorator",
      "MVC / MVP / MVVM architecture patterns",
      "Separation of Concerns & Dependency Injection",
      "Clean Code principles — naming, functions, comments, formatting",
    ],
    resources: [
      { name: "Refactoring Guru — Design Patterns", url: "https://refactoring.guru/design-patterns", type: "Interactive", note: "Best visual guide to all GoF patterns with Python/Java examples" },
      { name: "roadmap.sh — Software Design & Architecture", url: "https://roadmap.sh/software-design-architecture", type: "Roadmap", note: "Interactive roadmap to track your progress" },
      { name: "ArjanCodes (YouTube) — SOLID & Design Patterns in Python", url: "https://www.youtube.com/c/ArjanCodes", type: "Video", note: "Python-focused, perfect for your background" },
      { name: "Clean Code by Robert C. Martin (Ch 1-3 summary)", url: "https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29", type: "Reading", note: "Community summary of the key Clean Code principles" },
    ],
    project: "Refactor your Text-QL or LinSec project — identify violations of SOLID principles and apply at least 2 design patterns. Document the before/after in your repo.",
    repoStructure: "day-01-design-patterns/\n├── notes.md\n├── patterns/\n│   ├── factory_example.py\n│   ├── strategy_example.py\n│   └── observer_example.py\n└── refactor-log.md",
  },
  {
    day: 2,
    title: "Backend Development & RESTful APIs",
    icon: "⚡",
    accent: "#F59E0B",
    why: "You've used FastAPI before — now go deeper. Understand REST conventions, middleware, authentication, error handling, and how to structure a production backend properly.",
    concepts: [
      "REST principles: resources, HTTP methods, status codes, idempotency",
      "API versioning, pagination, filtering, and error handling",
      "Middleware, authentication (JWT, OAuth2), and authorization",
      "Request validation with Pydantic (you already know this — go deeper)",
      "Project structure: routers, services, repositories pattern",
    ],
    resources: [
      { name: "FastAPI Official Docs — Tutorial", url: "https://fastapi.tiangolo.com/tutorial/", type: "Docs", note: "Go through the advanced sections you may have skipped" },
      { name: "roadmap.sh — API Design Roadmap", url: "https://roadmap.sh/api-design", type: "Roadmap", note: "Comprehensive overview of API design best practices" },
      { name: "Microsoft — RESTful Web API Design", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design", type: "Reading", note: "Industry-standard guide on REST API design" },
      { name: "freeCodeCamp — Back End Dev & APIs", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/", type: "Course", note: "Free hands-on projects with Node.js (good to see both ecosystems)" },
    ],
    project: "Build a Task Manager API with FastAPI — CRUD operations, JWT auth, proper error handling, Pydantic models, and structured project layout. Push to your repo with a working README.",
    repoStructure: "day-02-backend-apis/\n├── notes.md\n├── task-manager-api/\n│   ├── app/\n│   │   ├── main.py\n│   │   ├── routers/\n│   │   ├── models/\n│   │   ├── services/\n│   │   └── auth/\n│   ├── requirements.txt\n│   └── README.md\n└── rest-cheatsheet.md",
  },
  {
    day: 3,
    title: "Databases: SQL Deep Dive & ORM",
    icon: "🗄️",
    accent: "#10B981",
    why: "You know SQL and MongoDB from your resume, but software development demands deeper DB skills — migrations, ORMs, indexing strategy, and understanding query performance.",
    concepts: [
      "Relational DB design: normalization (1NF through 3NF), relationships",
      "Indexes, query optimization, and EXPLAIN plans",
      "ORM patterns with SQLAlchemy / Alembic migrations",
      "ACID properties and transaction management",
      "SQL vs NoSQL: when to use what (you know MongoDB — learn the tradeoffs)",
    ],
    resources: [
      { name: "SQLBolt — Interactive SQL Lessons", url: "https://sqlbolt.com/", type: "Interactive", note: "Quick refresher with hands-on exercises" },
      { name: "SQLAlchemy Official Tutorial", url: "https://docs.sqlalchemy.org/en/20/tutorial/", type: "Docs", note: "Learn the ORM that pairs with FastAPI" },
      { name: "CMU Intro to Database Systems (YouTube)", url: "https://www.youtube.com/playlist?list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g", type: "Video", note: "Andy Pavlo's legendary DB course — watch lectures on indexing & transactions" },
      { name: "Use The Index, Luke", url: "https://use-the-index-luke.com/", type: "Reading", note: "The best free resource on SQL indexing and query performance" },
    ],
    project: "Add PostgreSQL with SQLAlchemy to your Day 2 Task Manager API. Implement migrations with Alembic, add indexes, and write queries that demonstrate JOIN, GROUP BY, and subqueries.",
    repoStructure: "day-03-databases/\n├── notes.md\n├── sql-exercises/\n│   └── solutions.sql\n├── task-manager-api/  (extended from day 2)\n│   ├── alembic/\n│   ├── models/\n│   └── db/\n└── db-design-notes.md",
  },
  {
    day: 4,
    title: "Testing & Code Quality",
    icon: "🧪",
    accent: "#8B5CF6",
    why: "Your resume mentions 'QA checks and automated regression tests' — now formalize that. Testing is what separates hobby projects from production software.",
    concepts: [
      "Testing pyramid: unit tests, integration tests, end-to-end tests",
      "pytest: fixtures, parametrize, mocking, conftest patterns",
      "Test-Driven Development (TDD) workflow",
      "Code coverage and when it matters (and when it doesn't)",
      "Linting (ruff/flake8), type checking (mypy), and pre-commit hooks",
    ],
    resources: [
      { name: "pytest Official Docs", url: "https://docs.pytest.org/en/stable/", type: "Docs", note: "The standard Python testing framework" },
      { name: "RealPython — Testing in Python (Tutorials)", url: "https://realpython.com/python-testing/", type: "Tutorial", note: "Comprehensive guide covering unittest, pytest, mocking" },
      { name: "ArjanCodes — TDD in Python (YouTube)", url: "https://www.youtube.com/watch?v=B1j6k2j2eJg", type: "Video", note: "Practical TDD walkthrough in Python" },
      { name: "roadmap.sh — QA Roadmap", url: "https://roadmap.sh/qa", type: "Roadmap", note: "Broader view of quality assurance practices" },
    ],
    project: "Write a full test suite for your Task Manager API — unit tests for services, integration tests for API endpoints (using TestClient), and add a pre-commit config with ruff + mypy.",
    repoStructure: "day-04-testing/\n├── notes.md\n├── task-manager-api/  (extended)\n│   ├── tests/\n│   │   ├── test_services.py\n│   │   ├── test_api.py\n│   │   └── conftest.py\n│   ├── .pre-commit-config.yaml\n│   └── pyproject.toml\n└── tdd-reflection.md",
  },
  {
    day: 5,
    title: "Git Workflows, CI/CD & Docker",
    icon: "🚀",
    accent: "#EC4899",
    why: "You list Git and Docker on your resume. Now learn the professional workflows — branching strategies, GitHub Actions, multi-stage Docker builds, and automated pipelines.",
    concepts: [
      "Git branching strategies: Git Flow, trunk-based development",
      "Writing good commit messages and PR descriptions",
      "GitHub Actions: CI pipeline (lint → test → build)",
      "Docker: multi-stage builds, docker-compose, .dockerignore",
      "Environment management: .env files, secrets, config patterns",
    ],
    resources: [
      { name: "GitHub Skills — Interactive Git Courses", url: "https://skills.github.com/", type: "Interactive", note: "Free hands-on courses directly in GitHub repos" },
      { name: "GitHub Actions Official Docs", url: "https://docs.github.com/en/actions", type: "Docs", note: "Learn to automate CI/CD pipelines" },
      { name: "Docker Official Getting Started", url: "https://docs.docker.com/get-started/", type: "Tutorial", note: "Multi-stage builds and compose" },
      { name: "roadmap.sh — DevOps Roadmap", url: "https://roadmap.sh/devops", type: "Roadmap", note: "Broader context for CI/CD and deployment" },
    ],
    project: "Dockerize your Task Manager API with a multi-stage build. Write a docker-compose.yml (app + PostgreSQL). Add a GitHub Actions workflow that runs lint + tests on every push.",
    repoStructure: "day-05-cicd-docker/\n├── notes.md\n├── task-manager-api/  (extended)\n│   ├── Dockerfile\n│   ├── docker-compose.yml\n│   ├── .github/\n│   │   └── workflows/\n│   │       └── ci.yml\n│   └── .dockerignore\n└── git-workflow-notes.md",
  },
  {
    day: 6,
    title: "System Design Fundamentals",
    icon: "🌐",
    accent: "#0EA5E9",
    why: "You've deployed systems handling 5,000+ interactions/month. Now understand the principles behind designing systems that handle millions — load balancing, caching, queues, and more.",
    concepts: [
      "Scalability: horizontal vs vertical scaling",
      "Load balancers, reverse proxies, CDNs",
      "Caching strategies: Redis, in-memory, cache invalidation",
      "Message queues: RabbitMQ, Redis Pub/Sub, Celery",
      "CAP theorem, database sharding, replication basics",
    ],
    resources: [
      { name: "System Design Primer (GitHub — 280K+ stars)", url: "https://github.com/donnemartin/system-design-primer", type: "Reading", note: "The single best free system design resource" },
      { name: "ByteByteGo YouTube Channel", url: "https://www.youtube.com/@ByteByteGo", type: "Video", note: "Visual system design explanations by Alex Xu" },
      { name: "roadmap.sh — System Design Roadmap", url: "https://roadmap.sh/system-design", type: "Roadmap", note: "Interactive roadmap with linked resources" },
      { name: "roadmap.sh — Backend Projects", url: "https://roadmap.sh/backend/projects", type: "Projects", note: "Practice projects: URL shortener, caching proxy, etc." },
    ],
    project: "Design a URL Shortener system — draw architecture diagrams (use Excalidraw or Mermaid), document component choices, and write a working prototype with Redis caching.",
    repoStructure: "day-06-system-design/\n├── notes.md\n├── url-shortener/\n│   ├── architecture.md  (with Mermaid diagrams)\n│   ├── app/\n│   ├── docker-compose.yml  (app + Redis + PostgreSQL)\n│   └── README.md\n└── system-design-flashcards.md",
  },
  {
    day: 7,
    title: "Putting It All Together & Frontend Basics",
    icon: "🎯",
    accent: "#6366F1",
    why: "Tie everything together. Learn enough frontend (React basics or simple HTML/JS) to build full-stack awareness, review the week, and plan your continued learning path.",
    concepts: [
      "Frontend basics: HTML/CSS/JS refresher, DOM manipulation",
      "React fundamentals: components, state, props, hooks (useState, useEffect)",
      "Connecting frontend to your backend API (fetch/axios)",
      "Full-stack architecture: how frontend and backend communicate",
      "Code review practices and documentation (README, API docs)",
    ],
    resources: [
      { name: "React Official Tutorial (tic-tac-toe)", url: "https://react.dev/learn/tutorial-tic-tac-toe", type: "Tutorial", note: "Official hands-on intro, well-paced" },
      { name: "roadmap.sh — Frontend Roadmap", url: "https://roadmap.sh/frontend", type: "Roadmap", note: "See the full frontend landscape" },
      { name: "The Odin Project — Foundations", url: "https://www.theodinproject.com/paths/foundations", type: "Course", note: "Free, project-based full-stack curriculum" },
      { name: "Full Stack Open (University of Helsinki)", url: "https://fullstackopen.com/en/", type: "Course", note: "Deep dive: React, Node, GraphQL, TypeScript — free university course" },
    ],
    project: "Build a simple React frontend for your Task Manager API. List tasks, add/delete tasks, toggle completion. Deploy everything with Docker Compose. Write a comprehensive README for your learning repo.",
    repoStructure: "day-07-fullstack/\n├── notes.md\n├── task-manager-frontend/\n│   ├── src/\n│   ├── package.json\n│   └── README.md\n├── docker-compose.yml  (full stack)\n└── WEEKLY-REFLECTION.md",
  },
];

const typeColors = {
  Interactive: { bg: "#FEF3C7", text: "#92400E", border: "#FCD34D" },
  Roadmap: { bg: "#DBEAFE", text: "#1E40AF", border: "#93C5FD" },
  Video: { bg: "#FCE7F3", text: "#9D174D", border: "#F9A8D4" },
  Reading: { bg: "#D1FAE5", text: "#065F46", border: "#6EE7B7" },
  Docs: { bg: "#EDE9FE", text: "#5B21B6", border: "#C4B5FD" },
  Tutorial: { bg: "#FFF7ED", text: "#9A3412", border: "#FDBA74" },
  Course: { bg: "#F0F9FF", text: "#075985", border: "#7DD3FC" },
  Projects: { bg: "#FDF2F8", text: "#831843", border: "#F9A8D4" },
};

export default function SWELearningRoadmap() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedResource, setExpandedResource] = useState(null);
  const [completedDays, setCompletedDays] = useState(new Set());

  const toggleComplete = (dayIndex) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayIndex)) next.delete(dayIndex);
      else next.add(dayIndex);
      return next;
    });
  };

  const day = DAYS[activeDay];
  const progress = (completedDays.size / 7) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      color: "#E2E8F0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1a1a2e; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        a { text-decoration: none; }
        a:hover { opacity: 0.85; }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "32px 32px 24px",
        borderBottom: "1px solid #1E293B",
        background: "linear-gradient(180deg, #0F1019 0%, #0A0A0F 100%)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 28 }}>📚</span>
            <h1 style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #F8FAFC, #94A3B8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              7-Day SWE Fundamentals Roadmap
            </h1>
          </div>
          <p style={{ color: "#64748B", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            Tailored for your ML/DS background — filling in the software engineering gaps to build production-grade applications.
          </p>

          {/* Progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              flex: 1,
              height: 6,
              background: "#1E293B",
              borderRadius: 3,
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: `linear-gradient(90deg, #10B981, #34D399)`,
                borderRadius: 3,
                transition: "width 0.5s ease",
              }} />
            </div>
            <span style={{ color: "#64748B", fontSize: 13, fontFamily: "'JetBrains Mono', monospace", minWidth: 60, textAlign: "right" }}>
              {completedDays.size}/7 done
            </span>
          </div>
        </div>
      </div>

      {/* Day Tabs */}
      <div style={{
        padding: "16px 32px",
        borderBottom: "1px solid #1E293B",
        overflowX: "auto",
        background: "#0C0C14",
      }}>
        <div style={{ display: "flex", gap: 8, maxWidth: 960, margin: "0 auto" }}>
          {DAYS.map((d, i) => (
            <button
              key={i}
              onClick={() => { setActiveDay(i); setExpandedResource(null); }}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: activeDay === i ? `2px solid ${d.accent}` : "2px solid transparent",
                background: activeDay === i ? `${d.accent}15` : "#12121E",
                color: activeDay === i ? d.accent : "#64748B",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'DM Sans', system-ui, sans-serif",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 6,
                position: "relative",
              }}
            >
              {completedDays.has(i) && (
                <span style={{ fontSize: 11 }}>✅</span>
              )}
              <span>{d.icon}</span>
              <span>Day {d.day}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 32px 48px" }}>
        {/* Day Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 24,
          gap: 16,
          flexWrap: "wrap",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 32 }}>{day.icon}</span>
              <div>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: day.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  Day {day.day} of 7
                </span>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F1F5F9", letterSpacing: "-0.01em" }}>
                  {day.title}
                </h2>
              </div>
            </div>
            <p style={{
              color: "#94A3B8",
              fontSize: 14,
              lineHeight: 1.65,
              maxWidth: 640,
              padding: "12px 16px",
              background: "#12121E",
              borderRadius: 10,
              borderLeft: `3px solid ${day.accent}`,
            }}>
              {day.why}
            </p>
          </div>
          <button
            onClick={() => toggleComplete(activeDay)}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              background: completedDays.has(activeDay) ? "#10B981" : "#1E293B",
              color: completedDays.has(activeDay) ? "#fff" : "#94A3B8",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {completedDays.has(activeDay) ? "✓ Completed" : "Mark Complete"}
          </button>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Key Concepts */}
          <div style={{
            background: "#12121E",
            borderRadius: 14,
            padding: "20px 22px",
            border: "1px solid #1E293B",
          }}>
            <h3 style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#64748B",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 14,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              Key Concepts
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {day.concepts.map((c, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "#CBD5E1",
                }}>
                  <span style={{
                    width: 22,
                    height: 22,
                    minWidth: 22,
                    borderRadius: 6,
                    background: `${day.accent}18`,
                    color: day.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "'JetBrains Mono', monospace",
                    marginTop: 1,
                  }}>
                    {i + 1}
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div style={{
            background: "#12121E",
            borderRadius: 14,
            padding: "20px 22px",
            border: "1px solid #1E293B",
          }}>
            <h3 style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#64748B",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 14,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              Curated Resources
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {day.resources.map((r, i) => {
                const tc = typeColors[r.type] || typeColors.Reading;
                const isExpanded = expandedResource === `${activeDay}-${i}`;
                return (
                  <div
                    key={i}
                    onClick={() => setExpandedResource(isExpanded ? null : `${activeDay}-${i}`)}
                    style={{
                      background: isExpanded ? "#181828" : "#0F0F1A",
                      borderRadius: 10,
                      padding: "12px 14px",
                      cursor: "pointer",
                      border: `1px solid ${isExpanded ? "#2D3748" : "#1a1a2e"}`,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{
                            fontSize: 10,
                            fontWeight: 600,
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: tc.bg,
                            color: tc.text,
                            border: `1px solid ${tc.border}`,
                            fontFamily: "'JetBrains Mono', monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                          }}>
                            {r.type}
                          </span>
                        </div>
                        <p style={{ fontSize: 13.5, fontWeight: 500, color: "#E2E8F0", lineHeight: 1.4 }}>
                          {r.name}
                        </p>
                      </div>
                      <span style={{ color: "#475569", fontSize: 16, transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                        ▾
                      </span>
                    </div>
                    {isExpanded && (
                      <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid #1E293B" }}>
                        <p style={{ fontSize: 12.5, color: "#94A3B8", lineHeight: 1.5, marginBottom: 10 }}>{r.note}</p>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 12,
                            fontWeight: 600,
                            color: day.accent,
                            padding: "5px 10px",
                            borderRadius: 6,
                            background: `${day.accent}12`,
                            border: `1px solid ${day.accent}30`,
                          }}
                        >
                          Open Resource →
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project */}
        <div style={{
          marginTop: 20,
          background: "linear-gradient(135deg, #12121E, #161626)",
          borderRadius: 14,
          padding: "22px 24px",
          border: `1px solid ${day.accent}25`,
        }}>
          <h3 style={{
            fontSize: 13,
            fontWeight: 600,
            color: day.accent,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 10,
            fontFamily: "'JetBrains Mono', monospace",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{ fontSize: 16 }}>🔨</span> Practice Project
          </h3>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.6, marginBottom: 16 }}>
            {day.project}
          </p>
          <div style={{
            background: "#0A0A14",
            borderRadius: 10,
            padding: "14px 18px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            lineHeight: 1.7,
            color: "#64748B",
            whiteSpace: "pre",
            overflowX: "auto",
            border: "1px solid #1a1a2e",
          }}>
            <span style={{ color: "#475569", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>Suggested repo structure:</span>
            {"\n"}{day.repoStructure}
          </div>
        </div>

        {/* Bonus: Repo Setup */}
        {activeDay === 0 && (
          <div style={{
            marginTop: 20,
            background: "#12121E",
            borderRadius: 14,
            padding: "22px 24px",
            border: "1px solid #1E293B",
          }}>
            <h3 style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#F59E0B",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
              fontFamily: "'JetBrains Mono', monospace",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ fontSize: 16 }}>💡</span> Repo Setup Tip
            </h3>
            <div style={{
              background: "#0A0A14",
              borderRadius: 10,
              padding: "14px 18px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              lineHeight: 1.8,
              color: "#94A3B8",
              whiteSpace: "pre",
              overflowX: "auto",
              border: "1px solid #1a1a2e",
            }}>
{`swe-fundamentals/
├── README.md              # Learning log & weekly summary
├── day-01-design-patterns/
├── day-02-backend-apis/
├── day-03-databases/
├── day-04-testing/
├── day-05-cicd-docker/
├── day-06-system-design/
├── day-07-fullstack/
└── resources.md           # Bookmarked links & notes`}
            </div>
            <p style={{ fontSize: 13, color: "#64748B", marginTop: 12, lineHeight: 1.5 }}>
              Each day folder has a <code style={{ color: "#94A3B8", background: "#1a1a2e", padding: "1px 5px", borderRadius: 4, fontSize: 12 }}>notes.md</code> for documenting what you learned — this becomes your reference and shows growth to recruiters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
