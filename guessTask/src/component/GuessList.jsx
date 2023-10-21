import { useState } from "react";
import './guess.css'

const friends = [
  "Kajol", "Uttom", "Rimon","Raju","Rakib","Rony","Sakib","Arif","firad","Khairul","Rifat","Sathi","Nora Fatehi","Koli","Rumi","Nusrat","Sumi","Noyon","Sojol","Apple",
];

const UserList = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [result, setResult] = useState();
  const [guessItem, setGuessItem] = useState();

  const handleBtn = (index) => {
    setSelectedButton(index);
    setResult("");
  };

  const handleGuess = () => {
    if (selectedButton === null) {
       alert("Please select anyone!");
       return;
    }

    const randomItem = Math.floor(Math.random() * friends.length);
    setGuessItem(friends[randomItem]);
    console.log(randomItem);
   
    if (randomItem === selectedButton) {
      setResult("matched");
    } else {
      setResult("not matched");
    }
  };

  const Selectstyle = {
    backgroundColor: "red"
  }
  const GuessStyle = {
    backgroundColor : "green"
  }
  return (
    <div className="guess_content">
      {friends.map((friends, index) => {
        // console.log(index);
        return (
          <>
            <div className="guess_btn" key={index}>
              <button className={`${
                  index === selectedButton ? Selectstyle : GuessStyle
                }`}
                onClick={() => handleBtn(index)}
              >
                {friends}
              </button>
            </div>
          </>
        );
      })}
      <button className="Guess_select"
        onClick={() => handleGuess()}
      >
        Guess
      </button>
      {result && (
        <div className="match">
          {result === "matched" ? (
            <div>
                <h2>Congratulation</h2>
            </div>
          ) : (
            <>
              <div>
                <h1>Please Try agin </h1>
              </div>
              <div>
                 <h2>Random Name Select: </h2>{guessItem}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;