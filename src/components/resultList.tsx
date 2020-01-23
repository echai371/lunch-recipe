import * as React from "react";
import {StoreContainer} from '../store'
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import { Button, Pagination} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';

const ResultList: React.FC = ():JSX.Element => {
    const store = StoreContainer.useContainer()
    
    const newArray: JSX.Element[] = []

    var ControlPagination = store.categoryResult.slice(
        (store.activePage - 1) * store.itemsPerPage,
        (store.activePage - 1) * store.itemsPerPage + store.itemsPerPage
    )

    if (store.errorMsg){
    return <h3 className="center">{store.errorMsg}</h3>   
    }

    for (let i=0; i<ControlPagination.length; i++){
        newArray.push(
            <div>
                <Card.Group className="center">
                        <Card key={store.categoryResult[i].idMeal}>
                            <img src={store.categoryResult[i].strMealThumb} height={200}></img>
                            <Card.Content>
                                <Card.Header>{store.categoryResult[i].strMeal}</Card.Header>
                            </Card.Content>
                            <Button onClick={() => store.HandleRecipeDetails(store.categoryResult[i].idMeal)}>
                                <NavLink to="/details">More details</NavLink>
                            </Button>
                        </Card>
                </Card.Group>        
            </div>
        )
    }
        return (
            
           <React.Fragment>
               <div className="margin-top">
                   <Card.Group className="center">
                   {newArray}
                </Card.Group> 
                <div className="pagination">
               <Pagination activePage={store.activePage} onPageChange={store.OnPaginationChange} totalPages={store.totalPages} siblingRange={1} />
               </div>
               </div>
            </React.Fragment>
        );                           
    }

export default ResultList