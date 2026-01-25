import "../../styles/student-zone/hero.css";

export default function Hero({title, description}) {
  return (
    <section className="student-hero">
      <div className="student-hero-content">
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </section>
  );
}
