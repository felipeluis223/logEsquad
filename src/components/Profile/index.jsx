import Lottie from 'lottie-react';
import animationSettings from '../../animations/settings.json'

function Item ({description, value}){
    return (
        <li className="flex justify-between"><span className="text-[grey]">{description}:</span> <span>{value}</span></li>
    )
}

export default function Profile({onLogout}){
    const userData = {
        name: "Luis Felipe Bueno",
        email: "felipeadmin@logesquad.com.br",
        phone: "(89) 72248-9228",
        role: "Administrador"
    }

    return (
        <section className="w-full h-full sm:flex sm:flex-row bg-[#242424] ">
            <section className="w-full sm:w-[50%] h-screen">
                <div className="w-full">
                    <div className="w-full mt-[15px] sm:mt-[0] sm:h-screen flex flex-col justify-center items-center gap-[15px]">
                        {/* Circle - iniciais  */}
                        <div className="w-[150px] h-[150px] rounded-full bg-[#1f1f1f] flex justify-center items-center text-[#1dd05d] font-bold text-4xl">
                            <span>LF</span>
                        </div>
                        <section className="w-full h-[300px] flex justify-center items-center flex-col text-[#ffffff]">
                            <h2 className="font-bold text-2xl">Informações Pessoais</h2>
                        
                            <p className="text-[grey] mb-[20px]">{userData.email}</p>
                            <div className="w-full sm:w-[350px] bg-[#1f1f1f] rounded-[10px] p-[15px]">
                                <ul className="text-sm flex flex-col gap-[10px]">
                                    <Item description={"Nome"} value={userData.name} />
                                    <Item description={"Email"} value={userData.email} />
                                    <Item description={"Telefone"} value={userData.phone} />
                                    <Item description={"Cargo"} value={userData.role} />
                                </ul>

                                <div className="w-full h-[60px] flex justify-end items-center mt-[10px]">
                                    <button className="w-[100px] h-[40px] bg-[#242424] rounded-[5px] hover:bg-[#1dd05d] hover:text-[#ffffff]">Atualizar</button>
                                </div>
                            </div>
                            <button className="bg-[#1f1f1f] w-[120px] py-[5px] text-sm rounded-[5px] mt-[25px]" onClick={onLogout}>Sair</button>
                        </section>
                    </div>
                </div>
            </section>

            <section className="sm:w-[50%] hidden sm:flex sm:justify-center sm:items-center">
                <Lottie style={{height: 250}} animationData={animationSettings}  loop={true} autoplay={true} />
            </section>
        </section>
    )
}