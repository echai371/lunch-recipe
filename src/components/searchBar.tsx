import * as React from "react";
import {StoreContainer} from '../store';
import {Button, Input, Menu, Segment} from "semantic-ui-react";
import Select from "react-select";

interface Props {}

const SearchBar: React.FC<Props> = () => {
    const store = StoreContainer.useContainer()
    return (
        <div>
            <h2 className="center">Lunch Recipe</h2>
            <Segment.Group horizontal>
                <Segment>
                    <Input icon="search" placeholder="Search recipe" value={store.searchKey} onChange={store.handleSearchKey}/>
                    <Button type="submit" onClick={store.handleSearchName}>Search</Button>
                </Segment>
                <Segment>
                    <Select
                        value={store.selectedCategory}
                        options={store.Categories}
                        placeholder="Select category"
                        onChange={store.handleSearchCategory}
                    />
                </Segment>
            </Segment.Group> 
        </div>
    )
}

export default SearchBar