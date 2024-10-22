import { IoPersonCircle } from "react-icons/io5";
import { FaHome, FaBox, FaFolderPlus, FaIdCard } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Button = ({ Icon, description, route }) => {
    const navigate = useNavigate();
    
    return (
        <button 
            className="w-[80px] h-[60px] bg-[#1f1f1f] sm:justify-start sm:gap-[10px] sm:pl-[40px] sm:w-full rounded-md flex flex-col justify-center items-center text-[#f1f1f1] hover:text-[#1dd05d] sm:flex-row"
            onClick={() => navigate(route)}    
        >
            <Icon className="text-xl" />
            <span>{description}</span>
        </button>
    );
};

export default function Header() {
    return (
        <section className="w-full bg-[#1f1f1f] sm:w-[200px] sm:h-screen">
            <div className="flex flex-row sm:h-[20%] justify-between items-center px-[40px] sm:flex sm:flex-col sm:items-start sm:border-b-[1px] sm:pb-[15px]">
                <h3 className="text-[#1dd05d] py-[25px] text-xl font-bold italic">LogEsquad</h3>
                <Link to="profile">
                    <button className="flex flex-row gap-[10px] text-[#f1f1f1] items-center hover:text-[#1dd05d]"><IoPersonCircle className="text-3xl" /> Luis</button>
                </Link>
            </div>
            <div className="w-full sm:h-[80%]">
                <ul className="sm:w-full h-full flex flex-row justify-evenly items-center flex-wrap sm:flex-col sm:justify-start sm:gap-[15px] sm:pt-[30px]">
                    <li className="sm:w-full"><Button Icon={FaHome} description="Início" route="" /></li>
                    <li className="sm:w-full"><Button Icon={FaBox} description="Estoque" route="stock" /></li>
                    <li className="sm:w-full"><Button Icon={FaIdCard} description="Clientes" route="clients" /></li>
                    <li className="sm:w-full"><Button Icon={FaFolderPlus} description="Vendas" route="sales" /></li>
                </ul>
            </div>
        </section>
    );
}
