import "./globals.css";

export const metadata = {
  title: "Grządkowisko",
  description: "Atlas zależności przyrodniczych.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
