'use client';

import SocialsMedia from './SocialsMedia';
import './SocialsGroup.scss';

export default function SocialsGroup({ className }) {
  const socials = [
    { platform: 'GitHub', to: 'https://github.com/Mercyaksss', colorClass: 'github' },
    { platform: 'LinkedIn', to: 'https://www.linkedin.com/in/yourprofile/', colorClass: 'linkedin' },
    { platform: 'Instagram', to: 'https://www.instagram.com/kyliejenner/', colorClass: 'instagram' },
  ];

  return (
    <div className={`socials-group ${className || ''}`}>
      {socials.map((social) => (
        <SocialsMedia
          key={social.platform}
          platform={social.platform}
          to={social.to}
          colorClass={social.colorClass}
        />
      ))}
    </div>
  );
}