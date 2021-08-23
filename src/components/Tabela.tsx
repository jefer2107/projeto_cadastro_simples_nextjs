import Clientes from "../core/Clientes";

interface TabelaProps{
    clientes: Clientes[]
}

export default function Tabela(props: TabelaProps){
    const rederizarCabecalho = ()=>{
        return(
            <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    const redeirizarDados = ()=>{
        const clientes = props.clientes

        return(
            clientes.map((x,i)=>{
                return(
                    <tr key={x.id}>
                        <th> {x.id} </th>
                        <th> {x.nome} </th>
                        <th> {x.idade} </th>
                    </tr>
                )
            })
        )
    }

    return(
        <div>
            <thead>
                {rederizarCabecalho()}
            </thead>
            <tbody>
                {redeirizarDados()}
            </tbody>
        </div>
    )
}