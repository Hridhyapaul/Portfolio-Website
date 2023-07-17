import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>

        </div>
    );
};

export default Home;