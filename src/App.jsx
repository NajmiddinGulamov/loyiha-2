import { useState } from "react";
// Styles
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Modal from "./Components/Modal/Modal";

function App() {
  let [boll, Setboll] = useState(false)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "To'jibayev Bilolxon",
      email: "n3870694@gmail.com",
      phone: "+998 90 640 58 28",
    },
  ]);

  function getData(data) {
    setUsers([...users, data])
  }
  function getFilter(id) {
    let filtered = users.filter((item) => item.id !== id);
    setUsers(filtered);
  }
  return (
    <>
      <Sidebar />
      <div className="main__container">
        <Navbar Setboll={Setboll} users={users} />
        <Home users={users} setUsers={setUsers} getFilter={getFilter} />
      </div>
      {boll && <Modal Setboll={Setboll} getData={getData} />}
    </>
  );
}

export default App;