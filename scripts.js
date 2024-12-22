// Sample product data
const products = [
  {
      name: "Elegant Jewelry Box",
      category: "storage",
      price: "$25",
      image: "images/jewelry-box.jpg",
      gallery: ["images/jewelry-box.jpg", "images/jewelry-box-2.jpg", "images/jewelry-box-3.jpg"],
      whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Elegant%20Jewelry%20Box"
  },
  {
      name: "Laser-Cut Pet Earrings",
      category: "jewelry",
      price: "$15",
      image: "images/laser-earring-01.jpg",
      gallery: ["images/jewelry-box.jpg", "images/jewelry-box-2.jpg", "images/jewelry-box-3.jpg"],
      whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Laser-Cut%20Pet%20Earrings"
  },
  {
      name: "Acrylic Wall Art",
      category: "wall-art",
      price: "$40",
      image: "images/wall-art-01.jpg",
      gallery: ["images/jewelry-box.jpg", "images/jewelry-box-2.jpg", "images/jewelry-box-3.jpg"],
      whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Acrylic%20Wall%20Art"
  },
  {
      name: "Limited Edition Poker Set",
      category: "games",
      price: "$100",
      image: "images/poker-set.jpg",
      gallery: ["images/jewelry-box.jpg", "images/jewelry-box-2.jpg", "images/jewelry-box-3.jpg"],
      whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Limited%20Edition%20Poker%20Set"
  }
];

// Function to render products
const renderProducts = (filter = "all") => {
  const productsGrid = document.getElementById("products-grid");
  productsGrid.innerHTML = "";

  const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

  filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
          <div class="product-image-container">
              <img src="${product.image}" alt="${product.name}" class="product-image">
          </div>
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">${product.price}</p>
          <a href="${product.whatsappLink}" class="order-button">Order Now</a>
          <div class="product-gallery">
              ${product.gallery.map(image => `<img src="${image}" alt="${product.name}" class="gallery-image">`).join("")}
          </div>
      `;
      productsGrid.appendChild(productCard);

      // Add event listeners for gallery images
      const galleryImages = productCard.querySelectorAll(".gallery-image");
      const mainImage = productCard.querySelector(".product-image");

      galleryImages.forEach(img => {
          img.addEventListener("click", () => {
              mainImage.src = img.src; // Update the main image on click
          });
      });
  });
};

// Event listener for category filter
document.getElementById("category-filter").addEventListener("change", (e) => {
  renderProducts(e.target.value);
});

// Initial render
renderProducts();

