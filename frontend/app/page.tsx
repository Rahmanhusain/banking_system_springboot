import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  ArrowRight,
  CreditCard,
  TrendingUp,
  Lock,
  CircleCheck,
} from "lucide-react";

// ─── Navigation ────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900">
            <span className="text-xs font-bold text-white">V</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Vyns
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
            How it works
          </a>
          <a href="#api" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
            API
          </a>
          <a href="#security" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
            Security
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Sign in
          </Button>
          <Button size="sm">Open account</Button>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center lg:py-32">
      <Badge variant="secondary" className="mb-6 border border-slate-200 bg-slate-50 text-slate-700">
        Built for reliability and scale
      </Badge>

      <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
        Banking infrastructure
        <br />
        <span className="text-slate-400">that just works.</span>
      </h1>

      <p className="mb-10 max-w-xl text-lg text-slate-500">
        Open accounts, accept deposits, process withdrawals, and monitor balances — all through a
        single, secure API. Everything your product needs to move money.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button size="lg" className="px-8">
          Open an account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          View API docs
        </Button>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
        <span className="flex items-center gap-1.5">
          <CircleCheck className="h-4 w-4 text-slate-500" />
          SOC 2 compliant
        </span>
        <span className="flex items-center gap-1.5">
          <CircleCheck className="h-4 w-4 text-slate-500" />
          256-bit encryption
        </span>
        <span className="flex items-center gap-1.5">
          <CircleCheck className="h-4 w-4 text-slate-500" />
          99.9% uptime SLA
        </span>
        <span className="flex items-center gap-1.5">
          <CircleCheck className="h-4 w-4 text-slate-500" />
          Real-time processing
        </span>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "10M+", label: "Transactions processed" },
    { value: "99.9%", label: "Platform uptime" },
    { value: "<50ms", label: "Avg. API response" },
    { value: "256-bit", label: "AES encryption" },
  ];
  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center py-4">
            <span className="text-3xl font-bold text-slate-900">{s.value}</span>
            <span className="mt-1 text-sm text-slate-500">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Account management",
      description:
        "Open and manage bank accounts programmatically. Each account is uniquely identified, fully auditable, and ready in seconds.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Deposits & withdrawals",
      description:
        "Accept incoming funds and process outgoing transfers with real-time balance updates and full transaction history.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Balance monitoring",
      description:
        "Query live account balances at any point. Build dashboards, alerts, and automated workflows on top of accurate financial data.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Instant processing",
      description:
        "All operations are processed synchronously with sub-second latency, so your customers always see accurate, up-to-date information.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Validation & safety",
      description:
        "Built-in input validation prevents overdrafts and invalid operations before they reach the database, keeping your books clean.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Enterprise security",
      description:
        "End-to-end encryption, parameterised queries, and strict access controls protect every transaction from creation to settlement.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <Badge variant="secondary" className="mb-4 border border-slate-200 bg-slate-50 text-slate-700">
          Platform features
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Everything you need to bank
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-500">
          A focused set of primitives that cover the core of any banking workflow — nothing
          bloated, nothing missing.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="border-slate-200 shadow-none transition-shadow hover:shadow-sm">
            <CardHeader>
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700">
                {f.icon}
              </div>
              <CardTitle className="text-base">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {f.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// ─── How it works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create an account",
      description:
        "POST a single request with the account holder name. Receive back a unique account ID and an initial zero balance — ready for use immediately.",
      endpoint: "POST /api/accounts/createaccount",
    },
    {
      step: "02",
      title: "Fund the account",
      description:
        "Deposit any amount into the account by sending the account ID and the deposit value. The balance is updated atomically and returned in the response.",
      endpoint: "PUT /api/accounts/{id}/deposit",
    },
    {
      step: "03",
      title: "Manage & transact",
      description:
        "Withdraw funds, query the current balance, or retrieve full account details at any time. Every operation is validated and reflected instantly.",
      endpoint: "GET /api/accounts/checkbalance/{id}",
    },
  ];

  return (
    <section id="how-it-works" className="border-y border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <Badge variant="secondary" className="mb-4 border border-slate-200 bg-white text-slate-700">
            Integration guide
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Up and running in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Three straightforward API calls are all it takes to go from zero to a fully operational
            banking workflow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-white">
                <span className="text-xs font-bold text-slate-900">{s.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </div>
              <code className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-700">
                {s.endpoint}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── API Section ───────────────────────────────────────────────────────────────
function ApiSection() {
  const endpoints = [
    { method: "POST", path: "/api/accounts/createaccount", desc: "Open a new account" },
    { method: "GET",  path: "/api/accounts/{id}",          desc: "Retrieve account details" },
    { method: "PUT",  path: "/api/accounts/{id}/deposit",  desc: "Deposit funds" },
    { method: "PUT",  path: "/api/accounts/{id}/withdraw", desc: "Withdraw funds" },
    { method: "GET",  path: "/api/accounts/checkbalance/{id}", desc: "Check live balance" },
  ];

  const methodColor: Record<string, string> = {
    GET:  "bg-blue-50 text-blue-700 border-blue-200",
    POST: "bg-green-50 text-green-700 border-green-200",
    PUT:  "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <section id="api" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge variant="secondary" className="mb-4 border border-slate-200 bg-slate-50 text-slate-700">
            REST API
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
            Clean endpoints,
            <br />
            predictable responses.
          </h2>
          <p className="mb-6 text-slate-500">
            Every endpoint follows REST conventions and returns consistent JSON. No surprises, no
            proprietary formats — integrate with any language or framework in minutes.
          </p>
          <Button variant="outline">
            Read the docs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col gap-3">
            {endpoints.map((ep) => (
              <div
                key={ep.path}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
              >
                <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-xs font-semibold ${methodColor[ep.method]}`}>
                  {ep.method}
                </span>
                <code className="flex-1 truncate font-mono text-xs text-slate-700">{ep.path}</code>
                <span className="hidden text-xs text-slate-400 sm:block">{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Security Section ──────────────────────────────────────────────────────────
function Security() {
  const items = [
    {
      title: "Data encryption at rest & in transit",
      description: "All account data is encrypted with AES-256 at rest. Every API call travels over TLS 1.3.",
    },
    {
      title: "Transactional integrity",
      description: "Database operations are wrapped in ACID transactions, eliminating partial updates and phantom reads.",
    },
    {
      title: "Input validation on every request",
      description: "Server-side Bean Validation rejects malformed input before it reaches the business layer.",
    },
    {
      title: "Overdraft prevention",
      description: "Withdrawal logic enforces balance checks atomically, making overdrafts structurally impossible.",
    },
  ];

  return (
    <section id="security" className="border-t border-slate-100 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <Badge className="mb-4 border border-slate-700 bg-slate-800 text-slate-300">
            Security
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Built secure by default.</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Security is not a feature — it is the foundation. Every layer of the platform is
            designed to keep your funds and data safe.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-800/50 p-6">
              <ShieldCheck className="mb-3 h-5 w-5 text-slate-400" />
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
        Ready to get started?
      </h2>
      <p className="mx-auto mb-10 max-w-lg text-slate-500">
        Open your first account in under a minute and start moving money with confidence.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" className="px-10">
          Open an account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          View API reference
        </Button>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900">
                <span className="text-xs font-bold text-white">V</span>
              </div>
              <span className="font-semibold text-slate-900">Vyns Banking</span>
            </div>
            <p className="max-w-xs text-sm text-slate-500">
              Modern banking infrastructure built on Spring Boot and PostgreSQL.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm text-slate-500">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#api" className="hover:text-slate-900">API reference</a>
            <a href="#how-it-works" className="hover:text-slate-900">How it works</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Vyns Banking. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <ApiSection />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
