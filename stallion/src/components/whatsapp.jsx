
import React from 'react';


const WhatsAppButton = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
      <img src="whatsapp.png" alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppButton;
