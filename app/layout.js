import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Система управління бібліотекою",
    template: "%s | Бібліотека",
  },
  description: "Каталог книг, бронювання та dashboard для бібліотеки.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
