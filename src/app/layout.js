import "../app/globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* No need to include CSS links here */}
      </head>
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
