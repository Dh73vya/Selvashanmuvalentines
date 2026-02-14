import { useState } from "react";
import "./App.css";

import mamanmagal from "./assets/mamanmagal.jpg";
import usImg from "./assets/us.jpg";
import memoryImg from "./assets/memory.jpg";



function App() {
  const [step, setStep] = useState(0); 
  // 0 = Question
  // 1 = Welcome
  // 2 = Mamanmagal
  // 3 = Us final

  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });
  const [noMessage, setNoMessage] = useState("");

  const moveNoButton = () => {
    setNoMessage("❤️ Only YES is allowed 😌");
    setNoPosition({
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
    });
    setTimeout(() => setNoMessage(""), 2000);
  };

  return (
    <div className="container">

      {/* Floating Hearts */}
      <div className="hearts">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* STEP 0 - Question */}
      {step === 0 && (
        <div className="valentine-card">
          <h2>My Dear Shanmu💖</h2>
          <h1>Will You Be My Valentine? ❤️</h1>

          <button className="yes-btn" onClick={() => setStep(1)}>
            Yes 💕
          </button>

          <div style={{ position: "relative", height: "150px" }}>
            <button
              className="no-btn"
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
              }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              No 🙈
            </button>

            {noMessage && (
              <span className="no-message">{noMessage}</span>
            )}
          </div>
        </div>
      )}

      {/* STEP 1 - Welcome */}
      {step === 1 && (
        <div className="gift-section">
          <h1>Welcome To Our Home ❤️</h1>
          <img src={mamanmagal} className="photo" />

          <button
            className="gift-btn"
            onClick={() => setStep(2)}
          >
            🎁 Open Gift Box
          </button>
        </div>
      )}

      {/* STEP 2 - Mamanmagal */}
      {step === 2 && (
        <div className="gift-section">
          <h1>Our Beautiful Memory ❤️</h1>
          <img src={memoryImg} className="photo" />

          <button
            className="love-btn"
            onClick={() => setStep(3)}
          >
            💌 Open Love Message
          </button>
        </div>
      )}

      {/* STEP 3 - Final Us Image */}
      {step === 3 && (
        <div className="gift-section">
          <h1>I Love You So Much ❤️</h1>
          <img src={usImg} className="photo" />
          <p className="message">
            No matter how many fights we have,
            my heart will always choose you forever 💕
          </p>
        </div>
      )}

    </div>
  );
}

export default App;
