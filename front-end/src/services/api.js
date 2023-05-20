const baseUrl = 'http://localhost:8888';

export const post = async(uri) => {
  return fetch(`${baseUrl}${uri}`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
        }
    })
};

export const get = async(uri) => {
    return fetch(`${baseUrl}${uri}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        }
    })
};

export const getPatient = async(uri, id) => {
    return fetch(`${baseUrl}${uri}/${id}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        }
    })
};

export const remove = async ( uri, id) => {
  return await fetch(`${baseUrl}${uri}/${id}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
    }
  });
};