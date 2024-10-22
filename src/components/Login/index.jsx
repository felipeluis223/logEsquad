
import { FaUser, FaUserLock } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({onLogin}){
	const [showPassword, setShowPassword] = useState(false);
	const [userData, setUserData] = useState({
		username:'',
		password:''
	});

	useEffect(()=>{
		if(localStorage.getItem("authenticated") != null){
	    	navigate("/home");
	    }
	 }, []);

	const navigate = useNavigate()

	const handleChangeUserData = (event, key) =>{
		setUserData({
			...userData, [key]:event.target.value
		})
	}

	const handleSubmit =()=> {
		const isAuthenticated = onLogin(userData.username, userData.password);
		if(isAuthenticated){
			navigate("/home")
		}
	}

	return (
		<section className="w-full h-screen bg-[#242424] flex justify-center items-center">
			<div className="w-full px-[15px] text-center sm:w-[450px] text-[#ffffff] text-3xl italic">

				<>
					Welcome in <h2 className="text-[#1dd05d] font-bold text-5xl">LogEsquad</h2>
					<span className="text-[#ffffff] text-sm">Por favor preencha os campos para acessar o sistema</span>
				</>
		
				<section className="w-full h-[250px] sm:bg-[#1f1f1f] mt-[20px]">
					<div className="w-full h-[80px] flex flex-row justify-center items-center gap-[15px]">
						<FaUser className="text-2xl" />
						<input 
							onChange={(e)=>handleChangeUserData(e,"username")}
							type="text" 
							placeholder="Nome do usuário" 
							className="w-[70%] h-[40px] bg-[#242424] sm:bg-[#1f1f1f] px-[5px] outline-none text-[#1dd05d] text-sm bg-[#1f1f1f] border-b-[1px] border-b-[#ffffff] hover:border-b-[#1dd05d]"
						/>
					</div>

					<div className="w-full h-[80px] flex flex-row justify-center items-center gap-[15px]">
						<FaUserLock className="text-2xl" />
						<input 
							onChange={(e)=>handleChangeUserData(e,"password")}
							type={showPassword ? "text" : "password"}
							placeholder="Senha do usuário" 
							className="w-[60%] h-[40px] bg-[#242424] sm:bg-[#1f1f1f] px-[5px] outline-none text-[#1dd05d] text-sm bg-[#1f1f1f] border-b-[1px] border-b-[#ffffff] hover:border-b-[#1dd05d]"
						/>

						<button onClick={()=>setShowPassword(!showPassword)} className="hover:text-[#1dd05d]">
							{ showPassword ? <LuEye className="text-2xl" /> : <LuEyeOff className="text-2xl" /> }
						</button>
					</div>

					<div className="w-full h-[40px] flex flex-row justify-center items-center">

						<button 
							className="px-[20px] py-[5px] text-xl bg-[#1f1f1f] text-[#1dd05d] rounded-[5px] sm:bg-[#242424] hover:text-[#ffffff] hover:bg-[#1dd05d]"
							onClick={handleSubmit}
						>
							<span>Log in</span>
						</button>
					</div>
				</section>
			</div>
		</section>
	)
}