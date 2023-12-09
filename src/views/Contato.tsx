import './Contato.css'

function Contato() {

    return (
        <>
            <div className='grid'>
                <div className='contato_border'>
                    <div ><h1 className='contato_titulo' >Fale Conosco - Enviar Mensagem</h1></div>
                    <div className='input'><h5>Nome Completo*</h5>
                        <input type="text" />
                        <h5>E-mail*</h5>
                        <input type="text" />
                        <h5>Assunto</h5>
                        <input type="text" />
                        <div ><h5 >Mensagem:*</h5></div>

                        <div className='mensagem'><textarea id='msg' name="msg" ></textarea></div>
                        <div><h6>*Campos obrigatórios</h6></div>
                    </div>
                    <div className='button'><button id='button1'><a href="#">Enviar</a></button></div>

                </div>
            </div>
        </>
    )
}

export default Contato