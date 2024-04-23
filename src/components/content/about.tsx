import { MutableRefObject } from "react";
import { contentLayoutStyleSec, contentTitleStyleSec } from "../../constants/styles";
import background from '../../assets/logicflare_branco.png';

interface IAboutProps {
    aboutRef: MutableRefObject<null> | any;
}

export function About(props: IAboutProps) {
    const { aboutRef } = props;

    return (
        <div className={contentLayoutStyleSec} ref={aboutRef}>
            <h2 className={contentTitleStyleSec}>
                Sobre
            </h2>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className='flex flex-col gap-12 justify-center items-center text-xl px-4 mx-auto max-w-full text-wrap text-justify'>
                    <div className='flex flex-col sm:flex-row max-w-full items-center sm:items-start gap-12 justify-center md:w-[705px]'>
                        <p className='w-full md:max-w-[475px]'>
                            Como uma empresa de desenvolvimento de software, a {' '}
                            <span className='text-main-color'>LogicFlare</span> ajuda
                            empresas estabelecidas a construir sites/landingPages de sucesso que os usuários adotam. Nossa força reside em
                            nossa equipe dedicada e dinâmica de mentes visionárias que se destacam em tecnologias Web.
                        </p>
                        <div
                            className='md:flex bg-cover bg-center min-w-[256px] w-[256px] max-w-[320px] min-h-[256px] h-[256px] max-h-[320px] shadow-gray-900 rounded-lg'
                            style={{
                                backgroundImage: `url(${background})`
                            }}
                        />
                    </div>
                    <p className='md:w-[705px]'>
                        Nosso objetivo é fazer parte de sua equipe e ir até o fim para personalizar seu projeto de acordo com suas
                        necessidades. Não se trata apenas de codificação para nós. É aqui que o seu negócio evolui para algo melhor.
                    </p>
                </div>
            </div>
        </div>
    );
}