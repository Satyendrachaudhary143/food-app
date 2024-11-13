
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
function Order() {
    const nevigater = useNavigate()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                {loading ? (
                    <PropagateLoader color="#36d7b7" />
                ) : (
                    <>
                        <div>
                            <h2 className="text-3xl font-semibold mb-4 text-center">
                                Order Successful!
                            </h2>
                            <p>Your order has been sucessfully placed</p>

                        </div>
                            <button className="bg-green-500 font-bold mt-5 px-3 py-2 text-center rounded-3xl hover:bg-green-600" onClick={() => nevigater("/")}> Home</button>
                    </>
                )}
            </div>
        </>
    );


}
export default Order;