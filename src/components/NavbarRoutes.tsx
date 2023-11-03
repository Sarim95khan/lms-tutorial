'use client';

import { UserButton } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarRoutes = () => {
  const pathname = usePathname();
  const isTeacherMode = pathname.startsWith('/teacher');
  const isPlayerMode = pathname.includes('/chapter');
  return (
    <div className="flex ml-auto gap-x-2">
      {isTeacherMode || isPlayerMode ? (
        <Link href={'/'}>
          <Button variant="ghost" className="gap-x-2">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={'/teacher/courses'}>
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
