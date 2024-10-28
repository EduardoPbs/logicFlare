import { useRef } from 'react';
import { Content } from './components/content';
import { MyFooter } from './components/footer';
import { MyNavbar } from './components/navbar';

function App() {
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <main className='font-montserrat selection:bg-sky-800 selection:text-main-white'>
            <MyNavbar
                aboutRef={aboutRef}
                serviceRef={serviceRef}
                contactRef={contactRef}
            />

            <Content
                aboutRef={aboutRef}
                serviceRef={serviceRef}
                contactRef={contactRef}
            />

            <MyFooter />
        </main>
    );
}

export default App;
