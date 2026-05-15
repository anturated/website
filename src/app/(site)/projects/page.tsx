import BackLink from "@/components/BackLink";
import ProjectCard from "./_components/ProjectCard";

export default function Projects() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-8 my-auto">
      <BackLink className="absolute -top-16"/>
      <ProjectCard
        title="mc-fleet"
        description="WIP itzg/docker-minecraft-server kickstarter"
        img="/projects/mc-fleet.png"
        href="https://github.com/anturated/mc-fleet"
      />
      <ProjectCard
        title="EmoteMod"
        description="Celeste mod that lets you play any animation"
        img="/projects/granny_big.png"
        href="https://github.com/anturated/emotemod"
      />
      <ProjectCard
        title="Website"
        description="Try to guess what this is"
        img="/pfp.png"
        href="https://github.com/anturated/website"
      />
      <ProjectCard
        title="dotfiles"
        description="Obligatory NixOS config"
        img="/projects/nix-snowflake-colours.svg"
        href="https://github.com/anturated/dotfiles"
      />
    </div>
  )
}
