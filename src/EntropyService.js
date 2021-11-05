import Settings from './settings.json';

const getEntropyStatusUrl = Settings.serviceUrl + Settings.getEntropyStatusEndpoint;

export const getEntropyStatus = () => {
    fetch( getEntropyStatusUrl, {mode : "cors"} )
    .then( (response) => {
        return response.json();
    });
}