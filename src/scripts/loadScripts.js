import {useEffect} from 'react'

const LoadScripts = () => {
    useEffect(() => {
        // Array of script URLs
        const scriptUrls = [
            `${process.env.PUBLIC_URL}/assets/js/jquery-3.5.0.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/slick.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/bootstrap.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/jquery.magnific-popup.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/imagesloaded.pkgd.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/isotope.pkgd.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/jquery.counterup.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/parallax.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/jquery-ui.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/wow.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/ajax-mail.js`,
            `${process.env.PUBLIC_URL}/assets/js/vscustom-carousel.min.js`,
            `${process.env.PUBLIC_URL}/assets/js/main.js`,
        ];

        // Load each script
        // Function to load scripts one by one
        const loadScriptSequentially = (urls, index = 0) => {
            if (index < urls.length) {
                const script = document.createElement('script');
                script.src = urls[index];
                script.async = true;
                script.onload = () => {
                    loadScriptSequentially(urls, index + 1);
                };
                document.body.appendChild(script);
            }
        };

        // Start loading scripts sequentially
        loadScriptSequentially(scriptUrls);

        return () => {
            scriptUrls.forEach(url => {
                let script = document.querySelector(`script[src="${url}"]`);
                script.async = true;
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
}

export default LoadScripts
