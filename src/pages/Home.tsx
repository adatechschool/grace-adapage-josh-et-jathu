import { person } from "../data/person";

export const  Home = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 gap-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-1 space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-teal-400">
          {person.name}
        </h1>
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          {person.description}
        </p>
        <p>{person.infoCards.map((infoCard) => (
          <p key={infoCard.title}>{infoCard.title}: {infoCard.value}</p>
        ))}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <img 
          src={person.image} 
          alt={person.name} 
          className="w-full max-w-md rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300 object-cover aspect-square"
        />
      </div>
      
    </main>
  );
}