const fetchData = ({
  includeCredentials = true,
  method = 'GET',
  payload,
  url,
}) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    redirect: 'follow',
    referrerPolicy: 'origin',
  };

  if (includeCredentials) options.credentials = 'include';

  if (payload) options.body = JSON.stringify(payload);

  return fetch(url, options)
    .then((res) => {
      const { status } = res;
      if (status === 200) return res.json();
      if (status === 401) return {};
      if (status === 403) return {};
      return {};
    })
    .then((data) => data);
};

const GET = async (url, includeCredentials) => {
  const method = 'GET';
  const response = await fetchData({
    includeCredentials,
    method,
    url,
  });

  return response;
};

const POST = async (includeCredentials, payload, url) => {
  const method = 'POST';
  const response = await fetchData({
    includeCredentials,
    method,
    payload,
    url,
  });

  return response;
};

export const FETCH = {
  get: GET,
  post: POST,
  patch: GET,
  delete: GET,
};
