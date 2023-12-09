import './Faq.css'



function Faq() {


    return (
        <>
            <h1>Dúvidas sobre o Savvy Finanças</h1>
            <div className='alinhamento' >
                <div className='inicio'>
                    <div className='question'>
                        <input type="checkbox" id='question-1' />
                        <label htmlFor='question-1'>Preciso criar uma conta para fazer o teste? </label>
                        <div className='answer'>
                            Não. Somente fazer o preenchimento dos dados solicitados e clicar em enviar.
                        </div>
                    </div>

                    <div className='question'>
                        <input type="checkbox" id="question-2" />
                        <label htmlFor='question-2'>Quantas vezes posso usar o teste gratuitamente?</label>
                        <div className='answer'>
                            Sempre que precisar.
                        </div>
                    </div>
                    <div className='question'>
                        <input type="checkbox" id="question-3" />
                        <label htmlFor='question-3'>Onde poderei pedir ajuda em caso de dúvidas?</label>
                        <div className='answer'>
                            Estamos disponibilizando um espaço fale conosco. Você pode deixar suas dúvidas que retornaremos com a resposta.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Faq