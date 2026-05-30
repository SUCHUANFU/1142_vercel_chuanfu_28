'use client';

import { useState, useEffect } from 'react';
import Form from './_components/Form_28.tsx';
import { nanoid } from 'nanoid';
import Items from './_components/Items_28.tsx';
import { ToastContainer, toast } from 'react-toastify';
import Wrapper from '../_assets/wrapper/Grocery_28.jsx';

// 定義資料型別
export interface Item {
  id: string;
  name: string;
  completed: boolean;
}

const getLocalStorage = (): Item[] => {
  if (typeof window !== 'undefined') {
    const list = localStorage.getItem('list');
    return list ? JSON.parse(list) : [];
  }
  return [];
};

const setLocalStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const GroceryPage_28 = () => {
  // 指定 useState 的型別為 Item 陣列
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedList = getLocalStorage();
    if (storedList.length > 0) {
      setItems(storedList);
    }
  }, []);

  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  };

  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' />
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_28;
