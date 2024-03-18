import { useState } from 'react'
import './custom.css'
import Msg from "./data/messages"

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jeff" });

  const handlePrevious = () => {
    if (step > 1) {
      setStep(prevState => prevState - 1)
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(prevState => prevState + 1)
    }

    // BAD PRACTICE FOR CHANGING STATE
    // test.name = "Danielle" -> use this instead setTest({ name: "Danielle" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(prevState => !prevState)}>&times;</button>
      {isOpen && (
        < div className="steps" >
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}> 1 </div>
            <div className={step >= 2 ? 'active' : ''}>  2 </div>
            <div className={step >= 3 ? 'active' : ''}> 3 </div>
          </div>
          <p className="message">Step {step}: {Msg[step - 1]}</p>
          <div className="buttons">
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>Previous</button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>Next</button>
          </div>
        </div >
      )}
    </>
  )
}

export default App
