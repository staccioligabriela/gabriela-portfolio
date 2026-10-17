import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkList() {
  return (
    <section id="work" className="scroll-mt-8 bg-foam">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 md:py-28">
        <h2 className="display text-5xl md:text-6xl">Selected work</h2>
        <ul className="mt-12 border-t-2 border-fjord">
          {projects.map((project) => (
            <li key={project.slug} className="border-b border-fjord/20">
              <Link
                href={`/work/${project.slug}/`}
                className="group grid gap-4 py-8 transition-colors hover:bg-spray md:grid-cols-12 md:gap-8 md:px-4"
              >
                <div className="md:col-span-5">
                  <h3 className="text-3xl font-semibold tracking-tight underline-offset-4 group-hover:underline md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base text-mist">
                    {project.role}, {project.period}
                  </p>
                </div>
                <p className="text-lg leading-relaxed md:col-span-4">
                  {project.summary}
                </p>
                <div className="md:col-span-3 md:text-right">
                  {project.highlight ? (
                    <>
                      <p className="display text-4xl text-seagrass md:text-5xl">
                        {project.highlight.value}
                      </p>
                      <p className="mt-1 text-base text-mist">
                        {project.highlight.label}
                      </p>
                    </>
                  ) : (
                    <p className="text-base font-semibold text-seagrass">
                      Read the story
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
