/*
 Title: http-client.js
 Date: 12/05/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class HttpClient
*/
export class HttpClient {
    async get(url, params = "") {
        //Instantiate a new URL
        url = new URL(url);
        //Instantiate a new URLSearchParams with the params
        url.search = new URLSearchParams(params); 
        //Create object literal res
        const res = await fetch(url.toString(), {
            method: "GET",
        });

        //Return res as JSON
        return res.json();
    }
}