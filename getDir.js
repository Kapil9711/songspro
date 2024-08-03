import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the directory path of the current module
const __dirname = dirname(__filename);

export default __dirname;
