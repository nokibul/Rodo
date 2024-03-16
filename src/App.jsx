import { useState } from "react";
import TextInput from "./components/input"
import ShowTexts from "./components/display";
import Container from "./components/container";

function App() {
  const [submittedTexts, setSubmittedTexts] = useState([]);
  
  const handleSubmit = (text) => {
    setSubmittedTexts([...submittedTexts, text]);
  }

  const postDelete = (text) => {
    setSubmittedTexts([...text]);
  }

  return (
    <>
      <Container>
        <TextInput onTextSubmit={handleSubmit} />
        <ShowTexts texts={submittedTexts} onDelete={postDelete}/>
      </Container>
    </>
  )
}

export default App
