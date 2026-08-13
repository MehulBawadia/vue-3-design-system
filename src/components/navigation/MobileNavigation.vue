<script setup>
import { ref } from "vue";
import NavigationLinks from "@/components/navigation/NavigationLinks.vue";
import AppLogo from "@/components/AppLogo.vue";

const open = ref(false);

const close = () => {
    open.value = false;
};
</script>

<template>
    <div class="lg:hidden">
        <header
            class="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-surface/95 backdrop-blur"
        >
            <div class="flex h-full items-center justify-between px-4">
                <AppLogo />

                <button
                    type="button"
                    class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-muted hover:text-page"
                    :aria-expanded="open"
                    aria-controls="mobile-navigation"
                    aria-label="Toggle navigation"
                    @click="open = !open"
                >
                    <svg
                        v-if="!open"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        class="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" stroke-width="2" stroke-linecap="round" />
                    </svg>

                    <svg
                        v-else
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        class="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </header>

        <div
            v-if="open"
            id="mobile-navigation"
            class="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-surface shadow-float"
        >
            <div class="px-4 py-5" @click="close">
                <NavigationLinks />
            </div>
        </div>
    </div>
</template>
