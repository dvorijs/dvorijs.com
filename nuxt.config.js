export default {
    target: "static",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Dvori - Composable HTTP client for Node.js",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content:
                    "Composable HTTP client for Node.js built to make complex requests simple.",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
            {
                rel: "apple-touch-icon",
                type: "image/png",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            {
                rel: "manifest",
                href: "/site.webmanifest",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        "@nuxtjs/google-fonts",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/content
        "@nuxt/content",
    ],

    // https://google-fonts.nuxtjs.org/options
    googleFonts: {
        prefetch: true,
        preconnect: true,
        display: "swap",
        families: {
            Archivo: [100, 500],
            "Open Sans": [100, 300],
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
