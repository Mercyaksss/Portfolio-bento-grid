import Image from 'next/image';
// import Card from '../Card/Card';
import photo1 from '../../assets/photo2.png'
import './PhotoCard.scss';

export default function PhotoCard({className}) {
  return (
    <div className={`photo-card ${className || ''}`}>
      <Image src={photo1} alt="Mercy - Frontend Developer" />
    </div>
  );
}