import { DurationFormat } from "@formatjs/intl-durationformat";

export const celsiusFormatter = new Intl.NumberFormat("en-GB", {
    style: "unit",
    unit: "celsius",
});

export const durationFormatter = new DurationFormat("en-GB", {
    style: "short",
});
