// Simple simulated product data + lightweight interactions
const products = [
  {
    id: 1,
    name: "Noise‑Cancelling Headphones",
    price: "₹4,999",
    rating: 4.7,
    emoji: "🎧",
  },
  {
    id: 2,
    name: "Smartwatch Series X",
    price: "₹6,499",
    rating: 4.5,
    emoji: "⌚",
  },
  {
    id: 3,
    name: "Minimal Sneakers",
    price: "₹2,199",
    rating: 4.4,
    emoji: "👟",
  },
  {
    id: 4,
    name: "Ergonomic Chair",
    price: "₹8,999",
    rating: 4.8,
    emoji: "💺",
  },
  {
    id: 5,
    name: "Desk Lamp Pro",
    price: "₹1,299",
    rating: 4.3,
    emoji: "💡",
  },
];

const productGrid = document.getElementById("productGrid");
const cartCountEl = document.getElementById("cartCount");

let cartCount = 0;

function renderProducts() {
  productGrid.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image" aria-hidden="true">${p.emoji}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-meta-row">
        <span class="price">${p.price}</span>
        <span class="rating">★ ${p.rating}</span>
      </div>
      <div class="product-actions">
        <button class="add-btn" data-id="${p.id}">Add to cart</button>
        <button class="secondary-link" type="button">View details</button>
      </div>
    `;
    productGrid.appendChild(card);
  });

  productGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-btn");
    if (!btn) return;
    cartCount += 1;
    cartCountEl.textContent = cartCount;
  });
}

// Simple A/B click tracking for case study feel
const primaryCta = document.getElementById("primaryCta");
const secondaryCta = document.getElementById("secondaryCta");

let clicksA = 0;
let clicksB = 0;

function logVariantResult() {
  console.log("Variant A clicks:", clicksA);
  console.log("Variant B clicks:", clicksB);
}

primaryCta.addEventListener("click", () => {
  clicksA += 1;
  primaryCta.textContent = `Primary CTA (A – ${clicksA})`;
  logVariantResult();
});

secondaryCta.addEventListener("click", () => {
  clicksB += 1;
  secondaryCta.textContent = `Secondary CTA (B – ${clicksB})`;
  logVariantResult();
});

renderProducts();
