import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch.js';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([]),
    [search, setSearch] = useState(''),
    [searchResults, setSearchResult] = useState([]),
    {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
    setPosts(data)
    },[data])

    useEffect(() => {
    const filteredResults = posts.filter(post => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()))

        setSearchResult(filteredResults.reverse());

    }, [posts, search])

    return (
        <DataContext.Provider value={{
            posts, setPosts,
            search, setSearch,    
            searchResults, fetchError, isLoading
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;