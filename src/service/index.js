
export const getFeed = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json());
};

export const getSingle = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json());
};

export const getComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json());
};