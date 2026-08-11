<script setup>
import { ref } from "vue";

const isDark = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;

    document.documentElement.dataset.theme = isDark.value ? "dark" : "light";
}
</script>

<template>
    <main class="min-h-screen bg-page px-6 py-10 text-page">
        <div class="mx-auto max-w-5xl">
            <header>
                <p class="text-sm font-medium text-primary">BORDER RADIUS</p>

                <h1 class="mt-2 text-4xl font-bold tracking-tight">Border Radius</h1>

                <p class="mt-3 max-w-2xl text-base text-muted">
                    A small and consistent radius system for controls, containers, badges, and other
                    interface elements.
                </p>

                <div class="mt-6">
                    <button
                        type="button"
                        class="rounded-md bg-primary px-4 py-2 font-medium text-on-primary hover:bg-primary-hover active:bg-primary-active"
                        @click="toggleTheme"
                    >
                        Toggle Dark Mode
                    </button>
                </div>
            </header>

            <section class="mt-10 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold">Radius Scale</h2>

                <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div
                            class="flex h-32 items-center justify-center rounded-sm border-2 border-primary bg-primary/5"
                        >
                            <span class="text-sm font-medium"> rounded-sm </span>
                        </div>

                        <p class="mt-3 text-sm font-medium">Small</p>

                        <p class="mt-1 text-xs text-muted">2px</p>
                    </div>

                    <div>
                        <div
                            class="flex h-32 items-center justify-center rounded-md border-2 border-primary bg-primary/5"
                        >
                            <span class="text-sm font-medium"> rounded-md </span>
                        </div>

                        <p class="mt-3 text-sm font-medium">Default</p>

                        <p class="mt-1 text-xs text-muted">6px</p>
                    </div>

                    <div>
                        <div
                            class="flex h-32 items-center justify-center rounded-lg border-2 border-primary bg-primary/5"
                        >
                            <span class="text-sm font-medium"> rounded-lg </span>
                        </div>

                        <p class="mt-3 text-sm font-medium">Large</p>

                        <p class="mt-1 text-xs text-muted">8px</p>
                    </div>

                    <div>
                        <div
                            class="flex h-32 items-center justify-center rounded-xl border-2 border-primary bg-primary/5"
                        >
                            <span class="text-sm font-medium"> rounded-xl </span>
                        </div>

                        <p class="mt-3 text-sm font-medium">Extra Large</p>

                        <p class="mt-1 text-xs text-muted">12px</p>
                    </div>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold">Component Examples</h2>

                <div class="mt-6 space-y-8">
                    <div>
                        <p class="text-sm font-medium">Buttons</p>

                        <div class="mt-3 flex flex-wrap gap-3">
                            <button
                                type="button"
                                class="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                            >
                                Small Radius
                            </button>

                            <button
                                type="button"
                                class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                            >
                                Default Radius
                            </button>

                            <button
                                type="button"
                                class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                            >
                                Large Radius
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="text-sm font-medium">Cards</p>

                        <div class="mt-3 grid gap-4 md:grid-cols-2">
                            <div class="rounded-lg border border-border p-5">
                                <p class="font-medium">Default Card</p>

                                <p class="mt-2 text-sm text-muted">Cards use rounded-lg.</p>
                            </div>

                            <div class="rounded-xl border border-border p-5">
                                <p class="font-medium">Prominent Card</p>

                                <p class="mt-2 text-sm text-muted">
                                    Larger containers can use rounded-xl.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="text-sm font-medium">Pills</p>

                        <div class="mt-3 flex flex-wrap gap-3">
                            <span
                                class="rounded-full bg-primary px-3 py-1 text-xs font-medium text-on-primary"
                            >
                                Primary
                            </span>

                            <span
                                class="rounded-full bg-success px-3 py-1 text-xs font-medium text-on-success"
                            >
                                Active
                            </span>

                            <span
                                class="rounded-full bg-danger px-3 py-1 text-xs font-medium text-on-danger"
                            >
                                Error
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold">Recommended Usage</h2>

                <div class="mt-6 overflow-hidden rounded-lg border border-border">
                    <div class="grid grid-cols-3 bg-muted px-4 py-3 text-sm font-medium">
                        <span>Element</span>
                        <span>Radius</span>
                        <span>Utility</span>
                    </div>

                    <div class="grid grid-cols-3 border-t border-border px-4 py-3 text-sm">
                        <span>Input</span>
                        <span>Default</span>
                        <code class="text-muted">rounded-md</code>
                    </div>

                    <div class="grid grid-cols-3 border-t border-border px-4 py-3 text-sm">
                        <span>Button</span>
                        <span>Default</span>
                        <code class="text-muted">rounded-md</code>
                    </div>

                    <div class="grid grid-cols-3 border-t border-border px-4 py-3 text-sm">
                        <span>Card</span>
                        <span>Large</span>
                        <code class="text-muted">rounded-lg</code>
                    </div>

                    <div class="grid grid-cols-3 border-t border-border px-4 py-3 text-sm">
                        <span>Dialog</span>
                        <span>Extra Large</span>
                        <code class="text-muted">rounded-xl</code>
                    </div>

                    <div class="grid grid-cols-3 border-t border-border px-4 py-3 text-sm">
                        <span>Badge</span>
                        <span>Pill</span>
                        <code class="text-muted">rounded-full</code>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
