import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartModal.scss';

interface CartModalProps {
  cartItems: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
    color: string;
    brand: string;
  }[];
  handleAddToCart: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;
  handleRemoveItem: (id: number) => void; // Add this new prop
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  handleRemoveItem, // Add this new prop
  onClose,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal" ref={modalRef}>
        <div className="cart-modal__content">
          <header className="cart-modal__header">
            <h2>Корзина</h2>
            <button className="cart-modal__close" onClick={onClose}>
              ×
            </button>
          </header>
          <ul className="cart-modal__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-modal__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-modal__item-image"
                />
                <div className="cart-modal__item-details">
                  <span className="cart-modal__item-name">{item.name}</span>
                  <span className="cart-modal__item-brand">{item.brand}</span>
                  <span className="cart-modal__item-color">{item.color}</span>
                </div>
                <div className="cart-modal__item-controls">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="cart-modal__item-quantity">
                    {item.quantity}
                  </span>
                  <button onClick={() => handleAddToCart(item.id)}>+</button>
                </div>
                <div className="cart-modal__item-price">
                  <span>{item.price} ₽</span>
                </div>
                <button
                  className="cart-modal__item-remove "
                  onClick={() => handleRemoveItem(item.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <footer className="cart-modal__footer">
            <h3>Итого: {totalPrice.toFixed(2)} ₽</h3>
            <Link to="/checkout">
              <button disabled={cartItems.length === 0}>
                Перейти к оформлению
              </button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
