const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "http://kops.basic-dev-ops-site-trial.co",
  "https://kops.basic-dev-ops-site-trial.co",
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: (origin, cb) => {
      console.log(origin);
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by cors via Server"));
      }
    },
    optionsSuccessStatus: 200,
  })
);

app.post("/user", (req, res, next) => {
  console.log(req.body?.message);
  console.log("Get Request working at /");
  res.status(200);
  res.json({ statusCode: 200, message: req.body?.message });
});

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
