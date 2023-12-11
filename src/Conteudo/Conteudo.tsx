
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
        <div className='texto1'>Cuidar do seu dinheiro por meio do controle financeiro pessoal é muito mais do que apenas administrar as finanças diárias. É a base sólida para uma vida financeira saudável e próspera no longo prazo. Ao adotarmos o controle financeiro pessoal, estamos assumindo a responsabilidade de gerenciar nossas finanças de forma consciente, proativa e estratégica.</div>
        <div className='texto1'>A disciplina financeira é o caminho que nos leva a alcançar nossas metas financeiras de forma consistente e eficaz. <br /> Ela envolve a adoção de hábitos e práticas responsáveis no gerenciamento do dinheiro, permitindo-nos controlar nossos gastos, economizar e investir de maneira inteligente.</div>
      </div>

      <div className='icons'>
        <div className='icons1'><img src={IMG2} /></div>
        <div className='icons1'><img src={IMG3} /></div>
      </div>
      <div className='texto'>
        <div className='texto1'>Para alcançar o sucesso financeiro, é fundamental adotar uma mentalidade de abundância e agir de forma consistente. A mentalidade de abundância envolve acreditar que existem recursos e oportunidades infinitas disponíveis para todos. Ao cultivar essa mentalidade, você expande sua visão sobre o que é possível alcançar financeiramente e se liberta de limitações autoimpostas.</div>
        <div className='texto1'>Quando falamos em gastar menos, muitas vezes é fácil pensar que estamos abrindo mão de coisas que gostamos ou desejamos. No entanto, gastar menos não significa necessariamente abrir mão de tudo, mas sim priorizar aquilo que realmente importa em nossas vidas.</div>
      </div>

      <div className='icons'>
        <div className='icons1'><img src={IMG5} /></div>
        <div className='icons1'><img src={IMG6} /></div>
      </div>
      <div className='texto'>
        <div className='texto1'>O dinheiro não é o objetivo final, mas sim o meio para realizar objetivos. Ao adotarmos essa perspectiva, podemos utilizar o dinheiro de forma mais estratégica e consciente, direcionando-o para aquilo que realmente importa e buscando uma vida repleta de propósito e significado. É uma abordagem que nos permite aproveitar ao máximo nossos recursos financeiros e criar uma vida alinhada com nossos valores e aspirações.</div>
        <div className='texto1'> A economia é muito mais do que apenas poupar dinheiro. Ela é uma abordagem inteligente e eficiente para utilizar recursos de forma consciente e estratégica, tanto em nossas finanças pessoais quanto na gestão de negócios. Ao fazer mais com menos, podemos alcançar resultados melhores.</div>
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