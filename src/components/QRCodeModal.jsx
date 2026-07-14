import React from 'react';
import QRCode from 'qrcode.react';
import './QRCodeModal.css';

export default function QRCodeModal({ isOpen, onClose, websiteUrl }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.getElementById("qr-code");
    const canvas = element.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "work-fit-qr-code.png";
    link.href = url;
    link.click();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2>Share Work-Fit</h2>
        <p>Scan this QR code to access the Work-Fit Database</p>
        
        <div className="qr-container" id="qr-code">
          <QRCode 
            value={websiteUrl} 
            size={250}
            level="H"
            includeMargin={true}
            fgColor="#10516f"
            bgColor="#ffffff"
          />
        </div>
        
        <div className="url-display">
          <p><strong>Website URL:</strong></p>
          <p className="url-text">{websiteUrl}</p>
        </div>
        
        <button className="download-btn" onClick={handleDownload}>
          Download QR Code
        </button>
        
        <p className="instructions">
          You can print this QR code and post it around the plant for employees to scan!
        </p>
      </div>
    </div>
  );
}
