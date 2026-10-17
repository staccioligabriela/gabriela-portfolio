import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-8 bg-fjord text-spray">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-8 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-7">
          <h2 className="display text-5xl md:text-6xl">About me</h2>
          <div className="mt-10 space-y-6 text-xl leading-relaxed text-spray/90">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <h3 className="text-2xl font-semibold">Languages</h3>
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-lg">
            {profile.languages.map((language) => (
              <div key={language.name} className="contents">
                <dt>{language.name}</dt>
                <dd className="text-spray/70">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-10 border-t border-spray/25 pt-12 sm:grid-cols-3 md:col-span-12">
          {profile.skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-2xl font-semibold text-sunlit">{group.group}</h3>
              <ul className="mt-4 space-y-2 text-lg text-spray/90">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
