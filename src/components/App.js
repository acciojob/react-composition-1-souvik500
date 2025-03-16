
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
       <li onClick={() => handleTags("qa")}>Tab 1</li>
        <li onClick={() => handleTags("qa")}>Tab 2</li>
        <li onClick={() => handleTags("qa")}>Tab 3</li>
        <p>Choosen Tag is: {tags} </p>
    </div>
  )
}

export default App
