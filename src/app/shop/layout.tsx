import Footer from "@/components/Footer";
import Nav from "@/components/Nav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body>
              <Nav />
              {children}
              <Footer />
      </body>
    </html>
  );
}
