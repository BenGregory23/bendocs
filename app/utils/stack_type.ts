export enum stack_type {
    FRONTEND = "Frontend",
    BACKEND = "Backend",
    DATABASE = "Base de données",
    TOOLS = "Outils",
    LANGUAGE = "Langages"
}

export const stackTypeDescriptions: { [key in stack_type]: string } = {
    [stack_type.FRONTEND]: "Utilisé pour la partie visible d'une application web ou mobile.",
    [stack_type.BACKEND]: "Gère la logique côté serveur d'une application.",
    [stack_type.DATABASE]: "Stocke et récupère les données pour une application.",
    [stack_type.TOOLS]: "Outils utilisés dans le développement et la gestion de projet.",
    [stack_type.LANGUAGE]: "Langages de programmation utilisés dans le développement."
};