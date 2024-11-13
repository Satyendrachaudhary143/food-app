import { useEffect, useState } from "react";
import FoodData from "./FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/slice/categorySlice";

const CatogariBtn = () => {
    const Dispatch = useDispatch()
    const [categories, setCategories] = useState([]);
    const selectedCat = useSelector((state) => state.category.category);
    const liUniCat = () => {
        const unic = [
            ...new Set(FoodData.map((food) => food.category))
        ]
        setCategories(unic);
    }

    useEffect(() => {
        liUniCat();
    }, [])

    return (
        <div className="mt-12">
            <h3 className="font-semibold">Find the best food here</h3>
            <div className="flex gap-3 my-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">

                <button className={`px-3 py-2 bg-gray-400 font-bold rounded-lg hover:bg-green-500 hover:text-wh ${selectedCat === "ALL" && "bg-green-500 text-white"}`} onClick={() => Dispatch(setCategory("ALL"))}>ALL</button>

                {categories.map((category, index) => {
                    return <button key={index} className={`px-3 py-2 bg-gray-400 font-bold rounded-lg hover:bg-green-500 hover:text-wh ${selectedCat === category && "bg-green-500 text-white"}`} onClick={() => Dispatch(setCategory(category))}>{category}</button>
                })}


            </div>
        </div>
    );
};

export default CatogariBtn;