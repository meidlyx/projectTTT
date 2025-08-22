import Service from "./Service"

export default function Body() {
    return (
        <>
            <section className="hero">
                <h1>Быстрый ремонт устройств Apple</h1>
                <p>от 290 ₽ · от 20 минут · бесплатная диагностика</p>
                <span className="razdelit">
                    <button className="btn-black" onClick={() => scrollTo("services")}>Посмотреть услуги</button>
                    <a href="/order"  className="btn-black">Оставить заявку на ремонт</a>
                </span>
                
            </section>

            <section className="grid">
                <div className="card">
                <h3>Бесплатная диагностика</h3>
                <p>Определим проблему до начала работ.</p>
                </div>
                <div className="card">
                <h3>Цены от 290 ₽</h3>
                <p>Прозрачные и честные цены без скрытых платежей.</p>
                </div>
                <div className="card">
                <h3>От 20 минут</h3>
                <p>Срочный ремонт при вас в течение часа.</p>
                </div>
            </section>  

            <section className="info-company">
                <div className="infotext">
                <h1><span className="logo">HABITZ</span> — <span>крупнейшая сервисная сеть</span> по ремонту устройств Apple в России</h1>
                </div>
                <div className="info-service">
                <div className="info1">
                    <p className="info-service-text">677</p>
                    <p>Сервисных центров</p>
                </div>
                <div className="info2">
                    <p className="info-service-text">2 МЛН</p>
                    <p>Ремонтов в год</p>
                </div>
                <div className="info3">
                    <p className="info-service-text">90 дней</p>
                    <p>Официальная гарантия</p>
                </div>
                <div className="info4">
                    <p className="info-service-text">4 года</p>
                    <p>Средний опыт инженера</p>
                </div>
                </div>
            </section>

            <section className="info-company">
                <div className="infotext">
                <h1 style={{ textAlign: "center" }}>Статистика работы сервис-центра Apple за год</h1>
                </div>
                <div className="info-service">
                <div className="info1">
                    <p className="info-service-text">12 404 шт</p>
                    <p className="style-text-info">Комплектующих на складе в повседневном доступе</p>
                </div>
                <div className="info2">
                    <p className="info-service-text">91 год</p>
                    <p className="style-text-info">Суммарного опыта ремонта наших специалистов</p>
                </div>
                <div className="info3">
                    <p className="info-service-text">35 мин</p>
                    <p className="style-text-info">Среднее время ремонтных работ по сумме обращений</p>
                </div>
                <div className="info4">
                    <p className="info-service-text">5%</p>
                    <p className="style-text-info">Возвратов на гарантийный ремонт</p>
                </div>
                </div>
            </section>
        </>
    )
}

const scrollTo = (id) => {
  const elementId = document.getElementById(id);
  if (elementId) {
    elementId.scrollIntoView({ behavior: "smooth" });
    if (id === "services") {
      elementId.classList.add("flash");
      setTimeout(() => elementId.classList.remove("flash"), 2000);
    }
  }
};