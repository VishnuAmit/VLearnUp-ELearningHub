import { useNavigate } from "react-router-dom";
import SignUp from "./SignUpScreen";
import Streamfinder from "./Streamfinder";

export default function AccessCodeRegisteration() {

    const navigate = useNavigate();
    return (
      <div>
        <center>
            <h1 className="mb-6"> Register with Access code</h1>
        </center>
        <form  className="flex flex-col items-center justify-center mt-8">
            <div className="text-center">
                <h2 className="mb-4">Enter Access Code</h2>
                <input type="text" className="text-center p-4 m-2 w-64" placeholder="Enter Access Code*"/>
                <button type="submit" className="bg-blue-500 text-white p-2 m-2 w-48">Submit</button>
            </div>
        </form>
        {/* <Streamfinder/> */}
      </div>
    );
  }