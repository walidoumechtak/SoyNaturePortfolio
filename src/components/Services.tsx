import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

function Services() {
    return (
        <div id="Services" className="sm:px-0 px-5 mb-20 flex md:flex-row flex-col justify-around container mx-auto">
            <div className="flex text-center sm:mb-0 mb-10 flex-col justify-center items-center">
                <FaShippingFast className="mb-5 text-gray-400" size={45}/>
                <h2>Free Shipping</h2>
                <p className="text-gray-400">Free Shiping for All Countries</p>
            </div>
            <div className="flex text-center sm:mb-0 mb-10  flex-col justify-center items-center">
                <TbTruckReturn className="mb-5 text-gray-400" size={45}/>
                <h2>Returns</h2>
                <p className="text-gray-400">Take your money back whenever you Want</p>
            </div>
            <div className="flex text-center sm:mb-0 mb-10  flex-col justify-center items-center">
                <BiSupport className="mb-5 text-gray-400" size={45}/>
                <h2>Online Support</h2>
                <p className="text-gray-400">Online support during all the week</p>
            </div>
            <div className="flex text-center sm:mb-0 mb-10  flex-col justify-center items-center">
                <MdOutlinePayment className="mb-5 text-gray-400" size={45}/>
                <h2>Flexible Payment</h2>
                <p className="text-gray-400">Pay with your favorite method</p>
            </div>
        </div>
    )
}

export default Services;