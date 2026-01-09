'use client';

import Card from '../Card/Card';
import './ContactCard.scss';
import {Copy}from 'lucide-react'


export default function ContactCard({className}) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('john.doe@example.com');
    alert('Email copied to clipboard!');
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
          <Copy/>
        </button>
      </div>
    </Card>
  );
}