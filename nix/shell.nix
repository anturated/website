{
  mkShellNoCC,
  callPackage,
  astro-language-server,
  typescript-language-server,
  tailwindcss-language-server,
  typescript,
}:

let
  mainPkg = callPackage ./package.nix { };
in
mkShellNoCC {
  inputsFrom = [ mainPkg ];

  packages = [
    astro-language-server
    tailwindcss-language-server
    typescript-language-server
    typescript
  ];
}
