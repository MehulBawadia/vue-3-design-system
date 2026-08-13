<script setup>
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<template>
    <div>
        <header>
            <p class="text-sm font-medium text-primary">FOUNDATIONS</p>

            <h1 class="mt-2 text-4xl font-bold tracking-tight">Typography</h1>

            <p class="mt-3 max-w-2xl text-base text-muted">
                Typography establishes hierarchy, readability, and consistency throughout the design
                system.
            </p>

            <ThemeToggler />
        </header>

        <section class="mt-10">
            <h2 class="text-xl font-semibold">Font Family</h2>

            <p class="mt-2 text-sm text-muted">
                The design system uses Inter as its primary interface font.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <p class="text-2xl font-semibold">The quick brown fox jumps over the lazy dog.</p>

                <code class="mt-4 block text-xs text-muted"> font-sans </code>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Headings</h2>

            <p class="mt-2 text-sm text-muted">
                Headings establish the primary visual hierarchy of a page.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="space-y-8">
                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Heading 1 · text-4xl</p>

                        <h1 class="text-4xl font-bold tracking-tight">Heading One</h1>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Heading 2 · text-3xl</p>

                        <h2 class="text-3xl font-bold tracking-tight">Heading Two</h2>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Heading 3 · text-2xl</p>

                        <h3 class="text-2xl font-semibold tracking-tight">Heading Three</h3>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Heading 4 · text-xl</p>

                        <h4 class="text-xl font-semibold">Heading Four</h4>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Heading 5 · text-lg</p>

                        <h5 class="text-lg font-semibold">Heading Five</h5>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Heading 6 · text-base</p>

                        <h6 class="text-base font-semibold">Heading Six</h6>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Body Text</h2>

            <p class="mt-2 text-sm text-muted">
                Body text is optimized for readability across different content densities.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="space-y-8">
                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Large · text-lg</p>

                        <p class="text-lg">
                            Large body text is useful for introductory content, lead paragraphs, and
                            prominent supporting text.
                        </p>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Default · text-base</p>

                        <p class="text-base">
                            Default body text is the primary reading size for most application
                            content.
                        </p>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Small · text-sm</p>

                        <p class="text-sm">
                            Small body text is useful for supporting information, descriptions, and
                            secondary content.
                        </p>
                    </div>

                    <div>
                        <p class="mb-2 text-xs font-medium text-muted">Extra Small · text-xs</p>

                        <p class="text-xs">
                            Extra small text should be reserved for metadata, captions, and other
                            low-priority information.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Font Weights</h2>

            <p class="mt-2 text-sm text-muted">
                Font weight is used to establish emphasis without relying only on font size.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="space-y-5">
                    <div>
                        <p class="text-xs text-muted">Regular · font-normal</p>

                        <p class="mt-1 text-base font-normal">Regular text</p>
                    </div>

                    <div>
                        <p class="text-xs text-muted">Medium · font-medium</p>

                        <p class="mt-1 text-base font-medium">Medium text</p>
                    </div>

                    <div>
                        <p class="text-xs text-muted">Semibold · font-semibold</p>

                        <p class="mt-1 text-base font-semibold">Semibold text</p>
                    </div>

                    <div>
                        <p class="text-xs text-muted">Bold · font-bold</p>

                        <p class="mt-1 text-base font-bold">Bold text</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Text Hierarchy</h2>

            <p class="mt-2 text-sm text-muted">
                Semantic text colors communicate content priority.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="space-y-6">
                    <div>
                        <p class="text-lg font-semibold text-page">Primary text</p>

                        <p class="mt-1 text-sm text-muted">
                            The primary text color is used for headings and important content.
                        </p>

                        <code class="mt-2 block text-xs text-muted"> text-page </code>
                    </div>

                    <div>
                        <p class="text-lg font-semibold text-muted">Secondary text</p>

                        <p class="mt-1 text-sm text-muted">
                            Muted text is used for descriptions and supporting information.
                        </p>

                        <code class="mt-2 block text-xs text-muted"> text-muted </code>
                    </div>

                    <div>
                        <p class="text-lg font-semibold text-primary">Primary accent</p>

                        <p class="mt-1 text-sm text-muted">
                            Primary text is used for links, important actions, and brand-related
                            emphasis.
                        </p>

                        <code class="mt-2 block text-xs text-muted"> text-primary </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Labels & Metadata</h2>

            <p class="mt-2 text-sm text-muted">
                Small text styles are used for labels, metadata, and supporting information.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <div class="space-y-6">
                    <div>
                        <label class="text-sm font-medium"> Email address </label>

                        <p class="mt-1 text-xs text-muted">We'll never share your email address.</p>
                    </div>

                    <div>
                        <span class="text-xs font-semibold uppercase tracking-wider text-muted">
                            LAST UPDATED
                        </span>

                        <p class="mt-1 text-sm">August 13, 2026</p>
                    </div>

                    <div>
                        <span class="text-xs font-medium text-muted"> Status </span>

                        <p class="mt-1 text-sm font-medium text-success">Active</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Links</h2>

            <p class="mt-2 text-sm text-muted">
                Links use the primary color to provide a clear visual indication of interactivity.
            </p>

            <div class="mt-6 rounded-lg border border-border bg-surface p-6 shadow-surface">
                <a href="#" class="font-medium text-primary underline-offset-4 hover:underline">
                    View documentation
                </a>

                <code class="mt-4 block text-xs text-muted"> text-primary + hover:underline </code>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl font-semibold">Long-form Content</h2>

            <p class="mt-2 text-sm text-muted">
                A typography system should remain readable when applied to longer content.
            </p>

            <article
                class="mt-6 max-w-3xl rounded-lg border border-border bg-surface p-6 shadow-surface"
            >
                <h3 class="text-2xl font-semibold tracking-tight">
                    Building scalable SaaS applications
                </h3>

                <p class="mt-4 text-base leading-7">
                    A well-designed interface should make information easy to scan while remaining
                    comfortable to read. Typography plays an important role in creating this
                    hierarchy by combining font size, weight, spacing, and color.
                </p>

                <p class="mt-4 text-base leading-7">
                    Primary content should remain visually prominent without overwhelming the user.
                    Supporting information can use smaller sizes and muted colors while still
                    maintaining sufficient contrast.
                </p>

                <p class="mt-4 text-base leading-7">
                    Consistent typography makes different areas of an application feel like parts of
                    the same system. This is especially important in SaaS applications where users
                    may interact with dashboards, forms, tables, and complex workflows.
                </p>
            </article>
        </section>

        <section class="mt-12">
            <div class="rounded-xl border border-primary bg-primary-bg p-6">
                <h2 class="text-lg font-semibold text-primary">Theme Verification</h2>

                <p class="mt-2 text-sm text-muted">
                    Switch between light and dark mode and verify that typography maintains clear
                    hierarchy and readable contrast.
                </p>

                <div class="mt-6 rounded-lg border border-border bg-surface p-6">
                    <p class="text-xs font-medium uppercase tracking-wider text-muted">
                        Dashboard Overview
                    </p>

                    <h3 class="mt-2 text-2xl font-bold tracking-tight">Welcome back</h3>

                    <p class="mt-2 max-w-xl text-sm text-muted">
                        Here's an overview of your account activity and recent updates.
                    </p>

                    <div class="mt-5 flex flex-wrap gap-3">
                        <button
                            type="button"
                            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary"
                        >
                            Primary Action
                        </button>

                        <button
                            type="button"
                            class="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                        >
                            Secondary Action
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
