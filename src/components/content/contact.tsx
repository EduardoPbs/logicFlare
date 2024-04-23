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
            <div className='flex items-center px-4 justify-center gap-12 py-6 max-w-full flex-wrap'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 md:w-[705px] text-xl text-justify font-semibold'>
                    <h3 className='max-w-[450px]'>
                        Envie um email para o email ao lado com informações de seu projeto.
                        Vamos analisar e retornaremos o contato para discutir detalhes e fornecer um orçamento!
                    </h3>
                    <p className='flex flex-col items-center'>
                        Email:
                        <span className='font-bold text-3xl bg-main-color text-main-white px-2 rounded-lg select-text'>
                            logicflare3@gmail.com
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}