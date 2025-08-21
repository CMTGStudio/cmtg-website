import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set proper page title
document.title = "CMTG - Creative Magic to Go | Hollywood-Quality Social Media Content";

createRoot(document.getElementById("root")!).render(<App />);
