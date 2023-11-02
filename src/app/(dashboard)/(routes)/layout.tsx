import Sidebar from './_component/Sidebar';

const DashboarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex flex-col h-full w-56 inset-y-0 fixed  z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboarLayout;
