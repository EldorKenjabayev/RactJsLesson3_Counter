import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';

class Count extends React.Component{
state ={
  qadam: 0,
  qadam2: 1
}

BtnYurish = () =>{
  let qadam = this.state.qadam
  let qadam2 = this.state.qadam2
  qadam += qadam2
  this.setState({
    qadam: qadam,
    qadam2: qadam2
  })
}

BtnQadamlarniKengyatirish = () =>{
  let qadam2 = this.state.qadam2
  qadam2++
  this.setState({
    qadam2: qadam2
  })
}

render(){
  return(
    <div className="count">
      <div className="counter1" style={{width:'500px', border:'1px solid #000', padding:'4%'}}>
        <h2> <span>{this.state.qadam}</span> metr</h2>
        <button onClick={this.BtnYurish}>Yurish</button>
      </div>
      <div className="counter1" style={{width:'500px', border:'1px solid #000', padding:'4%'}}>
        <h2>Qadamlarning kattaligi: <span>{this.state.qadam2}</span></h2>
        <button onClick={this.BtnQadamlarniKengyatirish}>Qadamlarni Kengaytirish</button>
      </div>
    </div>
  )
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Count/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
