import { useState } from "react";
// Styles
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
// import Modal from "./Components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Dostonbek Turgunov",
      email: "dostonbek@example.com",
      phone: "+998 90 123 45 67",
    },
  ]);

  return (
    <>
      <Sidebar />
      <div className="main__container">
        <Navbar />
        <Home users={users} />
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default App;
