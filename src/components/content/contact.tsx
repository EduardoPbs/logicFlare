import { MutableRefObject } from "react";
import { contentLayoutStylePrim, contentTitleStylePri } from "../../constants/styles";

interface IContactProps {
    contactRef: MutableRefObject<null> | any;
}

export function Contact(props: IContactProps) {
    const { contactRef } = props;

    return (
        <div className={contentLayoutStylePrim} ref={contactRef}>
            <h2 className={contentTitleStylePri}>
                Contato
            </h2>
            <div className='flex items-center justify-center gap-12 py-6 max-w-full flex-wrap'>
                <div className='flex flex-col items-center justify-center gap-6 md:max-w-[705px] text-xl text-justify font-semibold'>
                    <h3 className='px-4'>
                        Envie-nos um e-mail para o endereço abaixo com informações de seu projeto.
                        Iremos analisar e retornar o contato para discutir detalhes e fornecer um orçamento!
                    </h3>
                    <p className='flex flex-col items-center select-none'>
                        E-mail:
                        <span className='break-all sm:break-normal font-bold text-3xl bg-main-color text-main-white px-1 py-1 rounded-md select-text'>
                            logicflare3@gmail.com
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}