import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { removeFromCard, increment, decrement } from "../store/slice/CardSlice";
import { MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
const ItemCard = ({ food }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-2 shadow-lg rounded-lg mt-5">
            <MdDelete className="absolute right-7  cursor-pointer" onClick={() => { dispatch(removeFromCard(food)) }} />
            <img src={food.img} alt="" className="w-[50px] h-[50px]" />
            <div className="">
                <h3>{food.name}</h3>
                <div className="flex justify-between mt-1 ">
                    <span className="text-green-500">₹{food.price}</span>
                    <div className="flex gap-3 absolute right-7">
                        <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer  " onClick={() => { dispatch(increment(food)) }} />
                        <span>{food.qty} </span>
                        <AiOutlineMinus onClick={() => { dispatch(decrement(food)) }} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer  " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;