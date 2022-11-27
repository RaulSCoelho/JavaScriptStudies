import React, { useCallback, useMemo, useState } from 'react'

import { Flex } from 'components/Flex'
import { Item } from 'Memo&Callback/components/Item'

export const MemoCallback: React.FC = () => {
  const [items, setItems] = useState<string[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    if (!items.includes(newItem)) {
      setItems([
        ...items,
        newItem === '' ? `item ${items.length + 1}` : newItem,
      ])
      setNewItem('')
    }
  }

  const AddToWishlist = useCallback((item: string) => {
    setWishlist(state => [...state, item])
  }, [])

  const countItemsWithOne = useMemo(() => {
    return items.filter(item => item.includes('1')).length
  }, [items])

  return (
    <Flex height="100vh" justifyContent="start">
      CountItemsWithOne: {countItemsWithOne}
      <br />
      <input
        id="newItem"
        type="text"
        onInput={e => setNewItem((e.target as HTMLButtonElement).value)}
        value={newItem}
      />
      <button onClick={addItemToList}>Add Item</button>
      <ul>
        {items.map(item => {
          return (
            <Item
              key={item}
              title={wishlist.includes(item) ? item + '❤' : item}
              onAddToWishlist={AddToWishlist}
              countItemsWithOne={countItemsWithOne}
            />
          )
        })}
      </ul>
    </Flex>
  )
}
