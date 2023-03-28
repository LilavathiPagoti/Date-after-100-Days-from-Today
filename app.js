const express = require("express");

const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let newDate = new Date();
  const result = addDays(
    new Date(newDate.getFullYear(), newDate.getDate(), newDate.getMonth()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
