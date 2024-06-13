import { useState, useEffect, useCallback } from 'react';

const useFetchData = <T> (fetchFunction: () => Promise<T>) =>
{
    const [data, setData] = useState<T | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

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

    return { data, error, loading, refetch: fetchData };
};

export default useFetchData;
