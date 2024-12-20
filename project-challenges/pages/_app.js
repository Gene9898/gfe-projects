import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
