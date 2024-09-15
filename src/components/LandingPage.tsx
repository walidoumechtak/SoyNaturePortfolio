import { Button } from "flowbite-react";
import NavBar from "./Navbat";
import "./LandingPage.css"; // Import the CSS file for the landing page

function LandingPage() {
  return (
    <div className="landing-page"> {/* Add a class name for the landing page */}
          <NavBar />
        <div className="overlay flex justify-center items-center">
          <div className="hero px-5 md:px-0 container flex flex-col justify-center">
            <h1 className="text-white text-4xl text-center font-bold">Beauty Inspired by Real Life</h1>
            <p className="text-white text-center text-lg">We provide the best natural products for your health and beauty</p>
            <div className="flex justify-center">
              <button
                className="mt-5 bg-purple-700 transition-all px-7 py-3 rounded-lg border-[2px] text-white border-purple-700 font-semibold"
                >Shop Now</button>
            </div>
          </div>
        </div>
        {/* Add your content here */}
    </div>
  );
}

export default LandingPage;
