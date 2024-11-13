import { useSelector } from "react-redux";
import Foodcard from "./Foodcard";
import FoodData from "./FoodData";
import toast, { Toaster } from 'react-hot-toast';

function FoodItem() {
    const notify = (name) => toast.success(`${name} is added to cart`);
    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search);
    return (
        <>
            <Toaster />
            <div className="flex flex-wrap gap-14 sm:pl-2 justify-center sm:justify-start ">
                {FoodData.filter((food) => {
                    if (category === "ALL") {
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    }
                    else {
                        return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());;
                    }
                }).map((food) =>
                    <Foodcard key={food.id} food={food} toast={notify} />
                )}

            </div>

        </>
    );
}

export default FoodItem;