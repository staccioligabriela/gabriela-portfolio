import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";
import { validateContent } from "@/lib/validateContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  validateContent();
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header />
      <main>
        <article>
          <header className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-8 md:pt-16">
            <Link
              href="/#work"
              className="text-base font-semibold text-seagrass underline underline-offset-4"
            >
              All work
            </Link>
            <h1 className="display mt-8 text-[clamp(3rem,8vw,6.5rem)]">
              {project.title}
            </h1>
            <p className="mt-6 text-xl text-mist">
              {project.role}. {project.place}, {project.period}.
            </p>
            <p className="mt-8 max-w-3xl text-2xl leading-relaxed">{project.intro}</p>
            {project.link && (
              <a
                href={project.link.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-lg font-semibold underline underline-offset-4"
              >
                Visit {project.link.label}
              </a>
            )}
          </header>

          {project.cover && (
            <div className="mx-auto max-w-6xl px-4 sm:px-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(project.cover)}
                alt={project.coverAlt ?? ""}
                className="aspect-[16/9] w-full rounded-3xl object-cover"
              />
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <section aria-labelledby="results" className="mt-16 bg-fjord text-spray">
              <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
                <h2 id="results" className="text-2xl font-semibold text-sunlit">
                  Results
                </h2>
                <dl className="mt-8 grid gap-10 sm:grid-cols-3">
                  {project.results.map((result) => (
                    <div key={result.label}>
                      <dt className="sr-only">{result.label}</dt>
                      <dd>
                        <span className="display block text-5xl md:text-6xl">
                          {result.value}
                        </span>
                        <span className="mt-3 block text-lg text-spray/80">
                          {result.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          )}

          <div className="mx-auto max-w-3xl space-y-14 px-4 py-20 sm:px-8">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-semibold tracking-tight">{section.heading}</h2>
                {section.body && (
                  <p className="mt-4 text-xl leading-relaxed">{section.body}</p>
                )}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-xl leading-relaxed marker:text-seagrass">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {project.quote && (
              <figure className="border-l-4 border-sunlit pl-6">
                <blockquote className="text-2xl leading-snug font-medium">
                  &ldquo;{project.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-base text-mist">
                  {project.quote.author}
                </figcaption>
              </figure>
            )}

            <ul className="flex flex-wrap gap-2" aria-label="Skills used">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-foam px-4 py-1.5 text-base text-fjord"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {next && next.slug !== project.slug && (
          <nav aria-label="Next project" className="bg-foam">
            <Link
              href={`/work/${next.slug}/`}
              className="group mx-auto block max-w-6xl px-4 py-16 sm:px-8"
            >
              <span className="text-base text-mist">Next project</span>
              <span className="display mt-2 block text-5xl underline-offset-8 group-hover:underline md:text-6xl">
                {next.title}
              </span>
            </Link>
          </nav>
        )}
      </main>
      <Footer />
    </>
  );
}
