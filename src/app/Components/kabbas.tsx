import React from 'react';
import './styles/kabbas.css';

interface KabbasProps {
  title: string;
  description: string;
  index: number;
  onClick: (index: number) => void;
  isOpen: boolean;
}

const Kabbas: React.FC<KabbasProps> = ({ title, description, index, onClick, isOpen }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div className={`kabbas ${isOpen ? 'open' : ''}`}>
      <div className="kabbas-header" onClick={handleClick}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="kabbas-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Kabbas;
