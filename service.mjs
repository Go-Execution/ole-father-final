// @ts-check
import nextjs from "@prisma/composer/nextjs";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "ole-father-final",
  deps: {},
  build: nextjs({ module: import.meta.url, appDir: "." }),
});
