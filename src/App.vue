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
                <h1 class="text-3xl font-bold">Vue 3 Design System</h1>

                <p class="mt-2 text-muted">Semantic color token verification.</p>

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

            <section class="mt-8 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Primary & Secondary</h2>

                <div class="mt-6 flex flex-wrap gap-3">
                    <button
                        type="button"
                        class="rounded-md bg-primary px-4 py-2 font-medium text-on-primary hover:bg-primary-hover active:bg-primary-active"
                    >
                        Primary
                    </button>

                    <button
                        type="button"
                        class="rounded-md bg-secondary px-4 py-2 font-medium text-on-secondary hover:bg-secondary-hover active:bg-secondary-active"
                    >
                        Secondary
                    </button>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Status Colors</h2>

                <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <button
                        type="button"
                        class="rounded-md bg-success px-4 py-3 font-medium text-on-success hover:bg-success-hover active:bg-success-active"
                    >
                        Success
                    </button>

                    <button
                        type="button"
                        class="rounded-md bg-warning px-4 py-3 font-medium text-on-warning hover:bg-warning-hover active:bg-warning-active"
                    >
                        Warning
                    </button>

                    <button
                        type="button"
                        class="rounded-md bg-danger px-4 py-3 font-medium text-on-danger hover:bg-danger-hover active:bg-danger-active"
                    >
                        Danger
                    </button>

                    <button
                        type="button"
                        class="rounded-md bg-info px-4 py-3 font-medium text-on-info hover:bg-info-hover active:bg-info-active"
                    >
                        Info
                    </button>
                </div>
            </section>

            <section class="mt-6 grid gap-6 md:grid-cols-2">
                <div class="rounded-xl border border-border bg-surface p-6">
                    <h2 class="text-xl font-semibold text-surface">Surface</h2>

                    <p class="mt-2 text-muted">This card uses bg-surface and text-surface.</p>

                    <p class="mt-4 text-primary">This is text-primary.</p>
                </div>

                <div class="rounded-xl border border-border bg-muted p-6">
                    <h2 class="text-xl font-semibold text-page">Muted</h2>

                    <p class="mt-2 text-muted">This section uses bg-muted and text-muted.</p>
                </div>
            </section>

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Border</h2>

                <p class="mt-2 text-muted">The cards and sections use border-border.</p>

                <div class="mt-6 grid gap-4 sm:grid-cols-3">
                    <div class="rounded-lg border border-border p-4">
                        <span class="text-sm text-muted"> Border </span>

                        <p class="mt-1 font-medium text-surface">Default border</p>
                    </div>

                    <div class="rounded-lg border border-primary bg-primary/5 p-4">
                        <span class="text-sm text-primary"> Primary </span>

                        <p class="mt-1 font-medium text-surface">Primary border</p>
                    </div>

                    <div class="rounded-lg border border-danger bg-danger/5 p-4">
                        <span class="text-sm text-danger"> Danger </span>

                        <p class="mt-1 font-medium text-surface">Danger border</p>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
