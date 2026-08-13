<script setup>
import { ref } from "vue";

const isDark = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;

    document.documentElement.dataset.theme = isDark.value ? "dark" : "light";
}
</script>

<template>
    <div class="mt-6">
        <button
            type="button"
            class="rounded-md bg-primary px-4 py-2 font-medium text-on-primary hover:bg-primary-hover active:bg-primary-active"
            @click="toggleTheme"
        >
            Toggle Dark Mode
        </button>
    </div>
</template>
