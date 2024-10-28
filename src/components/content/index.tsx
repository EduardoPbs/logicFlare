import { Flame } from 'lucide-react';
import { About } from './about';
import { Contact } from './contact';
import { Platform } from './platform';
import { Services } from './services';
import { scrollWindow } from '../../utils/scrollWindow';
import { MutableRefObject } from 'react';
import background from '../../assets/templates/macbook_iphone.jpg';
import template from '../../assets/templates/template.jpg';

interface IContentProps {
    aboutRef: MutableRefObject<null> | any;
    serviceRef: MutableRefObject<null> | any;
    contactRef: MutableRefObject<null> | any;
}

export function Content(props: IContentProps) {
    const { aboutRef, serviceRef, contactRef } = props;

    return (
        <div className='flex flex-col w-full bg-gray-900'>
            <div
                className='hidden relative sm:flex bg-cover bg-center w-full h-[550px] shadow-gray-900'
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='mx-auto w-full max-w-screen-xl text-main-white capitalize text-wrap'>
                    <div className='sm:absolute m-auto left-0 top-36 right-0 flex flex-col justify-center items-start gap-2 max-w-[555px] sm:bg-main-black/80 sm:border-2 sm:border-main-black sm:shadow-md sm:shadow-main-black px-6 py-8 sm:py-6 sm:rounded-lg'>
                        <h1 className='text-2xl normal-case font-bold border-b-2 text-start text-main-color'>
                            Bem-vindo à LogicFlare!
                        </h1>
                        <p className='font-semibold normal-case text-lg text-justify text-main-white'>
                            Transformamos processos, criamos possibilidades, e impulsionamos seu negócio através da tecnologia.
                            Se deseja sonhar alto, impulsionar sua empresa ou agilizar processos, você encontrou o lugar certo!
                        </p>
                        <span className='flex flex-col sm:flex-row font-bold italic items-center justify-center gap-1 text-sm normal-case text-main-color'>
                            Onde inovação não é apenas o que fazemos, é o que vivemos.
                            <Flame className='stroke-[2.5px]' color='#f59e0b' width={16} height={16} />
                        </span>
                    </div>
                </div>
            </div>
            <section className='flex flex-col gap-16 bg-main-gray py-12 xl:px-0'>
                <Services serviceRef={serviceRef} />

                <Platform />

                <div
                    className='hidden relative sm:flex bg-cover bg-center w-full h-[550px] shadow-gray-900 -mb-16'
                    style={{ backgroundImage: `url(${template})` }}
                >
                    <div className='mx-auto w-full max-w-screen-xl text-main-white text-wrap'>
                        <div className='sm:absolute m-auto left-0 top-28 right-0 max-w-[600px] sm:bg-main-black/80 sm:border-2 sm:border-main-black sm:shadow-md sm:shadow-main-black px-6 py-8 sm:py-6 sm:rounded-lg'>
                            <div className='flex flex-col gap-4 font-semibold text-lg text-justify text-main-white'>
                                <h1 className='text-2xl border-b-2 text-start font-bold text-main-color w-fit'>
                                    E isso é apenas o começo!
                                </h1>
                                <span>
                                    Nossa plataforma é expansível e adaptável, pronta para
                                    crescer e mudar junto com seu negócio. Seja qual for o seu setor, temos as ferramentas
                                    para ajudá-lo a ter sucesso.
                                    <br />
                                    Então, <span className='text-main-color'>por que esperar</span>?
                                    Dê o próximo passo para o sucesso do seu negócio com a nossa
                                    Plataforma All-in-One.
                                </span>
                                <span
                                    onClick={() => scrollWindow(contactRef)}
                                    className='bg-black/25 px-1 rounded-sm text-main-color text-xl select-none cursor-pointer'
                                >
                                    Entre em contato conosco hoje mesmo para saber mais!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <About aboutRef={aboutRef} />

                <Contact contactRef={contactRef} />
            </section>
        </div>
    );
}