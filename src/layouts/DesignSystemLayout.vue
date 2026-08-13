<script setup>
import DesktopSidebar from "@/components/navigation/DesktopSidebar.vue";
import MobileNavigation from "@/components/navigation/MobileNavigation.vue";
</script>

<template>
    <div class="min-h-screen bg-page text-page">
        <div class="flex min-h-screen">
            <DesktopSidebar />

            <main class="min-w-0 flex-1">
                <MobileNavigation />

                <div class="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-5">
                    <RouterView />
                </div>
            </main>
        </div>
    </div>
</template>
