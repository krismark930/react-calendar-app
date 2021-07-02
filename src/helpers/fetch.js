const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {
    
    const url = `${ baseUrl }/${ endpoint }`; //localhost:4000/api/auth

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
};

const fetchWithToken = () => {

}


export {
    fetchWithoutToken,
    fetchWithToken
}
