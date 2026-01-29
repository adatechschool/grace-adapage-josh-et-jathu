import { useEffect, useRef } from "react";
import { person } from "../data/person";
import image from "../assets/img/mia/mia.avif";

export const Testimonial = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let isPaused = false;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += 1; // Adjust speed here (higher = faster)

                // When we've scrolled past half the content, reset to the beginning
                // This works because we've duplicated the content
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        scroll();

        // Pause on hover
        const handleMouseEnter = () => { isPaused = true; };
        const handleMouseLeave = () => { isPaused = false; };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <main className="flex flex-col bg-[url(../assets/img/mia/mia.avif)] min-h-screen bg-no-repeat bg-cover bg-blend-difference -mt-10 pt-10 bg-gray-800 dark:bg-gray-900 text-gray-900 p-7">
            <h1 className="text-4xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 mb-20">
                Témoignages
            </h1>

            <section className="w-full mt-50">
                <div 
                    ref={scrollRef}
                    className="flex flex-row items-center gap-8 p-7 w-full max-w-8xl mx-auto overflow-x-auto overflow-y-hidden h-56 md:h-96"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Original cards */}
                    {person.quotes.map((quote, index) => (
                        <div 
                            key={`original-${index}`} 
                            className="flex-shrink-0 w-80 drop-shadow-2xl border-2 rounded-lg shadow-2xl shadow-red-900/80 p-6 bg-black/90 border-red-900 transition-all hover:scale-105 hover:shadow-red-600/60 hover:border-red-600 duration-300 ease-out flex flex-col items-center justify-center text-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-red-900/20 before:to-transparent before:pointer-events-none"
                        >
                            <span className="leading-relaxed font-extrabold tracking-tight text-shadow-red-600 text-shadow-s text-red-700 relative z-10">
                                {quote.text}
                            </span>

                            <span className="block mt-5 font-semibold text-white text-shadow-gray-950 text-shadow-xs relative z-10">
                                {quote.source}
                            </span>
                        </div>
                    ))}
                    
                    {/* Duplicate cards for seamless loop */}
                    {person.quotes.map((quote, index) => (
                        <div 
                            key={`duplicate-${index}`} 
                            className="flex-shrink-0 w-80 drop-shadow-2xl border-2 rounded-lg shadow-2xl shadow-red-900/80 p-6 bg-black/90 border-red-900 transition-all hover:scale-105 hover:shadow-red-600/60 hover:border-red-600 duration-300 ease-out flex flex-col items-center justify-center text-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-red-900/20 before:to-transparent before:pointer-events-none"
                        >
                            <span className="leading-relaxed font-extrabold tracking-tight text-shadow-red-600 text-shadow-s text-red-700 relative z-10">
                                {quote.text}
                            </span>

        {/* <section className=" grid grid-cols-1 bg-red-900  text-gray-900 p-12">   */}

        <section className=" flex bg-blend-luminosity  mt-10  bg-contain bg-gray-800 dark:bg-gray-900 text-gray-900 p-7" style={{ backgroundImage: `url(${image})` }}>

          

            <div className="flex flex-row items-center gap-8 p-7 w-auto  max-w-8xl mx-auto  overflow-x-auto relative h-56 overflow-hidden rounded-base md:h-96">
                {person.quotes.map((quote) => (
                <div key={quote.text} className="drop-shadow-lg border rounded-2xl shadow-2xl  shadow-gray-600 sh  p-4 border-l-red-300 border-r-red-300 border-b-red-900 border-hidden transition-shadow hover:scale-105 duration-100 ease-out items-center justify-center text-center">
                    <span className="flex-1 leading-relaxed font-extrabold tracking-tight  text-shadow-red-600 text-shadow-s text-red-700   ">
                        {quote.text}
                    </span>

                    <span className="flex-1 block gap-* mt-5 font-semibold text-white text-shadow-gray-950 text-shadow-xs " >
                        {quote.source}
                    </span>
                    </div>
                ))}

                
            </div>


        </section>
    </main>
    );
};