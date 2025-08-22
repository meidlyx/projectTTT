export default function HomePage() {
  return (
    <>
        <header>
            <a href="/"><div className="logo">HABIT<span className="z">Z</span></div></a>
            <nav>
            <a className="btn-blue" onClick={() => scrollTo("contacts")}>Контакты</a>
            {/* <a href="/order"  className="btn-bl-ue">Оставить заявку на ремонт</a> */}
            </nav>
        </header>
    </>
  )
}

const scrollTo = (id) => {
  const elementId = document.getElementById(id);
  if (elementId) {
    elementId.scrollIntoView({ behavior: "smooth" });
    if (id === "contacts") {
      elementId.classList.add("flash");
      setTimeout(() => elementId.classList.remove("flash"), 2000);
    }
  }
};
