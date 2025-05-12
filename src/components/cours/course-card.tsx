import Image from "next/image"
import Link from "next/link"

interface Course {
  id: number
  title: string
  description: string
  duration: string
  level: string
  category: string
  price: string
  image: string
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={300}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {course.duration}
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
            {course.level}
          </span>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
            {course.category}
          </span>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/cours/${course.id}`}>
              <span className="absolute inset-0" />
              {course.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{course.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">{course.price}</span>
          <Link
            href={`/reservation?course=${course.id}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            Réserver
          </Link>
        </div>
      </div>
    </article>
  )
} 