import type { Person } from "../types/person";
import image from "../assets/img/mia/4.jpg";

export const person: Person = {
    name: "Mia Goth",
    image: image,
    description:"Mia Goth est une actrice  britannique connue pour ses rôles marquants dans le cinéma d'horreur et d'auteur.",
    infoCards: [
        {title: "Nationalité", value: "Britannique"},
        {title: "Métier", value:"Actrice"},
        {title: "Signe Astrologique", value:"Scorpion"},
        {title: "Date de naissance", value:"1999-10-25"},
        {title: "Qualité", value:"Intensité"}
    ],
    timeline: [
        {
            year: "2018",
            title: "Suspiria",
            description: "Rôle remarqué dans le film de Luca Guadagnino."
        },
        {
            year: "2022",
            title: "X / Pearl",
            description: "Performance acclamée dans les films de Ti West.",
            quote: "I'm a fucking star,The whole world is gonna know my name, I will not accept a life- i do not deserve",
        },
    ],
    quotes: [
        {
            text: "I’m drawn to characters who are misunderstood.",
            source: "Interview"
        },
        {
            text: "I like characters that are pushed to extremes.",
            source: "Interview"
        },
        {
            text: "I’m not interested in being likable, I’m interested in being honest.",
            source: "Interview"
        }
    ]


};
