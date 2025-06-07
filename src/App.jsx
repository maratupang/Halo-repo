import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Function1 from './components/function1'
import Profil from './components/profil'
// import Salam from './components/salam'
import GaleriProfil from './components/GaleriProfil'
import TombolCounter from './components/TombolCounter'
import { Salam2, Salam } from './components/salam'

function App3() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <h1>Halo dunia</h1>
      <p>Saya Sedang belajar React. Ini Keren!!!</p>
      <Salam /> {/* Gunakan komponen seperti tag HTML */}
      {/* <Salam /> Anda bisa menggunakannya berkali-kali */}
      <br />
      <Function1 />
<br />
      <p>Function salam 2</p>
      <Salam2 nama='Yana Agustus Salam2' />
     
    </>
  )
}

function Bkk() {
  return (
    // Gunakan div untuk membungkus beberapa profil agar lebih rapi
    <div className="container">
      {/* Komponen lama Anda masih bisa digunakan */}
      <Function1 />

      <hr /> {/* Garis pemisah untuk kerapian */}

      {/* 2. Panggil komponen Profil di sini */}
      <div style={{ display: 'flex' }}> {/* Mengatur tata letak agar berdampingan */}
        
        {/* Memanggil Profil untuk pengguna pertama */}
        <Profil
          nama="Yana Agustiansyah"
          pekerjaan="Software Developer"
          gambarUrl="https://i.pravatar.cc/150?u=yana" // URL gambar acak
        />

        {/* Anda bisa menggunakannya berkali-kali dengan data berbeda! */}
        <Profil
          nama="Budi Santoso"
          pekerjaan="UI/UX Designer"
          gambarUrl="https://i.pravatar.cc/150?u=budi"
        />

        <Profil
          nama="Citra Lestari"
          pekerjaan="Project Manager"
          gambarUrl="https://i.pravatar.cc/150?u=citra"
        />
      </div>
    </div>
  );
}

function ZXX() {
  // Tombol Baru
  return (
    <div className="App">
      <header className="App-header">
        <Salam />
        <hr />
        <GaleriProfil />
        <hr />
        <h2>Contoh State dan Event</h2>
        <TombolCounter />
      </header>
    </div>
  );
}

export default App3
