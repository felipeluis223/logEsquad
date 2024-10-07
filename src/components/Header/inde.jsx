import { FaHome, FaBox, FaFolderPlus, FaIdCard } from "react-icons/fa";

const Button = ({Icon, describle, route})=> (
    <button className="w-[80px] h-[60px] bg-[#1f1f1f] rounded-md flex flex-col justify-center items-center text-[#f1f1f1] hover:text-[#1dd05d]">
        <Icon className="text-xl" />
        <span>{describle}</span>
    </button>
);


export default function Header({onLogout}){
    return (
        <section className="w-[full] bg-[#242424]">
            <h3 className="text-[#1dd05d] py-[15px] text-xl font-bold italic text-center">LogEsquad</h3>
            <div className="w-full">
                <ul className="h-full flex flex-row justify-evenly items-center flex-wrap">
                    <li><Button Icon={FaHome} describle="Início" /></li>
                    <li><Button Icon={FaBox} describle="Estoque" /></li>
                    <li><Button Icon={FaIdCard} describle="Clientes" /></li>
                    <li><Button Icon={FaFolderPlus} describle="Vendas" /></li>
                </ul>
            </div>
            {/* <button className="bg-[yellow]" onClick={onLogout}>Sair</button> */}
        </section>
    )
}