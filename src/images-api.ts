import axios, { AxiosResponse } from 'axios';
import { Image } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'Sutydj1T35CniTGuzyBONubxGK6Q83QuE5gDMNUCKJg'

interface ImageResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

const fetchImagesByName = async (query: string, currentPage: number): Promise<AxiosResponse<ImageResponse>> => {
    const response = await axios.get(`search/photos?client_id=${API_KEY}&page=${currentPage}&query=${query}`);
    console.log(response);
    
    return response;
}

export default fetchImagesByName;
