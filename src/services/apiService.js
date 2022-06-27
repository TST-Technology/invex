import axios from "axios";
import {
  MarketbashUrl,
  MarketbashUrls,
  BASE_URL_V2,
  VALUATION_URL,
  BASE_URL_V3,
} from '../config/urls';

export const Services = axios.create({
  baseURL: MarketbashUrl,
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    //'Authorization': 'token <your-token-here>'
  },
});

export const Service = axios.create({
  baseURL: MarketbashUrls,
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    //'Authorization': 'token <your-token-here>'
  },
});

export const ServiceV2 = axios.create({
  baseURL: BASE_URL_V2,
  headers: {
    Accept: 'application/json',
  },
});

export const ValuationService = axios.create({
  baseURL: VALUATION_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const ServiceV3 = axios.create({
  baseURL: BASE_URL_V3,
  headers: {
    Accept: 'application/json',
  },
});

