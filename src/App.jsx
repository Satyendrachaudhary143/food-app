import NavBar from "./Componant/NavBar"
import CatogariBtn from "./Componant/CatogariBtn"
import FoodItem from "./Componant/FoodItem"
import AddCard from "./Componant/AddCard"
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";

function App() {

  const [tongle, setTongle] = useState(false);
  const hideShow = () => {
    setTongle(!tongle);
  }

  return (
    <>
      <NavBar></NavBar>
      <CatogariBtn />
      <FoodItem />
      <FaCartShopping className="fixed bottom-4 right-2 p-3 rounded-full bg-white shadow-md text-5xl hover:scale-110 transition-all duration-300 hover:cursor-pointer" onClick={() => hideShow()} />
      {tongle ? < AddCard tongle={hideShow} /> : ""}
    </>
  )
}

export default App
