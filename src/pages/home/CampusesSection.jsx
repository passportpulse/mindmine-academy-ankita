import "../../styles/home/campuses-section.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const campuses = [
  {
    type: "main",
    tag: "Main Campus",
    title: "Howrah Main Campus",
    address:
      "Mindmine Academy, Near Ghoraghata Railway Station, Bagnan, Howrah – 711303",
    phone: "7595077569 / 6289086116",
    map: "https://www.google.com/maps?q=Bagnan+Howrah&output=embed",
  },
  {
    type: "city",
    tag: "City Campus",
    title: "Kolkata City Campus",
    address: "52A Indian Mirror Street, 1st Floor, Kolkata – 700013",
    phone: "7595077567 / 7605057139",
    map: "https://www.google.com/maps?q=Indian+Mirror+Street+Kolkata&output=embed",
  },
  {
    type: "south",
    tag: "South Campus",
    title: "Kolkata South Campus",
    address: "64 James Long Sarani, Bakshipally Joka, Kolkata – 700104",
    phone: "7595077566 / 7605057138",
    map: "https://www.google.com/maps?q=James+Long+Sarani+Joka&output=embed",
    highlight: true,
  },
];

export default function CampusesSection() {
  return (
    <section className="campus-section">
      <div className="container">
        <p className="section-title">Our Campuses</p>
        <h2 className="section-subtitle">
          Three campuses across West Bengal offering the best skill-based
          education
        </h2>

        <div className="campus-grid">
          {campuses.map((campus, index) => (
            <div
              className={`campus-card campus-${campus.type} ${
                campus.highlight ? "campus-highlight" : ""
              }`}
              key={index}
            >
              <span className="campus-tag">{campus.tag}</span>

              <h3>{campus.title}</h3>

              <p className="campus-address">
                <FaMapMarkerAlt /> {campus.address}
              </p>

              <p className="campus-phone">
                <FaPhoneAlt /> {campus.phone}
              </p>

              <div className="campus-map">
                <iframe
                  src={campus.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a
                href={campus.map}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                View on Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
