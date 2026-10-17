import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export default function Contact() {
  const links = [
    { label: "LinkedIn", href: profile.linkedIn },
    ...(profile.instagram ? [{ label: "Instagram", href: profile.instagram }] : []),
    ...(profile.cv ? [{ label: "Download my CV", href: asset(profile.cv) }] : []),
  ];

  return (
    <section id="contact" className="scroll-mt-8 bg-sunlit">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 md:py-28">
        <h2 className="display text-5xl md:text-6xl">Let&apos;s talk</h2>
        <p className="mt-6 max-w-xl text-xl leading-relaxed">
          Hiring for marketing, content or community? I&apos;d love to hear about it.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="display mt-10 inline-block break-all text-[clamp(1.75rem,5.5vw,4.5rem)] underline decoration-4 underline-offset-8 hover:decoration-seagrass"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-block rounded-full border-2 border-fjord px-5 py-2.5 text-base font-semibold transition-colors hover:bg-fjord hover:text-sunlit"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
