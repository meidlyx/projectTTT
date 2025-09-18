import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setOrdersCount(res.data.length);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="profile-page">
        <h1 className="profile-name">Вы не авторизованы</h1>
        <a className="btn-profile" href="/auth">
          Войти
        </a>
      </div>
    );
  }

  return (
    <main className="profile-page">
      <h1 className="profile-name">{user.fullname}</h1>
      <p className="profile-text">Email: {user.email}</p>
      <p className="profile-text">Заявок отправлено: {ordersCount}</p>
      <button className="btn-profile" onClick={handleLogout}>
        Выйти
      </button>
    </main>
  );
}
