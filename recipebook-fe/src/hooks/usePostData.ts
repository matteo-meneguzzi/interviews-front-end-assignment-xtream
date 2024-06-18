import { useState, useCallback } from 'react';

const usePostData = <T, R> (postFunction: (data: T) => Promise<R>) =>
{
    const [data, setData] = useState<R | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    //By wrapping fetchData with useCallback, we ensure that React does not create a new function instance of fetchData on every render
    // unless fetchFunction changes. 

    const postData = useCallback(async (payload: T) =>
    {
        setLoading(true);
        try
        {
            const result = await postFunction(payload);
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
    }, [postFunction]);

    return { data, error, loading, postData };
};

export default usePostData;
