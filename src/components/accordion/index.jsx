import { useState } from "react"
import './styles.css'

export default function Accordion({ data }) {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId){
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

    if(selected != null) {
      cpyMultiple.push(selected)
      setSelected(null)
    }

    if(findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId)
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1)
    }

    setMultiple(cpyMultiple)
  }

  return <div className="wrapper">
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>

    <div className="accordion">
      {data && data.length > 0 ? (
        data.map(dataItem => 
        <div className="item"
        onClick={enableMultiSelection 
            ? () => handleMultiSelection(dataItem.id) 
            : () => handleSingleSelection(dataItem.id)
          }
        >
          <div className="title">
            <h3>{dataItem.question}</h3>
            <span>+</span>
          </div>
          {
            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
              <div className="content">{dataItem.answer}</div>
            ): null
          }
        </div>)
        ): <div>No data found!</div>
      }
    </div>
  </div>
}