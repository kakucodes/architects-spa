import { createLazyFileRoute } from "@tanstack/react-router";
import { Mint } from "../components/Mint/Mint";

export const Route = createLazyFileRoute("/mint")({
  component: Mint,
});
