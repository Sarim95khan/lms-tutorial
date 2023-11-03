import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TeacherCourse = () => {
  return (
    <div className="show p-6">
      <Link href={'/teacher/create'}>
        <Button>Create Course</Button>
      </Link>
    </div>
  );
};

export default TeacherCourse;
