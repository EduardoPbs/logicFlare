import { Send } from "lucide-react";
import { MutableRefObject } from "react";
import { SectionContainer } from "../sectionContainer";

interface IContactProps {
    contactRef: MutableRefObject<null> | any;
}

export function Contact(props: IContactProps) {
    const { contactRef } = props;

    return (
        <SectionContainer title="ENTRE EM CONTATO">
            <div
                ref={contactRef}
                className='flex flex-col lg:flex-row items-start justify-between gap-14 text-xl'
            >
                <p className='lg:w-1/2 text-wrap text-center sm:text-start'>
                    Contate-nos caso tenha interesse em ter acesso as nossas soluções prontas ou nos mande informações de seu projeto personalizado.
                    <br /> Iremos analisar e retornar o contato para discutir detalhes e fornecer um orçamento!
                </p>
                <div className='flex flex-col justify-center gap-4 w-full lg:w-1/2'>
                    <div className='flex flex-col md:flex-row items-center gap-4 w-full justify-between'>
                        <input
                            type="email"
                            placeholder="Seu e-mail:"
                            className='border border-main-dark focus:outline-none rounded-lg focus:border-main-color-dark focus:ring-0 duration-200 bg-main-white h-[50px] w-full'
                        />
                        <input
                            type="text"
                            placeholder="Assunto:"
                            className='border border-main-dark focus:outline-none rounded-lg focus:border-main-color-dark focus:ring-0 duration-200 bg-main-white h-[50px] w-full'
                        />
                    </div>
                    <textarea
                        placeholder="Detalhes do seu projeto:"
                        className='wborder border-main-dark focus:outline-none rounded-lg focus:border-main-color-dark focus:ring-0 duration-200 bg-main-white min-h-[185px] w-full'
                    />
                    <button
                        className='flex items-center justify-center rounded-lg gap-2 h-[45px] text-main-dark bg-main-color hover:bg-main-color-dark duration-200'
                    >
                        <p className='text-lg'>Enviar</p>
                        <Send className='stroke-[1.2px] size-5' />
                    </button>
                </div>
            </div>
        </SectionContainer>
    );
}