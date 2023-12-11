
import './Sobre.css'

import IMAGEM from '../assets/Imagem5.png'





function Sobre() {
  return (
    <>
      <h1>Bem vindo a Savvy Finanças</h1>
      <div className='cl2'>
        <div><img id='cl4' src={IMAGEM} /></div>
        <div id='cl3'>A Savvy finanças é uma solução digital desenvolvida que visa ajudar as pessoas a gerenciar suas finanças de forma simples, prática e eficiente.  Nele, compartilhamos informações, dicas e orientações que podem auxiliar os visitantes a conquistar uma vida financeira mais saudável e estável.
          <br />Criada por estudantes de Programação Web em Dezembro de 2023. A equipe de desenvolvimento desse sistema esta muito otimista com o plano de expansão da ferramenta que sofrerá atualizações já em 2024.
        </div>
      </div>

    </>
  )
}

export default Sobre
