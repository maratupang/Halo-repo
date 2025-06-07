// src/components/Profil.jsx

// Komponen ini menerima 'props' sebagai argumen.
// Props adalah objek yang berisi data yang dikirim dari komponen induk.
function Profil(props) {
    // Kita bisa menggunakan 'destructuring' untuk mengambil data dari props
    const { nama, gambarUrl, pekerjaan } = props;
  
    // CSS sederhana di dalam JSX untuk styling (optional)
    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      width: '200px',
      margin: '10px'
    };
  
    const imageStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%' // Membuat gambar menjadi lingkaran
    };
  
    return (
      <div style={cardStyle}>
        <img src={gambarUrl} alt={"Foto " + nama} style={imageStyle} />
        <h2>{nama}</h2>
        <p>{pekerjaan}</p>
      </div>
    );
  }
  
  export default Profil;