
import { useEffect, useState } from 'react';

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 20); // 100 seconds / 100 steps = 1 second per step

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '5px' }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: '30px',
                        backgroundColor: '#ff69b4',
                        borderRadius: '5px',
                        transition: 'width 1s ease-in-out',
                    }}
                />
            </div>
            <div style={{ marginTop: '20px', fontSize: '24px', color: '#ff69b4' }}>
                
            </div>
        </div>
    );
};

export default Loading;