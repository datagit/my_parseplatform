#### parseplatform
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

#### Using ParsePlatform cloud code with Typescript
```java
// guide: https://medium.com/@avifatal/using-parseplatform-cloud-code-with-typescript-d27ded2e5054
npm install @types/parse --save
```