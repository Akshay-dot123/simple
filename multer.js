const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// const upload = multer({ dest: "uploads/" });

const app = express();
const helmet = require("helmet");
app.use(helmet());
// Middleware to parse form data (this should be before the file upload middleware)
// app.use(express.urlencoded({ extended: true }));

// Upload only single file with avatar field otherwise gives error
// app.post("/profile", upload.single("avatar"), function (req, res, next) {
//   try {
//     console.log("File uploaded:", req.file);
//     console.log("Username:", req.body.username);
//     res.send(req.file);
//   } catch (error) {
//     console.log(error);
//   }
// });

// Upload more then 1 file with photos field otherwise gives error
// app.post(
//   "/photos/upload",
//   upload.array("photos", 12),
//   function (req, res, next) {
//     try {
//       console.log("File uploaded:", req.files);
//       console.log("Username:", req.body.username);
//       res.send(req.files);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// const cpUpload = upload.fields([{ name: "avatar", maxCount: 1 }]);
// app.get("/cool-profile", cpUpload, function (req, res, next) {
//   // If condition does not work because middleware handles error before executing below code
//   //   if (req.files['avatar'] && req.files['avatar'].length > 1) {
//   //     return res.status(400).json({ message: 'Only one avatar file is allowed.' });
//   // }
//   console.log("Avatar file:", req.files.avatar); // Single file, array with 1 element
//   console.log("Gallery files:", req.files.gallery);
// });

// In case you need to handle a text-only multipart form, you should use the .none() method:
// app.post('/profile', upload.none(), function (req, res, next) {
//   if (req.file || req.files) {
//     return res.status(400).json({
//       message: 'Error: No file should be uploaded with this form submission.'
//     });
//   }
//   res.send("Correct")
// })

const uploadDir = path.join(__dirname, 'uploads');
// Ensure the upload directory exists (if not, create it)
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer to use diskStorage and save files to the 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Use the relative path to 'uploads' directory
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // cb(null, file.fieldname + '-' + uniqueSuffix);
    cb(null,Date.now()+file.originalname) // To give original name
  }
});
const upload = multer({ storage: storage });
app.post('/stats', upload.single('photos'), function (req, res) {
  console.log(req.file, req.body);
  res.send("File uploaded successfully!");
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle Multer-specific errors
    return res.status(400).json({
      message: `Multer Error: ${err.message}`,
    });
  } else {
    // Handle other errors
    return res.status(500).json({
      message: `Internal Server Error: ${err.message}`,
    });
  }
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
