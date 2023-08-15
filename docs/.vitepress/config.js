export default {
    themeConfig: {
        logo: ".vuepress/puplic/images/logo.png",
        siteTitle: "Vitepress",
        sidebar: [
            {
                text: 'Guide',
                collapsed: true,
                items: [
                    { text: 'Introduction' },
                    { text: 'Getting Started' },
                ]
            }
        ],
        nav: [
            { text: "About", link: '/about.html' },
            { text: "Contact" },
            { text: "Guide" },
            { text: "Configs" },
            {
                text: "Changelogs",
                items: [
                    { text: "v0.0.1" },
                    { text: "v0.0.2" },
                    { text: "v0.0.3" }
                ]
            }
        ],

        socialLinks: [
            { icon: "github", link: "" },
            { icon: "twitter", link: "" },
            { icon: "discord", link: "" }
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present Adocs",
        },
    },
}
