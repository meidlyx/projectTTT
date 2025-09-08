import { useState } from 'react';
import axios from 'axios';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    device: '',
    model: '',
    phone: '',
    problem: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/posts', formData);
      alert('Заявка отправлена');
      setFormData({ name: '', device: '', model: '', phone: '', problem: '', email: '' });
    } catch (err) {
      console.error(err);
      alert('ошибка при отправке заявки');
    }
  };

  return (
    <main className="form-page-wrapper">
      <div className="form-page-container">
        <h1 className="form-page-title">Оставить заявку</h1>

        <form id="orderForm" onSubmit={handleSubmit}>
          <label className="form-page-label" htmlFor="name">
            Имя
          </label>
          <input
            className="form-page-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван"
            required
          />

          <label className="form-page-label" htmlFor="device">
            Устройство
          </label>
          <select
            className="form-page-select"
            id="device"
            name="device"
            value={formData.device}
            onChange={handleChange}
            required>
            <option value="" disabled>
              Выберите устройство
            </option>
            <option>iPhone</option>
            <option>iPad</option>
            <option>MacBook</option>
            <option>Другое</option>
          </select>

          <label className="form-page-label" htmlFor="model">
            Модель
          </label>
          <textarea
            className="form-page-select"
            id="model-device"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Например: iPhone 14 Pro"
            rows="1"></textarea>

          <label className="form-page-label" htmlFor="phone">
            Телефон
          </label>
          <input
            className="form-page-input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            required
          />

          <label className="form-page-label" htmlFor="problem">
            Описание проблемы
          </label>
          <textarea
            className="form-page-textarea"
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            placeholder="Что случилось?"
            rows="4"
            required></textarea>

          <label className="form-page-label" htmlFor="email">
            Email (необязательно)
          </label>
          <input
            className="form-page-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />

          <button className="btn-black2" type="submit">
            🚀 Отправить заявку
          </button>
        </form>

        <a className="form-page-back" href="/">
          ← Вернуться на главную
        </a>
      </div>
    </main>
  );
}
