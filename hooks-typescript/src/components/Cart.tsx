import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import CartContext from 'context/CartContext'

interface Product {
  id: number
  name: string
  price: number
}

export const Cart: React.FC = () => {
  const [product, setProduct] = useState<Product>()
  const { cart, addProduct } = useContext(CartContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const productsNames = useMemo(
    () => cart.products?.map(product => product.name).join(', '),
    [cart.products]
  )

  const greeting = useCallback(
    (name: string) => console.log(`Hello ${name}`),
    []
  )

  const newProduct = useCallback((name: string) => {
    const id = Number((Math.random() * 10).toFixed(0))
    const price = Number((Math.random() * 10).toFixed(0))
    setProduct({
      id,
      name,
      price,
    })
  }, [])

  useEffect(() => {
    greeting('Raul')
    inputRef.current?.focus()
  }, [])

  return (
    <div style={{ border: '2px dashed #3ab0ff', padding: '10px' }}>
      <h1
        style={{ color: '#3ab0ff' }}
      >{`useCallback - useContext - useEffect - useMemo - useRef - useState`}</h1>
      <h1>{cart ? productsNames : 'Loading...'}</h1>
      <input
        type="text"
        ref={inputRef}
        onInput={e => newProduct((e.target as HTMLInputElement).value)}
      />
      <button onClick={() => (product ? addProduct(product) : null)}>
        Add Product
      </button>
    </div>
  )
}
