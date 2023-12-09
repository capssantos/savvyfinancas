import './Controle.css'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { IoTrashBin } from "react-icons/io5";


interface InforItemsProps {
    descricao: string;
    categoria: string;
    valor: number;
}

function Controle() {


    const items: InforItemsProps[] = []

    const [lista, setLista] = useState(items);
    const [novaDescricao, setNovaDescricao] = useState("");
    const [NovaCategoria, setNovaCategoria] = useState("");
    const [novoValor, setnovoValor] = useState("");

    function adicionaritem(form: any) {
        form.preventDefault();
        if (!novaDescricao) {
            return;
        }
        setLista([...lista, { descricao: novaDescricao, categoria: NovaCategoria, valor: parseFloat(novoValor) }])
        setNovaDescricao("");
        setNovaDescricao("");
        setnovoValor("");
        console.log(lista)
    }
    function deleta(index: number) {
        const listAux = [...lista]
        listAux.splice(index, 1);
        setLista(listAux);
    }

    const [totalEntrada, setTotalEntrada] = useState(0)
    const [totalSaida, setTotalSaida] = useState(0)
    const [totalValor, setTotalValor] = useState(0)

    useEffect(() => {
        let totalEntrada = 0;
        let totalSaida = 0;

        for (var val of lista) {
            if (val.categoria === 'Entrada') {
                totalEntrada += val.valor;
            } else if (val.categoria === 'Saída') {
                totalSaida += val.valor;
            }
        }

        setTotalEntrada(totalEntrada);
        setTotalSaida(totalSaida);
        setTotalValor(totalEntrada - totalSaida);
    }, [lista]);



    return (
        <>

            <div className='Container3'>
                <h1 className='Header'>Controle Financeiro</h1>
            </div>
            <div className='Container3'>
                <div className='div3'>
                    <h4>Entradas</h4>
                    <div> <FaArrowAltCircleUp /> </div>
                    <div className='valor'> {totalEntrada} </div>
                </div>
                <div className='div3'>
                    <h4>Saídas</h4>
                    <div><FaArrowAltCircleDown /></div>
                    <div className='valor'> {totalSaida} </div>
                </div>
                <div className='div3'>
                    <h4>Total</h4>
                    <div><FaDollarSign /></div>
                    <div className='valor'> {totalValor} </div>
                </div>
            </div>


            <div className='tabela'>
                <div className='tabela_2'>
                    <div className='tabela1'>
                        <form onSubmit={adicionaritem}>
                            <div>Descrição <input className='td1' type="text" placeholder='Salário, Aluguel, Alimentação...' value={novaDescricao} onChange={(e) => { setNovaDescricao(e.target.value) }} /></div>
                            <div>Valor <input className='td1' type="text" placeholder='R$0,00' value={novoValor} onChange={(e) => { setnovoValor(e.target.value) }} /> </div>
                            <div className='radio1'>
                                <label id='p1'>Entrada</label> <input type="radio" name='primeiro' onChange={() => { setNovaCategoria('Entrada') }} />
                                <label id='p2'>Saída</label> <input type="radio" name='primeiro' onChange={() => { setNovaCategoria('Saída') }} />
                                <button id='buttonenviar' type="submit">  Enviar</button>
                            </div>
                        </form>


                    </div>
                    <div className='Container4'>
                        <div>Descrição</div>
                        <div>Valor</div>
                        <div>Tipo</div>
                    </div>
                    <hr />
                    {
                        lista.map((item, index) => (
                            <div className='Container5'>
                                <div>{item.descricao} </div>
                                <div>{item.valor} </div>
                                <div>{item.categoria} </div>
                                <div><button onClick={() => { deleta(index) }}><IoTrashBin /></button></div>
                            </div>
                        ))
                    }



                </div>
            </div>
            <hr id='hr' />




        </>
    )
}

export default Controle