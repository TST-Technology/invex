import axios from "axios";
import { MarketbashUrl } from "../config/urls";

export const Services = axios.create({
    baseURL: MarketbashUrl,
    // timeout: 1000,
    headers: {
        'Accept': 'application/json',
        //'Authorization': 'token <your-token-here>'
    }
});