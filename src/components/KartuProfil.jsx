// import React from 'react';

// Kita menerima 'props' sebagai argumen
// Ini adalah cara yang lebih bersih dengan "destructuring" props
function KartuProfil({ nama, pekerjaan, gambarUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center', width: '200px' }}>
      <img 
        src={gambarUrl} 
        alt={`Foto ${nama}`} 
        style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
      />
      <h2>{nama}</h2>
      <p>{pekerjaan}</p>
    </div>
  );
}

export default KartuProfil;