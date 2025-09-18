export default function HomePage() {
  const user = localStorage.getItem("user");

  return (
    <>
      <header>
        <a href="/">
          <div className="logo">
            HABIT<span className="z">Z</span>
          </div>
        </a>
        <nav>
          <a className="btn-blue" onClick={() => scrollTo("contacts")}>
            Контакты
          </a>
          {user ? (
            <a href="/profile" className="btn-bl-ue">
              Профиль
            </a>
          ) : (
            <a href="/auth" className="btn-bl-ue">
              Войти
            </a>
          )}
        </nav>
      </header>
    </>
  );
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
