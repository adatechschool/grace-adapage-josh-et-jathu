import { person } from "../data/person";

export const  Features = () => {
    return (
        <main>
                  {/* SECTION (Info Cards) */}
      <section className=" grid grid-cols-1 bg-gray-50 dark:bg-gray-900 text-gray-900 p-12">
          {/*Container*/}
          <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
            {person.infoCards.map((infoCard) => (
              <div key={infoCard.title} className="snap-center w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700
               transition-transform hover:scale-105 duration-300 ease-in-out
               flex flex-col items-center justify-center text-center">
                <span className="text-sm text-gray-900 font-bold dark:text-gray-400 uppercase tracking-wider mb-2">
                  {infoCard.title}
                </span>
                <span className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  {infoCard.value}
                </span>
              </div>
            ))}
          </div>
      </section>
        </main>
    );
}