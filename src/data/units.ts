export type Unit = {
    name: string;
};

export const units = {
    tablespoon: {
        name: "Tablespoon",
    },
    teaspoon: {
        name: "Teaspoon",
    },
    millilitre: {
        name: "Millilitre",
    },
    gram: {
        name: "Gram",
    },
} as const satisfies Record<string, Unit>;
