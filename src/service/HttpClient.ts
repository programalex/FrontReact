export class HttpClient {
    
    
    async get(url: string, requestInit: any) {
        
        const response = fetch(url, requestInit)        
        return response;
    }

    async post(url: string, headers: any, body:any) {

        const requestOptions = {
            method: 'POST',
            headers: headers.headers,
            body: JSON.stringify(body.body)
        };
      const response = fetch(url, requestOptions);

      return response;
            

    }

    async put(url: string, headers: any, body:any) {

        const requestOptions = {
            method:'PUT',
            headers: headers.headers,
            body: JSON.stringify(body.body)
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status){
                    alert("La/s modificaciones se realizaron Exitosamente")

                }else{
                    alert(data.message)
                }
               });
    }

    async putNoBody(url: string, headers: any) {

        const requestOptions = {
            method: 'PUT',
            headers: headers.headers,
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status){
                    alert("Accion Exitosa")

                }else{
                    alert(data.message)
                }
               });
    }

    async delete(url: string, headers: any) {

        const requestOptions = {
            method: 'DELETE',
            headers: headers.headers,
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status){
                    alert("Eliminacion Exitosa")

                }else{
                    alert(data.message)
                }
               });
    }

    }
    


