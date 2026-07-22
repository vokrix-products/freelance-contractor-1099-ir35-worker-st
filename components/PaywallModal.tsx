import React from 'react';
const PaywallModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div>
      <h2>Free limit reached</h2>
      <p>Upgrade</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default PaywallModal;
