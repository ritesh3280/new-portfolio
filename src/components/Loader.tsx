import { useEffect, useState } from 'react';

interface LoaderProps {
    onLoadComplete?: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Set a minimum display time for the loader (1 second)
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);

            // Wait for fade animation to complete before hiding
            setTimeout(() => {
                setIsVisible(false);
                if (onLoadComplete) {
                    onLoadComplete();
                }
            }, 500); // Match the fade-out animation duration
        }, 1000);

        return () => clearTimeout(fadeTimer);
    }, [onLoadComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${isFadingOut ? 'animate-fade-out' : ''}`}>
            <div className="flex flex-col items-center gap-6">
                {/* Animated logo/spinner */}
                <div className="relative">
                    {/* Outer rotating ring */}
                    <div className="w-24 h-24 rounded-full border-2 border-gray-200 border-t-red-500 animate-spin"></div>


                </div>


            </div>
        </div>
    );
};

export default Loader;
