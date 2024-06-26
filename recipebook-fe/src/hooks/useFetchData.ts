import { useState, useEffect, useCallback } from 'react';

const useFetchData = <T> (fetchFunction: () => Promise<T>) =>
{
    const [data, setData] = useState<T | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    //By wrapping fetchData with useCallback, we ensure that React does not create a new function instance of fetchData on every render
    // unless fetchFunction changes. 

    const fetchData = useCallback(async () =>
    {
        setLoading(true);
        try
        {
            const result = await fetchFunction();
            setData(result);
        } catch (error)
        {
            if (error instanceof Error)
            {
                setError(error.message);
            } else
            {
                console.log('Client error:', error);
                setError('An unexpected error occurred');
            }
        } finally
        {
            setLoading(false);
        }
    }, [fetchFunction]);

    useEffect(() =>
    {
        fetchData();
    }, [fetchData]);

    return { data, error, loading, fetchData };
};

export default useFetchData;
