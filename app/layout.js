import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReduxProvider } from "./store/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <nav id="nav">
            <div className="nav-container">
              <h2 className="title">E-Commerce</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/admin">Admin</Link>
                </li>
              </ul>
            </div>
          </nav>
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
