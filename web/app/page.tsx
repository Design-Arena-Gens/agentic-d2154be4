import type { ReactNode } from "react";

type Section = {
  id: string;
  title: string;
  description: string;
  body: ReactNode;
};

const sections: Section[] = [
  {
    id: "project-vision",
    title: "Project Vision & Goals",
    description:
      "Clarify the mission for a Jarvis-like laptop assistant, the user experience pillars, and the success criteria you will measure throughout development.",
    body: (
      <>
        <p>
          Begin by defining the scope: a multimodal, voice-first assistant that
          can orchestrate apps, automate workflows, and surface relevant
          insights. Map the assistant&apos;s responsibilities into three
          pillars—perception (input capture), cognition (reasoning +
          decision-making), and action (API + OS automation). For each pillar,
          list high-impact scenarios such as scheduling, knowledge retrieval,
          system monitoring, or device control. Translate these into SMART
          objectives (e.g., “Answer contextual desktop queries in &lt;2 s with
          ≥90% accuracy”) and capture non-functional requirements like offline
          resilience, privacy guarantees, and extensibility.
        </p>
        <p>
          Draft an initial product roadmap with discovery milestones (user
          interviews, dataset curation), foundation milestones (core services,
          CI/CD, telemetry), and iterative delivery (feature sprints, UX polish,
          personalization). This narrative will anchor technical decisions and
          make downstream trade-offs explicit.
        </p>
      </>
    ),
  },
  {
    id: "tech-stack",
    title: "Choosing Languages, Frameworks & Tools",
    description:
      "Select a stack that balances rapid experimentation with production reliability across the assistant’s UI, orchestration, and ML layers.",
    body: (
      <>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Client & UX Layer
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>
                <span className="font-medium">Next.js + React</span> for a
                desktop dashboard, conversation timeline, and configuration UI.
                Tailwind CSS + Headless UI accelerate design systems.
              </li>
              <li>
                <span className="font-medium">Electron or Tauri</span> wraps the
                web app into a cross-platform desktop shell with OS-level
                integrations (global hotkeys, tray presence).
              </li>
              <li>
                <span className="font-medium">Speech stack</span>: Web Speech API
                for rapid prototyping, then switch to faster and more accurate
                models like Vosk, Whisper.cpp, or Deepgram SDK for offline
                resilience.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Assistant Core & Services
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>
                <span className="font-medium">TypeScript + Node.js</span> for
                the orchestration layer (intent routing, tool selection,
                workflow engine). Express.js or Fastify keeps APIs thin.
              </li>
              <li>
                <span className="font-medium">Python</span> microservices host
                ML workloads—fine-tuning, embedding generation, retrieval
                pipelines, and custom classifiers.
              </li>
              <li>
                <span className="font-medium">PostgreSQL + Prisma</span> manage
                structured data (conversations, preferences). Pair with
                <span className="font-medium"> Redis</span> for caching recent
                context and job queues.
              </li>
              <li>
                <span className="font-medium">Vector database</span> (Supabase
                Vector, Pinecone, Weaviate) stores embeddings for semantic
                search and retrieval-augmented generation (RAG).
              </li>
              <li>
                <span className="font-medium">Infrastructure-as-Code</span> with
                Terraform or Pulumi plus GitHub Actions for repeatable deploys.
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6">
          Surround the stack with essential tooling: Docker for reproducible
          runtime environments, Poetry or uv for Python dependency management,
          ESLint + Prettier + Biome for JavaScript hygiene, Ruff for Python lint{" "}
          and formatting, Vitest + Playwright for automated testing, and
          OpenTelemetry for distributed tracing. Adopt feature flagging (Launch
          Darkly, ConfigCat, or OpenFeature) to gate experimental skills.
        </p>
      </>
    ),
  },
  {
    id: "system-architecture",
    title: "Reference System Architecture",
    description:
      "Decompose the assistant into modular services that can evolve independently yet communicate through well-defined contracts.",
    body: (
      <>
        <div className="rounded-xl border border-zinc-200 p-6 shadow-sm">
          <ol className="list-decimal space-y-4 pl-5 text-sm text-zinc-700">
            <li>
              <span className="font-semibold text-zinc-900">
                Experience & Device Layer
              </span>{" "}
              (Next.js/Electron) captures inputs, renders responses, synchronizes
              notifications, and runs lightweight offline fallbacks.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Gateway & Session Service
              </span>{" "}
              manages authentication, rate limiting, secure websockets, and
              conversation state. It normalizes events from voice, text, or
              automation triggers.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Orchestration Engine
              </span>{" "}
              handles NLU, intent detection, tool selection, and multi-step task
              plans. Implement this as a state machine (XState) or behavior tree
              that can branch based on context and confidence scores.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Skills & Tooling APIs
              </span>{" "}
              wrap OS actions (window management, shell commands), calendar +
              mail APIs (Microsoft Graph, Google), knowledge stores (Notion,
              Obsidian), and IoT devices in capability-specific microservices
              with strict permissioning.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Intelligence Layer
              </span>{" "}
              combines large language models, structured planners, retrieval
              services, and rule-based fallbacks. Support hot-swapping between
              local models (Llama, Mistral) and hosted APIs (OpenAI, Anthropic,
              Google) via an abstraction that normalizes prompts, tokens, and
              streaming responses.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Observability & Governance
              </span>{" "}
              stores interaction logs, feedback, and metrics (latency, success
              rate, hallucination incidents). Use this data to trigger automated
              evaluations and guardrails.
            </li>
          </ol>
        </div>
        <p className="mt-4">
          Rely on event streaming (Kafka, NATS, or lightweight Redis streams) to
          decouple the orchestration engine from downstream skills. Standardize
          payloads using JSON Schema or Protocol Buffers and version them to
          avoid breaking changes during rapid iteration.
        </p>
      </>
    ),
  },
  {
    id: "ml-nlp",
    title: "Machine Learning & NLP Integration",
    description:
      "Blend foundation models with custom fine-tuning, retrieval, and deterministic logic to keep responses grounded, safe, and efficient.",
    body: (
      <>
        <h3 className="text-base font-semibold text-zinc-900">
          Core pipelines
        </h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            <span className="font-medium">Conversational model orchestration</span>:
            abstract provider APIs behind a uniform interface that supports
            streaming tokens, function calling, and structured outputs (JSON
            schemas). Implement automatic fallback with exponential backoff and
            provider health checks.
          </li>
          <li>
            <span className="font-medium">Retrieval-augmented generation</span>:
            convert documents (emails, notes, system logs) into embeddings
            (OpenAI ada-002, NVIDIA NV-Embed, or SentenceTransformers) and store
            them in a vector DB. Use hybrid search (lexical + semantic) and
            context window optimization (chunking, re-ranking) to keep prompts
            concise.
          </li>
          <li>
            <span className="font-medium">Task-specific fine-tuning</span>:
            apply LoRA/QLoRA adapters on open models for classification (intent,
            sentiment), entity extraction, and dialog policy selection. Use
            experiment tracking (Weights & Biases, MLflow) to compare variants.
          </li>
          <li>
            <span className="font-medium">Voice interface</span>: integrate
            streaming ASR (Whisper streaming, Vosk) and TTS engines (Coqui TTS,
            ElevenLabs, Azure Neural Voices). For responsiveness, run TTS on a
            background thread and prefetch SSML variations.
          </li>
        </ul>
        <h3 className="mt-5 text-base font-semibold text-zinc-900">
          Guardrails & safety
        </h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            Wrap model calls with input/output validation using JSON Schema,
            Rebuff, or GuardrailsAI. Reject or redact sensitive data (PII,
            credentials) before prompts are assembled.
          </li>
          <li>
            Maintain allow/deny lists for OS-level actions. Require explicit
            user confirmation for destructive operations, and implement secure
            credential storage via OS keychains.
          </li>
          <li>
            Continuously evaluate hallucination risk via automated tests
            (TruthfulQA style), user feedback scoring, and human-in-the-loop
            review for high-impact workflows.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-management",
    title: "Data, Knowledge & Context Management",
    description:
      "Design pipelines that keep the assistant’s knowledge current while respecting privacy and data minimization principles.",
    body: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            Create ingestion connectors (IMAP, Google Drive, Notion API, Slack)
            that normalize metadata, enforce access control, and tag content by
            topic, priority, and recency.
          </li>
          <li>
            Use incremental ETL jobs (Airflow, Temporal, Dagster) to refresh
            embeddings and prune stale content. Track lineage so conversations
            can cite data sources.
          </li>
          <li>
            Store conversation transcripts with differential privacy and apply
            retention policies. Offer local-only mode where embeddings stay on
            device and remote services are optional.
          </li>
          <li>
            Implement context distillation: summarize long histories into
            episodic memory, maintain per-user preference vectors, and surface
            the top-k relevant memories for each request.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "hardware",
    title: "Hardware & Runtime Requirements",
    description:
      "Size the hardware to support low-latency inference, vector search, and concurrent integrations while remaining portable.",
    body: (
      <>
        <table className="w-full overflow-hidden rounded-xl border border-zinc-200 text-sm">
          <thead className="bg-zinc-100 text-left text-xs uppercase tracking-wide text-zinc-600">
            <tr>
              <th className="px-4 py-3">Tier</th>
              <th className="px-4 py-3">CPU / GPU</th>
              <th className="px-4 py-3">Memory & Storage</th>
              <th className="px-4 py-3">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 text-zinc-700">
            <tr>
              <td className="px-4 py-3 font-semibold text-zinc-900">
                Minimum Dev
              </td>
              <td className="px-4 py-3">
                8-core CPU, integrated GPU. Optional eGPU for testing.
              </td>
              <td className="px-4 py-3">
                16 GB RAM, 512 GB NVMe SSD. Local vector DB in Docker volume.
              </td>
              <td className="px-4 py-3">
                UI prototyping, cloud-hosted model calls, light automation.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-zinc-900">
                Recommended
              </td>
              <td className="px-4 py-3">
                12+ core CPU, RTX 4070 / Radeon 6800M with 12 GB VRAM.
              </td>
              <td className="px-4 py-3">
                32 GB RAM, 1 TB NVMe, Wi-Fi 6E. Dual boot or WSL2 on Windows.
              </td>
              <td className="px-4 py-3">
                Local inference for 7B–13B parameter models, parallel speech
                pipelines, faster experimentation.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-zinc-900">
                Power User
              </td>
              <td className="px-4 py-3">
                Desktop-class CPU, dual GPU (4090 + 4080) or Apple M3 Max.
              </td>
              <td className="px-4 py-3">
                64 GB RAM, 2 TB NVMe + NAS backup, on-device TPU/NPUs when
                available.
              </td>
              <td className="px-4 py-3">
                Real-time multimodal inference, complex automation with
                simulation loops, fine-tuning on-device.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-sm text-zinc-700">
          Prioritize quiet cooling, long battery life, and microphone array
          quality. External wake-word microphones or bone-conduction headsets
          improve far-field recognition. Keep USB-C hubs for sensor expansion
          (BLE, Zigbee, camera feeds) during prototyping.
        </p>
      </>
    ),
  },
  {
    id: "development-workflow",
    title: "Development Workflow & Toolchain",
    description:
      "Adopt engineering practices that support rapid iteration while maintaining stability across orchestration and ML components.",
    body: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            Use monorepo tooling (Turborepo, Nx) to share types and SDKs between
            the Electron shell, Next.js UI, and Node/Python services. Enforce
            isolated Docker dev containers using VS Code Dev Containers or
            JetBrains Gateway.
          </li>
          <li>
            Implement CI pipelines that run unit tests, smoke E2E scenarios, lint
            checks, and packaging scripts. For ML, schedule nightly evaluation
            suites that benchmark accuracy, latency, and cost against baselines.
          </li>
          <li>
            Integrate feature telemetry (PostHog, Amplitude) with privacy
            controls to understand assistant adoption, fallback rates, and
            automation success.
          </li>
          <li>
            Maintain a capability registry describing each skill&apos;s contract
            (inputs, outputs, safety rules). Autogenerate developer docs and SDK
            stubs from this schema.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "testing",
    title: "Testing, Evaluation & Continuous Improvement",
    description:
      "Combine automated checks with human feedback loops to measure quality, safety, and productivity uplift.",
    body: (
      <>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Automated Evaluations
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>
                Unit tests for parsers, intent classifiers, and tool adapters.
              </li>
              <li>
                Contract tests for each skill API using Mock Service Worker or
                Pact to ensure schema compatibility.
              </li>
              <li>
                Scenario-based LLM evaluations (LangSmith, Evals, Promptfoo) to
                score accuracy, robustness, and tone.
              </li>
              <li>
                Latency & throughput benchmarks with Artillery or k6 on
                orchestrator endpoints.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Human-in-the-loop
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>
                Collect structured user feedback after each task (thumbs
                up/down, confidence slider) and feed it into active learning
                loops.
              </li>
              <li>
                Run weekly usability sessions to validate UX, latency perception,
                and voice interaction ergonomics.
              </li>
              <li>
                Maintain a red-team playbook covering prompt injection, social
                engineering, and misuse scenarios.
              </li>
              <li>
                Track regression dashboards (Datadog, Grafana) with SLOs for
                availability, accuracy, and automation completion.
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-700">
          Embrace continuous improvement: capture failure cases, generate
          synthetic variants, retrain models, and deploy behind canary flags
          before rolling out broadly. Automate release notes that highlight new
          skills and known limitations for power users.
        </p>
      </>
    ),
  },
  {
    id: "customization",
    title: "Personalization & Extensibility",
    description:
      "Allow advanced users to tailor capabilities, behaviors, and integrations without compromising stability or security.",
    body: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            Provide a declarative configuration schema (YAML/JSON) for user
            preferences—speech persona, automation schedules, privacy level,
            notification style. Validate configs against JSON Schema on load.
          </li>
          <li>
            Ship a plugin SDK: expose TypeScript and Python templates with clear
            auth flows, sandboxed execution (Deno, WebAssembly, or subprocess
            jail), and manifest metadata so the assistant can describe available
            tools dynamically.
          </li>
          <li>
            Support custom prompt profiles (“professional”, “casual”,
            “debug-mode”) alongside user-trainable memories for vocabulary,
            contacts, and routines.
          </li>
          <li>
            Allow macro recording: capture a user’s manual steps (keyboard,
            shell, API calls), convert them into reusable workflows, and
            parameterize them with natural language templates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "challenges",
    title: "Challenges & Risk Mitigation",
    description:
      "Anticipate obstacles from technical complexity, data quality, and user trust to maintain momentum.",
    body: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            <span className="font-medium">Latency vs. accuracy trade-offs</span>:
            implement adaptive computation—use small local models for intent
            triage and escalate to larger models only when needed.
          </li>
          <li>
            <span className="font-medium">Integration fragility</span>: version
            lock external APIs, wrap automation in retries with circuit breakers,
            and monitor for UI changes if you automate GUIs (Playwright, RPA
            tools).
          </li>
          <li>
            <span className="font-medium">Data drift</span>: schedule periodic
            re-indexing, monitor embedding quality, and alert on sharp drops in
            retrieval precision or model accuracy.
          </li>
          <li>
            <span className="font-medium">Security & privacy</span>: enforce
            least-privilege credentials, hardware-backed key storage, encrypted
            local databases, and audit logging. Offer transparency reports so
            users understand why actions were taken.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "next-steps",
    title: "Implementation Roadmap",
    description:
      "Sequence the build into pragmatic phases that deliver value early while enabling long-term sophistication.",
    body: (
      <>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            <span className="font-semibold text-zinc-900">Foundation (Weeks 1–3)</span>:
            set up repository, CI, telemetry, base Next.js dashboard, gateway
            API, and hosted LLM integration.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Core Assistant (Weeks 4–8)</span>:
            implement intent classifier, conversation memory, top skills (email,
            calendar, file search), baseline ASR/TTS, and initial evaluation
            harness.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Intelligence Boost (Weeks 9–14)</span>:
            add RAG, local model fallback, fine-tuned classifiers, multi-step
            planning, and plugin beta.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Polish & Personalization (Weeks 15+)</span>:
            refine UX, expand automation library, harden security, enrich
            customization controls, and prepare for broader adoption.
          </li>
        </ol>
        <p className="mt-4 text-sm text-zinc-700">
          Treat these phases as iterative loops; continuously capture user
          feedback, run post-mortems on failures, and evolve metrics as the
          assistant matures.
        </p>
      </>
    ),
  },
];

const quickHighlights = [
  {
    label: "Core Stack",
    value: "Next.js · Electron · Node · Python · PostgreSQL · Vector DB",
  },
  {
    label: "ML Toolkit",
    value: "Whisper · OpenAI/Anthropic · LoRA fine-tuning · LangSmith · W&B",
  },
  {
    label: "Dev Focus",
    value: "Safety, latency, observability, personalization-first workflows",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <header
          id="top"
          className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/50"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            AI Development Playbook
          </p>
          <h1 className="mt-4 text-4xl font-bold text-zinc-900 md:text-5xl">
            Building a Jarvis-like AI Assistant for Your Laptop
          </h1>
          <p className="mt-6 text-lg leading-7 text-zinc-600">
            A pragmatic blueprint for crafting an extensible, privacy-aware
            assistant that combines natural language understanding, workflow
            automation, and personalized intelligence across your computing
            environment.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {quickHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm text-indigo-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <nav
          aria-label="Table of contents"
          className="sticky top-4 z-10 mt-12 rounded-3xl border border-zinc-200 bg-white/80 p-6 backdrop-blur md:top-6"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Contents
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-zinc-600 md:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group inline-flex w-full items-start gap-2 rounded-xl border border-transparent px-3 py-2 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <span className="text-indigo-400">#</span>
                  <span className="font-medium">{section.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="mt-10 space-y-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/40"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
                    {section.description}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-zinc-900">
                    {section.title}
                  </h2>
                </div>
                <a
                  href="#top"
                  className="hidden text-sm font-medium text-indigo-500 transition hover:text-indigo-700 md:inline-flex"
                >
                  Back to top
                </a>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-700">
                {section.body}
              </div>
              <div className="mt-8 flex items-center justify-end">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-500 transition hover:text-indigo-700 md:hidden"
                >
                  <span aria-hidden>↑</span>
                  Top
                </a>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
