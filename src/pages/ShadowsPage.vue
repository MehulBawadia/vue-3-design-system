<script setup>
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<template>
    <div>
        <header>
            <p class="text-sm font-medium text-primary">FOUNDATIONS</p>

            <h1 class="mt-2 text-4xl font-bold tracking-tight">Shadows & Elevation</h1>

            <p class="mt-3 max-w-2xl text-base text-muted">
                Elevation communicates hierarchy and spatial relationships between surfaces. Shadows
                automatically adapt between light and dark themes.
            </p>

            <ThemeToggler />
        </header>

        <section class="mt-10">
            <h2 class="text-xl font-semibold">Elevation Principles</h2>

            <div class="mt-6 grid gap-4 md:grid-cols-3">
                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Hierarchy</p>

                    <p class="mt-2 text-sm text-muted">
                        Higher elevation should indicate that an element sits above the surrounding
                        content.
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Restraint</p>

                    <p class="mt-2 text-sm text-muted">
                        Shadows should support hierarchy without becoming the primary visual
                        element.
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Consistency</p>

                    <p class="mt-2 text-sm text-muted">
                        Components should use semantic elevation levels instead of arbitrary shadow
                        values.
                    </p>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Elevation Scale</h2>

            <p class="mt-2 text-sm text-muted">
                Use the lowest elevation necessary to establish the required visual hierarchy.
            </p>

            <div class="mt-6 space-y-8">
                <div class="rounded-lg border border-border bg-page p-6">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="font-semibold">No Elevation</p>

                            <code class="mt-1 block text-xs text-primary"> shadow-none </code>

                            <p class="mt-2 text-sm text-muted">
                                Used for the normal page background and elements that should remain
                                visually attached to the surrounding surface.
                            </p>
                        </div>

                        <div
                            class="h-20 w-32 shrink-0 rounded-lg border border-border bg-surface"
                        ></div>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="font-semibold">Surface</p>

                            <code class="mt-1 block text-xs text-primary"> shadow-surface </code>

                            <p class="mt-2 text-sm text-muted">
                                Used for cards, panels, and standard elevated surfaces.
                            </p>
                        </div>

                        <div
                            class="h-20 w-32 shrink-0 rounded-lg border border-border bg-surface shadow-surface"
                        ></div>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="font-semibold">Floating</p>

                            <code class="mt-1 block text-xs text-primary"> shadow-float </code>

                            <p class="mt-2 text-sm text-muted">
                                Used for dropdowns, popovers, command menus, and floating UI.
                            </p>
                        </div>

                        <div
                            class="h-20 w-32 shrink-0 rounded-lg border border-border bg-surface shadow-float"
                        ></div>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="font-semibold">Modal</p>

                            <code class="mt-1 block text-xs text-primary"> shadow-modal </code>

                            <p class="mt-2 text-sm text-muted">
                                Highest elevation for dialogs and other prominent overlay surfaces.
                            </p>
                        </div>

                        <div
                            class="h-20 w-32 shrink-0 rounded-lg border border-border bg-surface shadow-modal"
                        ></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Elevation Comparison</h2>

            <p class="mt-2 text-sm text-muted">
                The elevation hierarchy should remain visually distinguishable without becoming
                excessive.
            </p>

            <div class="mt-8 rounded-xl bg-page p-8">
                <div class="grid gap-8 md:grid-cols-3">
                    <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                        <p class="text-sm font-semibold">Card</p>

                        <p class="mt-2 text-xs text-muted">shadow-surface</p>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-6 shadow-float">
                        <p class="text-sm font-semibold">Dropdown</p>

                        <p class="mt-2 text-xs text-muted">shadow-float</p>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-6 shadow-modal">
                        <p class="text-sm font-semibold">Modal</p>

                        <p class="mt-2 text-xs text-muted">shadow-modal</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Component Examples</h2>

            <p class="mt-2 text-sm text-muted">
                Recommended elevation levels for common interface patterns.
            </p>

            <div class="mt-6 grid gap-6 md:grid-cols-2">
                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-sm font-semibold">Card</p>

                    <div class="mt-5 rounded-lg border border-border bg-page p-5">
                        <p class="font-semibold">Project overview</p>

                        <p class="mt-2 text-sm text-muted">
                            Standard cards should use subtle elevation.
                        </p>
                    </div>

                    <p class="mt-4 text-xs text-muted">
                        Recommended:
                        <code>shadow-surface</code>
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-sm font-semibold">Dropdown</p>

                    <div class="relative mt-5">
                        <button
                            type="button"
                            class="flex w-full items-center justify-between rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium"
                        >
                            Select an option

                            <span class="text-muted"> ↓ </span>
                        </button>

                        <div
                            class="absolute left-0 right-0 top-full z-10 mt-2 rounded-lg border border-border bg-surface p-2 shadow-float"
                        >
                            <div class="rounded-md px-3 py-2 text-sm hover:bg-muted">
                                Option One
                            </div>

                            <div class="rounded-md px-3 py-2 text-sm hover:bg-muted">
                                Option Two
                            </div>

                            <div class="rounded-md px-3 py-2 text-sm hover:bg-muted">
                                Option Three
                            </div>
                        </div>
                    </div>

                    <p class="mt-4 text-xs text-muted">
                        Recommended:
                        <code>shadow-float</code>
                    </p>
                </div>

                <div
                    class="rounded-lg border border-border bg-surface p-6 shadow-surface md:col-span-2"
                >
                    <p class="text-sm font-semibold">Modal</p>

                    <div
                        class="mt-5 mx-auto max-w-md rounded-xl border border-border bg-surface p-6 shadow-modal"
                    >
                        <h3 class="text-lg font-semibold">Delete project?</h3>

                        <p class="mt-2 text-sm text-muted">
                            This action cannot be undone. Are you sure you want to continue?
                        </p>

                        <div class="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                class="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="rounded-md bg-danger px-4 py-2 text-sm font-medium text-on-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <p class="mt-4 text-xs text-muted">
                        Recommended:
                        <code>shadow-modal</code>
                    </p>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                <h2 class="text-lg font-semibold">Dark Mode Elevation</h2>

                <p class="mt-2 text-sm text-muted">
                    Dark interfaces require a different shadow treatment because traditional black
                    shadows have very little visual impact against dark surfaces.
                </p>

                <div class="mt-6 rounded-lg border border-border bg-page p-6">
                    <p class="text-sm font-semibold">Theme-aware shadows</p>

                    <p class="mt-2 text-sm text-muted">
                        The semantic shadow tokens automatically use stronger, theme-appropriate
                        values in dark mode while keeping the same component classes.
                    </p>

                    <code class="mt-4 block text-xs text-primary">
                        shadow-surface · shadow-float · shadow-modal
                    </code>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="rounded-xl border border-primary bg-primary-bg p-6">
                <h2 class="text-lg font-semibold text-primary">Theme Verification</h2>

                <p class="mt-2 text-sm text-muted">
                    Switch between light and dark mode and verify that all elevation levels remain
                    visible and appropriately differentiated.
                </p>

                <div class="mt-8 rounded-xl bg-page p-8">
                    <div class="grid gap-8 sm:grid-cols-3">
                        <div class="rounded-lg border border-border bg-surface p-5 shadow-surface">
                            <p class="text-sm font-semibold">Surface</p>

                            <p class="mt-2 text-xs text-muted">Standard elevation</p>
                        </div>

                        <div class="rounded-lg border border-border bg-surface p-5 shadow-float">
                            <p class="text-sm font-semibold">Floating</p>

                            <p class="mt-2 text-xs text-muted">Elevated UI</p>
                        </div>

                        <div class="rounded-lg border border-border bg-surface p-5 shadow-modal">
                            <p class="text-sm font-semibold">Modal</p>

                            <p class="mt-2 text-xs text-muted">Highest elevation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
