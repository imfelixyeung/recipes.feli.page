import { MeasurementValue } from "@/src/data/recipes";
import { Unit } from "@/src/data/units";
import { AppLocale, s } from "@/src/i18n";
import { useMemo } from "react";

const RecipeMeasurement = ({
    unit,
    value,
    locale,
}: {
    unit: Unit;
    value: MeasurementValue;
    locale: AppLocale;
}) => {
    const formattedValue = useMemo(() => {
        if (Array.isArray(value)) {
            const [value1, value2] = value;
            return `${value1.toLocaleString()}-${value2.toLocaleString()}`;
        }

        return value.toLocaleString();
    }, [value]);
    return (
        <>
            {formattedValue} {s(locale, unit.name)}
        </>
    );
};

export default RecipeMeasurement;
