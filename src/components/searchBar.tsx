import * as React from "react";
import {StoreContainer} from '../store';
import {Button, Input, Menu} from "semantic-ui-react";

interface Props {}

const SearchBar: React.FC<Props> = () => {
    const store = StoreContainer.useContainer()
    return (
        <div>
            <Menu>
                <Menu.Menu>
                    <Menu.Item>
                        <Input icon="search" placeholder="Search name" value={store.searchKey} onChange={store.handleSearchKey}/>
                        <Button type="submit" onClick={store.handleSearchName}>Search</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon="search" placeholder="Search category" value="" />
                        <Button type="submit" >Search</Button>
                    </Menu.Item>
+
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default SearchBar