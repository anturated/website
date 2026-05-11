{
  description = "my website";

  outputs = inputs: import ./nix/outputs.nix { inherit inputs; };

  inputs = {
    nixpkgs = {
      type = "github";
      owner = "NixOS";
      repo = "nixpkgs";
      ref = "nixos-unstable";
    };
  };
}
