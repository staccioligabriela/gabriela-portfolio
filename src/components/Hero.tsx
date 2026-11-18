import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-12 px-4 pt-8 pb-20 sm:px-8 md:grid-cols-12 md:gap-8 md:pt-16 md:pb-28">
      <div className="md:col-span-7">
        <p className="text-lg text-haze">
          {profile.name}, {profile.role}
        </p>
        <h1 className="display mt-6 text-[clamp(2.75rem,6.5vw,5.5rem)]">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-cloud/85">
          {profile.intro}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-cloud px-6 py-3 text-base font-semibold text-night transition-colors hover:bg-orchid"
          >
            See my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border-2 border-cloud px-6 py-3 text-base font-semibold transition-colors hover:bg-plum"
          >
            Email me
          </a>
        </div>
        <p className="mt-8 text-base text-haze">
          {profile.location}. {profile.availability}.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
        <div
          aria-hidden="true"
          className="arch absolute inset-0 translate-x-4 translate-y-4 bg-lilac sm:translate-x-6 sm:translate-y-6"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute -top-10 -left-8 h-28 w-28 text-lilac sm:-top-14 sm:-left-14 sm:h-36 sm:w-36"
        >
          <path
            d="M50 50 m0 -4 a4 4 0 1 1 -4 4 a8 8 0 0 1 8 -8 a12 12 0 0 1 12 12 a16 16 0 0 1 -16 16 a20 20 0 0 1 -20 -20 a24 24 0 0 1 24 -24 a28 28 0 0 1 28 28 a32 32 0 0 1 -32 32 a36 36 0 0 1 -36 -36"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(profile.photo)}
          alt={profile.photoAlt}
          width={800}
          height={1200}
          className="arch arch-reveal relative aspect-[4/5] w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
