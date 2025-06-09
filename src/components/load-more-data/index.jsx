import { useState, useEffect } from 'react'
import './styles.css'

export default function LoadMoreData({ url }) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [count, setCount] = useState(0)
  const [disabledButton, setDisabledButton] = useState(false)

  async function fetchProducts(getUrl) {
    try {
      setLoading(true)

      const response = await fetch(`${getUrl}&skip=${count * 20}`)
      const result = await response.json()
      
      if(result && result.products && result.products.length && count === 0) {
        setProducts(result.products)
        setLoading(false)
      } else {
        setProducts((prevData) => [...prevData, ...result.products])
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }
  }
  console.log(products)

  useEffect(() => {
    if(url !== "") fetchProducts(url);
  }, [count])

  useEffect(() => {
    if(products && products.length ===194) setDisabledButton(true)
  }, [products])

  if(loading) {
    return <div>Loading data! Please wait.</div>
  }

  if(errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>
  }

  return <div className="load-more-container">
    <div className='product-container'>
      {
        products && products.length ?
          products.map(product => <div className='product' key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>)
        : null
      }
    </div>
    <div className='button-container'>
      <button disabled={disabledButton} onClick={() => setCount(count + 1)}>Load More Products</button>
    </div>
  </div>
}