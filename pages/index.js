export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        marginTop: "100px",
        lineHeight: "1.8",
      }}
    >
      <h1>Willkommen bei DVSFrech</h1>
      <p>Unsere Internetseite befindet sich derzeit im Aufbau.</p>
      <p>
        Für Mietanfragen können Sie uns gerne telefonisch oder per E-Mail
        kontaktieren:
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          📞 <strong>Telefon:</strong>{" "}
          <a href="tel:01712956950">0171 2956950</a>
        </li>
        <li>
          📧 <strong>E-Mail:</strong>{" "}
          <a href="mailto:info@dvsfrech.de">info@dvsfrech.de</a>
        </li>
      </ul>
      <p>
        Alternativ können Sie auch weiterhin unseren Webshop über{" "}
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
    </div>
  );
}
