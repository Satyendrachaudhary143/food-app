import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { search } from "../store/slice/search";

function NavBar() {
    const dispatch = useDispatch();
    const searchs = useSelector((state) => state.search.search);
    const date = new Date().toUTCString().slice(0, 16)
    return (
        <nav className="flex justify-between  flex-col lg:flex-row">
            <div>
                <h3 className="text-xl font-bold text-gray-600">{date} </h3>
                <h1 className="text-2xl font-bold">Food App By Satyendra</h1>
            </div>
            <div className="lg:w-1/4">
                <input type="search" name="search" id="" className="my-2 p-3 border border-gray-400 outline-none rounded-lg text-sm w-full lg:w-full" onChange={(e) => dispatch(search(e.target.value))} />
            </div>
        </nav>
    );
}

export default NavBar;