import Link from "next/link";
import { education, experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-8">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-8 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-8">
          <h2 className="display text-5xl md:text-6xl">Experience</h2>
          <ol className="mt-12 space-y-10 border-l-2 border-seagrass pl-6 sm:pl-8">
            {experience.map((item) => (
              <li key={`${item.organisation}-${item.role}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[33px] h-4 w-4 rounded-full border-2 border-seagrass bg-spray sm:-left-[41px]"
                />
                <p className="text-base text-mist">
                  {item.start === item.end ? item.start : `${item.start} to ${item.end}`}, {item.place}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                  {item.role}, {item.organisation}
                </h3>
                <p className="mt-2 max-w-2xl text-lg leading-relaxed">{item.summary}</p>
                {item.project && (
                  <Link
                    href={`/work/${item.project}/`}
                    className="mt-2 inline-block text-base font-semibold text-seagrass underline underline-offset-4"
                  >
                    See the project
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-3xl font-semibold tracking-tight md:mt-4">Education</h2>
          <ul className="mt-8 space-y-6">
            {education.map((item) => (
              <li key={item.title + item.school}>
                <p className="text-base text-mist">{item.years}</p>
                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="text-base">
                  {item.school}, {item.place}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
