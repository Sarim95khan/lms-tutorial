import { db } from '@/db/schema/prisma';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  if (!userId) return redirect('/');

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });
  if (!course) {
    return redirect('/');
  }
  const requiredFields = [
    course.title,
    course.decription,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const pageName = params.courseId;
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-x-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <p className="text-sm text-slate-700">
            {' '}
            Completed fields {completionText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;