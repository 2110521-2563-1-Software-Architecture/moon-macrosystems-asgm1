var processName = process.argv.shift();
var scriptName = process.argv.shift();
var interface = process.argv.shift();
var command = process.argv.shift();

var grpcClient = require("./grpc/client.js");
var restapiClient = require("./restAPI/client.js");
console.log(interface);
switch (interface) {
  case "grpc": {
    if (command == "list") grpcClient.listBooks();
    else if (command == "insert")
      grpcClient.insertBook(process.argv[0], process.argv[1], process.argv[2]);
    else if (command == "get") grpcClient.getBook(process.argv[0]);
    else if (command == "delete") grpcClient.deleteBook(process.argv[0]);
  }
  case "restapi": {
    console.log("rest");
    if (command == "list") restapiClient.listBooks();
    else if (command == "insert")
      restapiClient.insertBook(
        process.argv[0],
        process.argv[1],
        process.argv[2]
      );
    else if (command == "get") restapiClient.getBook(process.argv[0]);
    else if (command == "delete") restapiClient.deleteBook(process.argv[0]);
  }
}
