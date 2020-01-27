import { DataTypes } from './Types';

const protocol = 'http';
const hostname = 'localhost';
const port = 3500;

const baseUrl = `${protocol}://${hostname}:${port}`;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${baseUrl}/api/products`,
  [DataTypes.CATEGORIES]: `${baseUrl}/api/categories`,
  [DataTypes.ORDERS]: `${baseUrl}/api/orders`
};
