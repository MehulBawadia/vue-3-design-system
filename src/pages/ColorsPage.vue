<script setup>
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<template>
    <div>
        <header>
            <p class="text-sm font-medium text-primary">FOUNDATIONS</p>

            <h1 class="mt-2 text-4xl font-bold tracking-tight">Colors</h1>

            <p class="mt-3 max-w-2xl text-base text-muted">
                The semantic color system used throughout the design system. Colors automatically
                adapt between light and dark themes.
            </p>

            <ThemeToggler />
        </header>

        <section class="mt-10">
            <h2 class="text-xl font-semibold">Page Colors</h2>

            <p class="mt-2 text-sm text-muted">
                The core colors used to establish the page hierarchy.
            </p>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="overflow-hidden rounded-lg border border-border bg-page">
                    <div class="h-24"></div>

                    <div class="border-t border-border p-4">
                        <p class="text-sm font-semibold text-page">Page</p>

                        <code class="mt-1 block text-xs text-muted"> bg-page </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border bg-surface">
                    <div class="h-24"></div>

                    <div class="border-t border-border p-4">
                        <p class="text-sm font-semibold text-page">Surface</p>

                        <code class="mt-1 block text-xs text-muted"> bg-surface </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border bg-muted">
                    <div class="h-24"></div>

                    <div class="border-t border-border p-4">
                        <p class="text-sm font-semibold text-page">Muted</p>

                        <code class="mt-1 block text-xs text-muted"> bg-muted </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border bg-surface">
                    <div class="h-24 border-8 border-border"></div>

                    <div class="border-t border-border p-4">
                        <p class="text-sm font-semibold text-page">Border</p>

                        <code class="mt-1 block text-xs text-muted"> border-border </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Primary</h2>

            <p class="mt-2 text-sm text-muted">Brand colors and their interactive states.</p>

            <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-primary">
                        <span class="text-sm font-semibold text-on-primary"> Primary </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-primary </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-primary-hover">
                        <span class="text-sm font-semibold text-on-primary"> Hover </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-primary-hover </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-primary-active">
                        <span class="text-sm font-semibold text-on-primary"> Active </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-primary-active </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-primary-bg">
                        <span class="text-sm font-semibold text-primary"> Background </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-primary-bg </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Text Colors</h2>

            <p class="mt-2 text-sm text-muted">
                Semantic text colors for different levels of hierarchy.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6">
                <div class="space-y-5">
                    <div>
                        <p class="text-lg font-semibold text-page">Primary Text</p>

                        <code class="mt-1 block text-xs text-muted"> text-page </code>
                    </div>

                    <div>
                        <p class="text-lg font-semibold text-muted">Muted Text</p>

                        <code class="mt-1 block text-xs text-muted"> text-muted </code>
                    </div>

                    <div>
                        <p class="text-lg font-semibold text-primary">Primary Text</p>

                        <code class="mt-1 block text-xs text-muted"> text-primary </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">State Colors</h2>

            <p class="mt-2 text-sm text-muted">
                Semantic colors for success, warning, danger, and information states.
            </p>

            <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-success">
                        <span class="text-sm font-semibold text-on-success"> Success </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-success </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-warning">
                        <span class="text-sm font-semibold text-on-warning"> Warning </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-warning </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-danger">
                        <span class="text-sm font-semibold text-on-danger"> Danger </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-danger </code>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg border border-border">
                    <div class="flex h-24 items-center justify-center bg-info">
                        <span class="text-sm font-semibold text-on-info"> Info </span>
                    </div>

                    <div class="bg-surface p-4">
                        <code class="text-xs text-muted"> bg-info </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">State Backgrounds</h2>

            <p class="mt-2 text-sm text-muted">
                Subtle state backgrounds for alerts, messages, and contextual surfaces.
            </p>

            <div class="mt-6 space-y-4">
                <div class="rounded-lg border border-success bg-success-bg p-4">
                    <p class="text-sm font-semibold text-success">Success background</p>

                    <code class="mt-1 block text-xs text-muted"> bg-success-bg </code>
                </div>

                <div class="rounded-lg border border-warning bg-warning-bg p-4">
                    <p class="text-sm font-semibold text-warning">Warning background</p>

                    <code class="mt-1 block text-xs text-muted"> bg-warning-bg </code>
                </div>

                <div class="rounded-lg border border-danger bg-danger-bg p-4">
                    <p class="text-sm font-semibold text-danger">Danger background</p>

                    <code class="mt-1 block text-xs text-muted"> bg-danger-bg </code>
                </div>

                <div class="rounded-lg border border-info bg-info-bg p-4">
                    <p class="text-sm font-semibold text-info">Info background</p>

                    <code class="mt-1 block text-xs text-muted"> bg-info-bg </code>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Interactive States</h2>

            <p class="mt-2 text-sm text-muted">
                Verify the visual progression of primary interactive states.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6">
                <div class="flex flex-wrap gap-3">
                    <button
                        type="button"
                        class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                    >
                        Default
                    </button>

                    <button
                        type="button"
                        class="rounded-md bg-primary-hover px-4 py-2 text-sm font-medium text-on-primary"
                    >
                        Hover
                    </button>

                    <button
                        type="button"
                        class="rounded-md bg-primary-active px-4 py-2 text-sm font-medium text-on-primary"
                    >
                        Active
                    </button>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="rounded-xl border border-primary bg-primary-bg p-6">
                <h2 class="text-lg font-semibold text-primary">Theme Verification</h2>

                <p class="mt-2 text-sm text-muted">
                    Switch between light and dark mode and verify that the semantic colors maintain
                    appropriate contrast and hierarchy.
                </p>

                <div class="mt-6 grid gap-4 sm:grid-cols-2">
                    <div class="rounded-lg border border-border bg-surface p-5">
                        <p class="text-sm font-semibold text-page">Surface</p>

                        <p class="mt-2 text-sm text-muted">
                            Primary text with muted supporting content.
                        </p>

                        <button
                            type="button"
                            class="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                        >
                            Primary Action
                        </button>
                    </div>

                    <div class="rounded-lg border border-danger bg-danger-bg p-5">
                        <p class="text-sm font-semibold text-danger">Error State</p>

                        <p class="mt-2 text-sm text-muted">
                            This demonstrates a semantic danger background with corresponding state
                            text.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
