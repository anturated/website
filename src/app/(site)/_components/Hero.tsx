import FvkitImage from "@/components/FvkitImage"
import Links from "./Links"

export default function Hero() {
  const NAME = "Desant";
  const LEGAL_NAME = "TBA";
  const HANDLE = "anturated";
  const DESCRIPTION = "My legal name is hard to pronounce so everybody just calls me Desant. Check out some of my stuff below.";

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-8">
      {/* PFP WITH INFO */}
      <div className="flex flex-row md:flex-col gap-4 w-full md:w-auto shrink-0">
        <FvkitImage
          src="/pfp.png"
          max={256}
          className="size-[7ch] md:size-[20ch] rounded-full outline-primary outline"
        />
        <div className="flex flex-col justify-around md:justify-between">
          <span className="text-xl font-bold">{NAME}</span>
          <span className="text-outline">{"@" + HANDLE}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 md:self-stretch">
        {/* STATUS */}
        <span className="md:pt-[2ch] italic">{DESCRIPTION}</span>
        <Links />
      </div>
    </div>
  )
}
