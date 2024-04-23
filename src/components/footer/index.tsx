import { FlareLogo } from "../logo";

export function MyFooter() {
    return (
        <footer className="bg-white dark:bg-gray-900 select-none">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <FlareLogo />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siga-nos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="#" className="hover:underline">logicFlare™</a>. Todos direitos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}