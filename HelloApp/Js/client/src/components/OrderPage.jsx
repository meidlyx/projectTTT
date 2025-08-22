export default function OrderPage() {
    return (
        <>
            <main className="form-page-wrapper">
                <div className="form-page-container">
                <h1 className="form-page-title">Оставить заявку</h1>

                <form id="orderForm" action="order" method="POST">
                    <label className="form-page-label" htmlFor="name">Имя</label>
                    <input className="form-page-input" type="text" id="name" name="name" placeholder="Иван" required />

                    <label className="form-page-label" htmlFor="device">Устройство</label>

                    <select className="form-page-select" id="device" name="device" required>
                    <option disabled selected>Выберите устройство</option>
                    <option>iPhone</option>
                    <option>iPad</option>
                    <option>MacBook</option>
                    <option>Другое</option>
                    </select>

                    <label className="form-page-label" htmlFor="model">Модель</label>
                    <textarea className="form-page-select" id="model-device" name="model" placeholder="Например: iPhone 14 Pro" rows="1"></textarea>

                    <label className="form-page-label" htmlFor="phone">Телефон</label>
                    <input className="form-page-input" type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required />

                    <label className="form-page-label" htmlFor="problem">Описание проблемы</label>
                    <textarea className="form-page-textarea" id="problem" name="problem" placeholder="Что случилось?" rows="4" required></textarea>

                    <label className="form-page-label" htmlFor="email">Email (необязательно)</label>
                    <input className="form-page-input" type="email" id="email" name="email" placeholder="example@mail.com" />

                    <button className="btn-black2" type="submit">🚀 Отправить заявку</button>
                </form>

                <a className="form-page-back" href="/">← Вернуться на главную</a>
                </div>
        
            </main> 
        </>
    )
}