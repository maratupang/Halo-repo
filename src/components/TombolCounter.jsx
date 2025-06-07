import React, { useState } from 'react'; // Jangan lupa impor useState
// import React from '@vitejs/plugin-react-swc';

function TombolCounter() {
  // useState mengembalikan array: [nilai saat ini, fungsi untuk mengubah nilai]
  // Kita memberinya nilai awal 0.
  const [jumlahKlik, setJumlahKlik] = useState(0);

  // Fungsi yang akan dijalankan saat tombol diklik
  function handleKlik() {
    setJumlahKlik(jumlahKlik + 1); // Perbarui nilai state
  }

  return (
    <div>
      <p>Tombol ini telah diklik sebanyak: {jumlahKlik} kali</p>
      {/* 'onClick' adalah event handler di React */}
      <button onClick={handleKlik}>
        Klik Saya!
      </button>
    </div>
  );
}

export default TombolCounter;