import * as React from "react";
import {StoreContainer} from '../store'
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import { SingleRecipeList } from "../struct";

interface SingleRecipeProps {
    result: SingleRecipeList[]
}

const SingleRecipe: React.FC<SingleRecipeProps> = (props) => {
    const store = StoreContainer.useContainer()
        return (
            <div className="center">
                {store.selectedRecipe.map((result) => (
                    <Card>
                        <img src={result.strMealThumb} height={200}></img>
                            <Card.Content>
                                <Card.Header>{result.strMeal}</Card.Header>
                                <Card.Meta>{result.strCategory}</Card.Meta>
                                <Card.Meta>{result.strArea}</Card.Meta>
                                <Card.Description>{result.strInstructions}</Card.Description>
                            </Card.Content>
                    </Card>
                    ))}
            </div>
        );
    }

export default SingleRecipe