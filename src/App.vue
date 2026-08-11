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
                <p class="text-sm font-medium text-primary">SPACING</p>

                <h1 class="mt-2 text-4xl font-bold tracking-tight">Spacing System</h1>

                <p class="mt-3 max-w-2xl text-base text-muted">
                    Our spacing system uses Tailwind CSS's existing spacing scale with consistent
                    conventions across components and layouts.
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
                <h2 class="text-xl font-semibold text-surface">Base Spacing</h2>

                <div class="mt-6 space-y-4">
                    <div class="flex items-center gap-4">
                        <span class="w-16 text-sm text-muted"> 4px </span>

                        <div class="h-4 w-1 bg-primary"></div>

                        <code class="text-sm text-muted"> gap-1 / p-1 </code>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="w-16 text-sm text-muted"> 8px </span>

                        <div class="h-4 w-2 bg-primary"></div>

                        <code class="text-sm text-muted"> gap-2 / p-2 </code>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="w-16 text-sm text-muted"> 12px </span>

                        <div class="h-4 w-3 bg-primary"></div>

                        <code class="text-sm text-muted"> gap-3 / p-3 </code>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="w-16 text-sm text-muted"> 16px </span>

                        <div class="h-4 w-4 bg-primary"></div>

                        <code class="text-sm text-muted"> gap-4 / p-4 </code>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="w-16 text-sm text-muted"> 24px </span>

                        <div class="h-4 w-6 bg-primary"></div>

                        <code class="text-sm text-muted"> gap-6 / p-6 </code>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="w-16 text-sm text-muted"> 32px </span>

                        <div class="h-4 w-8 bg-primary"></div>

                        <code class="text-sm text-muted"> gap-8 / p-8 </code>
                    </div>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Component Spacing</h2>

                <div class="mt-6 grid gap-6 md:grid-cols-3">
                    <div class="rounded-lg border border-border p-4">
                        <p class="text-sm font-medium">Tight</p>

                        <div class="mt-4 flex items-center gap-2">
                            <div class="h-8 w-8 rounded bg-primary"></div>

                            <span class="text-sm text-muted"> gap-2 </span>
                        </div>
                    </div>

                    <div class="rounded-lg border border-border p-4">
                        <p class="text-sm font-medium">Default</p>

                        <div class="mt-4 flex items-center gap-4">
                            <div class="h-8 w-8 rounded bg-primary"></div>

                            <span class="text-sm text-muted"> gap-4 </span>
                        </div>
                    </div>

                    <div class="rounded-lg border border-border p-4">
                        <p class="text-sm font-medium">Spacious</p>

                        <div class="mt-4 flex items-center gap-6">
                            <div class="h-8 w-8 rounded bg-primary"></div>

                            <span class="text-sm text-muted"> gap-6 </span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Card Padding</h2>

                <div class="mt-6 grid gap-6 md:grid-cols-3">
                    <div class="rounded-lg border border-border p-4">
                        <p class="text-sm font-medium">Compact</p>

                        <p class="mt-2 text-sm text-muted">p-4 — 16px</p>
                    </div>

                    <div class="rounded-lg border border-border p-6">
                        <p class="text-sm font-medium">Default</p>

                        <p class="mt-2 text-sm text-muted">p-6 — 24px</p>
                    </div>

                    <div class="rounded-lg border border-border p-8">
                        <p class="text-sm font-medium">Spacious</p>

                        <p class="mt-2 text-sm text-muted">p-8 — 32px</p>
                    </div>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Form Spacing Example</h2>

                <div class="mt-6 max-w-md space-y-6">
                    <div>
                        <label class="text-sm font-medium"> Email address </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            class="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
                        />

                        <p class="mt-2 text-sm text-muted">We'll never share your email address.</p>
                    </div>

                    <div>
                        <label class="text-sm font-medium"> Password </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            class="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
                        />

                        <p class="mt-2 text-sm text-muted">Use at least 8 characters.</p>
                    </div>

                    <button
                        type="button"
                        class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary hover:bg-primary-hover active:bg-primary-active"
                    >
                        Continue
                    </button>
                </div>
            </section>
        </div>
    </main>
</template>
