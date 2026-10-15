
import { useMemo, useState } from "react";
import { categories, services, salonInfo } from "./data/menu";
import "./App.css";

function formatPrice(price) {
  return price == null
    ? "Enquire for price"
    : `₹${price.toLocaleString("en-IN")}`;
}

function makeWhatsAppUrl(serviceName) {
  const number = salonInfo.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;

  const message =
    `Hi ${salonInfo.fullName}! I'd like to enquire about ` +
    `${serviceName}. Please share the details and available appointment slots.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "all" ||
        service.category === activeCategory;

      const matchesSearch =
        service.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function bookService(serviceName) {
    const url = makeWhatsAppUrl(serviceName);

    if (!url) {
      alert(
        "WhatsApp booking number abhi add nahi hua hai. " +
        "Salon owner se number confirm karein."
      );
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">S&S</span>
          <span>
            <strong>SILK & SOFT</strong>
            <small>BEAUTY SALON</small>
          </span>
        </a>
        <a className="nav-link" href="#menu">OUR MENU ↗</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              BEAUTY · CARE · CONFIDENCE
            </span>

            <h1>
              Your Beauty,<br />
              <em>Your Signature.</em>
            </h1>

            <p>
              Discover your favourite treatments, explore
              our menu and enquire about your next visit.
            </p>

            <a className="gold-button" href="#menu">
              EXPLORE THE MENU <span>↓</span>
            </a>

            <div className="hero-location">
              <span className="gold-dot" />
              {salonInfo.city}, India
            </div>
          </div>

          <div className="hero-art" aria-label="Luxury salon decoration">
            <div className="art-frame">
              <div className="art-inner">
                <span className="art-spark">✳</span>
                <span className="art-title">THE ART OF</span>
                <span className="art-script">Beauty</span>
                <span className="art-bottom">
                  FEEL BEAUTIFUL. BE YOU.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro">
          <span className="eyebrow">A LITTLE SELF-CARE</span>
          <h2>Make time for <em>yourself.</em></h2>
          <p>
            From everyday essentials to special occasions,
            find the service that feels right for you.
          </p>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE SALON MENU</span>
              <h2>Our <em>Services</em></h2>
            </div>
            <span className="service-count">
              {filteredServices.length} SERVICES
            </span>
          </div>

          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search hair spa, facial, makeup..."
              aria-label="Search salon services"
            />
          </label>

          <div className="category-tabs" aria-label="Filter services">
            <button
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => setActiveCategory("all")}
            >
              All Services
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                className={
                  activeCategory === category.id ? "active" : ""
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {categories
            .filter((category) =>
              activeCategory === "all"
                ? true
                : category.id === activeCategory
            )
            .map((category) => {
              const items = filteredServices.filter(
                (service) => service.category === category.id
              );

              if (items.length === 0) return null;

              return (
                <div className="category-block" key={category.id}>
                  <div className="category-heading">
                    <div>
                      <h3>{category.name}</h3>
                      <p>{category.subtitle}</p>
                    </div>
                    <span>✳</span>
                  </div>

                  <div className="service-grid">
                    {items.map((service) => (
                      <article
                        className="service-card"
                        key={service.id}
                      >
                        <div className="service-top">
                          <span className="service-number">
                            {String(service.id).padStart(2, "0")}
                          </span>
                          <span className="service-star">✧</span>
                        </div>

                        <h4>{service.name}</h4>
                        <p className="service-note">
                          {service.note}
                        </p>

                        <div className="service-bottom">
                          <strong>{formatPrice(service.price)}</strong>
                          <button
                            className="book-button"
                            onClick={() => bookService(service.name)}
                          >
                            ENQUIRE ↗
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}

          {filteredServices.length === 0 && (
            <div className="empty-state">
              <h3>No services found</h3>
              <p>Try another service name or category.</p>
              <button
                className="book-button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </section>

        <section className="booking-banner">
          <span className="eyebrow">YOUR NEXT SELF-CARE MOMENT</span>
          <h2>Ready to feel <em>beautiful?</em></h2>
          <p>
            Contact our salon to ask about services,
            prices and available appointment slots.
          </p>
          <button
            className="gold-button"
            onClick={() => bookService("a salon appointment")}
          >
            ENQUIRE ON WHATSAPP ↗
          </button>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">S&S</span>
          <span>
            <strong>SILK & SOFT</strong>
            <small>BEAUTY SALON</small>
          </span>
        </a>
        <p>{salonInfo.fullName} · {salonInfo.city}</p>
        <span className="copyright">
          © {new Date().getFullYear()} Silk & Soft Beauty Salon
        </span>
      </footer>

      <button
        className="floating-book"
        onClick={() => bookService("a salon appointment")}
        aria-label="Enquire about a salon appointment"
      >
        <span>↗</span> BOOK / ENQUIRE
      </button>
    </div>
  );
}
