import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png"
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    console.log("선택됨!", userChoice)
    setUserSelect(choice[userChoice]);
  }
  return (
    <div>
      <div className='main'>
        <Box title="you" item={userSelect} />
        {/* <Box title="computer" /> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
