import { Inter } from "next/font/google";
import "../styles/app.scss";
import Header from "./header";
import { ContextProvider } from "@/components/Clients";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToDoApp",
  description: "This is a ToDo next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
            <Header/> 
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
