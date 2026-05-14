import FvkitImage from "@/components/FvkitImage"

export default function Hero() {
  return (
    <div className="flex flex-col gap-8">
      {/* PFP WITH INFO */}
      <div className="flex flex-row gap-4">
        <FvkitImage
          src="/pfp.png"
          className="size-20 rounded-full"
        />
        <div className="flex flex-col justify-around">
          <span className="text-xl font-medium">Desant</span>
          <span className="text-outline">@anturated</span>
        </div>
      </div>

      {/* STATUS */}
      <span>I'll add more stuff when i have the time. For now you can check out this:</span>
    </div>
  )
}
