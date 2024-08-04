import { Routes , Route } from 'react-router-dom'
import Main from './components/index'
function App() {
  const longText = "Assalomu Aleykum 😊 tel: (91) 788-80-41";
console.log('%c' + longText, 'font-size: 41px; font-family: "Georgia", serif; color: #FF8225;  font-weight: bold ');


  return (
    <>
    <div>
    <Routes>
     <Route path="/" element={<Main />} />
     </Routes>
    </div>
     
    </>
  )
}

export default App
