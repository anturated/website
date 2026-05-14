import Image from "next/image";

export default function FvkitImage({
  src,
  alt = "alt",
  className,
  max = 128,
}: Readonly<{
  src: string,
  alt?: string,
  className?: string
  max?: number
}>) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={max}
      height={max}
    />
  )
}
