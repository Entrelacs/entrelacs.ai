import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
        {children}
      <Footer />
    </main>
  );
}
