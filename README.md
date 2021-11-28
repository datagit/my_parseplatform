#### parseplatform
```java
// parse-server-example
// demo code from senior developer: https://github.com/codecraft-tv/parse-server-codecraft

```
```java
Prerequisites

- Node 8 or newer
- MongoDB version 3.6
- Python 2.x (For Windows users, 2.7.1 is the required version)
- For deployment, an infrastructure provider like Heroku or AWS

```
```java
// guide: https://docs.parseplatform.org/parse-server/guide/
sh <(curl -fsSL https://raw.githubusercontent.com/parse-community/parse-server/master/bootstrap.sh)


             `.-://////:-..`
         `:/oooooooooooooooo+:.`
      `:+oooooooooooooooooooooo+/`
     :+ooooooooooooooooooooooooooo/.
   .+oooooooooooooo/:.....-:+ooooooo-
  .+ooooooooooooo/` .:///:-` -+oooooo:
 `+ooooooooooooo: `/ooooooo+- `ooooooo-
 :oooooooooooooo  :ooooooooo+` /oooooo+
 +ooooooooooooo/  +ooooooooo+  /ooooooo.
 oooooooooooooo+  ooooooooo`  .oooooooo.
 +ooooooooooo+/: `ooooooo`  .:ooooooooo.
 :ooooooo+.`````````````  /+oooooooooo+
 `+oooooo- `ooo+ /oooooooooooooooooooo-
  .+ooooo/  :/:` -ooooooooooooooooooo:
   .+ooooo+:-..-/ooooooooooooooooooo-
     :+ooooooooooooooooooooooooooo/.
      `:+oooooooooooooooooooooo+/`
         `:/oooooooooooooooo+:.`
             `.-://////:-..`

              parse-server


Enter an installation directory
(/Users/datdao/Developer/Code/my_parseplatform):

This will setup parse-server in /Users/datdao/Developer/Code/my_parseplatform
Do you want to continue? (Y/n): y
✓ node: v12.14.1
✓ npm: 6.13.4
Setting up parse-server in /Users/datdao/Developer/Code/my_parseplatform
✓ /Users/datdao/Developer/Code/my_parseplatform exists
Enter your Application Name: MyParseplatform
Enter your Application Id (leave empty to generate):

AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW

Enter your Master Key (leave empty to generate):

qKm3C8my8M34lsg3PvYdcCrYCuafcaBMjJG9uO4y

Enter your mongodbURI (mongodb://127.0.0.1:27017/parse):
✓ Created config.json
✓ Created package.json
✓ Created cloud/
✓ Created cloud/main.js
✓ Created public/

✓ running npm install

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
[bcrypt] Success: "/Users/datdao/Developer/Code/my_parseplatform/node_modules/bcrypt/lib/binding/bcrypt_lib.node" is installed via remote

                  1111111111
               1111111111111111
            1111111111111111111111
          11111111111111111111111111
        111111111111111       11111111
       1111111111111             111111
      1111111111111   111111111   111111
      111111111111   11111111111   111111
     1111111111111   11111111111   111111
     1111111111111   1111111111    111111
     1111111111111111111111111    1111111
     11111111                    11111111
      111111         1111111111111111111
      11111   11111  111111111111111111
       11111         11111111111111111
        111111     111111111111111111
          11111111111111111111111111
            1111111111111111111111
              111111111111111111
                  11111111111


        Thanks for installing parse 🙏
  Please consider donating to our open collective
      to help us maintain this package.

  👉 https://opencollective.com/parse-server

added 528 packages from 565 contributors and audited 528 packages in 23.071s

34 packages are looking for funding
  run `npm fund` for details

found 29 vulnerabilities (2 low, 12 moderate, 14 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

✓ Happy Parsing!


✓ Make sure you have mongo listening on mongodb://127.0.0.1:27017/parse
✓ start parse-server by running npm start
✓ Test your setup with:

curl -X POST -H 'X-Parse-Application-Id: AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW' \
  -H 'Content-Type: application/json' \
  -d '{"foo":"bar"}' http://localhost:1337/parse/classes/TestObject
```
#### step do
```java
sh <(curl -fsSL https://raw.githubusercontent.com/parse-community/parse-server/master/bootstrap.sh)
// Make sure you have mongo listening on mongodb://127.0.0.1:27017/parse
// start parse-server by running npm start
npm start
// [5772] parse-server running on http://localhost:1337/parse

// The parameters are as follows:
```

#### parse-dashboard
```java
// guide: https://github.com/parse-community/parse-dashboard

// Install the dashboard from npm
npm install -g parse-dashboard
// parse-dashboard@3.2.1
// You can launch the dashboard for an app with a single command by supplying an app ID, master key, URL, and name like this
// parse-dashboard --dev --appId yourAppId --masterKey yourMasterKey --serverURL "https://example.com/parse" --appName optionalName

parse-dashboard --dev --appId AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW --masterKey qKm3C8my8M34lsg3PvYdcCrYCuafcaBMjJG9uO4y --serverURL "http://localhost:1337/parse" --appName MyParseplatform

// access to parse-sdashboard
open http://localhost:4040
```

#### How to debug Node.js apps in Visual Studio Code
```java
// guide: https://blog.logrocket.com/how-to-debug-node-js-apps-in-visual-studio-code/

// run nodejs connect to parse-serve
node --inspect myclient/nodejs_examples.js
```
#### cloud-functions, cloud-code
```java
// guide: https://docs.parseplatform.org/cloudcode/guide/#cloud-functions
// make Review object on parse
{
  "movie": "The Matrix",
  "stars": 5,
  "comment": "Too bad they never made any sequels."
}
// http://localhost:4040/apps/MyParseplatform/api_console/js_console
const Review = Parse.Object.extend("Review");
const review = new Review();

review.set("movie", "The Matrix");
review.set("stars", 5);
review.set("comment", "Too bad they never made any sequels.");

review.save()
.then((review) => {
  // Execute any logic that should take place after the object is saved.
  alert('New object created with objectId: ' + review.id);
}, (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  alert('Failed to create new object, with error code: ' + error.message);
});

// You can also call Cloud functions using the REST API:
// request
curl --location --request POST 'http://localhost:1337/parse/functions/averageStars' \
--header 'X-Parse-Application-Id: AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW' \
--header 'Content-Type: application/json' \
--data-raw '{ "movie": "The Matrix" }'

// response
{
    "result": 4
}

// add validation in cloud fucntion
// login
const user = await Parse.User.logIn('datdao', '123456');
// Do stuff after successful login.
console.log('Parse.User.logIn:', user);
// call cloud code  
const params =  { movie: "The Matrix" };
const ratings = await Parse.Cloud.run("averageStars", params);
console.log(`callCloudFunction ratings:`, ratings);

// cloud-code-context -> https://docs.parseplatform.org/js/guide/#cloud-code-context
// using for triggert on object
```

#### rest guide: https://docs.parseplatform.org/rest/guide/
```java
// login
curl --location --request GET 'http://localhost:1337/parse/login?username=datdao&password=123456' \
--header 'X-Parse-Application-Id: AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW' \
--header 'X-Parse-Revocable-Session: 1' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=datdao' \
--data-urlencode 'password=123456'
// response
{
    "objectId": "ZbAS5yYCQ0",
    "foo": "bar",
    "username": "datdao",
    "createdAt": "2021-11-25T07:45:14.577Z",
    "updatedAt": "2021-11-25T07:45:14.577Z",
    "ACL": {
        "*": {
            "read": true
        },
        "ZbAS5yYCQ0": {
            "read": true,
            "write": true
        }
    },
    "sessionToken": "r:8cbc7bf497b95810f6fc583925a82367"
}
// get user info
curl -X GET \
  -H "X-Parse-Application-Id: AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW" \
  -H "X-Parse-Session-Token: r:8cbc7bf497b95810f6fc583925a82367" \
  http://localhost:1337/parse/users/me
```

#### Cloud Jobs
```java
// guide: https://docs.parseplatform.org/cloudcode/guide/#cloud-jobs
// Define a Job
Parse.Cloud.job("myJob", (request) =>  {
  // params: passed in the job call
  // headers: from the request that triggered the job
  // log: the ParseServer logger passed in the request
  // message: a function to update the status message of the job object
  const { params, headers, log, message } = request;
  message("I just started");
  return doSomethingVeryLong(request);
});

// Calling jobs is done via the REST API and is protected by the master key.
curl --location --request POST 'http://localhost:1337/parse/jobs/myJob' \
--header 'X-Parse-Application-Id: AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW' \
--header 'X-Parse-Master-Key: qKm3C8my8M34lsg3PvYdcCrYCuafcaBMjJG9uO4y' \
--header 'Content-Type: application/json' \
--data-raw '{"key1": 123}'
```

#### Using ParsePlatform cloud code with Typescript
```java
// guide: https://medium.com/@avifatal/using-parseplatform-cloud-code-with-typescript-d27ded2e5054
npm install @types/parse --save
```

#### Parseplatform livequery
```java
// guide: https://www.youtube.com/watch?v=R-a5dsgLXXY&list=PL-TLnxxt_AVFEOlCFBHBG_BbpaF3UX-EU&index=35
// demo code: https://github.com/codecraft-tv/parse-server-codecraft/blob/master/index.js

// app.js
let ParseServer = require('parse-server').ParseServer;
var api = new ParseServer({
  appName: 'MyParseplatform',
  databaseURI: 'mongodb://127.0.0.1:27017/parse',
  cloud: './cloud/main.js',
  appId: 'AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW',
  masterKey: 'qKm3C8my8M34lsg3PvYdcCrYCuafcaBMjJG9uO4y',
  // fileKey: 'myFileKey',
  // push: { ... }, // See the Push wiki page
  // filesAdapter: ...,
  cloud: './cloud/main',
  liveQuery: {
    classNames: ['People'],
    // redisURL: 'redis://localhost:6379/1'
  },
});

var express = require('express');

var app = express();

// Serve the Parse API at /parse URL prefix
app.use('/parse', api);

var port = 1337;

var httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
	console.log('parse-server-example running on port ' + port + '.');
});


// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);

npm run dev
// client default connect to: ws://localhost:1337/parse
// how to check server run with port by command
sudo lsof -i -P -n | grep LISTEN
sudo lsof -i -P -n | grep 1337
// -------------------------------------------------------------------------------

// client-web: myclient/web.html
// <script src="https://npmcdn.com/parse@3.4.0/dist/parse.js"></script>
Parse.initialize("AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW");
Parse.serverURL = 'http://localhost:1337/parse';
var People = Parse.Object.extend("People");
var query = new Parse.Query('People');
Parse.LiveQuery.on('open', () => {
  console.log('socket connection established');
});
const myDemo = async () => {
  query.equalTo('name', 'Mengyan');
  var subscription = await query.subscribe();

  subscription.on('open', function () {
    console.log('subscription opened');
  });

  subscription.on('create', function (people) {
    console.log(people.get('name')); // This should output Mengyan
  });

  subscription.on('update', function (people) {
    console.log(people.get('score')); // This should output 100
  });
}
myDemo();
```

### Data Replationship
#### One-to-Many
```java
// Pointers or Arrays

// Pointers: First, how many objects are involved in this relationship? If the “many” side of the relationship could contain a very large number (greater than 100 or so) of objects, then you have to use Pointers.

// 1 User(id, name, email) -> have many times play Game(id, name, score)
// save
var game = new Parse.Object("Game");
game.set("createdBy", Parse.User.current());
// get all games
var query = new Parse.Query("Game");
query.equalTo("createdBy", Parse.User.current());
// get the user who created the Game
// say we have a Game object
var game = ...
// getting the user who created the Game
var user = game.get("createdBy");

// -----------------------------
// find Game with conditon and User with condition
const User = Parse.Object.extend("User");
const Game = Parse.Object.extend("Game");
const innerUserQuery = new Parse.Query(User);
innerUserQuery.exists("foo");
const query = new Parse.Query(Game);
// createdBy is pointer
query.matchesQuery("createdBy", innerUserQuery);
const results = await query.find();
console.log(results);
// -----------------------------
// Arrays:  If the number of objects is small (fewer than 100 or so), then Arrays may be more convenient, especially if you typically need to get all of the related objects (the “many” in the “one-to-many relationship”) at the same time as the parent object

// 1 User(id, name, email) -> have many weapons(id, name, ...)
// let's say we have four weapons
var scimitar = "scimitar";
var plasmaRifle = "plasmaRifle";
var grenade = "grenade";
var bunnyRabbit = "bunnyRabbit";

// stick the objects in an array
var weapons = [scimitar, plasmaRifle, grenade, bunnyRabbit];

// store the weapons for the user
var user = Parse.User.current();
user.set("weaponsList", weapons);

//get all weapons
var weapons = Parse.User.current().get("weaponsList")
```
#### Many-to-Many
```java
// 1 Book(id, name) -> n Author(id, name, email)
// 1 Author(id, name, email) -> n Book(id, name)
const Author = Parse.Object.extend("Author");
const query = new Parse.Query(Author);

const author1 = await query.get("qP6CY93yyX");
const author2 = await query.get("LpQGRFvTv6");
const author3 = await query.get("BEDHMRYZRl");

// now we create a book object
var Book = Parse.Object.extend("Book");
const book = new Book();

book.set("name", 'book2');
await book.save();

// now let’s associate the authors with the book
// remember, we created a "authors" relation on Book
var relation = book.relation("authors");
relation.add(author1);
relation.add(author2);
relation.add(author3);

// now save the book object
await book.save();
// auto create new collection: _Join:authors:Book

// get data
const Book = Parse.Object.extend("Book");
const q = new Parse.Query(Book);

q.equalTo("name", "book2");
const book = await q.first();

// create a relation based on the authors key
var relation = book.relation("authors");

// generate a query based on that relation
var query = relation.query();

// now execute the query
const results = await query.find();
console.log(results);

//------------------------------------------
const Author = Parse.Object.extend("Author");
const q = new Parse.Query(Author);

q.equalTo("name", "Author1");
const author = await q.first();

// first we will create a query on the Book object
var query = new Parse.Query("Book");

// now we will query the authors relation to see if the author object we have
// is contained therein
query.equalTo("authors", author);

// now execute the query
const results = await query.find();
console.log(results);
```
#### One-to-One
```java
// One-to-One
// Limiting visibility of some user data. In this scenario, you would split the object in two, where one portion of the object contains data that is visible to other users, while the related object contains data that is private to the original user (and protected via ACLs).

// Splitting up an object for size.

var user = Parse.User.current();


var PrivateData = Parse.Object.extend("PrivateData");
const privateData = new PrivateData();

// set pointer
privateData.set("user", user);
privateData.set("name", 'nguyen van a');
privateData.set("age", 10);
privateData.set("originEmail", 'nguyenvana@gamil.com');
// ....
privateData.setACL(new Parse.ACL(user));
await privateData.save();

user.set("privateData", privateData);
user.setACL(new Parse.ACL(user));
await user.save();
```

#### parse-dbtool
```java
// https://npm.io/package/parse-dbtool
npm i parse-dbtool

npx parse-dbtool --help
// init database for test
ENV_FILE='.env.test' npx parse-dbtool init
// Parse DBTool v1.0.2 - Parse server tool for data migration and seeding.
// Initialize parse-server to suport migration and seeds
// SUCCESS  Successfully created databases folder at /Users/datdao/Developer/Code/my_parseplatform/databases
ENV_FILE='.env.test' npx parse-dbtool migration:make create_pet
//Parse DBTool v1.0.2 - Parse server tool for data migration and seeding.
//SUCCESS  New migration was created at databases/migrations/20211128223944-create_pet.js

ENV_FILE='.env.test' npx parse-dbtool migrate
// Parse DBTool v1.0.2 - Parse server tool for data migration and seeding.
// Run migration on parse-server at http://localhost:1337/parse
//  ⠶ Migrating 20211128223944-create_pet.js
//  ✓ Migrated  20211128223944-create_pet.js
//  SUCCESS  Successfully run migrations.

ENV_FILE='.env.test' npx parse-dbtool migration:status
// Parse DBTool v1.0.2 - Parse server tool for data migration and seeding.
//  ✓  up   20211128223944-create_pet.js

ENV_FILE='.env.test' npx parse-dbtool migration:undo


ENV_FILE='.env.test' npx parse-dbtool seed:make seed_pets
// Parse DBTool v1.0.2 - Parse server tool for data migration and seeding.
// SUCCESS  New migration was created at /Users/datdao/Developer/Code/my_parseplatform/databases/seeders/20211128224443-seed_pets.js

ENV_FILE='.env.test' npx parse-dbtool seed
// Parse DBTool v1.0.2 - Parse server tool for data migration and seeding.
// Run seeders on parse-server at http://localhost:1337/parse
// Run all files inside databases/seeders
//  ⠶ Seeding 20211128224443-seed_pets.js
//  ✓ Done    20211128224443-seed_pets.js
// SUCCESS  Successfully run seeders.

```