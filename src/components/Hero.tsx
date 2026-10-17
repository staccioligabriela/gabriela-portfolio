import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-12 px-4 pt-8 pb-20 sm:px-8 md:grid-cols-12 md:gap-8 md:pt-16 md:pb-28">
      <div className="md:col-span-7">
        <p className="text-lg text-mist">
          {profile.name}, {profile.role}
        </p>
        <h1 className="display mt-6 text-[clamp(3rem,9vw,7.25rem)]">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-fjord/85">
          {profile.intro}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-fjord px-6 py-3 text-base font-semibold text-spray transition-colors hover:bg-seagrass"
          >
            See my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border-2 border-fjord px-6 py-3 text-base font-semibold transition-colors hover:bg-foam"
          >
            Email me
          </a>
        </div>
        <p className="mt-8 text-base text-mist">
          {profile.location}. {profile.availability}.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
        <div
          aria-hidden="true"
          className="arch absolute inset-0 translate-x-4 translate-y-4 bg-seagrass sm:translate-x-6 sm:translate-y-6"
        />
        <div
          aria-hidden="true"
          className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-sunlit sm:h-24 sm:w-24"
        />
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
