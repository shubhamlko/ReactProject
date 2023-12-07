import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../Component/BlogsExample/BaseUrl";



export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpages, setTotalpages] = useState(null);

    async function fetchBlogPosts(page = 1, category, tag = null) {
        setLoading(true);
        let Url = `${baseUrl}?page=${page}`;
        if (tag) {
            Url += `&tags=${tag}`;
        }
        if (category) {
            Url += `&category=${category}`;
        }
        console.log("printing app contect");
        console.log(Url);
        try {
            const result = await fetch(Url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalpages(data.totalPages)
        }
        catch (error) {
            console.log("error in fetch data");
            setPage(1);
            setPosts([]);
            setTotalpages(null)
        }
        setLoading(false)
    }

    function handlePageCgange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpages,
        setTotalpages,
        fetchBlogPosts,
        handlePageCgange
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}