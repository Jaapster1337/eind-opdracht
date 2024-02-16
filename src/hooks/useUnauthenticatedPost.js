import axios from "axios";
import {useEffect, useState} from "react";

export function useUnauthenticatedPost(url, query, config) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axios.post(url, config);
                setData(response.data);
            } catch (e) {
                console.error("Error occured", e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        void fetchData()


    }, [url, query, config]);

    return {data, loading, error};
}