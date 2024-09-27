import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "../upload");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use cb instead of callback
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Use cb instead of callback
  },
});

export const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Faqat png yoki jpg fayl turini o'rnating"), false); // Corrected error message for file types
    }
  },
  limits: { fileSize: 1024 * 1024 * 2 }, // 2MB limit
});
