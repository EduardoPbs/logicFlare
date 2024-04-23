import { About } from './about';
import { Contact } from './contact';
import { Services } from './services';
import { MutableRefObject } from 'react';
import background from '../../assets/templates/macbook_iphone.jpg';

interface IContentProps {
    aboutRef: MutableRefObject<null> | any;
    serviceRef: MutableRefObject<null> | any;
    contactRef: MutableRefObject<null> | any;
}

export function Content(props: IContentProps) {
    const { aboutRef, serviceRef, contactRef } = props;

    return (
        <div className='flex flex-col w-full bg-gray-900'>
            <div className='hidden relative sm:flex bg-cover bg-center w-full h-[550px] shadow-gray-900' style={{
                backgroundImage: `url(${background})`
            }} />
            <div className="mx-auto w-full max-w-screen-xl">
                <div className='text-main-white capitalize text-wrap'>
                    <div className='sm:absolute m-auto left-0 top-64 right-0 flex flex-col justify-center items-start gap-2 max-w-[555px] sm:bg-main-black/80 sm:border-2 sm:border-main-black sm:shadow-md sm:shadow-main-black px-6 py-8 sm:py-6 sm:rounded-lg'>
                        <h1 className='text-2xl font-bold border-b-2 text-start text-main-color'>Sites Profissionais</h1>
                        <p className='font-semibold normal-case text-justify text-main-white'>
                            Bem-vindo à nossa agência especializada em criação de sites em <br /> WordPress.
                            Se você deseja impulsionar sua presença online e conquistar mais clientes,
                            você veio ao lugar certo!
                        </p>
                    </div>
                </div>
            </div>
            <section className='flex flex-col gap-16 bg-main-gray py-12 xl:px-0'>
                <Services serviceRef={serviceRef} />

                <About aboutRef={aboutRef} />

                <Contact contactRef={contactRef} />
            </section>
        </div>
    );
}