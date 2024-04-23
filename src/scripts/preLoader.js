import { useEffect } from 'react';
import Loader from '../components/Preloader'
import { showPreloader, hidePreloader, isPreloaderVisible } from '../libs/preloader'; // Import utility functions

const Preloader = () => {
    useEffect(() => {
        // Simulate loading delay (replace with your actual loading logic)
        showPreloader();
        const delay = setTimeout(() => {
            hidePreloader();
            clearTimeout(delay);
        }, 3000); // Simulate a 3-second loading delay
    }, []);
    return isPreloaderVisible() ? <Loader /> : ""
}

export default Preloader
