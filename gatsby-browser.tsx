import "./src/styles/global.css";
import * as React from "react";
import { HelmetProvider } from "react-helmet-async"

export const wrapRootElement = ({ element }) => (
    <HelmetProvider>
        {element}
    </HelmetProvider>
)
