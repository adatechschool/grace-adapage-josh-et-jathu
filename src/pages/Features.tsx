import { person } from "../data/person";

export const  Features = () => {
    return (
        <main>
                  {/* SECTION (Info Cards) */}
      <section className=" grid grid-cols-1 bg-gray-50 dark:bg-gray-900 text-gray-900 p-12">
          {/*Container*/}
          <h2 className="flex flex-col items-center text-4xl font-semibold mb-2 text-white">Caractéristiques</h2>
          <p className=" flex flex-col items-center text-sm text-white/60 mb-8">
            Quelques infos clés sur Mia Goth.
          </p>

          <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
            {person.infoCards.map((infoCard) => (
              <div key={infoCard.title} className="snap-center w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700
               transition-transform hover:scale-105 duration-300 ease-in-out
               flex flex-col items-center justify-center text-center">
                <span className="text-xs  text-gray-900 font-bold dark:text-gray-400 uppercase tracking-widest mb-2">
                  {infoCard.title}
                </span>

                <div className="flex flex-wrap items-center gap-2 justify-center mt-2">
                  {infoCard.value.split(',').map((item,index)=>(
                    <span key={index} className="bg-rose-500 text-white px-2 py-1 rounded-full text-sm font-medium shadow-sm">
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