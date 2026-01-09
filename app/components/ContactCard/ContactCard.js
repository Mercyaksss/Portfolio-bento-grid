'use client';

import { useState } from 'react';
import Card from '../Card/Card';
import './ContactCard.scss';
import { Copy } from 'lucide-react';

export default function ContactCard({className}) {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mercyaksss625@gmail.com');
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <Card className={`contact-card ${className || ''}`}> 
      <div className="contact-content">
        <p>
          Have a project in mind?
        </p>
        
        <button 
          className="cta-button"
          onClick={handleCopyEmail}
        >
          Copy email
          <Copy size={16} />
        </button>

        {/* Toast notification */}
        {showToast && (
          <div className="toast">
            <Copy size={16} />
            <span>Email copied to clipboard!</span>
          </div>
        )}
      </div>
    </Card>
  );
}