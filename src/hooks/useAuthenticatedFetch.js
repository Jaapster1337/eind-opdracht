import axios from "axios";
import {useEffect, useState} from "react";

export function useAuthenticatedFetch(url, token, query) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const headers = {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`,
                };
                const response = await axios.get(url, {headers});


                setData(response.data);
            } catch (e) {
                console.error("Error occured", e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        void fetchData()


    }, [url, token]);

    return {data, loading, error};
}