import { RecipeRequirement as RecipeRequirementType } from "@/src/data/recipes";
import RecipeRequirement from "./requirement";

const RecipeRequirements = ({
    requirements,
}: {
    requirements: RecipeRequirementType[];
}) => {
    return (
        <ul>
            {requirements.map((requirement, index) => (
                <li key={index}>
                    <RecipeRequirement requirement={requirement} />
                </li>
            ))}
        </ul>
    );
};

export default RecipeRequirements;
