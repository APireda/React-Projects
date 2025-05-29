import { useState } from "react"
import './styles.css'

export default function Accordion({ data }) {
  const [selected, setSelected] = useState([])
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)

  function handleSelection(getCurrentId) {
    if (!enableMultiSelection) {
      selected.indexOf(getCurrentId) ?  setSelected([getCurrentId]) : setSelected([])
      return
    }

    const cpySelected = [...selected]

    if(selected.indexOf(getCurrentId) !== -1) {
      cpySelected.splice(cpySelected.indexOf(getCurrentId), 1)
    } else {
      cpySelected.push(getCurrentId)
    }
    
    setSelected(cpySelected)
  }

  function handleMultiSelection() {
    if(enableMultiSelection) {
      setSelected([])
    }

    setEnableMultiSelection(!enableMultiSelection)
  }

  return <div className="wrapper">
    <button onClick={handleMultiSelection}>Enable Multi Selection</button>

    <div className="accordion">
      {data && data.length > 0 ? (
        data.map(dataItem => 
        <div className="item" onClick={() => handleSelection(dataItem.id)}>
          <div className="title">
            <h3>{dataItem.question}</h3>
            <span>+</span>
          </div>
          {
            selected.indexOf(dataItem.id) !== -1 ? (
              <div className="content">{dataItem.answer}</div>
            ): null
          }
        </div>)
      ): <div>No data found!</div>
      }
    </div>
  </div>
}