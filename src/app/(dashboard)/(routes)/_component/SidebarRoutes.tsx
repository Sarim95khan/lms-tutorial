'use client';

import { Layout, Compass } from 'lucide-react';
import SiderbarItem from './SiderbarItem';

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
const SiderbarRoute = () => {
  const routes = guestRoutes;

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
