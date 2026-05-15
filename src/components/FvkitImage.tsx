import Image from "next/image";

export default function FvkitImage({
  src,
  alt = "alt",
  className,
  max = 128,
  loading,
}: Readonly<{
  src: string,
  alt?: string,
  className?: string
  max?: number
  loading?: "eager" | "lazy",
}>) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={max}
      height={max}
      loading={loading}
    />
  )
}
