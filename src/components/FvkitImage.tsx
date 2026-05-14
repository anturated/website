import Image from "next/image";

export default function FvkitImage(
  { src, className }:
    Readonly<{ src: string, className?: string }>
) {
  return (
    <div className={"relative overflow-hidden " + className}>
      <Image
        src={src}
        alt="alt"
        fill
      />
    </div>
  )
}
