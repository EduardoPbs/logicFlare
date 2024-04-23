import { MutableRefObject } from "react";
import { FlareLogo } from "../logo";
import { MyDrawer } from "../drawer";

export interface IMyNavbarProps {
    aboutRef: MutableRefObject<null> | any;
    serviceRef: MutableRefObject<null> | any;
    contactRef: MutableRefObject<null> | any;
}

export function MyNavbar(props: IMyNavbarProps) {
    const { aboutRef, serviceRef, contactRef } = props;

    function scrollWindow(ref: any): void {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className="sticky top-0 bg-white  border-b-2 border-main-color dark:bg-gray-900 select-none shadow-lg z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <FlareLogo />
                <MyDrawer
                    serviceRef={serviceRef}
                    aboutRef={aboutRef}
                    contactRef={contactRef}
                    onClick={scrollWindow}
                />
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li ref={serviceRef} onClick={() => scrollWindow(serviceRef)}>
                            <p className="cursor-pointer duration-150 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 dark:text-white md:dark:hover:text-main-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Serviços
                            </p>
                        </li>
                        <li ref={aboutRef} onClick={() => scrollWindow(aboutRef)}>
                            <p className="cursor-pointer duration-150 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 dark:text-white md:dark:hover:text-main-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Sobre
                            </p>
                        </li>
                        <li ref={contactRef} onClick={() => scrollWindow(contactRef)}>
                            <p className="cursor-pointer duration-150 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 dark:text-white md:dark:hover:text-main-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contato
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
