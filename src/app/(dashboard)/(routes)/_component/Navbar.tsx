import MobileSidebar from './mobile-sidebar';
import NavbarRoutes from '@/components/NavbarRoutes';

const Navbar = () => {
  return (
    <div className="p-4 h-full flex items-center border-b shadow-sm bg-white">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
