/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/CardSlice"

const Foodcard = ({ food, toast }) => {
    const dispatch = useDispatch();
    return (
        <div className="font-bold w-[310px] bg-white p-5 flex flex-col rounded-lg sm:w-[250px]">
            <img src={food.img} className="w-auto h-[250px] hover:scale-110 cursor-grab transition-all duration-500" />
            <div className="text-sm flex justify-between my-3">
                <h2>{food.name}</h2>
                <span>₹{food.price}</span>
            </div>
            <p className="text-sm font-normal">{food.desc.slice(0, 50)}......</p>
            <div className="flex justify-between items-center my-2">
                <span className="flex items-center">
                    <FaRegStar className="mr-1 text-yellow-500" />{food.rating}
                </span>
                <button className="p-1 text-white bg-green-500 rounded-lg hover:bg-green-600" onClick={() => { dispatch(addToCart({ id: food.id, name: food.name, price: food.price, qty: 1, img: food.img })); toast(food.name) }} >Add to cart</button>
            </div>
        </div>
    );
};


export default Foodcard;