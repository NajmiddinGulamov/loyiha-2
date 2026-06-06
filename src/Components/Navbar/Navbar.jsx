import "./Navbar.css";
import { FaSearch, FaBell, FaUserCircle, FaPlus, FaUser } from "react-icons/fa";

function Navbar({Setboll, users}) {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Qidirish..." />
        </div>

        <div className="navbar__actions">
          <button className="add-user-btn" onClick={() => Setboll(true)}>
            <FaPlus /> Qo'shish
          </button>

          <button className="nav-btn" title="Bildirishnomalar">
            <FaBell />
            <span className="badge">{0}</span>
          </button>

          <button className="nav-btn" title="Bildirishnomalar">
            <FaUser />
            <span className="badge">{users.length}</span>
          </button>

          <div className="navbar__user">
            <span>To'jibayev</span>
            <FaUserCircle className="user-avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
