import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [data, setData] = useState(1)
  let [listData, setListData] = useState(['list1', 'list2', 'list3'])
  
  //모달 bg 흐림처리
  let [mView,setMView] = useState(false)
  
  //시간값
  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1, //0부터 시작해서 +1
    date: today.getDate()
  }
  return (
    <div className="App">
      <div>{data}</div>
      <button onClick={() => { setData(data + 1) }}>클릭</button>
      {
        listData.map(function (item, i) {
          return (
            <>
              <div className='flex'>
                <div className='list'>{listData[i]}</div>
                <div>{time.year}/{time.month}/{time.date}</div>
              </div>
            </>
          )
        })
      }
      <button onClick={()=>{setMView(!mView)}}>클릭</button>
      {
        mView == true ?  <Modal></Modal> : null
      }
    </div>
  );
}
//component : 자바의 Bean역할과 유사
function Modal() {
  return (
    <>
      <div className='modal'>
        <h1>푸린</h1>
        <p>불면증이 치료되는것 같아</p>
      </div>
    </>
  )
}

export default App;
