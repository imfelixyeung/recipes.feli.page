import { LocalisedString } from "../i18n";

export type Unit = {
    name: LocalisedString;
};

export const units = {
    tablespoon: {
        name: { "en-GB": "Tablespoon", "zh-HK": "湯匙" },
    },
    teaspoon: {
        name: { "en-GB": "Teaspoon", "zh-HK": "茶匙" },
    },
    millilitre: {
        name: { "en-GB": "Millilitre", "zh-HK": "毫升" },
    },
    gram: {
        name: { "en-GB": "Gram", "zh-HK": "克" },
    },
} as const satisfies Record<string, Unit>;
