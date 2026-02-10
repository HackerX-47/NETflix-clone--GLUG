// LOGIN BUTTON
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  alert("Login feature coming soon 🚀");
});

// LANGUAGE CHANGE (frontend only)
const langSelect = document.getElementById("nav-language");

langSelect.addEventListener("change", () => {
  if (langSelect.value === "hi") {
    document.querySelector(".hero h1").textContent = "स्ट्रेंजर थिंग्स";
    document.querySelector(".hero p").textContent =
      "एक रोमांचक नेटफ्लिक्स सीरीज़ जिसमें रहस्य, दोस्ती और अलौकिक घटनाएँ हैं।";
  } else {
    document.querySelector(".hero h1").textContent = "Stranger Things";
    document.querySelector(".hero p").textContent =
      "A thrilling Netflix series that mixes supernatural, suspense, and friendship in a nostalgic 80s setting.";
  }
});

// TRAILER MODAL
const posters = document.querySelectorAll(".movies img");
const modal = document.getElementById("trailer-modal");
const iframe = document.getElementById("trailer-frame");
const closeBtn = document.getElementById("close-modal");

posters.forEach(poster => {
  poster.addEventListener("click", () => {
    const trailerURL = poster.dataset.trailer;
    if (!trailerURL) return;

    iframe.src = trailerURL + "?autoplay=1";
    modal.classList.remove("hidden");
  });
});

// CLOSE MODAL
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.add("hidden");
  iframe.src = "";
}

poster.addEventListener("click", () => {
    const trailerURL = poster.dataset.trailer;
    if (!trailerURL) return;

    // Add autoplay param
    iframe.src = trailerURL + "?autoplay=1&rel=0"; // rel=0 prevents related videos

    modal.classList.remove("hidden");
});

const emailInput = document.getElementById("email-input");
const emailSubmit = document.getElementById("email-submit");

emailSubmit.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (!email) {
    alert("Please enter a valid email 😅");
    return;
  }

  alert(`Thanks! We'll send updates to ${email}`);
  emailInput.value = ""; // clear input
});

document.addEventListener("DOMContentLoaded", () => {
  const heroEmailBtn = document.querySelector(".hero-email-form button");
  const mainEmailBtn = document.getElementById("email-submit");

  if (heroEmailBtn) {
    heroEmailBtn.addEventListener("click", () => {
      alert("Get Started feature coming soon 🚀");
    });
  }

  if (mainEmailBtn) {
    mainEmailBtn.addEventListener("click", () => {
      alert("Get Started feature coming soon 🚀");
    });
  }
});

