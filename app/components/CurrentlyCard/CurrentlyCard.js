import Card from '../Card/Card';
import './CurrentlyCard.scss';


export default function Currently({className}) {
  return (
   <Card className={`currently-card ${className || ''}`}>
      <h2>_Currently</h2>
      <p>Open to junior / trainee frontend roles and short-term freelance gigs. </p>
    </Card>
  );
}