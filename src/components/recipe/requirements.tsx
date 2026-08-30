import { RecipeRequirement as RecipeRequirementType } from "@/src/data/recipes";
import { AppLocale } from "@/src/i18n";
import RecipeRequirement from "./requirement";

const RecipeRequirements = ({
    requirements,
    locale,
}: {
    requirements: RecipeRequirementType[];
    locale: AppLocale;
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
