import React from 'react';
const Navbar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '60px',
        width: '100%',
        backgroundColor: '#C3C3C3',
        marginBottom: '40px',
        alignItems: 'center',
      }}
    >
      <div style={{ margin: '15px' }}>AppLogo</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ margin: '10px' }}>Item</div>
        <div style={{ margin: '10px' }}>Item</div>
        <div style={{ margin: '10px' }}>Item</div>
      </div>
    </div>
  );
};

export default Navbar;
