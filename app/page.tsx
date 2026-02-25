// app/page.tsx
import React from "react";

const BRAND = {
  // Þú getur bara breytt þessum
  primary: "#3FA1A2", // Hugvit teal
  navy: "#102337",    // Deep blue
  ink: "#0B1220",
  bg: "#F7FAFB",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-black/70 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 text-sm font-semibold tracking-wide text-black/60">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-black/70">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.02]">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-black/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Icon({ label }: { label: string }) {
  // Simple inline icon placeholder (no dependencies)
  return (
    <svg
      aria-label={label}
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2v20" opacity="0.2" />
      <path d="M5 7h14M5 17h14" />
      <path d="M7 12h10" />
    </svg>
  );
}

export default function Page() {
  return (
    <main style={{ background: BRAND.bg }}>
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl"
              style={{ background: BRAND.primary }}
              aria-hidden="true"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-black">Hugvit</div>
              <div className="text-xs text-black/60">GoPro fyrir stéttarfélög</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
            <a href="#lausn" className="hover:text-black">
              Lausnin
            </a>
            <a href="#innleiding" className="hover:text-black">
              Innleiðing
            </a>
            <a href="#tryggt" className="hover:text-black">
              Öryggi
            </a>
            <a href="#hafasamband" className="hover:text-black">
              Hafa samband
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#hafasamband"
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/[0.02]"
            >
              Bóka vinnustofu
            </a>
            <a
              href="#hafasamband"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ background: BRAND.navy }}
            >
              Fá kynningu
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Chip>Stjórnun mála & skjala</Chip>
              <Chip>Samningar</Chip>
              <Chip>Betri leit & yfirsýn</Chip>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              GoPro fyrir stéttarfélög —{" "}
              <span style={{ color: BRAND.primary }}>
                einfaldari skráning, betri nýting
              </span>{" "}
              og skýr rekjanleiki
            </h1>

            <p className="mt-5 text-base leading-7 text-black/70">
              Markmiðið er að kerfið vinni meira fyrir ykkur: gögn skráð á réttan
              hátt, leitin virki betur og vinnuflæði verði einfaldara.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#hafasamband"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ background: BRAND.navy }}
              >
                Bóka 60–90 mín vinnustofu
              </a>
              <a
                href="#lausn"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm hover:bg-black/[0.02]"
              >
                Sjá hvað við myndum bæta
              </a>
            </div>

            <div className="mt-6 text-xs text-black/55">
              * Hentar vel sem “campaign” síða og leiðir svo yfir á hugvit.is / gopro.net
              eftir þörfum.
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: BRAND.navy }}
            >
              <div className="text-sm font-semibold text-white/80">
                Hvað fáið þið út úr þessu?
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                <li className="flex gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: BRAND.primary }}
                  />
                  Betri leit (með réttri skráningu og metadata)
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: BRAND.primary }}
                  />
                  Skýrari yfirsýn yfir mál, stöður og ábyrgð
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: BRAND.primary }}
                  />
                  Minni handavinna með sniðmátum og staðlaðri skráningu
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: BRAND.primary }}
                  />
                  Traust og rekjanleiki (aðgangsstýringar + audit trail)
                </li>
              </ul>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                <div className="text-sm font-semibold text-black">
                  Hraður ávinningur
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Oft sjáum við mun á leit og yfirsýn strax þegar skráning er
                  samræmd.
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                <div className="text-sm font-semibold text-black">
                  Skalanlegt
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Sömu meginreglur virka fyrir nefndir, samninga, mál og skjöl.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="lausn" className="mx-auto max-w-6xl px-5 py-14">
        <SectionTitle
          eyebrow="Hvað við myndum vinna með"
          title="Stutt greining + skýr skráning = betri nýting"
          subtitle="Við komum með ráðgjafa og förum yfir núverandi notkun, hvað þarf að samræma og hvað skilar mestum ávinningi."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card
            title="Skráning & metadata"
            desc="Samræmd skráning tryggir að gögn nýtist í leit, flokkun, yfirsýn og skýrslugerð."
            icon={<Icon label="Skráning" />}
          />
          <Card
            title="Leit & 'My Views'"
            desc="Setja upp leitarskilyrði, vistað yfirlit og skynsamlegar síur fyrir mismunandi hlutverk."
            icon={<Icon label="Leit" />}
          />
          <Card
            title="Málaflæði & stöður"
            desc="Skilgreina ábyrgðir, stöður og einfalt flæði sem passar ykkar verklagi."
            icon={<Icon label="Flæði" />}
          />
          <Card
            title="Samningar & rekjanleiki"
            desc="Sniðmát, útgáfustýring, aðgangsstýringar og skýr saga breytinga."
            icon={<Icon label="Samningar" />}
          />
        </div>
      </section>

      {/* Implementation */}
      <section id="innleiding" className="mx-auto max-w-6xl px-5 py-14">
        <SectionTitle
          eyebrow="Hvernig þetta fer fram"
          title="1–2 klst vinnustofa og síðan skýr næstu skref"
          subtitle="Eftir vinnustofuna fáið þið samantekt og tillögu að útfærslu."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Staða í dag",
              desc: "Hvernig er GoPro notað og hvað pirrar mest?",
            },
            {
              step: "02",
              title: "Skýr markmið",
              desc: "Hvað viljið þið fá út úr lausninni næstu 3–6 mánuði?",
            },
            {
              step: "03",
              title: "Skráning sem virkar",
              desc: "Samræming á skráningu + tillögur að viðmiðum.",
            },
            {
              step: "04",
              title: "Útfærsla",
              desc: "Tillaga að stillingum, ferlum, þjálfun og tímalínu.",
            },
          ].map((x) => (
            <div
              key={x.step}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold" style={{ color: BRAND.primary }}>
                {x.step}
              </div>
              <div className="mt-2 text-base font-semibold text-black">{x.title}</div>
              <div className="mt-2 text-sm leading-6 text-black/70">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust / Security */}
      <section id="tryggt" className="mx-auto max-w-6xl px-5 py-14">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-black">
                Traust, öryggi og rekjanleiki
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/70">
                Kerfisleiga og rekstur eru studd af vottuðu upplýsingaöryggisstjórnkerfi
                samkvæmt ISO 27001 og daglegum öryggisafritum (aðlagað eftir samningi).
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>ISO 27001</Chip>
                <Chip>Dagleg afrit</Chip>
                <Chip>Aðgangsstýringar</Chip>
                <Chip>Rekjanleiki</Chip>
              </div>
            </div>

            <div className="rounded-2xl p-6 text-white" style={{ background: BRAND.navy }}>
              <div className="text-sm font-semibold text-white/80">
                Algengar spurningar
              </div>
              <div className="mt-4 space-y-4 text-sm leading-6">
                <div>
                  <div className="font-semibold">Er þetta mikið verkefni?</div>
                  <div className="text-white/80">
                    Nei — við byrjum á stuttri vinnustofu og forgangsröðum ávinningi.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Getur þetta leitt inn á hugvit.is?</div>
                  <div className="text-white/80">
                    Já — þessi síða er entry point og CTA getur vísað á hugvit.is/gopro eða
                    sérsíður.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Getum við haft þetta á ykkar domain?</div>
                  <div className="text-white/80">
                    Já — t.d. go.hugvit.is með CNAME í DNS (ISNIC) yfir á Vercel.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="hafasamband" className="mx-auto max-w-6xl px-5 py-14 pb-20">
        <SectionTitle
          eyebrow="Næstu skref"
          title="Bóka vinnustofu eða fá kynningu"
          subtitle="Skildu eftir upplýsingar og við finnum tíma. (Hér geturðu tengt við Microsoft Forms / HubSpot / Mailchimp.)"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-black">Hafa samband</h3>
            <p className="mt-2 text-sm leading-6 text-black/70">
              Settu inn upplýsingar — eða skiptu þessu út fyrir embed af formi.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-black">Nafn</label>
                <input
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ boxShadow: "none" }}
                  placeholder="Fullt nafn"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-black">Stéttarfélag</label>
                <input
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                  placeholder="Heiti félags"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-black">Netfang</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                    placeholder="nafn@felag.is"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-black">Sími</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                    placeholder="123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Hvað viltu bæta?
                </label>
                <select className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2">
                  <option>Betri leit og yfirsýn</option>
                  <option>Samningar / útgáfustýring</option>
                  <option>Málaflæði og ábyrgðir</option>
                  <option>Öryggi / aðgangsstýringar</option>
                  <option>Annað</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ background: BRAND.navy }}
                onClick={() => alert("Tengdu þetta við form/CRM (t.d. Microsoft Forms eða HubSpot).")}
              >
                Senda fyrirspurn
              </button>

              <p className="text-xs text-black/55">
                * Þetta demo-form sendir ekki neitt. Ég get hjálpað þér að tengja við Microsoft Forms / HubSpot / Mailchimp.
              </p>
            </form>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-black">Viltu frekar hringja?</h3>
            <p className="mt-2 text-sm leading-6 text-black/70">
              Settu inn ykkar réttu upplýsingar hér (eða leyfðu mér að setja inn standard).
            </p>

            <div className="mt-6 space-y-4 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
              <div>
                <div className="text-sm font-semibold text-black">Netfang</div>
                <div className="mt-1 text-sm text-black/70">sala@hugvit.is</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">Sími</div>
                <div className="mt-1 text-sm text-black/70">560 3100</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">CTA</div>
                <div className="mt-1 text-sm text-black/70">
                  Þú getur líka sett “Bóka kynningu” link á Calendly / MS Bookings.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl p-6 text-white" style={{ background: BRAND.navy }}>
              <div className="text-sm font-semibold text-white/80">Ábending</div>
              <div className="mt-2 text-sm text-white/80 leading-6">
                Þegar þetta er live á Vercel: setjið þetta undir ykkar domain (t.d. go.hugvit.is) til að
                það líti ekki út eins og demo. Þá getur þú keyrt ads og email campaigns beint á þessa síðu.
              </div>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-12 max-w-6xl border-t border-black/10 px-5 pt-8 text-xs text-black/55">
          © {new Date().getFullYear()} Hugvit — GoPro fyrir stéttarfélög
        </footer>
      </section>
    </main>
  );
}
