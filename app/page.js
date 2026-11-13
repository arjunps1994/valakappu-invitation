import Countdown from "./Countdown";
import Gate from "./Gate";

const PHONE = "91XXXXXXXXXX"; // TODO: your WhatsApp number, country code + number, no + or spaces
const PLACE = "Heritage 1866, Melur, Thalassery, Kannur, Kerala";
const Q = encodeURIComponent("Heritage 1866 Melur Thalassery Kannur");

const rsvp = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Arju, I'll be attending Juhi's Valakappu on 5 Dec.")}`;
const cal = "https://calendar.google.com/calendar/render?" + new URLSearchParams({
  action: "TEMPLATE",
  text: "Valakappu - Arju & Juhi",
  dates: "20261205T143000/20261205T203000",
  ctz: "Asia/Kolkata",
  location: PLACE,
});

export default function Page() {
  return (
    <main>
      <Gate hero={<>
        <p className="eyebrow rise" style={{ "--d": "0s" }}>You are invited to</p>
        <h1 className="ml rise" lang="ml" style={{ "--d": ".15s" }}>ജൂഹിയുടെ<br />വളകാപ്പ്</h1>
        <p className="when rise" style={{ "--d": ".5s" }}>
          5 December 2026<span>2:30 PM to 8:30 PM</span>
        </p>
      </>}>
      <div className="details">
      <p className="names">Arju <em>&amp;</em> Juhi</p>
      <Countdown />

      <div className="cards">
      <section className="card">
        <h2>When</h2>
        <p className="big">Saturday, 5 December 2026</p>
        <p>2:30 PM to 8:30 PM</p>
        <a className="btn ghost" href={cal} target="_blank" rel="noopener noreferrer">Add to Calendar</a>
      </section>

      <section className="card">
        <h2>Dress Code</h2>
        <p>It would be nice if you can come in traditional attire.</p>
        <div className="attire">
          <div><span aria-hidden="true">🥻</span><b>Ladies</b><p>Saree / Dhawani</p></div>
          <div><span aria-hidden="true">👘</span><b>Gents</b><p>Kurta / Shirt with Mundu</p></div>
        </div>
      </section>

      <section className="card wide">
        <h2>Where</h2>
        <p className="big">Heritage 1866</p>
        <p>Melur, Thalassery, Kannur, Kerala</p>
        <iframe
          title="Map showing Heritage 1866, Melur, Thalassery"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${Q}&output=embed`}
        />
        <a className="btn" href={`https://www.google.com/maps/search/?api=1&query=${Q}`} target="_blank" rel="noopener noreferrer">Get Directions</a>
      </section>

      <section className="card wide">
        <h2>RSVP</h2>
        <p>Do let us know you&apos;re joining us.</p>
        <a className="btn" href={rsvp} target="_blank" rel="noopener noreferrer">RSVP on WhatsApp</a>
      </section>
      </div>

      <footer>With love, Arju &amp; Juhi</footer>
      </div>
      </Gate>
    </main>
  );
}
