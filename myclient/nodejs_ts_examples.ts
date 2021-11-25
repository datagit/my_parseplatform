var http = require('http');

http
  .createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Hello World\n');
  })
  .listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
// ---------------------------------------------------------------

// In a node.js environment
const Parse = require('parse/node');

// Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY", "YOUR_MASTERKEY");
Parse.initialize(
  'AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW',
  undefined,
  'qKm3C8my8M34lsg3PvYdcCrYCuafcaBMjJG9uO4y'
);
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'http://localhost:1337/parse';

// Similarly, you can use extends with Parse.User.
class CustomUser extends Parse.User {
  constructor(attributes) {
    super(attributes);
  }

  doSomething() {
    return 5;
  }
}
Parse.Object.registerSubclass('_User', CustomUser);

// // In addition to queries, logIn and signUp will return the subclass CustomUser.
// const customUser = new CustomUser({ foo: 'bar' });
// customUser.setUsername('datdao');
// customUser.setPassword('123456');
// customUser.signUp().then((user) => {
//   // user is an instance of CustomUser
//   user.doSomething(); // return 5
//   user.get('foo');    // return 'bar'
//   console.log('customUser.signUp:', user);
// });

// Logging In
const login = async (username, password) => {
  const user = await Parse.User.logIn('datdao', '123456');
  // Do stuff after successful login.
  console.log('Parse.User.logIn:', user);
  return user;
};



const myJobApplication = async () => {
  const jobApplication = new Parse.Object("JobApplication");
  const query = new Parse.Query(jobApplication);
  query.equalTo('applicantName','Joe Smith1');
  const results = await query.find();
  console.log(results);
};

const myMain = async () => {
  // Do stuff after successful login.
  await login('datdao', '123456');
  Parse.User.logOut().then(() => {
    const currentUser = Parse.User.current(); // this will now be null
    console.log('Parse.User.logOut:', currentUser);
  });
};

// myMain();
myJobApplication();
