<script setup></script>

<template>
    <div class="min-h-screen bg-page text-page">
        <div class="flex min-h-screen">
            <aside class="hidden w-64 shrink-0 border-r border-border bg-surface lg:block">
                <div class="sticky top-0 flex h-screen flex-col">
                    <div class="border-b border-border px-6 py-5">
                        <RouterLink to="/" class="text-lg font-semibold tracking-tight">
                            Vue 3 DS
                        </RouterLink>

                        <p class="mt-1 text-xs text-muted">Indigo SaaS</p>
                    </div>

                    <nav class="flex-1 overflow-y-auto px-4 py-6">
                        <div>
                            <p
                                class="px-2 text-xs font-semibold uppercase tracking-wider text-muted"
                            >
                                Foundations
                            </p>

                            <div class="mt-2 space-y-1">
                                <RouterLink
                                    to="/colors"
                                    class="block rounded-md px-2 py-2 text-sm font-medium hover:bg-muted"
                                >
                                    Colors
                                </RouterLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>

            <div class="flex min-w-0 flex-1 flex-col">
                <header class="sticky top-0 z-10 border-b border-border bg-page/95 backdrop-blur">
                    <div class="flex h-16 items-center justify-between px-6">
                        <div class="lg:hidden">
                            <RouterLink to="/design-system" class="text-base font-semibold">
                                Vue 3 DS
                            </RouterLink>
                        </div>

                        <div class="ml-auto flex items-center gap-3">
                            <span class="hidden text-sm text-muted sm:inline"> Indigo SaaS </span>
                        </div>
                    </div>
                </header>

                <main class="flex-1">
                    <div class="mx-auto w-full max-w-7xl px-6 py-10">
                        <RouterView />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
