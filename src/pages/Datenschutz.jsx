import { Typography, Box } from "@mui/material";
import Footer from "../components/Footer";

function Datenschutz() {
  return (
    <Box sx={{marginTop: "80px"}}>
      <Typography
        variant="h3"
        fontFamily="Segoe UI Symbol"
        color="secondary"
        align="center"
        marginBottom="50px"
      >
        Datenschutzerklärung
      </Typography>
      <Typography
        variant="h5"
        fontFamily="Segoe UI Symbol"
        color="secondary"
        align="center"
      >
        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <p>Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
        <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
Browsertyp und Browserversion verwendetes BetriebssystemReferrer URLHostname des zugreifenden Rechners Uhrzeit der Serveranfrage
Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.</p>
        <p>Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von http:// auf https:// wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p> 
         <p> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
         <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
        <p>Wir haben Google reCAPTCHA in Formularen auf unserer Webseite implementiert, um zu überprüfen, ob die in den Formularen eingegebenen Daten von menschlichen Besuchern stammen oder von Maschinen oder automatisierten Programmen, die auch als "Bots" bekannt sind. Dieses Tool analysiert automatisch das Verhalten der Webseitenbesucher, sobald sie mit der Webseite interagieren, unter Verwendung verschiedener Informationen wie IP-Adresse, Aufenthaltsdauer und Mausbewegungen. Die verarbeiteten Daten umfassen Nutzungsdaten wie die aufgerufene Webseite, Datum und Uhrzeit des Zugriffs und Mausbewegungen sowie Kommunikationsdaten wie IP-Adressen, Browsertyp und Betriebssystem. Diese Verarbeitung richtet sich an Webseitenbesucher und Nutzer von Online-Diensten. Der Hauptzweck dieser Verarbeitung besteht darin, den Missbrauch unseres Kontaktformulars zu verhindern und dadurch die Sicherheit zu erhöhen. </p>
      </Typography>
    </Box>
  );
}

export default Datenschutz;
