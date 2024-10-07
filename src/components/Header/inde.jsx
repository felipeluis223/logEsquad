import { FaHome, FaBox, FaFolderPlus, FaIdCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Button = ({ Icon, description, route }) => {
    const navigate = useNavigate();
    
    return (
        <button 
            className="w-[80px] h-[60px] bg-[#1f1f1f] rounded-md flex flex-col justify-center items-center text-[#f1f1f1] hover:text-[#1dd05d]"
            onClick={() => navigate(route)}    
        >
            <Icon className="text-xl" />
            <span>{description}</span>
        </button>
    );
};

export default function Header({ onLogout }) {
    return (
        <section className="w-full bg-[#242424]">
            <h3 className="text-[#1dd05d] py-[25px] text-xl font-bold italic text-center">LogEsquad</h3>
            <div className="w-full">
                <ul className="h-full flex flex-row justify-evenly items-center flex-wrap">
                    <li><Button Icon={FaHome} description="Início" route="" /></li>
                    <li><Button Icon={FaBox} description="Estoque" route="stock" /></li>
                    <li><Button Icon={FaIdCard} description="Clientes" route="clients" /></li>
                    <li><Button Icon={FaFolderPlus} description="Vendas" route="sales" /></li>
                </ul>
            </div>
            {/* <button className="bg-[yellow]" onClick={onLogout}>Sair</button> */}
        </section>
    );
}
