
import './Conteudo.css'

import BANNER from '../assets/Banner.gif'

import IMG1 from '../assets/img1.png'
import IMG2 from '../assets/img2.png'
import IMG3 from '../assets/img3.png'
import IMG4 from '../assets/img4.png'
import IMG5 from '../assets/img5.png'
import IMG6 from '../assets/img6.png'
import Controle from '../views/Controle';
import Faq from '../views/Faq';




function Conteudo() {

  return (
    <>
      <div className='banner'><img src={BANNER} /></div >
      <div className='titulo1'><h1>Você, no controle <br />das suas finanças</h1></div>
      <div className='icons'>
        <div className='icons1'><img src={IMG1} /></div>
        <div className='icons1'><img src={IMG4} /></div>
      </div>
      <div className='texto'>
        <div className='texto1'>Cuidar do seu dinheiro por meio do controle financeiro pessoal é a base para uma vida financeira saudável.</div>
        <div className='texto1'>A disciplina financeira é a ponte entre metas <br /> e realizações.</div>
      </div>

      <div className='icons'>
        <div className='icons1'><img src={IMG2} /></div>
        <div className='icons1'><img src={IMG3} /></div>
      </div>
      <div className='texto'>
        <div className='texto1'>O sucesso financeiro começa com uma mentalidade de abundância e ação consistênte.</div>
        <div className='texto1'>Gastar menos não significa abrir mão, mas sim priorizar o que realmente importa.</div>
      </div>

      <div className='icons'>
        <div className='icons1'><img src={IMG5} /></div>
        <div className='icons1'><img src={IMG6} /></div>
      </div>
      <div className='texto'>
        <div className='texto1'>O dinheiro não é o objetivo final, mas sim o meio para realizar objetivos.</div>
        <div className='texto1'>A economia é a arte de fazer mais com menos.</div>
      </div>

      <div className='app'>
        <div>FAÇA O TESTE GRATUITAMENTE</div>
      </div>

      <Controle />
      <Faq />










    </>
  )
}

export default Conteudo