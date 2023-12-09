
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Footer() {

    return (
        <>
            <div className='rodape'>
                <div><a href="/contato">FALE CONOSCO</a></div>
                <div><a href="/sobre">SOBRE A SAVVY FINANÇAS</a></div>
                <div className='sociais'>
                    <button><a href="https://instagram.com/savvy_financas_?igshid=NGVhN2U2NjQ0Yg==" target='_blank'><FaInstagram /> </a></button>
                    <button><a href="https://www.facebook.com/profile.php?id=61554196524501" target='_blank'> <FaFacebookF /></a></button>
                </div>
            </div >
            <div id='rod_final'>
                <h5 id='rod_texto'>O que já saiu na mídia</h5>
            </div>
            <div className='materias'>
                <div>Planejamento financeiro pessoal e familiar: veja como fazer corretamente <br /><a href="https://seucreditodigital.com.br/planejamento-financeiro-pessoal-e-familiar-veja-como-fazer-corretamente/">Leia a matéria.</a></div>
                <div>Conquistar estabilidade financeira não precisa ser um mistério complexo. <br /><a href="https://noticiasconcursos.com.br/como-montar-um-planejamento-financeiro-pessoal/">Leia a matéria.</a></div>
                <div>Aplicativos financeiros podem ajudar a organizar seu dinheiro. <br /><a href="https://claudia.abril.com.br/sociedade/aplicativos-financeiros-podem-ajudar-a-organizar-seu-dinheiro/">Leia a matéria.</a></div>
            </div>
        </>
    )
}

export default Footer