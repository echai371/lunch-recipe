import * as React from "react";
import {StoreContainer} from '../store'
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import {RecipeList} from "../struct";

interface ResultListProps {
result: RecipeList[]
}

const ResultList: React.FC<ResultListProps> = (props) => {
    const store = StoreContainer.useContainer()
    // store.MenuList()
        return (
                <Card.Group>
                    {store.recipeNameResult.map((result) => (
                        <Card>
                            {/*<Image src={store.recipeNameResult.strMealThumb} wrapped ui={false}></Image>*/}
                            <Card.Content>
                                {/*<Card.Header>{result.strMeal}</Card.Header>*/}
                                <Card.Meta></Card.Meta>
                                <Card.Description></Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
    );
    }

export default ResultList