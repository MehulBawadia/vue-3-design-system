<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const foundationItems = [
    {
        name: "Colors",
        path: "/colors",
    },
    {
        name: "Typography",
        path: "/typography",
    },
    {
        name: "Spacing",
        path: "/spacing",
    },
    {
        name: "Border Radius",
        path: "/border-radius",
    },
    {
        name: "Shadows",
        path: "/shadows",
    },
];

const componentItems = [
    {
        name: "Buttons",
        path: "/buttons",
        disabled: true,
    },
];

const isActive = (path) => route.path === path;
</script>

<template>
    <nav>
        <section>
            <p class="px-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Foundations
            </p>

            <div class="mt-3 space-y-1">
                <RouterLink
                    v-for="item in foundationItems"
                    :key="item.path"
                    :to="item.path"
                    class="block rounded-md px-3 py-2 text-sm font-medium transition-colors"
                    :class="
                        isActive(item.path)
                            ? 'bg-primary-bg text-primary'
                            : 'text-muted hover:bg-muted hover:text-page'
                    "
                >
                    {{ item.name }}
                </RouterLink>
            </div>
        </section>

        <section class="mt-8">
            <p class="px-3 text-xs font-semibold uppercase tracking-wider text-muted">Components</p>

            <div class="mt-3 space-y-1">
                <div
                    v-for="item in componentItems"
                    :key="item.path"
                    class="cursor-not-allowed rounded-md px-3 py-2 text-sm font-medium text-muted opacity-50"
                >
                    <span class="flex items-center justify-between">
                        {{ item.name }}

                        <span class="text-[10px] font-medium uppercase tracking-wider"> Soon </span>
                    </span>
                </div>
            </div>
        </section>
    </nav>
</template>
