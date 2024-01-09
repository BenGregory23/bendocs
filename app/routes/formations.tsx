import Formation from "../components/formations/formation"
export default function Formations() {
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
                    name: "Tailwind",
                    id: "6"
                },
                {
                    name: "Vercel",
                    id: "7"
                }
            ]
        },
        {
            title: "DUT Informatique",
            school_name: "IUT de Clermont-Ferrand",
            year_start: "2020-09-01",
            year_end: "2022-07-31",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
            stack: [
                {
                    name: "React",
                    id: "1"
                },
                {
                    name: "Node",
                    id: "2"
                },
                {
                    name: "Typescript",
                    id: "3"
                },
                {
                    name: "PostgreSQL",
                    id: "4"
                },
                {
                    name: "Supabase",
                    id: "5"
                },
                {
                    name: "Tailwind",
                    id: "6"
                },
                {
                    name: "Vercel",
                    id: "7"
                }
            ]
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center w-full h-full p-3">
           {
               formations.map((formation, index) => (
                <Formation key={index} formation={formation} />
                ))    
            }
        </div>
    )

}