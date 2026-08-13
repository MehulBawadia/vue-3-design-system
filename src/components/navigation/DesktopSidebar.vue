<script setup>
import NavigationLinks from "@/components/navigation/NavigationLinks.vue";
import AppLogo from "@/components/AppLogo.vue";
</script>

<template>
    <aside
        class="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-surface lg:block"
    >
        <div class="flex h-full flex-col">
            <div class="border-b border-border px-6 py-5">
                <AppLogo />
            </div>

            <div class="flex-1 overflow-y-auto px-4 py-6">
                <NavigationLinks />
            </div>

            <div class="border-t border-border p-4">
                <div class="rounded-lg border border-border bg-muted p-4">
                    <p class="text-xs font-medium text-muted">Design System</p>

                    <p class="mt-1 text-sm font-semibold">Foundations</p>
                </div>
            </div>
        </div>
    </aside>
</template>
