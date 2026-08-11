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
                <p class="text-sm font-medium text-primary">SHADOWS & ELEVATION</p>

                <h1 class="mt-2 text-4xl font-bold tracking-tight">Shadows & Elevation</h1>

                <p class="mt-3 max-w-2xl text-base text-muted">
                    A semantic elevation system for surfaces, floating elements, and modal dialogs.
                    The shadow values adapt automatically between light and dark themes.
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

            <section class="mt-10">
                <h2 class="text-xl font-semibold">Elevation Levels</h2>

                <p class="mt-2 text-sm text-muted">
                    Compare the three elevation levels against the page background.
                </p>

                <div class="mt-6 grid gap-8 md:grid-cols-3">
                    <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-on-primary"
                        >
                            1
                        </div>

                        <h3 class="mt-5 text-lg font-semibold">Surface</h3>

                        <p class="mt-2 text-sm text-muted">
                            Subtle elevation for cards and other surfaces that need slight
                            separation from the page.
                        </p>

                        <code class="mt-4 block text-xs text-muted"> shadow-surface </code>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-6 shadow-float">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-on-primary"
                        >
                            2
                        </div>

                        <h3 class="mt-5 text-lg font-semibold">Floating</h3>

                        <p class="mt-2 text-sm text-muted">
                            Stronger elevation for dropdowns, popovers, command menus, and floating
                            panels.
                        </p>

                        <code class="mt-4 block text-xs text-muted"> shadow-float </code>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-6 shadow-modal">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-on-primary"
                        >
                            3
                        </div>

                        <h3 class="mt-5 text-lg font-semibold">Modal</h3>

                        <p class="mt-2 text-sm text-muted">
                            Strongest elevation for dialogs, modals, and prominent overlays.
                        </p>

                        <code class="mt-4 block text-xs text-muted"> shadow-modal </code>
                    </div>
                </div>
            </section>

            <section class="mt-12">
                <h2 class="text-xl font-semibold">Practical Examples</h2>

                <div class="mt-6 space-y-8">
                    <div>
                        <p class="text-sm font-medium">Card</p>

                        <div
                            class="mt-3 rounded-lg border border-border bg-surface p-6 shadow-surface"
                        >
                            <div class="flex items-start justify-between gap-6">
                                <div>
                                    <h3 class="text-lg font-semibold">Project Overview</h3>

                                    <p class="mt-1 text-sm text-muted">
                                        A typical SaaS application card using subtle surface
                                        elevation.
                                    </p>
                                </div>

                                <span
                                    class="rounded-full bg-success px-3 py-1 text-xs font-medium text-on-success"
                                >
                                    Active
                                </span>
                            </div>

                            <div class="mt-6 grid gap-4 sm:grid-cols-3">
                                <div>
                                    <p class="text-xs text-muted">Projects</p>

                                    <p class="mt-1 text-xl font-semibold">24</p>
                                </div>

                                <div>
                                    <p class="text-xs text-muted">Members</p>

                                    <p class="mt-1 text-xl font-semibold">12</p>
                                </div>

                                <div>
                                    <p class="text-xs text-muted">Completion</p>

                                    <p class="mt-1 text-xl font-semibold">86%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="text-sm font-medium">Dropdown / Popover</p>

                        <div
                            class="relative mt-3 max-w-sm rounded-lg border border-border bg-surface p-2 shadow-float"
                        >
                            <button
                                type="button"
                                class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
                            >
                                <span> Account settings </span>

                                <span class="text-muted"> → </span>
                            </button>

                            <button
                                type="button"
                                class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
                            >
                                <span> Notifications </span>

                                <span class="text-muted"> → </span>
                            </button>

                            <button
                                type="button"
                                class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
                            >
                                <span> Preferences </span>

                                <span class="text-muted"> → </span>
                            </button>

                            <div class="my-2 border-t border-border"></div>

                            <button
                                type="button"
                                class="flex w-full rounded-md px-3 py-2 text-left text-sm text-danger hover:bg-danger-bg"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="text-sm font-medium">Modal / Dialog</p>

                        <div
                            class="mt-3 max-w-lg rounded-xl border border-border bg-surface p-6 shadow-modal"
                        >
                            <div class="flex items-start justify-between gap-6">
                                <div>
                                    <h3 class="text-lg font-semibold">Delete project?</h3>

                                    <p class="mt-2 text-sm text-muted">
                                        This action cannot be undone. The project and all associated
                                        data will be permanently deleted.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    class="text-muted hover:text-page"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            <div class="mt-6 flex justify-end gap-3">
                                <button
                                    type="button"
                                    class="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    class="rounded-md bg-danger px-4 py-2 text-sm font-medium text-on-danger hover:bg-danger-hover"
                                >
                                    Delete project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-12">
                <h2 class="text-xl font-semibold">Elevation Principles</h2>

                <div class="mt-6 grid gap-6 md:grid-cols-3">
                    <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                        <p class="text-sm font-semibold">Surface</p>

                        <p class="mt-2 text-sm text-muted">
                            Used when content needs subtle separation from the page without
                            appearing to float.
                        </p>

                        <p class="mt-4 text-xs font-medium text-primary">shadow-surface</p>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-6 shadow-float">
                        <p class="text-sm font-semibold">Floating</p>

                        <p class="mt-2 text-sm text-muted">
                            Used for elements that appear above the normal document flow.
                        </p>

                        <p class="mt-4 text-xs font-medium text-primary">shadow-float</p>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-6 shadow-modal">
                        <p class="text-sm font-semibold">Modal</p>

                        <p class="mt-2 text-sm text-muted">
                            Used for dialogs and prominent overlays that need the strongest visual
                            separation.
                        </p>

                        <p class="mt-4 text-xs font-medium text-primary">shadow-modal</p>
                    </div>
                </div>
            </section>

            <section class="mt-12 rounded-xl border border-primary bg-primary-bg p-6">
                <h2 class="text-lg font-semibold text-primary">Theme Verification</h2>

                <p class="mt-2 text-sm text-muted">
                    Switch between light and dark mode and verify that all three shadow levels
                    remain visually distinguishable.
                </p>

                <div class="mt-5 flex flex-wrap gap-3">
                    <div
                        class="rounded-lg border border-border bg-surface px-4 py-3 shadow-surface"
                    >
                        <span class="text-sm font-medium"> Surface </span>
                    </div>

                    <div class="rounded-lg border border-border bg-surface px-4 py-3 shadow-float">
                        <span class="text-sm font-medium"> Floating </span>
                    </div>

                    <div class="rounded-lg border border-border bg-surface px-4 py-3 shadow-modal">
                        <span class="text-sm font-medium"> Modal </span>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
