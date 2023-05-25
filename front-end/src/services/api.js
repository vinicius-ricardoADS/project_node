const baseUrl = 'http://localhost:8888'

export const post = async (uri, data) => {
  return fetch(`${baseUrl}${uri}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const postJwt = async (uri) => {
  return fetch(`${baseUrl}${uri}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export const get = async (uri) => {
  return fetch(`${baseUrl}${uri}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
    },
  })
}

export const getPatient = async (uri, id) => {
  return fetch(`${baseUrl}${uri}/${id}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
    },
  })
}

export const remove = async (uri, id) => {
  return await fetch(`${baseUrl}${uri}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  })
}

export const put = async (uri, data, id) => {
  return await fetch(`${baseUrl}${uri}/${id}`, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
