import { useState } from "react";
import axios from "axios";

export default function FormAuth() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:3000/auto/login"
      : "http://localhost:3000/auto/register";

    try {
      const res = await axios.post(url, formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert(isLogin ? "Авторизация успешна!" : "Регистрация успешна!");

      window.location.href = "/";
    } catch (err) {
      if (err.response && err.response.data) {
        const data = err.response.data;
        if (Array.isArray(data)) {
          alert(data.map((e) => e.msg).join("\n"));
        } else if (data.msg || data.massage) {
          alert(data.msg || data.massage);
        } else {
          alert("Произошла неизвестная ошибка");
        }
      } else {
        alert("Сервер не отвечает");
      }
    }
  };

  return (
    <div className="form-page-wrapper">
      <div className="form-page-container">
        <h1 className="form-page-title">
          {isLogin ? "Войти в аккаунт" : "Создать аккаунт"}
        </h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label className="form-page-label" htmlFor="fullname">
                ФИО
              </label>
              <input
                className="form-page-input"
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label className="form-page-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-page-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="form-page-label" htmlFor="password">
            Пароль
          </label>
          <input
            className="form-page-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="btn-black2" type="submit">
            {isLogin ? "🚀 Войти" : "🚀 Создать аккаунт"}
          </button>
        </form>

        <p
          style={{ marginTop: "16px", cursor: "pointer", color: "#A78BFA" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Нет аккаунта? Создать" : "Уже есть аккаунт? Войти"}
        </p>
      </div>
    </div>
  );
}
