import ContactForm from "@/components/ContactForm";
import ProcessStep from "@/components/ProcessStep";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TechPill from "@/components/TechPill";

const services = [
  {
    title: "Web Application Development",
    description:
      "Custom web platforms built for speed, maintainability, and real business workflows.",
    points: [
      "SaaS dashboards, portals, and internal tools",
      "API-first architecture and database design",
      "Responsive interfaces with polished product UX",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feeling mobile experiences for customers, field teams, and connected devices.",
    points: [
      "iOS and Android product design",
      "Offline-first data flows and sync logic",
      "Push notifications, maps, media, and device features",
    ],
  },
  {
    title: "Electronic Prototyping",
    description:
      "Working hardware prototypes using Arduino, ESP8266, and ESP32 for IoT concepts.",
    points: [
      "Sensor boards, Wi-Fi modules, and control circuits",
      "Firmware sketches and communication tests",
      "Proof-of-concept builds for product validation",
    ],
  },
  {
    title: "Product Strategy & Delivery",
    description:
      "A practical path from idea to prototype, launch plan, and production-ready system.",
    points: [
      "MVP scope, roadmap, and technical architecture",
      "UX flows, visual direction, and interaction design",
      "Deployment, maintenance, and iteration support",
    ],
  },
];

const products = [
  {
    title: "Connected Prototype Kit",
    description:
      "A repeatable foundation for testing sensors, controls, telemetry, and cloud-connected workflows before investing in production hardware.",
    tags: ["Arduino", "ESP8266", "ESP32", "MQTT", "Dashboards"],
  },
  {
    title: "Field Operations App",
    description:
      "A mobile-first app concept for field teams that need checklists, media capture, GPS context, and reliable offline sync.",
    tags: ["Mobile", "Offline Sync", "GPS", "Media Capture"],
  },
  {
    title: "Media Automation Dashboard",
    description:
      "A web dashboard concept for managing campaigns, content queues, approvals, analytics, and operational reporting.",
    tags: ["Web App", "Analytics", "Workflow", "Admin Tools"],
  },
];

const process = [
  {
    title: "Discover the problem",
    description:
      "We clarify goals, users, constraints, and the technical risks that should be tested early.",
  },
  {
    title: "Prototype the experience",
    description:
      "We create clickable UI, hardware loops, or software spikes to validate the fastest path forward.",
  },
  {
    title: "Build the product",
    description:
      "We develop the web app, mobile app, firmware, or connected system with clean architecture.",
  },
  {
    title: "Launch and improve",
    description:
      "We deploy, monitor, refine, and extend the product as real users interact with it.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Firebase",
  "Arduino",
  "C / C++",
  "ESP8266",
  "ESP32",
  "Wi-Fi",
  "BLE",
  "MQTT",
  "Tailwind CSS",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden bg-[#f7fbff] text-slate-950">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-blue-300/35 blur-3xl motion-drift" />
        <div className="absolute right-[-10rem] top-[16rem] h-[30rem] w-[30rem] rounded-full bg-orange-300/30 blur-3xl motion-drift-delayed" />
        <div className="absolute bottom-[-14rem] left-[20%] h-[34rem] w-[34rem] rounded-full bg-sky-200/40 blur-3xl motion-drift-slow" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/70 shadow-sm shadow-blue-950/5 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a className="group flex items-center gap-3" href="#top">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-blue-950/20 transition group-hover:bg-orange-500">
              B1
            </span>
            <span className="leading-tight">
              <span className="block text-base font-bold tracking-tight text-slate-950">
                Base1
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Media & Tech
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-orange-600" href="#services">
              Services
            </a>
            <a className="transition hover:text-orange-600" href="#products">
              Products
            </a>
            <a className="transition hover:text-orange-600" href="#process">
              Process
            </a>
            <a className="transition hover:text-orange-600" href="#contact">
              Contact
            </a>
          </nav>

          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-500"
            href="#contact"
          >
            Start a project
          </a>
        </div>
      </header>

      <main className="scroll-mt-28" id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-28">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-2 text-sm font-bold text-blue-950 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Web, mobile, and connected product studio
            </div>
            <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Base1 builds{" "}
              <span className="text-gradient">products</span> that move between
              screens and the physical world.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Base1 Media & Tech creates web applications, mobile apps, and
              electronic prototypes with Arduino, ESP8266, and ESP32 for teams
              that need polished software and working hardware validation.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-bold text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-500"
                href="#contact"
              >
                Plan a build
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-blue-200/80 bg-white/70 px-7 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-600"
                href="#services"
              >
                Explore services
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <StatCard label="Delivery lanes" value="3" />
              <StatCard label="Prototype modes" value="IoT" />
              <StatCard label="Idea stage" value="0→1" />
            </div>
          </div>

          <div className="relative reveal delay-150">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-400/30 via-sky-200/20 to-orange-300/30 blur-2xl" />
            <div className="glass-panel motion-float rounded-[2.5rem] p-4 sm:p-6">
              <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-blue-950/30 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                      Base1 Launchpad
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                      Connected product dashboard
                    </h2>
                  </div>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">
                    Live demo
                  </span>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Web app</p>
                    <p className="mt-2 text-2xl font-bold">98%</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Mobile</p>
                    <p className="mt-2 text-2xl font-bold">24/7</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">ESP32</p>
                    <p className="mt-2 text-2xl font-bold">Online</p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-200">
                      Prototype signal
                    </p>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
                  </div>
                  <div className="space-y-3">
                    {[72, 54, 86, 64, 92, 78].map((level) => (
                      <div
                        className="h-3 overflow-hidden rounded-full bg-white/10"
                        key={level}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-300 to-orange-300"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Sensor telemetry
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Mobile notifications
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Admin dashboard
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Cloud sync
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-6 py-16 sm:px-8 lg:px-10" id="services">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              align="center"
              description="From interface design to firmware experiments, we combine the software and electronics work needed to prove and ship connected products."
              eyebrow="What we do"
              title="Products, apps, and prototypes under one roof."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard index={index} key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-6 py-16 sm:px-8 lg:px-10" id="products">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="reveal">
                <SectionHeading
                  align="left"
                  description="Base1 can shape repeatable product systems that start as prototypes and grow into deployable platforms."
                  eyebrow="Product systems"
                  title="Reusable concepts for modern teams."
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-1">
                {products.map((product) => (
                  <ProductCard key={product.title} {...product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-6 py-16 sm:px-8 lg:px-10" id="process">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              align="center"
              description="We keep the path practical: understand the goal, test the riskiest part, build the useful version, then improve it with real feedback."
              eyebrow="How we work"
              title="A focused path from idea to working product."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <ProcessStep index={index} key={step.title} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-6 py-16 sm:px-8 lg:px-10">
          <div className="glass-panel mx-auto max-w-7xl rounded-[2.5rem] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">
                  Technology
                </p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Software and electronics stacks that fit the product.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We choose tools based on the build: web apps, mobile apps,
                  firmware, sensors, connectivity, dashboards, and deployment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {stack.map((item) => (
                  <TechPill key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-6 py-20 sm:px-8 lg:px-10" id="contact">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="reveal">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">
                Contact
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Tell us what you want to build or prototype.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Share the product idea, app feature, device behavior, or
                automation challenge. Base1 Media & Tech can help turn it into a
                focused technical plan and working demonstration.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                  <p className="text-sm font-bold text-slate-950">Build</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Web and mobile product development.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                  <p className="text-sm font-bold text-slate-950">Connect</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Arduino, ESP8266, and ESP32 prototypes.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                  <p className="text-sm font-bold text-slate-950">Launch</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    MVPs, dashboards, and deployment paths.
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-50 flex gap-3">
        <a
          aria-label="Back to top"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/90 text-sm font-bold text-white shadow-xl shadow-blue-950/20 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-orange-500 sm:w-auto sm:px-5"
          href="#top"
          title="Back to top"
        >
          <span aria-hidden="true">↑</span>
          <span className="hidden sm:inline">Back to top</span>
        </a>

        <a
          aria-label="Chat with Base1 on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto sm:px-5"
          href="https://wa.me/2348033380055?text=Hi%20Base1%2C%20I%27d%20like%20to%20discuss%20a%20project."
          rel="noopener noreferrer"
          target="_blank"
          title="Chat on WhatsApp"
        >
          <span aria-hidden="true">WA</span>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      <footer className="border-t border-white/70 bg-white/50 px-6 py-8 backdrop-blur-xl sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Base1 Media & Tech. Built for web, mobile, and connected
            prototypes.
          </p>
          <div className="flex gap-5 font-semibold">
            <a className="transition hover:text-orange-600" href="#services">
              Services
            </a>
            <a className="transition hover:text-orange-600" href="#products">
              Products
            </a>
            <a className="transition hover:text-orange-600" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
