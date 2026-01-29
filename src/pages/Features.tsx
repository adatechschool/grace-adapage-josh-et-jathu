import { person } from "../data/person";

export const  Features = () => {
    return (
        <main>
                  {/* SECTION (Info Cards) */}
      <section className=" grid grid-cols-1 p-12">
          {/*Container*/}
          <h2 className="flex flex-col items-center text-4xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-linear-to-r from-red-600 to-red-900 mb-8">Caractéristiques</h2>
          <p className=" flex flex-col items-center text-lg text-gray-700 font-medium mb-12">
            Quelques infos clés sur Mia Goth.
          </p>

          <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
            {person.infoCards.map((infoCard) => (
              <div key={infoCard.title} className="snap-center w-full p-6 bg-black rounded-3xl shadow-lg border border-black 
               transition-transform hover:scale-105 duration-300 ease-in-out
               flex flex-col items-center justify-center text-center">
                <span className="text-xs  text-white font-bold  uppercase tracking-widest mb-2">
                  {infoCard.title}
                </span>

                <div className="flex flex-wrap items-center gap-2 justify-center mt-2">
                  {infoCard.value.split(',').map((item,index)=>(
                    <span key={index} className="text-shadow-red-600 text-shadow-s text-red-700 px-2 py-1 rounded-full text-sm font-medium shadow-sm">
                      {item.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </section>
        </main>
    );
}