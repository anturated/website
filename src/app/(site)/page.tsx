import Hero from "./_components/Hero";
import Links from "./_components/Links";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-10 my-auto">
      <Hero />
      <Links />
    </div>
  );
}
