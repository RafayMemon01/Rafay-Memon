// <!-- ✅ Script for Menu Toggle -->

    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });


document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.mySwiper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
      },
    });
  });
  document.getElementById("quoteForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = this;
  const submitButton = form.querySelector("button");
  const buttonText = submitButton.querySelector(".btn-text");
  const tickIcon = submitButton.querySelector(".tick-icon");

  buttonText.textContent = "Sending...";
  submitButton.disabled = true;

  try {
    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/mqapzyjq", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {
      buttonText.style.display = "none";
      tickIcon.classList.remove("hidden");

      setTimeout(() => {
        form.reset();
        buttonText.style.display = "inline";
        tickIcon.classList.add("hidden");
        buttonText.textContent = "Request Free Consultation";
        submitButton.disabled = false;
      }, 2000);
    } else {
      alert("Oops! Something went wrong, please try again.");
      buttonText.textContent = "Request Free Consultation";
      submitButton.disabled = false;
    }
  } catch (error) {
    alert("Error submitting form, please try again later.");
    buttonText.textContent = "Request Free Consultation";
    submitButton.disabled = false;
  }
});


