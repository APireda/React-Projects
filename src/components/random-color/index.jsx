import { useState } from "react"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')
  const [rgb, setRgb] = useState([])

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
      setRgb([r, g, b])
    }
  }
  
  function transformToRgbUtils(value) {
    const result = {
      'F': 15,
      'E': 14,
      'D': 13,
      'C': 12,
      'B': 11,
      'A': 10
    }

    return result[value] || Number(value)
  }

  function convertRgbToHex(value) {  
    const result = {
      15: 'F',
      14: 'E',
      13: 'D',
      12: 'C',
      11: 'B',
      10: 'A'
    }

    return result[value] || value
  }

  function handleTransformToRgb() {
    if(color[0] !== '#') {
      return
    } else {
      const r = transformToRgbUtils(color[1]) * 16 + transformToRgbUtils(color[2])
      const g = transformToRgbUtils(color[3]) * 16 + transformToRgbUtils(color[4])
      const b = transformToRgbUtils(color[5]) * 16 + transformToRgbUtils(color[6])

      setColor(`rgb(${r}, ${g}, ${b})`)
      setRgb([r, g, b])
      setTypeOfColor(rgb)
    }
  }

  function TransformToHexUtils(value) {
    if(value <= 15) {
        return 0 + convertRgbToHex(value)
      } else {
        const hexCalc = convertRgbToHex(Math.floor(value / 16).toString()) + convertRgbToHex(Math.floor(value % 16).toString())
        return hexCalc
      }
  }

  function handleTransformToHex(){
    if(color[0] === '#') {
      return
    } else {
      let r = rgb[0]
      let g = rgb[1]
      let b = rgb[2]

      setColor(`#${TransformToHexUtils(r)}${TransformToHexUtils(g)}${TransformToHexUtils(b)}`)
      setTypeOfColor('hex')
    }
  }

  return (
    <div style={{
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