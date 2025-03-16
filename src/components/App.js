
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [tags, setTags] = useState("");

  const handleTags = (e) => {
    setTags(e);
  };
  
  return (
    <div>
        {/* Do not remove the main div */}
      <h2 onClick={() => handleTags("qa")}>*Tag 1</h2>
        <h2 onClick={() => handleTags("wa")}>*Tag 2</h2>
        <h2 onClick={() => handleTags("ed")}>*Tag 3</h2>

        <p>Choosen Tag is: {tags} </p>
    </div>
  )
}

export default App
