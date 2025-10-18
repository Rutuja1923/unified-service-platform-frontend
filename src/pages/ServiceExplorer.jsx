import React, { useState } from "react";

// Categories & emojis
const categories = [
  { name: "Few walls 🧱", img: "https://via.placeholder.com/80?text=Walls" },
  { name: "Bedroom 🛏️", img: "https://via.placeholder.com/80?text=Bedroom" },
  { name: "Living room 🛋️", img: "https://via.placeholder.com/80?text=Living" },
  { name: "Unfurnished 🏠", img: "https://via.placeholder.com/80?text=Unfurnished" },
  { name: "Furnished 🛋️🖼️", img: "https://via.placeholder.com/80?text=Furnished" },
  { name: "Kitchen 🍳", img: "https://via.placeholder.com/80?text=Kitchen" },
  { name: "Doors 🚪", img: "https://via.placeholder.com/80?text=Doors" },
  { name: "Waterproof 💧", img: "https://via.placeholder.com/80?text=Waterproof" },
  { name: "Add-on ➕", img: "https://via.placeholder.com/80?text=Add-on" },
];

// Dummy service generator
const dummyService = (title, emoji, price = 2999) => ({
  title: `${title} ${emoji}`,
  rating: "4.7 (200 reviews)",
  price: price,
  displayPrice: `₹${price}`,
  time: "8 hrs",
  img: "https://via.placeholder.com/120?text=Service",
  description: "This is a detailed description of the service. It includes all the key features and what you can expect.",
});

// Generate services per category
const services = categories.reduce((acc, cat) => {
  acc[cat.name] = [
    dummyService(cat.name, "🖌️", 2499),
    dummyService(cat.name, "🎨", 2999),
    dummyService(cat.name, "🛠️", 1999),
  ];
  return acc;
}, {});

export default function ServiceExplorer() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [cart, setCart] = useState([]);
  const [modalService, setModalService] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (service) => {
    setCart((prev) => [...prev, service]);
    setCartOpen(true);
  };
  const handleRemoveFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Inline styles
  const styles = {
    explorer: {
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: "20px",
      padding: "20px",
      fontFamily: "sans-serif",
      background: "#f7f7f7",
      minHeight: "100vh",
    },
    sidebar: {
      background: "#fff",
      borderRadius: "10px",
      padding: "15px",
      borderRight: "1px solid #ddd",
      position: "sticky",
      top: "20px",
      height: "fit-content",
    },
    categoryList: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
    },
    categoryListScroll: {
      display: "flex",
      overflowX: "auto",
      gap: "10px",
      scrollSnapType: "x mandatory",
      paddingBottom: "5px",
    },
    categoryItem: (active) => ({
      textAlign: "center",
      padding: "8px",
      borderRadius: "10px",
      cursor: "pointer",
      border: active ? "2px solid #7b3eff" : "1px solid #ddd",
      background: active ? "#f8f3ff" : "#fff",
      flex: "0 0 auto",
      minWidth: "80px",
      scrollSnapAlign: "center",
      transition: "0.3s",
      boxShadow: active ? "0 4px 12px rgba(123, 62, 255,0.3)" : "none",
    }),
    servicesSection: { background: "#fff", padding: "15px", borderRadius: "10px" },
    serviceCard: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #eee",
      padding: "12px 0",
      transition: "0.3s",
      borderRadius: "8px",
      cursor: "pointer",
    },
    serviceCardHover: { boxShadow: "0 4px 15px rgba(0,0,0,0.15)" },
    serviceImg: { textAlign: "right", position: "relative" },
    addBtn: { position: "absolute", bottom: "5px", right: "10px", background: "#7b3eff", color: "white", border: "none", borderRadius: "6px", padding: "5px 10px", cursor: "pointer", fontWeight: "bold", fontSize: "13px" },
    infoPanel: {
      position: "fixed",
      right: cartOpen ? "0" : "-300px",
      top: "0",
      width: "280px",
      height: "100%",
      background: "#fff",
      padding: "15px",
      borderLeft: "1px solid #ddd",
      transition: "0.3s",
      zIndex: 1000,
      overflowY: "auto",
    },
    ucPromise: { background: "#fafafa", padding: "12px", borderRadius: "10px", marginTop: "15px" },
    badge: { width: "60px", display: "block", marginTop: "6px" },
    cartItem: { display: "flex", justifyContent: "space-between", fontSize: "13px", alignItems: "center", marginBottom: "6px" },
    removeBtn: { background: "#ff4d4d", border: "none", borderRadius: "4px", color: "white", cursor: "pointer", fontSize: "12px", padding: "2px 6px" },
    cartToggleBtn: { position: "fixed", bottom: "20px", right: "20px", zIndex: 1100, padding: "10px 15px", borderRadius: "50px", background: "#7b3eff", color: "white", border: "none", cursor: "pointer" },
    modalBg: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000 },
    modal: { background: "#fff", padding: "20px", borderRadius: "10px", maxWidth: "400px", width: "90%", textAlign: "center" },
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={styles.explorer}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Select a service</h3>

          {/* Desktop: grid */}
          <div className="desktop-category" style={styles.categoryList}>
            {categories.map((cat) => (
              <div key={cat.name} style={styles.categoryItem(selectedCategory === cat.name)} onClick={() => setSelectedCategory(cat.name)}>
                <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "60px", borderRadius: "8px", objectFit: "cover" }} />
                <p style={{ fontSize: "12px", marginTop: "4px" }}>{cat.name}</p>
              </div>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="mobile-category" style={styles.categoryListScroll}>
            {categories.map((cat) => (
              <div key={cat.name} style={styles.categoryItem(selectedCategory === cat.name)} onClick={() => setSelectedCategory(cat.name)}>
                <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "60px", borderRadius: "8px", objectFit: "cover" }} />
                <p style={{ fontSize: "12px", marginTop: "4px" }}>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div style={styles.servicesSection}>
          <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>{selectedCategory}</h2>
          {services[selectedCategory].map((srv) => (
            <div
              key={srv.title}
              style={styles.serviceCard}
              onClick={() => setModalService(srv)}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.serviceCardHover.boxShadow}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <div>
                <h4 style={{ margin: "0 0 5px 0" }}>{srv.title}</h4>
                <p style={{ margin: "3px 0" }}>⭐ {srv.rating}</p>
                <p style={{ margin: "3px 0" }}>💰 {srv.displayPrice} • ⏱ {srv.time}</p>
                <a href="#" style={{ color: "#7b3eff", fontSize: "13px", textDecoration: "none" }}>View details & estimate</a>
              </div>
              <div style={styles.serviceImg}>
                <img src={srv.img} alt={srv.title} style={{ width: "120px", height: "90px", borderRadius: "10px", objectFit: "cover" }} />
                <button style={styles.addBtn} onClick={(e) => { e.stopPropagation(); handleAddToCart(srv); }}>Add ➕</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Toggle Button */}
      <button style={styles.cartToggleBtn} onClick={() => setCartOpen((prev) => !prev)}>🛒 {cart.length}</button>

      {/* Sliding Cart */}
      <div style={styles.infoPanel}>
        <h4 style={{ textAlign: "center", marginBottom: "10px" }}>Your Cart</h4>
        {cart.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <span>{item.title}</span>
                <span>
                  💰 {item.displayPrice}{" "}
                  <button style={styles.removeBtn} onClick={() => handleRemoveFromCart(index)}>✖</button>
                </span>
              </div>
            ))}
            <hr />
            <p style={{ fontWeight: "bold" }}>Total: 💰 ₹{totalPrice}</p>
          </div>
        )}
        <div style={styles.ucPromise}>
          <h4>Our Promise</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>✔ Verified Professionals</li>
            <li>✔ Hassle Free Booking</li>
            <li>✔ Transparent Pricing</li>
          </ul>
        </div>
      </div>

      {/* Service Detail Modal */}
      {modalService && (
        <div style={styles.modalBg} onClick={() => setModalService(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>{modalService.title}</h3>
            <img src={modalService.img} alt={modalService.title} style={{ width: "100%", borderRadius: "10px", margin: "10px 0" }} />
            <p>{modalService.description}</p>
            <p>💰 {modalService.displayPrice} • ⏱ {modalService.time}</p>
            <button style={{ ...styles.addBtn, position: "static", marginTop: "10px" }} onClick={() => { handleAddToCart(modalService); setModalService(null); }}>Add to Cart ➕</button>
          </div>
        </div>
      )}
    </div>
  );
}
