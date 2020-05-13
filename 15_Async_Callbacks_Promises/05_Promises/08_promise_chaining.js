// *****************
// Chaining Promises
// *****************

const fakeRequest2 = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 5, username: 'Esmerelda' }
        ],
        '/users/1': {
          id: 1,
          username: 'Bilbo',
          upvotes: 360,
          city: 'Lisbon',
          topPostId: 454321
        },
        '/users/5': {
          id: 5,
          username: 'Esmerelda',
          upvotes: 571,
          city: 'Honolulu'
        },
        '/posts/454321': {
          id: 454321,
          title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
        },
        '/about': 'This is the about page!'
      };

      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

// Chaining: We can chain .then()'s as long as we make sure they each return
// a promise. The .catch() at the end acts as a catch all and will handle any
// errors along the way.

fakeRequest2('/users')
  .then(res => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest2(`/users/${id}`);
  })
  .then(res => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest2(`/posts/${postId}`);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('Oh no!', err);
  });
