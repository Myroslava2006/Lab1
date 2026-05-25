import "./globals.css";

export const metadata = {
  title: "Система управління бібліотекою",
  description: "Зручний облік книг, читачів та видачі літератури",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
