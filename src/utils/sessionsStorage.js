import { loadingState } from "../app/search/utils/loadingState";

// Storing a search in storage to decrease load times when coming back
export const readSearchFromSessionStorage = () => {
    const initState = {
        input: '',
        state: loadingState.IDLING,
        searchedProductions: []
    }
    try { 
        const storedData = window.sessionStorage.getItem('searchStored');
        if (storedData) {
            let parsedData = JSON.parse(storedData)
            initState.searchedProductions = parsedData.productionsResults;
            initState.input = parsedData.searchMade; 
            initState.state = loadingState.FOUND;
        }
        return initState
    } catch (error) {
        console.log('error', error);
        return initState
    }

}

export const storeSearchToSessionStorage = (searchToStore) => window.sessionStorage.setItem('searchStored', JSON.stringify(searchToStore))

export const removeStoredSearch = (storedSearchItem) => window.sessionStorage.removeItem(storedSearchItem)