<script setup>
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<template>
    <div>
        <header>
            <p class="text-sm font-medium text-primary">FOUNDATIONS</p>

            <h1 class="mt-2 text-4xl font-bold tracking-tight">Border Radius</h1>

            <p class="mt-3 max-w-2xl text-base text-muted">
                A consistent radius system creates a unified visual language across cards, controls,
                surfaces, and interactive elements.
            </p>

            <ThemeToggler />
        </header>

        <section class="mt-10">
            <h2 class="text-xl font-semibold">Radius Principles</h2>

            <div class="mt-6 grid gap-4 md:grid-cols-3">
                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Consistency</p>

                    <p class="mt-2 text-sm text-muted">
                        Use the established radius scale instead of arbitrary values.
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Hierarchy</p>

                    <p class="mt-2 text-sm text-muted">
                        Larger surfaces can use larger radii, while compact controls should remain
                        tighter.
                    </p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-lg font-semibold">Purpose</p>

                    <p class="mt-2 text-sm text-muted">
                        Radius should communicate the type and importance of a UI element, not
                        simply decorate it.
                    </p>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Radius Scale</h2>

            <p class="mt-2 text-sm text-muted">
                The design system uses Tailwind CSS's border-radius scale.
            </p>

            <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="h-24 rounded-none border-2 border-primary bg-primary-bg"></div>

                    <div class="mt-4">
                        <p class="font-semibold">None</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-none </code>

                        <p class="mt-2 text-sm text-muted">
                            No rounding. Useful where a completely flat edge is preferred.
                        </p>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="h-24 rounded-sm border-2 border-primary bg-primary-bg"></div>

                    <div class="mt-4">
                        <p class="font-semibold">Small</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-sm </code>

                        <p class="mt-2 text-sm text-muted">
                            Subtle rounding for compact UI and small surfaces.
                        </p>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="h-24 rounded-md border-2 border-primary bg-primary-bg"></div>

                    <div class="mt-4">
                        <p class="font-semibold">Medium</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-md </code>

                        <p class="mt-2 text-sm text-muted">
                            Default radius for controls such as buttons and inputs.
                        </p>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="h-24 rounded-lg border-2 border-primary bg-primary-bg"></div>

                    <div class="mt-4">
                        <p class="font-semibold">Large</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-lg </code>

                        <p class="mt-2 text-sm text-muted">
                            Standard radius for cards, panels, and containers.
                        </p>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="h-24 rounded-xl border-2 border-primary bg-primary-bg"></div>

                    <div class="mt-4">
                        <p class="font-semibold">Extra Large</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-xl </code>

                        <p class="mt-2 text-sm text-muted">
                            Prominent surfaces and larger feature containers.
                        </p>
                    </div>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <div class="h-24 rounded-2xl border-2 border-primary bg-primary-bg"></div>

                    <div class="mt-4">
                        <p class="font-semibold">2X Large</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-2xl </code>

                        <p class="mt-2 text-sm text-muted">
                            Large feature areas where softer corners are appropriate.
                        </p>
                    </div>
                </div>

                <div
                    class="rounded-lg border border-border bg-surface p-6 shadow-surface sm:col-span-2 lg:col-span-3"
                >
                    <div
                        class="flex h-24 items-center justify-center rounded-full border-2 border-primary bg-primary-bg"
                    >
                        <span class="text-sm font-semibold text-primary"> Pill / Circular </span>
                    </div>

                    <div class="mt-4">
                        <p class="font-semibold">Full</p>

                        <code class="mt-1 block text-xs text-primary"> rounded-full </code>

                        <p class="mt-2 text-sm text-muted">
                            Used for pills, badges, avatars, status indicators, and fully circular
                            elements.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Usage Guidelines</h2>

            <p class="mt-2 text-sm text-muted">
                Use radius consistently based on the role of the element.
            </p>

            <div
                class="mt-6 overflow-hidden rounded-lg border border-border bg-surface shadow-surface"
            >
                <div class="divide-y divide-border">
                    <div class="grid gap-2 p-5 sm:grid-cols-3">
                        <code class="text-sm font-medium text-primary"> rounded-sm </code>

                        <p class="text-sm font-medium">Compact UI</p>

                        <p class="text-sm text-muted">
                            Small utility elements and subtle surfaces.
                        </p>
                    </div>

                    <div class="grid gap-2 p-5 sm:grid-cols-3">
                        <code class="text-sm font-medium text-primary"> rounded-md </code>

                        <p class="text-sm font-medium">Controls</p>

                        <p class="text-sm text-muted">
                            Buttons, inputs, selects, and other standard controls.
                        </p>
                    </div>

                    <div class="grid gap-2 p-5 sm:grid-cols-3">
                        <code class="text-sm font-medium text-primary"> rounded-lg </code>

                        <p class="text-sm font-medium">Containers</p>

                        <p class="text-sm text-muted">
                            Cards, panels, dialogs, and standard surfaces.
                        </p>
                    </div>

                    <div class="grid gap-2 p-5 sm:grid-cols-3">
                        <code class="text-sm font-medium text-primary"> rounded-xl </code>

                        <p class="text-sm font-medium">Prominent surfaces</p>

                        <p class="text-sm text-muted">
                            Larger feature areas and visually prominent containers.
                        </p>
                    </div>

                    <div class="grid gap-2 p-5 sm:grid-cols-3">
                        <code class="text-sm font-medium text-primary"> rounded-full </code>

                        <p class="text-sm font-medium">Pills & circles</p>

                        <p class="text-sm text-muted">
                            Badges, tags, avatars, and status indicators.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Component Examples</h2>

            <p class="mt-2 text-sm text-muted">
                Common components using the recommended radius conventions.
            </p>

            <div class="mt-6 grid gap-6 md:grid-cols-2">
                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-sm font-semibold">Controls</p>

                    <div class="mt-5 flex flex-wrap gap-3">
                        <button
                            type="button"
                            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                        >
                            Button
                        </button>

                        <div
                            class="flex h-10 items-center rounded-md border border-border bg-page px-3 text-sm text-muted"
                        >
                            Input
                        </div>
                    </div>

                    <p class="mt-4 text-xs text-muted">Recommended: <code>rounded-md</code></p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-sm font-semibold">Card</p>

                    <div class="mt-5 rounded-lg border border-border bg-page p-5">
                        <p class="font-semibold">Project overview</p>

                        <p class="mt-2 text-sm text-muted">
                            Cards use a larger radius to distinguish them from their internal
                            controls.
                        </p>
                    </div>

                    <p class="mt-4 text-xs text-muted">Recommended: <code>rounded-lg</code></p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-sm font-semibold">Badge</p>

                    <div class="mt-5">
                        <span
                            class="inline-flex rounded-full bg-success-bg px-3 py-1 text-xs font-medium text-success"
                        >
                            Active
                        </span>
                    </div>

                    <p class="mt-4 text-xs text-muted">Recommended: <code>rounded-full</code></p>
                </div>

                <div class="rounded-lg border border-border bg-surface p-6 shadow-surface">
                    <p class="text-sm font-semibold">Feature Surface</p>

                    <div class="mt-5 rounded-xl border border-primary bg-primary-bg p-5">
                        <p class="font-semibold text-primary">Premium feature</p>

                        <p class="mt-2 text-sm text-muted">
                            Larger surfaces can use a softer radius to create stronger visual
                            separation.
                        </p>
                    </div>

                    <p class="mt-4 text-xs text-muted">Recommended: <code>rounded-xl</code></p>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="rounded-xl border border-primary bg-primary-bg p-6">
                <h2 class="text-lg font-semibold text-primary">Theme Verification</h2>

                <p class="mt-2 text-sm text-muted">
                    Border radius is independent of the active theme. Switch between light and dark
                    mode to verify that surfaces, borders, and shadows continue to work with the
                    same radius system.
                </p>

                <div class="mt-6 grid gap-4 sm:grid-cols-3">
                    <div class="rounded-md border border-border bg-surface p-5">
                        <p class="text-sm font-semibold">rounded-md</p>

                        <p class="mt-2 text-xs text-muted">Standard controls</p>
                    </div>

                    <div class="rounded-lg border border-border bg-surface p-5">
                        <p class="text-sm font-semibold">rounded-lg</p>

                        <p class="mt-2 text-xs text-muted">Standard containers</p>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-5">
                        <p class="text-sm font-semibold">rounded-xl</p>

                        <p class="mt-2 text-xs text-muted">Prominent surfaces</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
