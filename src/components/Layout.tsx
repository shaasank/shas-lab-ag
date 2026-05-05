import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BackgroundEffects from "./BackgroundEffects";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navigation />
      <main className="flex-1 pt-[60px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
