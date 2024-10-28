import { Package, PawPrint, Users } from "lucide-react";
import { contentLayoutStyleSec, contentTitleStyleSec } from "../../constants/styles";

export function Platform() {
    return (
        <div className={`${contentLayoutStyleSec} -mb-16`}>
            <h2 className={contentTitleStyleSec}>
                Plataforma
            </h2>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className='flex flex-col gap-12 justify-center items-center text-xl px-4 mx-auto max-w-full text-wrap text-justify'>
                    <div className='flex flex-col max-w-full items-center sm:items-start gap-12 justify-center md:w-[705px]'>
                        <h3 className='text-2xl font-bold font-spartan'>
                            Apresentando a Plataforma All-in-One, sua solução definitiva para {" "}
                            <span className='text-main-color'>gerenciamento de negócios</span>!
                        </h3>
                        <p className="">
                            Imagine um software que não apenas atende às suas necessidades de negócios, mas também as supera.
                            Uma plataforma que oferece uma gama de soluções, todas integradas em um único lugar. Bem-vindo à
                            nossa Plataforma All-in-One, a solução definitiva para todas as suas necessidades de gerenciamento
                            de negócios.
                        </p>
                        <ul className="flex flex-col justify-center gap-6">
                            <li>
                                <p className='text-xl'>
                                    <span className='text-5xl'>
                                        <Package className='text-main-color' />
                                    </span>

                                    <span className="font-semibold">
                                        Gerenciamento de Estoque e Vendas:{" "}
                                    </span>

                                    Nosso sistema de gerenciamento de produtos é intuitivo e fácil de usar, permitindo
                                    você acompanhe o inventário, gerencie pedidos e analise vendas com facilidade.
                                </p>
                            </li>
                            <li>
                                <p className='text-xl'>
                                    <span className='text-5xl'>
                                        <PawPrint className='text-main-color' />
                                    </span>
                                    <span className="font-semibold">
                                        Clínicas Veterinárias:{" "}
                                    </span>
                                    Com recursos como agendamento de consultas, prontuários eletrônicos e gerenciamento
                                    de estoque de medicamentos, você pode garantir que seus pacientes peludos recebam o
                                    melhor atendimento possível.
                                </p>
                            </li>
                            <li>
                                <p className='text-xl'>
                                    <span className='text-5xl'>
                                        <Users className='text-main-color' />
                                    </span>
                                    <span className="font-semibold">
                                        Gerenciamento de Cadastro de Atendimento:{" "}
                                    </span>
                                    Acompanhe todos os seus clientes e suas necessidades com nosso sistema de gerenciamento
                                    de cadastro de atendimento. Com ele, você pode agendar e rastrear compromissos, gerenciar
                                    informações de contato do cliente e fornecer um atendimento ao cliente excepcional.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}