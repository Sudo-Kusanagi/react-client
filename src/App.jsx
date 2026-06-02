import { useEffect, useState } from 'react' //ini use state yah? intinya use state fungsinya => setiap ada perubahan lalu CTRL + S , data bisa berubah 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from "axios"
import './App.css'

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [form, setForm] = useState({
    nama: " ",
    nim: " ",
    prodi: " ",
  });

  const API_URL = "127.0.0.1:8000/api/mahasiswa";

  const getMahasiswa = async () => {
    const response = await axios.get(API_URL);
    setMahasiswa(response.data);
  };

  const handleChange = (e) => { //ternyata (e) ini event. kirain error 🗿
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlesS

}
