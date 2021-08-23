import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Clientes from "../core/Clientes";

export default function Home() {
  const clientes = [
    new Clientes('Ana',34,'1'),
    new Clientes('Pedro',22,'2'),
    new Clientes('Bianca',20,'3')
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r
      from-blue-500 to-purple-500
      text-white
    `} >
     <Layout titulo='Cadastro simples'>
        <Tabela clientes={clientes}></Tabela>
     </Layout>
    </div>
  )
}
