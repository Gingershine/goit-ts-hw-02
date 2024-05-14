import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'Sutydj1T35CniTGuzyBONubxGK6Q83QuE5gDMNUCKJg'

const fetchImagesByName = async (query: string, currentPage: number): Promise<AxiosResponse<any>> => {
    const response = await axios.get(`search/photos?client_id=${API_KEY}&page=${currentPage}&query=${query}`);
    
    return response;
}

export default fetchImagesByName;
