import type { Person } from "../types/person";
import image from "../assets/img/mia/4.jpg";




export const person: Person = {
    name: "Mia Goth",
    image: image,
    description:`Mia Goth est une actrice britannique reconnue pour ses rôles intenses et singuliers dans le cinéma d’horreur et le cinéma d’auteur. Elle s’est imposée comme une figure marquante grâce à son interprétation de personnages complexes, souvent marginalisés ou psychologiquement instables.

Révélée au grand public par ses performances dans des films comme Suspiria, X et Pearl, elle se distingue par un jeu audacieux, émotionnel et sans compromis. Mia Goth n’hésite pas à explorer des thèmes sombres tels que la solitude, la folie ou le désir de reconnaissance, ce qui lui a valu une forte reconnaissance critique.

Appréciée pour son authenticité et son refus des rôles conventionnels, elle est aujourd’hui considérée comme l’une des actrices les plus marquantes de sa génération dans le cinéma contemporain.`,
    infoCards: [
        {title: "Nationalité", value: "Britannique"},
        {title: "Métier", value:"Actrice"},
        {title: "Signe Astrologique", value:"Scorpion"},
        {title: "Date de naissance", value:"1993-10-25"},
        {title: "Style de jeu", value:"Expressif, Audacieux, Émotionnel"},
        {title: "Thèmes récurrents", value:"Solitude, Marginalité, Folie, Désir de reconnaissance"},
        {title: "Qualité", value:"Intensité"},
    ],
    timeline: [
        {
            year: "2013",
            title: "Nymphomaniac",
            description: "Débuts au cinéma dans le film de Lars von Trier.",
          },
          {
            year: "2016",
            title: "A Cure for Wellness",
            description: "Premier rôle marquant dans un thriller psychologique.",
          },
          {
            year: "2018",
            title: "Suspiria",
            description: "Reconnaissance critique pour une performance intense.",
          },
          {
            year: "2022",
            title: "X / Pearl",
            description: "Explosion médiatique et consécration dans le cinéma d’horreur.",
            quote: "Pearl is a character who wants to be seen.",
          },
          {
            year: "2023",
            title: "Infinity Pool",
            description: "Confirmation de son statut d’actrice audacieuse.",
          },
          { 
            year: "2024",
            title: "Projet : MaXXXine (suite de X)",
            description: "Mia Goth s’impose durablement comme une icône du cinéma d’horreur contemporain.",
          },
          {
            year: "2025",
            title: "Frankenstein",
            description: "Projet associé à l’univers de Frankenstein, explorant la douleur, l’exclusion et l’intelligence émotionnelle.",
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
        },
        {
            text: "In those eyes I saw pain, and what is pain if not evidence of intelligence?",
            source: "Movie : Frankenstein"
        }
    ]


};
