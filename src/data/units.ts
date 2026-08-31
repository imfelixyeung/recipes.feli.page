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
    count: {
        name: { "en-GB": "Count", "zh-HK": "個" },
    },
    cup: {
        name: { "en-GB": "Cup", "zh-HK": "杯" },
    },
    millimetre: {
        name: { "en-GB": "Millimetre", "zh-HK": "毫米" },
    },
} as const satisfies Record<string, Unit>;
