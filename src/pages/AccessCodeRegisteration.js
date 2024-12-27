import { useNavigate } from "react-router-dom";
import SignUp from "./SignUpScreen";
import Streamfinder from "./Streamfinder";

export default function AccessCodeRegisteration() {
    const navigate = useNavigate();
    return (
      <div className="container">
        <center>
            <h1 className="header-title">Register with Access Code</h1>
        </center>
        <form className="form-container">
            <div className="form-content">
                <h2 className="input-label">Enter Access Code</h2>
                <input type="text" className="input-field" placeholder="Enter Access Code*" />
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
        {/* <Streamfinder/> */}
      </div>
    );
}

// CSS (This can be placed in a separate CSS file or inside a <style> block)

const styles = `
  /* Add this CSS to your styles or in a <style> block if using inline styles */
  .container {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      padding: 20px;
      min-height: 100vh;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

  }

  .header-title {
      color: #36454f;
      font-size: 2.5rem;
      margin-bottom: 20px;
      font-weight: bold;
  }

  .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
  }

  .form-content {
      text-align: center;
  }

  .input-label {
      color: #36454f;
      font-size: 1.2rem;
      margin-bottom: 15px;
  }

  .input-field {
      padding: 12px;
      margin: 10px;
      width: 250px;
      border: 2px solid #36454f;
      border-radius: 5px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s;
  }

  .input-field:focus {
      border-color: #f48c06;
  }

  .submit-button {
      background-color: #f48c06;
      color: white;
      padding: 12px;
      margin: 10px;
      width: 200px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
  }

  .submit-button:hover {
      background-color: #e47d05;
  }

  .submit-button:focus {
      outline: none;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
