

export const getImagen = async() => {

    try {

        const apiKey = 'pR3YEjg8EQP3qaLkHTfRMJh01Qy1dSGG';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'Image not found';
    }
    
    
    
}