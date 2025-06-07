// import React from 'react';
import KartuProfil from './KartuProfil'; // Impor komponen KartuProfil
import Function1 from './function1';

function GaleriProfil() {
  return (
    <div>
      <h1>Tim Kami</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Menggunakan kembali komponen KartuProfil dengan props yang berbeda */}
        <KartuProfil 
          nama="Budi" 
          pekerjaan="Frontend Developer" 
          gambarUrl="https://i.pravatar.cc/150?img=1" 
        />
        <KartuProfil 
          nama="Citra" 
          pekerjaan="UI/UX Designer" 
          gambarUrl="https://i.pravatar.cc/150?img=5" 
        />
        <KartuProfil 
          nama="Dewi" 
          pekerjaan="Backend Developer" 
          gambarUrl="https://i.pravatar.cc/150?img=8" 
        />
      </div>
    </div>
  );
}

export default GaleriProfil;