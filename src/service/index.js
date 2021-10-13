
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

export const postNewComment = (postId, name, email, body) => {
  return fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({ postId, name, email, body }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
};