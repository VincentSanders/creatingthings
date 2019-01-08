/**
* EasyHTTP Library
* Library for making HTTP requests
* @version 3.0.0
* @author Vincent
**/

class EasyHTTP{
    // Make an HTTP Get Request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Post Request
    async post(url, post){
        const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            }); 
        const resData = await response.json();
        return resData;          
    }  

    // Make an HTTP Put
    async put(url, post){
       const response = await fetch(url, {
                method: 'PUT', 
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;  
    }  

    // Make an HTTP delete
    async delete(url){
        const response = await fetch(url, {
                method: 'DELETE', 
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const resData = await 'Resource Deleted';
            return resData;  
    }  

}