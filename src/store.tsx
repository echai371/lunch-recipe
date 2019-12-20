import * as React from "react";
import {useState} from "react";
import {createContainer} from "unstated-next"
import {RecipeList} from "./struct";
import axios, {AxiosResponse} from "axios";

export const useStore = () => {
    const [searchKey, setSearchKey] = useState<string>("")
    const [recipeNameResult, setRecipeNameResult] = useState<RecipeList[]>([])

    const handleSearchKey = (event: React.FormEvent<HTMLInputElement>) => {
      const input: string = event.currentTarget.value
        setSearchKey(input)
    }

    const handleSearchName = async (event:React.FormEvent<HTMLButtonElement>) => {
        //     const resp = await axios.get<{meal:RecipeList[]}>("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchKey)
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchKey).then(response => {
            console.log("handle search name", response.data)
            setRecipeNameResult(response.data)
            console.log("array:", recipeNameResult)
        })
    }
        const MenuList = async () => {
            axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=").then (response => {
                console.log("all list: ", response.data)
                setRecipeNameResult(response.data)
            })
        }

    return {
        searchKey,
        handleSearchName,
        handleSearchKey,
        recipeNameResult,
        MenuList
    }
}

export const StoreContainer = createContainer(useStore)
