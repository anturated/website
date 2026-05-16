import FvkitImage from "@/components/FvkitImage"
import Links from "./Links"

export default function Hero() {
  const NAME = "Desant";
  const LEGAL_NAME = "TBA";
  const HANDLE = "anturated";

  return (
    <div className="flex flex-row pl-[2ch] md:p-0 md:flex-col gap-4 w-full md:w-auto shrink-0" >
      <FvkitImage
        src="/pfp.png"
        max={256}
        loading="eager"
        className="size-[7ch] md:size-[20ch] rounded-full outline-primary outline"
      />
      <div className="flex flex-col justify-around md:justify-between">
        <span className="text-xl font-bold">{NAME}</span>
        <span className="text-outline">{"@" + HANDLE}</span>
      </div>
    </div >
  )
}
