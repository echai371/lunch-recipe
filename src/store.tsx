import * as React from "react";
import {useState} from "react";
import {createContainer} from "unstated-next"
import {RecipeList, CategoryList, SingleRecipeList} from "./struct";
import axios from "axios";
import { ValueType } from "react-select";
import { isArray } from "util";
import { PaginationProps } from "semantic-ui-react";

export const useStore = () => {
    const [searchKey, setSearchKey] = useState<string>("")
    const [recipeNameResult, setRecipeNameResult] = useState<RecipeList[]>([])
    const [selectedCategory, setSelectedCategory] = useState<{value:string, label:string} | undefined>()
    const [categoryResult, setCategoryResult] = useState<CategoryList[]>([])
    const [selectedRecipe, setSelectedRecipe] = useState<SingleRecipeList[]>([])
    const [activePage, setActivePage] = useState<number>(1)
    const [errorMsg, setErrorMsg] = useState<string>("")

    const Categories = [
        {label: '', value: ''},
        {label: "Beef", value: 'beef'},
        {label: 'chicken', value: 'chicken'},
        {label: 'Dessert', value: 'dessert'},
        {label: 'Lamb', value: 'lamb'},
        {label: 'Miscellaneous', value: 'miscellaneous' },
        {label: 'Pasta', value: 'pasta'},
        {label: 'Pork', value: 'pork'},
        {label: 'Seafood', value: 'seafood'},
        {label: 'Side', value: 'side'},
        {label: 'Starter', value: 'starter'},
        {label: 'Vegan', value: 'vegan'},
        {label: 'Vegetarian', value: 'vegetarian'},
        {label: 'Breakfast', value: 'breakfast'},
        {label: 'Goat', value: 'goat'}
    ];

    const handleSearchKey = (event: React.FormEvent<HTMLInputElement>) => {
      const input: string = event.currentTarget.value
        setSearchKey(input)
    }

    const handleSearchName = async (event:React.FormEvent<HTMLButtonElement>) => {
        setErrorMsg("")
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchKey).then(response => {
        setSearchKey("")
        if (response.data.meals == null){
            setErrorMsg("There's no recipe found  :(")
            return 
        }
        setCategoryResult(response.data.meals)
      
        })
    }

    const handleSearchCategory = (value: ValueType<{value:string, label:string}>) => {
        setErrorMsg("")
        if(isArray(value)|| !value){
            return 
        }
        const selectedCategory =  value as {label:string, value:string}
        setSelectedCategory(selectedCategory)
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectedCategory.value).then(response => {
        setCategoryResult(response.data.meals)
        })
    }

    const HandleRecipeDetails = (id: string) => {
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id).then(response => {
        setSelectedRecipe(response.data.meals)
        console.log("single result:", response.data.meals)
    })
    }

    const itemsPerPage = 10

    const totalPages = categoryResult.length / itemsPerPage

    const OnPaginationChange = (_:any, data:PaginationProps) => {
        setActivePage(Number(data.activePage))
    }

    return {
        searchKey,
        handleSearchName,
        handleSearchKey,
        recipeNameResult,
        Categories,
        selectedCategory,
        handleSearchCategory,
        categoryResult,
        HandleRecipeDetails,
        selectedRecipe,
        activePage,
        OnPaginationChange,
        totalPages,
        itemsPerPage,
        errorMsg
    }
}

export const StoreContainer = createContainer(useStore)
