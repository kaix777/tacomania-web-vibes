import { cp, mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("dist-static");
const indexFile = path.join(outDir, "index.html");

for (const route of ["carta", "contacto"]) {
  const routeDir = path.join(outDir, route);
  await mkdir(routeDir, { recursive: true });
  await cp(indexFile, path.join(routeDir, "index.html"));
}
