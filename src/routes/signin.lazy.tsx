import { createLazyFileRoute } from "@tanstack/react-router";

import { SignIn } from "../pages/signin";

export const Route = createLazyFileRoute("/signin")({
  component: SignIn,
});
