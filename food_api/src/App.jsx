import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Layout from "./Components/Layout";

function App() {
  const [logedIn, setLogedIn] = useState(() => {
    const data = localStorage.getItem("logedIn");
    const logedInData = JSON.parse(data);
    return logedInData || "";
  });
  const [food, setFood] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  const [users, setUsers] = useState(() => {
    const data = localStorage.getItem("users");
    const userdata = JSON.parse(data);
    return userdata || "";
  });

  console.log(users);

  /*const databaseUsers = [
    {
      username: "ackarlse",
      password: "drossap123"
    },
    {
      username: "toremake",
      password: "drossap321"
    }
  ]

  localStorage.setItem("users", JSON.stringify(databaseUsers))*/

  const getFood = async () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=greek`
    )
      .then((response) => response.json())
      .then((data) => setFood(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getFood();
  }, []);

  console.log(food);

  return (
    <>
      <Layout logedIn={logedIn} setLogedIn={setLogedIn}>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <Login setLogedIn={setLogedIn} logedIn={logedIn} users={users} />
            }
          />
        </Routes>
      </Layout>
      {!logedIn ? <Navigate to="login" replace /> : <Navigate to="/" replace />}
    </>
  );
}

export default App;
