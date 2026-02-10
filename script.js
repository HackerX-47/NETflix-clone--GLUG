const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  alert("Login feature coming soon 🚀");
});

const langSelect = document.getElementById("nav-language");

langSelect.addEventListener("change", () => {
  if (langSelect.value === "hi") {
    document.querySelector(".hero h1").textContent = "असीमित फिल्में, शो और बहुत कुछ";
    document.querySelector(".hero h3").textContent = "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या फिर से शुरू करने के लिए अपना ईमेल दर्ज करें।";
    document.querySelector(".faq h2" ).textContent = "अक्सर पूछे जाने वाले प्रश्न";
  } 
});

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

    iframe.src = trailerURL + "?autoplay=1&rel=0"; 
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

