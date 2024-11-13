import { ImCross } from "react-icons/im";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const AddCard = ({ tongle }) => {
    const [dis, setDis] = useState("");
    const cardItem = useSelector((state) => state.cart.card);
    const totalqty = cardItem.reduce((totalqty, item) => totalqty + item.qty, 0);
    const totalAmt = cardItem.reduce((totalAmt, item) => totalAmt + item.qty * item.price, 0);
    const nevigate = useNavigate();
    const btn = () => {
        if (totalqty === 0) {
            setDis(true)
        }
        else {
            setDis(false)
        }
    }
    useEffect(() => {
        btn()
    }, [totalqty]);

    return (
        <div className="fixed top-0 right-0 lg:w-[40vh] bg-white h-full  w-full p-5">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                    My Order
                </span>
                <span>
                    <ImCross className="hover:text-red-800 hover:cursor-pointer" onClick={() => tongle()} />
                </span>
            </div>
            {
                cardItem.length > 0 ? cardItem.map((food) => { return <ItemCard key={food.id} food={food} /> }) : <h1 className="text-center text-xl text-gray-700 mt-3">Cart has no items</h1>
            }


            <div className="absolute bottom-0 left-0 mb-5 ml-2">
                <h3 className="text-gray-800 font-semibold">items:{totalqty}</h3>
                <h3 className="text-gray-800 font-semibold">Total Amount: {totalAmt}</h3>
                <button className={`bg-green-500 hover:bg-green-700  rounded-md p-1 w-[35vh] text-white font-semibold mt-3 ${totalqty == 0 && "cursor-not-allowed"} `} onClick={() => nevigate("/order")} disabled={dis}>Checkout</button>
            </div>
        </div>
    );
};

export default AddCard;