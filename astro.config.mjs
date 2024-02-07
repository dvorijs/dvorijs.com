import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    experimental: {
        i18nDomains: false,
    },
    integrations: [
        starlight({
            title: "Dvori",
            logo: {
                src: "./src/assets/dvori-logo.png",
                replacesTitle: true,
            },
            social: {
                github: "https://github.com/dvorijs/dvori",
            },
            editLink: {
                baseUrl: "https://github.com/dvorijs/dvorijs.com/edit/main",
            },
            sidebar: [
                {
                    label: "Start Here",
                    items: [
                        {
                            label: "Getting Started",
                            link: "/getting-started/",
                        },
                        {
                            label: "Why Dvori",
                            link: "/why-dvori/",
                        },
                    ],
                },
                {
                    label: "Core Concepts",
                    items: [
                        {
                            label: "Configuration",
                            link: "/core-concepts/configuration/",
                        },
                        {
                            label: "Methods and Usage",
                            link: "/core-concepts/methods",
                        },
                        {
                            label: "Error Handling",
                            link: "/core-concepts/error-handling",
                        },
                        {
                            label: "Streaming",
                            link: "/core-concepts/streams",
                        },
                    ],
                },
                {
                    label: "Composables",
                    items: [
                        {
                            label: "Introduction ",
                            link: "/composables/intro/",
                        },
                        {
                            label: "Lifecycle Hooks",
                            link: "/composables/lifecycle-hooks/",
                        },
                        {
                            label: "Custom Composables",
                            link: "/composables/create-your-own/",
                        },
                    ],
                },
                {
                    label: "Clients",
                    items: [
                        {
                            label: "Introduction to Clients",
                            link: "/todo/",
                        },
                    ],
                },
                {
                    label: "Advanced Topics",
                    items: [
                        {
                            label: "Performance Optimization",
                            link: "/todo/",
                        },
                        {
                            label: "Security Best Practices",
                            link: "/todo/",
                        },
                    ],
                },
                {
                    label: "API Reference",
                    link: "/todo/",
                },
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "Example Guide",
                            link: "/guides/example/",
                        },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: {
                        directory: "reference",
                    },
                },
            ],
        }),
    ],
});
