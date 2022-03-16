import { useState, useEffect } from 'react';

const useData = url => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url, {
            headers: { Authorization: `Bearer ${localStorage.acces_token}` },
        })
        .then(response => response.json())
        .then(data => setData(data.data))
    }, [url]);
    return data;
}

export default useData;