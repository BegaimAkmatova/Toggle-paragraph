import React,{useState}  from 'react';
import './App.css';


const App = () => {
  const [showParagraph, setShowParagaph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagaph((prevShowParagraph) => !prevShowParagraph)
  }

  return(
    <div>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is the new</p>}
      <button onClick={toggleParagraphHandler}>Toggle paragraph</button>
    </div>
  )
}
export default App;
