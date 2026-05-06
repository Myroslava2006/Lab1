import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Система управління бібліотекою",
  description: "Каталог книг, пошук та бронювання літератури",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
