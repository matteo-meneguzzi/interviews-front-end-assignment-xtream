import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

const handleApiRequest = async <T> (config: AxiosRequestConfig): Promise<T> =>
{
    try
    {
        const response: AxiosResponse<T> = await api.request(config);
        return response.data;
    } catch (error)
    {
        const axiosError = error as AxiosError;
        console.error(`Error ${ config.method?.toUpperCase() } ${ config.url }:`, axiosError.message);
        throw axiosError;
    }
};

export { api, handleApiRequest };
