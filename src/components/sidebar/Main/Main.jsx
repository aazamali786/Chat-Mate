import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../../assets/assets";
import { Context } from "../../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

 const handleKeyDown = (event) => {
   if (event.key === "Enter" && input) {
     {
       onSent(input);
     }
   }
 };
  
   const handleCardClick = (prompt) => {
     onSent(prompt);
   };

  return (
    <div className="main">
      <div className="nav">
        <p>Chat-Mate</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Aazam.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Give me some road trip ideas to explore!!")
                }
              >
                <p>Give me some road trip ideas to explore!!</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => handleCardClick("What is Semiconductor??")}
              >
                <p>What is Semiconductor??</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => handleCardClick("Thank my interviewer!!")}
              >
                <p>Thank my interviewer!!</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Briefly explain what is React JS?")
                }
              >
                <p>Briefly explain what is React JS?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.download} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
              onKeyDown={handleKeyDown}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Bringing chat to life{" "}
            <span role="img" aria-label="robot">
              🤖
            </span>
            <span role="img" aria-label="speech bubble">
              💬
            </span>
            , &copy; Sayyed Aazam Ali
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
