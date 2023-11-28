import './App.css'
import Handout from './handout'
import { useState } from 'react'

export default function App() {
  const [limVal, setLimVal] = useState(15);
  const [rowVal, setRowVal] = useState(5);
  const [colVal, setColVal] = useState(3);
  const [refresh, setRefresh] = useState(Math.random());
  return (
    <>
      <main>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap" rel="stylesheet" /> 
        <section className="controls">
          <header className="ctrlHeader">
            <h1 className="chInfo">Controls</h1>
            <button className="refresh" onClick={()=>{setRefresh(Math.random());}}>Refresh</button>
            <button className="ctrlPrint" onClick={()=>{window.print()}}>Print</button>
          </header>
          <article className="cProper">
            <section className="ctrl">
              <span className="clabel" title="Accepts values of 1-5" >Rows: </span>
              <input type="text" className="cinput" value={rowVal} onKeyDown={(e)=>{
                let code: string = e.code;
                if (code == 'ArrowUp' && rowVal < 5) {
                  e.preventDefault();
                  setRowVal(rowVal+1);
                } else if (code == 'ArrowDown' && rowVal > 1) {
                  e.preventDefault();
                  setRowVal(rowVal-1);
                }
              }}
              onChange={(e)=>{
                let value: string = e.target.value;
                if (value.match('^[0-5]{0,2}$')) setRowVal(Number(value.charAt(value.length - 1)));
              }} />
            </section>
            <section className="ctrl">
              <span className="clabel" title="Accepts values of 1-5" >Columns: </span>
              <input type="text" className="cinput" value={colVal} onKeyDown={(e)=>{
                let code: string = e.code;
                if (code == 'ArrowUp' && colVal < 5) {
                  e.preventDefault();
                  setColVal(colVal+1);
                } else if (code == 'ArrowDown' && colVal > 1) {
                  e.preventDefault();
                  setColVal(colVal-1);
                }
              }}
              onChange={(e)=>{
                let value: string = e.target.value;
                if (value.match('^[0-5]{0,2}$')) setColVal(Number(value.charAt(value.length - 1)));
              }} />
            </section>
            <section className="ctrl">
              <span className="clabel" title="Accepts values of 0-999" >Limit: </span>
              <input type="text" className="cinput" value={limVal} onKeyDown={(e)=>{
                let code: string = e.code;
                if (code == 'ArrowUp' && limVal < 999) {
                  e.preventDefault();
                  setLimVal(limVal+1);
                } else if (code == 'ArrowDown' && limVal > 1) {
                  e.preventDefault();
                  setLimVal(limVal-1);
                }
              }}
              onChange={(e)=>{
                let value: string = e.target.value;
                if (value.match('^[0-9]{0,3}$')) setLimVal(Number(value));
              }} />
            </section>
          </article>
        </section>
        <Handout rows={rowVal} columns={colVal} limit={limVal} key={refresh} />
      </main>
    </>
  )
}
