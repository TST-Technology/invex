import axios from "axios";
import { MarketbashUrl, MarketbashUrls } from "../config/urls";

export const Services = axios.create({
    baseURL: MarketbashUrl,
    // timeout: 1000,
    headers: {
        'Accept': 'application/json',
        //'Authorization': 'token <your-token-here>'
    }
});

export const Service =
    axios.create({
        baseURL: MarketbashUrls,
        // timeout: 1000,
        headers: {
            'Accept': 'application/json',
            //'Authorization': 'token <your-token-here>'
        }
    });

