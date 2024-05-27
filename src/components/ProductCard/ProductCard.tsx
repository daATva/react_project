import React from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">{price.toFixed(2)} ₽</p>
        <div className="product-card__actions">
          <button onClick={() => onAddToCart(id)}>В корзину </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
