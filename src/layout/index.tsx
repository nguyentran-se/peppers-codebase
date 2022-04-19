import { PATH_NAMES } from "configs";
import Footer from "./Footer";
import Header from "./Header";
interface PublicLayoutProps {
  children: React.ReactNode;
}
function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
