import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error-page';
import ProductDetails from './pages/productDetails';
import ProductsDisplay from './pages/productsDisplay';
import ProductForm from './pages/productForm';
import ShoppingCart from './pages/shoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <ProductsDisplay />,
  },
  {
    path: "addProduct",
    element: <ProductForm />,
  },
  {
    path: "shoppingCart",
    element: <ShoppingCart />,
  },
  {
    path: "products/:productId",
    element: <ProductDetails />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
