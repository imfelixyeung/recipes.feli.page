import { RecipeRequirement as RecipeRequirementType } from "@/src/data/recipes";
import { SupportedLocale } from "@/src/i18n";
import RecipeRequirement from "./requirement";

const RecipeRequirements = ({
    requirements,
    locale,
}: {
    requirements: RecipeRequirementType[];
    locale: SupportedLocale;
}) => {
    return (
        <ul>
            {requirements.map((requirement, index) => (
                <li key={index}>
                    <RecipeRequirement
                        locale={locale}
                        requirement={requirement}
                    />
                </li>
            ))}
        </ul>
    );
};

export default RecipeRequirements;
