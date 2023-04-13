import { useState } from "react"
import star from "./images/icon-star.svg"
import thanksImg from "./images/illustration-thank-you.svg"

function App() {
const [isSubmetted, setIsSubmetted] = useState(false)
const [item, setItem] = useState("")

  const Button = ({number}) =>{
    return(
      <button className="btn-number bg-gray-700 h-10 w-10 pt-1 rounded-full
                         focus:bg-gray-400 transition-all duration-100 text-white"
              onClick={() => setItem(number)}>
        {number}
      </button>
    )
  }
  return (
    <>
     {!isSubmetted && 
    <div className="wrapper">
      <img src={star} alt="starimg" className="bg-gray-700 p-2 rounded-full "/>
      <h2 className="question my-6">How did we do?</h2>
      <p className="text-gray-400 mb-8">Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
      <ul className="grid grid-cols-5 gap-5 mb-8">
        <li><Button number={1}/> </li>
        <li><Button number={2}/> </li>
        <li><Button number={3}/> </li>
        <li><Button number={4}/> </li>
        <li><Button number={5}/> </li>
      </ul>
      <div className="text-center">
        <button className="btn-rating w-full text-white tracking-wide"
                onClick={() => setIsSubmetted(true)}
                >SUBMIT
        </button>
      </div>
    </div>}
  
    {isSubmetted && <ThankYou setIsSubmetted={setIsSubmetted}
                                item={item}/>}
    </>
  );
}


const ThankYou = ({setIsSubmetted, item}) => {
  return (
    <div className="wrapper">
      <img src={thanksImg} alt="ThankYouImg" className="block mx-auto mb-8"/>

      <div className="flex items-center justify-center">
      <p className="p-thankYou text-center bg-gray-700 rounded-full text-sm">You selected {item} out of 5</p>
      </div>

      <h2 className="question my-6 text-center ">Thank you!</h2>
      <p className="text-gray-400  text-center">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
      <div className="text-center">
        <button className="btn-rating w-full text-white tracking-wide"
                onClick={() => setIsSubmetted(false)}>GO BACK</button>
      </div>
    </div>
  )
}
export default App;
