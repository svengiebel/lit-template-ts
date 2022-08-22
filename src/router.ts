import { Router } from "@vaadin/router";

export default function initRouter(routerElement: HTMLElement) {
  if (!routerElement) {
    throw new Error("No Router element found! Forgot to add a main element?");
  }
  const router = new Router(routerElement);
  router.setRoutes([
    {
      path: "/",
      component: "app-home",
      action: async () => {
        await import("./screens/app-home");
      },
    },
  ]);
}
