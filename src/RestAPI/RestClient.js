import axios from 'axios';

class RestClient {
    static GetRequest = (getUrl) => {
        return axios.get(getUrl).then(response=> {
            return response.data;
        }).catch(error=> {
            return error;
        })
    }

    static PostRequest = (postUrl, postJson) => {
        let config = {
            headers: {
                'Content-Type' : 'application/form-data',
            }
        }
        return axios.post(postUrl, postJson, config).then(response=> {
            return response.data;
        }).catch(error=> {
            return error;
        });
    }
}

export default RestClient