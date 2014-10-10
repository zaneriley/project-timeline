var fs = require("fs")

var stream = fs.createReadStream(__dirname + "/app/index.html")
stream.on("data", function(chunk) {
  // just output chunk to terminal
  console.log(chunk.toString())
})
stream.on("end", function() {
  console.log("END")
})
stream.on("error", function(er) {
  console.log("error", er)
})