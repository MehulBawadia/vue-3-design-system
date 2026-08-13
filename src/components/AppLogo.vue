<template>
    <RouterLink to="/" class="group flex items-center gap-3" aria-label="VueDS home">
        <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-on-primary shadow-surface transition-transform duration-200 group-hover:scale-105"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                aria-hidden="true"
            >
                <path
                    d="M4 5.5L12 18L20 5.5"
                    stroke="currentColor"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <path
                    d="M8 5.5L12 12L16 5.5"
                    stroke="currentColor"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    opacity="0.65"
                />
            </svg>
        </div>

        <div class="min-w-0">
            <p class="text-base font-bold tracking-tight">
                Vue<span class="text-primary">DS</span>
            </p>

            <p class="mt-0.5 text-[11px] font-medium tracking-wide text-muted">Design System</p>
        </div>
    </RouterLink>
</template>
