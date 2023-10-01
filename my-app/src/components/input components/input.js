import "../style.css";
import React, { useState } from "react"
import Timer from "../timer components/timer";

const Input = () => {
  const [inputPlayer, setInputPlayer] = useState("");
  const [player, setPlayer] = useState([]);
  const [noOfPlayer, setNoOfPlayer] = useState(0);

  const handleInputChange = (event) => {
    setInputPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (inputPlayer === "") {
      return;
    }

    const newPlayer = {
      id: Math.random(),
      input: inputPlayer,
      point: 0,
    };

    setPlayer([...player, newPlayer]);
    setNoOfPlayer(player.length + 1);
    setInputPlayer("");
  };

  const handleDeletePlayer = (id) => {
    const newList = player.filter((input) => input.id !== id);
    setPlayer(newList);
    setNoOfPlayer(newList.length);
  };

  const handleIncreament = (id) => {
    const updatedPlayers = player.map((p) => {
      if (p.id === id) {
        return { ...p, point: p.point + 1 };
      }
      return p;
    });

    setPlayer(updatedPlayers);
  };

  const handleDecreament = (id) => {
    const updatedPlayers = player.map((p) => {
      if (p.id === id) {
        return { ...p, point: p.point - 1 };
      }
      return p;
    });

    setPlayer(updatedPlayers);
  };

  
  const totalPoints = player.reduce((total, p) => total + p.point, 0);

  return (
    <div className="container">
      <div className="section-one">
        <h3 className="heading">SCOREBOARD</h3>

        <div className="input">
          <input
            className="input_field"
            placeholder="Add a Player"
            type="text"
            value={inputPlayer}
            onChange={handleInputChange}
          ></input>
          <button className="btn" onClick={handleAddPlayer}>
            {" "}
            Add player
          </button>
        </div>

        <ul>
          {player.map((input) => (
            <div className="display" key={input.id}>
              <li className="player">
                {input.input}
                <button
                  className="delete"
                  onClick={() => handleDeletePlayer(input.id)}
                >
                  x
                </button>
              </li>

              <div>
                <div className="buttons">
                  <button
                    className="increament_btn"
                    onClick={() => handleIncreament(input.id)}
                  >
                    +
                  </button>
                  <span>{input.point}</span>
                  <button
                    className="decreament_btn"
                    onClick={() => handleDecreament(input.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div className="footer">
          <div>
            <div>
              <h4>No of players: {noOfPlayer}</h4>
            </div>
            <div>
              <h4>Total Points: {totalPoints}</h4> 
            </div>
          </div>
          <div>
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
