import React from "react";
import { createRoot } from "react-dom/client";
import Pendientes from "./components/Pendientes";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Pendientes />);
