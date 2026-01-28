import { person} from "../data/person"
export const  Testimonial = () => {
    return (

    <main className="">

        <h1>Teigmoinage</h1>

        <section className=" grid grid-cols-1 bg-red-900  text-gray-900 p-12">

            <div className="flex flex-hor items-center gap-8 w-full max-w-2xl mx-auto bg-white">
                {person.quotes.map((quote) => (
                <div key={quote.text} className="bg-blue-500 rounded  border-gray-500 transition-shadow hover:scale-105 duration-500 ease-out s ">
                    <span className="flex-1 font-extrabold ">
                        {quote.text}
                    </span>
                    <span>
                        {quote.source}
                    </span>
                    </div>
                ))}

                
            </div>


        </section>
    </main>
    );
};