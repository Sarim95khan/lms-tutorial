import { IconBadge } from '@/components/icon-badge';
import { db } from '@/db/schema/prisma';
import { auth } from '@clerk/nextjs';
import { CircleDollarSign, LayoutDashboard, ListChecks } from 'lucide-react';
import { redirect } from 'next/navigation';
import TitleFormPage from './_component/title-form';
import DescriptionPage from './_component/description-form';
import ImageFormPage from './_component/image-form';
import CategoryFormPage from './_component/category-form';
import PriceFormPage from './_component/price-form';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  if (!userId) return redirect('/');

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  const category = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  if (!course) {
    return redirect('/');
  }
  const requiredFields = [
    course.title,
    course.description,
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
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <p className="text-sm text-slate-700">
            Completed fields {completionText}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} size="sm" />
            <h2 className="text-xl">Customize your course</h2>
          </div>
          <TitleFormPage initialData={course} courseId={course.id} />
          <DescriptionPage initialData={course} courseId={course.id} />
          <ImageFormPage initialData={course} courseId={course.id} />
          <CategoryFormPage
            initialData={course}
            courseId={course.id}
            options={category.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Course Chapters</h2>
            </div>
            <div>Todo:Chapters</div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">Sell your course</h2>
            </div>
            <PriceFormPage initialData={course} courseId={course.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
