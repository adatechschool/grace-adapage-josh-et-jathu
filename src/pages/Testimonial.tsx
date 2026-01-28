import { person} from "../data/person"
import image from "../assets/img/mia/mia.avif";


export const  Testimonial = () => {
    return (

    <main className="">

        <h1 className="text-4xl font-extrabold  text-center tracking-tight bg-clip-text text-transparent bg-linear-to-r from-red-600 to-red-900 m-5 " >
            Témoinages</h1>


        <section className=" flex bg-[url(../assets/img/mia/mia.avif)] bg-blend-luminosity  mt-10  bg-contain bg-gray-800 dark:bg-gray-900 text-gray-900 p-7">

          

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