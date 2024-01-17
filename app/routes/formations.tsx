import Formation from "../components/formations/formation"
import {motion} from "framer-motion"

export default function Formations() {
    const containerVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      };
    
      const formationVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
      };

    const formations = [
        {
            title: "Licence Professionnelle Développement Web",
            school_name: "IUT de Clermont-Ferrand",
            year_start: "2022-09-01",
            year_end: "2023-09-01",
            description: "Année de licence professionnelle en alternance dans le développement web au sein de l'entreprise WeMed.  Cette formation est basée sur le développement autant front-end que back-end. Développement d'API REST/SOAP en Java/NodeJS/PHP. Développement d'application web en ReactJS, PHP Symfony et .NET.",
            
            stack: [
                {
                    name: "Java",
                    id: "1"
                },
                {
                    name: "Spring Boot",
                    id: "2"
                },
                {
                    name: "ReactJS",
                    id: "3"
                },
                {
                    name: "MongoDB",
                    id: "4"
                },
                {
                    name: "REST",
                    id: "5"
                },
                {
                    name: "NodeJS",
                    id: "6"
                },
            ]
        },
        {
            title: "DUT Informatique",
            school_name: "IUT de Clermont-Ferrand",
            year_start: "2020-09-01",
            year_end: "2022-07-31",
            description: "DUT Informatique de deux ans au sein de l'IUT de Clermont-Ferrand. Apprentissage des bases de la programmation, de la conception de base de données, de la gestion de projet et de la gestion de réseaux. Différents projet utilisants des technologies commes : C, Java, React, HTML/CSS et SQL.",
            stack: [
                {
                    name: "C",
                    id: "1"
                },
                {
                    name: "Java",
                    id: "2"
                },
                {
                    name: "HTML/CSS",
                    id: "3"
                },
                {
                    name: "MySQL",
                    id: "4"
                },
             
               
            ]
        }
    ]
    return (
        <motion.div  initial="hidden"
        animate="visible" variants={containerVariants} className="flex flex-col justify-center items-center w-full h-full p-3">
           {
               formations.map((formation, index) => (
                <motion.div key={index} variants={formationVariants}>

                <Formation key={index} formation={formation} />
                </motion.div>
                ))    
            }
        </motion.div>
    )

}