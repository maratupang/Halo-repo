// src/components/Salam.jsx

// Ekspor komponen Salam
export function Salam() {
    return <h2>Halo dari komponen terpisah!</h2>;
  }
  
  // Ekspor juga komponen Salam2
  export function Salam2(props) {
    return <h2>Halo, {props.nama}! Selamat datang.</h2>;
  }