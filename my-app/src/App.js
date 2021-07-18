import './App.css';
import { useState, useEffect } from 'react';
import Routes from './routes';
import ProductApi from './api/ProductApi';
import CategoryApi from './api/CategoryApi';



function App() {

  const [products, setProducts] = useState([]); // 1
  const [categories, setCategories] = useState([]);

  // 3
  useEffect(() => {
    // didMount 
    const fetchData = async () => {
      try {
        // neu thanh cong
        const { data: products } = await ProductApi.getAll();
        setProducts(products);
      } catch (error) {
        //neu that bai
        console.log(error)
      }
    }
    fetchData();
  }, [])

  const addItem = async (item) => {
    try {
      await ProductApi.add(item);
      setProducts([
        ...products,
        item
      ])
    } catch (error) {
      console.log(error)
    }
    console.log(item)

  }
  const updateItem = async (id, data) => {
    try {
      await ProductApi.update(id, data);
      const newProduct = products.map((item) =>
        item._id === id ? data : item
      );
      setProducts(newProduct)

    } catch (error) {
      console.log(error)
    }

  }
  const removeItem = async (id) => {
    try {
      await ProductApi.remove(id);
      const remoteProduct = products.filter(product => product._id != id);
      setProducts(remoteProduct);
    } catch (error) {

    }

  }

  useEffect(() => {
    // didMount 
    const fetchData = async () => {
      try {
        // neu thanh cong
        const { data: categories } = await CategoryApi.getAll();
        setCategories(categories);
      } catch (error) {
        //neu that bai
        console.log(error)
      }
    }
    fetchData();
  }, [])
  const addCate = async (item) => {
    try {
      await CategoryApi.add(item);
      setCategories([
        ...categories,
        item
      ])
    } catch (error) {
      console.log(error)
    }
    console.log(item)
  }
  const updateCate = async (id, data) => {

    try {
      await CategoryApi.update(id, data);
      const newCategory = categories.map((item) =>
        item._id === id ? data : item
      );
      setCategories(newCategory)

    } catch (error) {
      console.log(error)
    }

  }

  const removeCate = async (id) => {
    try {
      await CategoryApi.remove(id);
      const newCategories = categories.filter(category => category._id != id);
      setCategories(newCategories);
    } catch (error) {
      console.log(error)
    }
  }

  return ( // 2
    <div className="container mx-auto">
      <Routes products={products} onDelete={removeItem} onAdd={addItem} onUpdate={updateItem} categories={categories} onAddCate={addCate} onDeleteCate={removeCate} onUpdateCate={updateCate} />
    </div>
  );
}

export default App;
