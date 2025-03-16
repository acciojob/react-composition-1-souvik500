
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
       <li onClick={() => handleTags("Tab 1")}>Tab 1</li>
        <li onClick={() => handleTags("Tab 2")}>Tab 2</li>
        <li onClick={() => handleTags("Tab 3")}>Tab 3</li>
        <p>Choosen Tag is: {tags} </p>
    </div>
  )
}

export default App
