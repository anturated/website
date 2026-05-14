import FvkitImage from "@/components/FvkitImage";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  href,
  img,
}: Readonly<{
  title: string,
  description?: string,
  href: string,
  img: string,
}>) {
  return <Link
    className="flex flex-row border-l border-outline p-2 gap-2 hover:bg-hovered"
    href={href}
  >
    <FvkitImage
      className="size-12 rounded-xl object-contain shrink-0"
      src={img}
    />
    <div className="flex flex-col gap-2">
      <span className="text-3xl text-secondary font-semibold">{title}</span>
      {description ? <span className="text-outline-variant text-sm font-semibold">{description}</span> : null}
    </div>
  </Link>
}
