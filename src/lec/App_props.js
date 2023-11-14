import { useState } from 'react';
import './App.css'
import Modal from '../components/ModalView.jsx';
function App() {
  const [num, setnum] = useState(0)
  const [data,setdata] = useState([
    "Lorem ipsum, dolor sit amet consectetur ",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam error, amet quibusdam rem delectus dolor! Laboriosam iusto qui deserunt! Minus delectus deleniti eum sint dolorem inventore.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam dolorem maxime non. At ratione cumque facilis illo quae, voluptatum minus natus explicabo quaerat saepe, alias incidunt. Odio, dolore error.",
    
  ])
  // function handlerTab() {
  //   setnum(1)
  // }
  return (
    <div className="App">
      {/* <Modal /> */}
      {num}
      <div className='tab'>
        <ul>
            <li onClick={()=>{setnum(0)}} className={`${num==0 ? "active" : ""}`}>tab1</li>
            <li onClick={()=>{setnum(1)}} className={`${num==1 ? "active" : ""}`}>tab2</li>
            <li onClick={()=>{setnum(2)}} className={`${num==2 ? "active" : ""}`}>tab3</li>
        </ul>
      </div>
        <div style={{margin:"0 0 10px 0"}}>
          {data[num]}
        </div>
        <hr/>
          <ul>
            {
              data.map(function(item,i){
                return(
                  <>
                  <li onClick={()=>{setnum(i)}}>{item}</li>
                  </>
                )
              })
            }
          </ul>
          <Modal2 rData={data} rNum = {num}/>
       </div>
  );
}

function Modal2(props){
  return(
    <>
      <div className='modal'>
        <h3>{props.rData[props.rNum]}</h3>
        <p></p>
      </div>
    </>
  )
}

export default App;