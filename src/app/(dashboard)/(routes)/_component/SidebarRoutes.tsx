'use client';

import { Layout, Compass, List, BarChart } from 'lucide-react';
import SiderbarItem from './SiderbarItem';
import { usePathname } from 'next/navigation';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/teacher/analytics',
  },
];
const SiderbarRoute = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname.includes('/teacher');
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div>
      <div className="flex flex-col w-full">
        {routes.map((route, index) => (
          <SiderbarItem
            key={index}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SiderbarRoute;
