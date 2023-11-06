import { apiClient } from "./ApiClient";

export const executePostRequestToShortUrl= (originalUrl) => apiClient.post(`/createUrl`, {fullUrl: originalUrl,deneme: "deneme"});


//export const executeGetRequestToUrlDetails= (userShortUrl) => apiClient.get(`/urlDetails/${userShortUrl}`);
