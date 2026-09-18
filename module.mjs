// @ts-check
import { module } from "@prisma/composer";
import oleFatherFinalService from "./service.mjs";

export default module("ole-father", ({ provision }) => {
  provision(oleFatherFinalService, { id: "olefatherfinal" });
});
