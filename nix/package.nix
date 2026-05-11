{
  nodejs,
  pnpm,
  pnpmConfigHook,
  fetchPnpmDeps,
  stdenvNoCC,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "anturated-website";
  version = "0.1";

  src = ../.;

  nativeBuildInputs = [
    nodejs
    pnpm
    pnpmConfigHook
  ];

  pnpmDeps = fetchPnpmDeps {
    inherit (finalAttrs) pname version src;
    fetcherVersion = 3;
    hash = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  };

  env.ASTRO_TELEMETRY_DISABLED = 1;

  buildPhase = ''
    runHook preBuild
    pnpm run build
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    # for nginx
    mkdir -p "$out"
    cp -r dist/* "$out"

    runHook postInstall
  '';
})
