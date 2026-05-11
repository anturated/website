{
  mkShellNoCC,
  callPackage,
  typescript-language-server,
  tailwindcss-language-server,
}:

let
  mainPkg = callPackage ./package.nix { };
in
mkShellNoCC {
  inputsFrom = [ mainPkg ];

  packages = [
    tailwindcss-language-server
    typescript-language-server
  ];
}
