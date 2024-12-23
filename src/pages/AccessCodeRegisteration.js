import { useNavigate } from "react-router-dom";

export default function AccessCodeRegisteration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2d3e50] text-white">
      <div className="bg-[#3b4c62] shadow-md rounded-xl p-8 w-[30%] sm:w-[400px] border border-[#4e5d77]">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Register with Access Code
        </h1>
        <form className="flex flex-col items-center">
          <label htmlFor="access-code" className="text-lg text-gray-300 mb-4">
            Enter Access Code
          </label>
          <input
            type="text"
            id="access-code"
            className="w-full p-3 bg-[#4e5d77] border border-[#637391] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#637391] mb-6"
            placeholder="Enter Access Code*"
          />
          <button
            type="submit"
            className="w-full bg-[#FF7F3F] hover:bg-[#ff9766] text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
