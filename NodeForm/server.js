const http = require("http");
const { createReadStream } = require("fs");
const { parse } = require("querystring");

const { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017";

const connectDB = async () => {
  let client = await MongoClient.connect(url);

  let database = client.db("usersDB");

  let collection = await database.createCollection("usersInfo");

  return collection;
};

http
  .createServer(async (req, res) => {
    if (req.method === "POST") {
      let UrlEncoded = "application/x-www-form-urlencoded";
      // setting up the content type. whenever we will handle html form in nodeJS we have to manually set the content type

      if (req.headers["content-type"] === UrlEncoded) {
        // events ==> event number 1
        let body = "";
        req.on("data", (chunks) => {
          console.log("line number 15" + chunks);
          body += chunks.toString();
        });
        // event number 2 (ending the event)
        req.on("end", async () => {
          // parsing the data
          let payload = parse(body);
          //   console.log(body);
          //   console.log(payload);
          let { userName, userPassword } = payload;

          let collection = await connectDB();
          console.log(collection);
          await collection.insertOne({ userName, userPassword });

          res.end("data submitted");
        });
      } else {
        res.end(null);
      }
    } else {
      if (req.url === "/") {
        res.end("home page");
      } else if (req.url === "/form") {
        res.writeHead(200, "okay", { "Content-Type": "text/html" });
        createReadStream("./form.html").pipe(res);
      } else if (req.url === "/users") {
        let collection = await connectDB();
        let users = await collection.find().toArray();
        res.end(JSON.stringify(users));
      } else {
        res.end("404");
      }
    }
  })
  .listen(9000, (err) => {
    if (err) throw err;
    console.log("server running....");
  });
