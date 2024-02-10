import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-between min-h-screen  ">
          <NavBar />
          <div className="relative top-[100px] px-6 md:px-24 py-4">
            {children}
          </div>
          {/* <Footer className='bg-red-300' /> */}
        </div>

      </body>

    </html>
  );
}
