import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-fjord text-spray/70">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-8 text-base sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
