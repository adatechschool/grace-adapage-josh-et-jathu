import { person } from "../data/person";

export const Home = () => {
  return (
    <main className="flex flex-col min-h-screen p-8 pt-50 gap-22 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* SECTION 1: Presentation (Text + Image) */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen gap-8">
          
        {/* DIV: Description Text */}
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-teal-400">
            {person.name}
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            {person.description}
          </p>
        </div>

        {/* DIV: Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-full max-w-md rounded-4xl shadow-2xl transition-transform hover:scale-105 duration-300 ease-in-out object-cover aspect-square"
          />
        </div> 

      </section>

    </main>
  );
}