const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
dotenv.config();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
    app.post("/api/upload", upload.single("file"), (req, res) => {
      res.status(200).json("File has been uploaded");
    });

    // app.delete("/api/delete/:imagename", async (req, res) => {
    //   if (!req.params.imagename) {
    //     return res.status(500).json("deleting error");
    //   } else {
    //     try {
    //       fs.unlinkSync(__dirname + "/" + req.params.imagename);
    //       console.log("successfully deleted");
    //       return res.status(200).json("Successfully! Image has been Deleted");
    //     } catch (err) {
    //       return res.status(400).json(err);
    //     }
    //   }
    // });
    // app.get('/',(req,res)=>{
    //   console.log("Successfully connected");
    // })
const port = process.env.PORT || 5000;

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/posts", postRoute);
  app.use("/api/categories", categoryRoute);

  
  app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
  });