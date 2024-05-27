import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shop.scss';
import { PageContainer, ProductCard, CartModal } from '../../components/index';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
  brand: string;
}

interface Cart {
  [key: number]: number;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://66410886a7500fcf1a9f6434.mockapi.io/shop_data')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const cartItems = Object.keys(cart)
    .map((id) => {
      const product = products.find((product) => product.id === parseInt(id));
      return product ? { ...product, quantity: cart[parseInt(id)] } : null;
    })
    .filter((item): item is Product & { quantity: number } => item !== null);

  const totalItems = Object.values(cart).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <PageContainer>
      <div className="shop">
        <header className="shop-header">
          <h1>Магазин</h1>
          <p>Выбери свой любимый мерч!</p>
          <div
            className="cart-icon-container"
            onClick={() => setIsCartModalOpen(true)}
          >
            <span className="cart-text">Корзина</span>
            {totalItems > 0 && (
              <span className="cart-icon__badge">{totalItems}</span>
            )}
          </div>
        </header>
        <main className="shop-main">
          {products.map((product) => (
            <div key={product.id} className="product-card-wrapper">
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          ))}
        </main>
        {isCartModalOpen && (
          <CartModal
            cartItems={cartItems}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleRemoveItem={handleRemoveItem}
            onClose={() => setIsCartModalOpen(false)}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default Shop;
