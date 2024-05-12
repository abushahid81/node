const http = require("http");

const app = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/home") {
    res.end("Abushahid");
  } else if (req.url === "/users") {
    res.end("user's data");
  } else if (req.url === "/student") {
    res.end("this is student 's data");
  }
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});