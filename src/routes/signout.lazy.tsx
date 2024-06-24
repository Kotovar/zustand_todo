import { createLazyFileRoute } from "@tanstack/react-router";

import { SignOut } from "../pages/signout";

export const Route = createLazyFileRoute("/signout")({
  component: SignOut,
});
