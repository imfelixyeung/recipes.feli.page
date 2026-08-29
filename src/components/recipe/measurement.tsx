import { MeasurementValue } from "@/src/data/recipes";
import { Unit } from "@/src/data/units";
import { useMemo } from "react";

const RecipeMeasurement = ({
    unit,
    value,
}: {
    unit: Unit;
    value: MeasurementValue;
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
            {formattedValue} {unit.name}
        </>
    );
};

export default RecipeMeasurement;
