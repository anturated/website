{ inputs }:

let
  inherit (inputs) nixpkgs;
  inherit (nixpkgs) lib;

  forAllSystems =
    f:
    lib.genAttrs
      [
        "x86_64-linux"
        "x86_64-darwin"
        "i686-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ]
      (
        system:
        f (
          import nixpkgs {
            inherit system;
            config.allowUnfree = true;
          }
        )
      );
in
{
  packages = forAllSystems (pkgs: {
    default = pkgs.callPackage ./package.nix { };
  });

  devShells = forAllSystems (pkgs: {
    default = pkgs.callPackage ./shell.nix { };
  });
}
