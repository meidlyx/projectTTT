console.log("проверка js");

document.addEventListener("DOMContentLoaded", () => {
  const contactsBtn = document.getElementById("contacts-btn");
  const contactsSection = document.getElementById("contacts");

  if (contactsBtn && contactsSection) {
    contactsBtn.addEventListener("click", () => {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
      contactsSection.classList.add("flash");

      setTimeout(() => {
        contactsSection.classList.remove("flash");
      }, 2000);
    });
  }

  const scrollBtn = document.getElementById("scroll");
  const servicesSection = document.getElementById("services");

  if (scrollBtn && servicesSection) {
    scrollBtn.addEventListener("click", () => {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

