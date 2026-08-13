import { createRouter, createWebHistory } from "vue-router";

import DesignSystemLayout from "@/layouts/DesignSystemLayout.vue";

const routes = [
    {
        path: "/",
        component: DesignSystemLayout,
        children: [
            {
                path: "",
                redirect: "/colors",
            },
            {
                path: "colors",
                name: "design-system.colors",
                component: () => import("@/pages/ColorsPage.vue"),
            },
            {
                path: "typography",
                name: "design-system.typography",
                component: () => import("@/pages/TypographyPage.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
