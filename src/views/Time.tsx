
import './Time.css'
import ARLIANE from '../assets/Arliane.png'
import GIOVANNA from '../assets/Giovanna.jpg'
import JULIANA from '../assets/Juliana.png'
import MEL from '../assets/Mel.jpg'
import YASMIN from '../assets/Yamin.png'
import CARLOS from '../assets/Carlos.png'



function Time() {

    return (
        <>
            <div id='nossotime'><h1>Nosso time</h1></div>
            <div ><h4 id='subtitulo' >Conheça os integrantes desse projeto</h4></div>
            <div id='geral'>


                <div className='casa'>
                    <div className='casa1'>
                        <section><img src={ARLIANE} /></section>
                        <p className='dad1'>Arliane Severiano Anunciação Reis
                            <br />37 anos
                            <br />@arliane_es
                        </p>

                        <br /> Técnica em óptica e optometria. Atuando a 10 anos na area de gerência no ramo óptico.
                        <br /> Hoje também atuando como Programadora Web.Com habidades em desenvolvimento de Sites com HTML, CSS e React.
                        <br /> Sou uma desenvolvedora dedicada, com foco nos melhores resultados para os clientes.
                        <br /> Facilidade em comunicação e ótimo relacionamento em equipe.

                    </div>


                    <div className='casa1'>
                        <section><img src={GIOVANNA} /></section>
                        <p className='dad1'>Giovanna P. Gomes
                            <br />20 anos
                            <br />@giovanna.pgomes
                        </p>

                        <br />Estudante do curso de Programador Web-Senai, São Mateus-ES, 2023.
                        <br />Habilidades em tomadas de decisões.
                        <br />Sou determinada, altruísta e comunicativa.
                        <br />Foco no progresso pessoal e coletivo.

                    </div>
                    <div className='casa1'>
                        <section><img src={JULIANA} /></section>
                        <p className='dad1'>Juliana dos Santos Leonídio
                            <br />Capixaba, 24 anos
                            <br />@julianaleonidio
                        </p>

                        <br /> Estudante de programação web, aspirante a animação 2D.
                        <br /> Habilidade em HTML, CSS e React.
                        <br /> Ótimo relacionamento interpessoal, altruísta e com vontade de aprender.
                        <br /> Tenho muitos desafios e aprendizados na formação como desenvolvedora web front-end,
                        mas me orgulho de ter começado.

                    </div>
                    <div className='casa1'>
                        <section><img src={MEL} /></section>
                        <p className='dad1'>Mel Nunes Gonçalves
                            <br />20 anos
                            <br />@mellis_fox
                        </p>

                        <br /> Estudante de programação web e comandos elétricos, artista no tempo livre.
                        <br /> Habilidade em HTML, CSS e React.
                        <br /> Boa comunicação, prestativa. Fluente em língua inglesa.

                    </div>

                    <div className='casa1'>
                        <section><img src={YASMIN} /></section>
                        <p className='dad1'>Yasmin C. Bastos Machado
                            <br />19 anos
                            <br />@yasmin_bastos24
                        </p>

                        <br /> Estudante do curso Programadora Web, fornecido pelo Senai, São Mateus-ES.
                        <br /> Tenho disponibilidade a favor da equipe.
                        <br /> Profissional, autoconfiaça, criatividade e boa em comunicação.
                        <br /> Trabalhando  sempre em prol da execução do trabalho.

                    </div>

                    <div className='casa1'>
                        <section><img src={CARLOS} /></section>
                        <p className='dad1'>Carlos

                        </p>

                        <br />Professor do curso de Programação Web
                        <br />Senai, São Mateus-ES, 2023.

                    </div>
                </div>
            </div>


        </>
    )
}

export default Time