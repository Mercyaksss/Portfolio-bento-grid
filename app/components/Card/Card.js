'use client';
import './Card.scss';

export default function Card({ children, className = '', clickable = false }) {
  return (
    <div className={`card ${className} ${clickable ? 'clickable' : ''}`}>
      {children}
    </div>
  );
}