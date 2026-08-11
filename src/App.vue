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
                <p class="text-sm font-medium text-primary">TYPOGRAPHY</p>

                <h1 class="mt-2 text-4xl font-bold tracking-tight">Design System Typography</h1>

                <p class="mt-3 max-w-2xl text-base text-muted">
                    A simple and consistent typography system built on top of Tailwind CSS and
                    Inter.
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

            <!-- Headings -->

            <section class="mt-10 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Headings</h2>

                <div class="mt-6 space-y-6">
                    <div>
                        <p class="mb-1 text-xs text-muted">text-4xl / font-bold</p>

                        <h1 class="text-4xl font-bold tracking-tight">Heading One</h1>
                    </div>

                    <div>
                        <p class="mb-1 text-xs text-muted">text-3xl / font-bold</p>

                        <h2 class="text-3xl font-bold tracking-tight">Heading Two</h2>
                    </div>

                    <div>
                        <p class="mb-1 text-xs text-muted">text-2xl / font-semibold</p>

                        <h3 class="text-2xl font-semibold">Heading Three</h3>
                    </div>

                    <div>
                        <p class="mb-1 text-xs text-muted">text-xl / font-semibold</p>

                        <h4 class="text-xl font-semibold">Heading Four</h4>
                    </div>

                    <div>
                        <p class="mb-1 text-xs text-muted">text-lg / font-semibold</p>

                        <h5 class="text-lg font-semibold">Heading Five</h5>
                    </div>
                </div>
            </section>

            <!-- Body -->

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Body Text</h2>

                <div class="mt-6 space-y-6">
                    <div>
                        <p class="mb-1 text-xs text-muted">text-base</p>

                        <p class="text-base">
                            This is the default body text used throughout the application. It should
                            be comfortable to read and work well for paragraphs and general content.
                        </p>
                    </div>

                    <div>
                        <p class="mb-1 text-xs text-muted">text-sm</p>

                        <p class="text-sm">
                            This is secondary body text. It can be used for supporting information,
                            descriptions, and metadata.
                        </p>
                    </div>

                    <div>
                        <p class="mb-1 text-xs text-muted">text-xs</p>

                        <p class="text-xs">
                            This is small supporting text, generally used for captions and
                            supplementary information.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Weights -->

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">Font Weights</h2>

                <div class="mt-6 space-y-4">
                    <p class="font-normal">400 — Normal</p>

                    <p class="font-medium">500 — Medium</p>

                    <p class="font-semibold">600 — Semibold</p>

                    <p class="font-bold">700 — Bold</p>
                </div>
            </section>

            <!-- UI Examples -->

            <section class="mt-6 rounded-xl border border-border bg-surface p-6">
                <h2 class="text-xl font-semibold text-surface">UI Examples</h2>

                <div class="mt-6 space-y-6">
                    <div>
                        <label class="text-sm font-medium"> Email address </label>

                        <p class="mt-1 text-sm text-muted">We'll never share your email address.</p>
                    </div>

                    <div>
                        <p class="text-sm font-medium">Account Status</p>

                        <p class="mt-1 text-sm text-success">Your account is active.</p>
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
