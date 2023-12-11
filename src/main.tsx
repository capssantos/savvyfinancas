
import ReactDOM from 'react-dom/client'

import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Conteudo from './Conteudo/Conteudo.tsx'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
import Contato from './views/Contato.tsx'
import Controle from './views/Controle.tsx'
import Time from './views/Time.tsx'
import Faq from './views/Faq.tsx'
import Sobre from './views/Sobre.tsx'






ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Conteudo />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/controle' element={<Controle />} />
      <Route path='/time' element={<Time />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/sobre' element={<Sobre />} />
    </Routes>
    <Footer />

  </BrowserRouter>,
)
