// Cloud Code entry point

// Parse.Cloud.define("averageStars", async (request) => {
//   const query = new Parse.Query("Review");
//   query.equalTo("movie", request.params.movie);
//   const results = await query.find();
//   let sum = 0;
//   for (let i = 0; i < results.length; ++i) {
//     sum += results[i].get("stars");
//   }
//   return sum / results.length;
// });

// add validation for cloud function
Parse.Cloud.define(
  'averageStars',
  async (request) => {
    const query = new Parse.Query('Review');
    query.equalTo('movie', request.params.movie);
    const results = await query.find();
    let sum = 0;
    for (let i = 0; i < results.length; ++i) {
      sum += results[i].get('stars');
    }
    return sum / results.length;
  },
  {
    fields: ['movie'],
    requireUser: true,
  }
);

// Define a Job
const doSomethingVeryLong = (request) => {
  console.log('run method doSomethingVeryLong:', request);
  return 'abc';
};
Parse.Cloud.job('myJob', (request) => {
  // params: passed in the job call
  // headers: from the request that triggered the job
  // log: the ParseServer logger passed in the request
  // message: a function to update the status message of the job object
  const { params, headers, log, message } = request;
  message('I just started');
  return doSomethingVeryLong(request);
});

// Save Triggers
// IMPLEMENTING DATA VALIDATION
Parse.Cloud.beforeSave(
  'Review',
  (request) => {
    // logic code here
    // do any additional beforeSave logic here
    const comment = request.object.get('comment');
    if (comment.length > 140) {
      // Truncate and add a ...
      request.object.set('comment', comment.substring(0, 137) + '...');
    }
  },
  {
    // define validation here
    fields: {
      stars: {
        required: true,
        options: (stars) => {
          return stars >= 1 && stars <= 5;
        },
        error: 'Your review must be between one and five stars',
      },
    },
  }
);

// trigger afterSave class Comment
// Parse.Cloud.afterSave("Comment", (request) => {
//   // client will input Comment the same
//   // comment.set('comment', 'my title');
//   // comment.set('post', post);// post is object
//   const query = new Parse.Query("Post");
//   query.get(request.object.get("post").id)
//     .then(function(post) {
//       post.increment("comments");
//       return post.save();
//     })
//     .catch(function(error) {
//       console.error("Got an error " + error.code + " : " + error.message);
//     });
// });

// ASYNC BEHAVIOR
Parse.Cloud.beforeSave(Parse.User, async (request) => {
  // code here
  // const query = new Parse.Query("Post");
  // const post = await query.get(request.object.get("post").id);
  throw 'database failed to connect';
})