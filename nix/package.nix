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
    hash = "sha256-aiKHxIrB1MfrWQhMvDjI1X/9Scifnr07VQHR2whDGRM=";
  };

  env.NEXT_TELEMETRY_DISABLED = 1;

  # nextjs should be good without
  dontFixup = true;

  buildPhase = ''
    runHook preBuild
    pnpm run build
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p "$out"
    cp -r .next/standalone/. "$out"
    cp -r .next/static "$out/.next/static"
    cp -r public "$out/public"

    runHook postInstall
  '';
})
