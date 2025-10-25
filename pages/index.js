import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DVSFrech – Dienstleistungen · Vermietungen · Service</title>
        <meta
          name="description"
          content="DVSFrech – Vermietung von Event-Equipment. Seite im Aufbau. Mietanfragen per Telefon oder E-Mail."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HERO-BEREICH */}
      <header
        style={{
          minHeight: "70vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "48px 16px",
        }}
      >
        <img
          src="/dvsfrech-logo.png"
          alt="DVSFrech Logo"
          style={{
            width: "320px",
            maxWidth: "85%",
            height: "auto",
            marginBottom: 16,
          }}
        />
        <h1 style={{ margin: 0 }}>Willkommen bei DVSFrech</h1>
        <p style={{ opacity: 0.9, marginTop: 8 }}>
          Dienstleistungen · Vermietungen · Service
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 16,
          }}
        >
          <a href="tel:01712956950" style={btnPrimary}>
            Jetzt anrufen
          </a>
          <a href="mailto:info@dvsfrech.de" style={btnGhost}>
            E-Mail senden
          </a>
          <a
            href="https://www.kleinanzeigen.de/pro/dvsfrech"
            target="_blank"
            rel="noopener noreferrer"
            style={btnGhost}
          >
            Zum Webshop
          </a>
        </div>
      </header>

      {/* INFO-BEREICH */}
      <main
        style={{
          maxWidth: 900,
          margin: "40px auto 80px",
          padding: "0 16px",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.8,
        }}
      >
        <p>Unsere Internetseite befindet sich derzeit im Aufbau.</p>
        <p>
          Für Mietanfragen können Sie uns gerne telefonisch oder per E-Mail
          kontaktieren:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            📞 <strong>Telefon:</strong>{" "}
            <a href="tel:01712956950">0171&nbsp;2956950</a>
          </li>
          <li>
            📧 <strong>E-Mail:</strong>{" "}
            <a href="mailto:info@dvsfrech.de">info@dvsfrech.de</a>
          </li>
        </ul>
        <p style={{ marginTop: 8 }}>
          Alternativ können Sie weiterhin unseren Webshop über{" "}
          <a
            href="https://www.kleinanzeigen.de/pro/dvsfrech"
            target="_blank"
            rel="noopener noreferrer"
          >
            kleinanzeigen.de
          </a>{" "}
          nutzen.
        </p>
        <p>Ihr DVSFrech-Team</p>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "24px 16px",
          borderTop: "1px solid #eee",
        }}
      >
        <a href="/impressum" style={{ marginRight: 16 }}>
          Impressum
        </a>
        <a href="/kontakt">Kontakt</a>
      </footer>
    </>
  );
}

// BUTTON-STILE
const
