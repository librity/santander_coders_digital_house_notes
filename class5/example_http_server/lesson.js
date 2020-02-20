const http = require("http");
const url = require("url");
var fs = require("fs");
const { parse } = require("querystring");

const pet = require("./petshop");

function collectRequestData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";
  if (request.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    request.on("data", chunk => {
      body += chunk.toString();
    });
    request.on("end", () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}

const server = http.createServer((req, res) => {
  console.log("Estou dentro de um servidor.\n");
  // console.log(req);
  // console.log("-".repeat(50));

  const fullUrl = url.parse(req.url, true);
  const routes = fullUrl.pathname;
  const data = fullUrl.query;

  if (routes === "/") {
    res.write("I like bananas\n");
    res.write("Because they have no bones\n");
    res.write("I LOVE $$$$\n");
    res.write("Camp Forlon Hope\n");

    return res.end();
  }

  if (routes === "/contato") {
    res.write("Call me maybe!\n");

    return res.end();
  }

  if (routes === "/pets") {
    res.write(pet.listPets());

    return res.end();
  }

  if (routes === "/addpet") {
    pet.addPet(data.name);

    res.write("Pet added!");

    return res.end();
  }

  if (routes === "/newpet") {
    switch (req.method) {
      case "GET":
        // <form action="/newpet" method="get">
        res.write(`
            <!DOCTYPE html>
            <html>
              <body>
                <form action="/newpet" method="post">
                  <input type="text" name="name" /><br />
                  <button>Save</button>
                </form>
              </body>
            </html>
          `);

        res.end();
        break;

      case "POST":
        collectRequestData(req, result => {
          // console.log(result);

          pet.addPet(result.name);

          res.end(`Parsed data belonging to ${result.name}`);
        });

        break;

      default:
        res.end();
        break;
    }
  }

  return res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000.");
});
