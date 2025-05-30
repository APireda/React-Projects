import { useState } from "react"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#FF5733')

  function randomColorGenerator(length) {
    return Math.floor(Math.random() * length)
  }

  function handleCreateRandomColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
 
    if(typeOfColor === 'hex') {
      for(let i=0; i<6; i++) {
        hexColor += hex[randomColorGenerator(hex.length)]
      }
  
      setColor(hexColor)
      setTypeOfColor('hex')
    } else {
      const r = randomColorGenerator(256)
      const g = randomColorGenerator(256)
      const b = randomColorGenerator(256)

      setColor(`rgb(${r}, ${g}, ${b})`)
    }
  }
  
  function transformToRgbUtils(value) {
    if(value === 'F') {
      return Number(value.replace('F', 15))
    }
    if(value === 'E') {
      return Number(value.replace('E', 14))
    }
    if(value === 'D') {
      return Number(value.replace('D', 13))
    }
    if(value === 'C') {
      return Number(value.replace('C', 12))
    }
    if(value === 'B') {
      return Number(value.replace('B', 11))
    }
    if(value === 'A') {
      return Number(value.replace('A', 10))
    }else {
      return Number(value)
    }
  }

  function handleTransformToRgb() {
    if(color[0] !== '#') {
      return
    } else {
      const r = transformToRgbUtils(color[1]) * 16 + transformToRgbUtils(color[2])
      const g = transformToRgbUtils(color[3]) * 16 + transformToRgbUtils(color[4])
      const b = transformToRgbUtils(color[5]) * 16 + transformToRgbUtils(color[6])

      setColor(`rgb(${r}, ${g}, ${b})`)
      setTypeOfColor('rgb')
    }
  }

  function TransformToHexUtils(value) {

  }

  function handleTransformToHex(){
    if(color[0] === '#') {
      return
    } else {
      console.log(color)
    }
  }

  return (
    <div className="container" style={{
      width: '100vw',
      height: '100vh',
      background: color,
    }}>
      <button onClick={handleTransformToHex}>Switch to HEX Color</button>
      <button onClick={handleTransformToRgb}>Switch to RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}