
import './Sobre.css'
import IMAGEM from '../assets/logo1.png'




function Sobre() {
  return (
    <>
      <h1>Bem vindo a Savvy Finanças</h1>
      <div className='cl2'>
        <div><img id='cl4' src={IMAGEM} /></div>
        <div id='cl3'>A Savvy finanças é uma solução digital desenvolvida para ajudar as pessoas a controlar suas finanças de forma simples e prática. Com dicas e orientações que facilitam o controle do seu dinheiro.
          <br />Criada por estudantes de Programação Web em Dezembro de 2023. A equipe de desenvolvimento desse sistema esta muito otimista com o plano de expansão da ferramenta que sofrerá atualizações já em 2024.
        </div>
      </div>

    </>
  )
}

export default Sobre
