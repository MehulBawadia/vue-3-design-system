<script setup>
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<template>
    <div>
        <header>
            <p class="text-sm font-medium text-primary">FOUNDATIONS</p>

            <h1 class="mt-2 text-4xl font-bold tracking-tight">Spacing</h1>

            <p class="mt-3 max-w-2xl text-base text-muted">
                A consistent spacing system creates rhythm, hierarchy, and predictable relationships
                between elements.
            </p>

            <ThemeToggler />
        </header>

        <section class="mt-10">
            <h2 class="text-xl font-semibold">Spacing Principles</h2>

            <div class="mt-6 grid gap-4 md:grid-cols-3">
                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Consistency</p>

                    <p class="mt-2 text-sm text-muted">
                        Prefer the established spacing scale instead of arbitrary pixel values.
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Rhythm</p>

                    <p class="mt-2 text-sm text-muted">
                        Use consistent vertical and horizontal spacing to make content easier to
                        scan.
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Hierarchy</p>

                    <p class="mt-2 text-sm text-muted">
                        Larger spacing should communicate stronger separation between content
                        groups.
                    </p>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Base Spacing Scale</h2>

            <p class="mt-2 text-sm text-muted">
                The design system uses Tailwind CSS's spacing scale as its foundation.
            </p>

            <div
                class="mt-6 overflow-hidden rounded-lg border border-border bg-surface shadow-surface"
            >
                <div class="divide-y divide-border">
                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 0 </code>

                        <div class="flex h-6 w-0 shrink-0"></div>

                        <span class="text-sm text-muted"> 0px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 1 </code>

                        <div class="h-6 w-1 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 0.25rem / 4px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 2 </code>

                        <div class="h-6 w-2 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 0.5rem / 8px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 3 </code>

                        <div class="h-6 w-3 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 0.75rem / 12px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 4 </code>

                        <div class="h-6 w-4 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 1rem / 16px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 6 </code>

                        <div class="h-6 w-6 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 1.5rem / 24px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 8 </code>

                        <div class="h-6 w-8 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 2rem / 32px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 10 </code>

                        <div class="h-6 w-10 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 2.5rem / 40px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 12 </code>

                        <div class="h-6 w-12 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 3rem / 48px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 16 </code>

                        <div class="h-6 w-16 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 4rem / 64px </span>
                    </div>

                    <div class="flex items-center gap-6 p-4">
                        <code class="w-20 shrink-0 text-xs text-muted"> 24 </code>

                        <div class="h-6 w-24 shrink-0 rounded-sm bg-primary"></div>

                        <span class="text-sm text-muted"> 6rem / 96px </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Common Usage</h2>

            <p class="mt-2 text-sm text-muted">
                These values cover most day-to-day spacing requirements in the application.
            </p>

            <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-lg border border-border bg-surface p-5 shadow-surface">
                    <code class="text-xs font-medium text-primary"> gap-2 </code>

                    <p class="mt-2 text-sm text-muted">
                        Tight spacing between closely related elements.
                    </p>

                    <div class="mt-4 flex gap-2">
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-5 shadow-surface">
                    <code class="text-xs font-medium text-primary"> gap-4 </code>

                    <p class="mt-2 text-sm text-muted">
                        Default spacing between related controls or content.
                    </p>

                    <div class="mt-4 flex gap-4">
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-5 shadow-surface">
                    <code class="text-xs font-medium text-primary"> gap-6 </code>

                    <p class="mt-2 text-sm text-muted">
                        Separation between larger groups of related content.
                    </p>

                    <div class="mt-4 flex gap-6">
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-5 shadow-surface">
                    <code class="text-xs font-medium text-primary"> gap-8 </code>

                    <p class="mt-2 text-sm text-muted">
                        Strong separation between major content groups.
                    </p>

                    <div class="mt-4 flex gap-8">
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                        <div class="h-8 w-8 rounded bg-primary"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Component Spacing</h2>

            <p class="mt-2 text-sm text-muted">
                Components should use predictable internal spacing so their layouts remain
                consistent.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="rounded-lg border border-border bg-page p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-lg font-semibold">Project settings</h3>

                            <p class="mt-1 text-sm text-muted">
                                Manage your project configuration.
                            </p>
                        </div>

                        <button
                            type="button"
                            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                        >
                            Save
                        </button>
                    </div>

                    <div class="mt-6 border-t border-border pt-6">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <p class="text-sm font-medium">Project name</p>

                                <div
                                    class="mt-2 h-10 rounded-md border border-border bg-surface"
                                ></div>
                            </div>

                            <div>
                                <p class="text-sm font-medium">Project URL</p>

                                <div
                                    class="mt-2 h-10 rounded-md border border-border bg-surface"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Vertical Rhythm</h2>

            <p class="mt-2 text-sm text-muted">
                Vertical spacing should reflect the relationship between content levels.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="max-w-2xl">
                    <p class="text-xs font-medium uppercase tracking-wider text-muted">
                        Section Label
                    </p>

                    <h3 class="mt-2 text-2xl font-semibold tracking-tight">
                        A clear content hierarchy
                    </h3>

                    <p class="mt-3 text-base leading-7 text-muted">
                        Closely related content should use smaller spacing, while distinct sections
                        should have more generous separation.
                    </p>

                    <div class="mt-6 rounded-lg bg-muted p-4">
                        <p class="text-sm font-medium">Related information</p>

                        <p class="mt-1 text-sm text-muted">
                            This block demonstrates tighter spacing within a related content group.
                        </p>
                    </div>

                    <div class="mt-10 border-t border-border pt-10">
                        <p class="text-sm font-semibold">A new content section</p>

                        <p class="mt-2 text-sm text-muted">
                            The larger gap communicates that this content is separate from the
                            previous group.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="rounded-xl border border-primary bg-primary-bg p-6">
                <h2 class="text-lg font-semibold text-primary">Theme Verification</h2>

                <p class="mt-2 text-sm text-muted">
                    Spacing remains independent of the active theme. Switch between light and dark
                    mode to verify that spacing, surfaces, and borders continue to provide a clear
                    visual hierarchy.
                </p>

                <div class="mt-6 grid gap-4 sm:grid-cols-3">
                    <div class="rounded-lg border border-border bg-surface p-4">
                        <p class="text-sm font-semibold">Surface</p>

                        <p class="mt-2 text-xs text-muted">p-4</p>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-6">
                        <p class="text-sm font-semibold">Surface</p>

                        <p class="mt-2 text-xs text-muted">p-6</p>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-8">
                        <p class="text-sm font-semibold">Surface</p>

                        <p class="mt-2 text-xs text-muted">p-8</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
