import { Sep, SepWithText } from "@/components/Dividers";
import Hero from "./_components/Hero";
import Links from "./_components/Links";

const DESCRIPTION = "My legal name is hard to pronounce, so everybody just calls me Desant. Check out some of my stuff below.";

export default function Home() {

  return (
    <div className="flex flex-col justify-between my-auto">
      {/* make space for pfp */}
      <div className="flex flex-col items-center md:items-start md:flex-row gap-[1ch] md:gap-8">
        <Hero />
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col gap-2">
      {/* <SepWithText>about</SepWithText> */}
      <Sep />
      <span className=" px-[2ch] italic">{DESCRIPTION}</span>
      <Sep />
      <Links className="px-[2ch]" />
      <Sep />
    </div>
  )
}
