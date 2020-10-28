module.exports = {
    title: 'Hello Manoeasy',
    description: 'manoeasy',
    base: '/manoeasy/',
    port: '6060',
    dest: '../../vuepress',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'manoeasy',
            description: 'Vue-powered Static Site Generator'
        },
        /* '/zh/': {
            lang: 'zh-CN',
            title: 'manoeasy',
            description: 'Vue 驱动的静态网站生成器'
        } */
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // theme: 'reco',
    themeConfig: {
        repo: 'algate/manoeasy',
        logo: '/images/logo.png',    // 导航栏左侧可以显示logo
        author: 'author',
        /* algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        }, */
        lastUpdated: '最后更新', // themeConfig.lastUpdated 默认是关闭的，如果给定一个字符串，它将会作为前缀显示（默认值是：Last Updated
        smoothScroll: true,    // 通过 themeConfig.smoothScroll 选项来启用页面滚动效果
        nav: [
            {
                text: '指南',
                link: '/guide/',
                target: '_self',
                icon: 'reco-date'
            },
            {
                // 设置分组
                text: 'CSS',
                ariaLabel: '样式表',
                items: [
                    {
                        text: 'Basic', items: [{
                            text: 'BaseCss', link: '/'
                        }]
                    },
                    {
                        text: 'CssUI', items: [{
                            text: 'Sass', link: '/'
                        }]
                    }
                ]
            },
            { text: 'TimeLine', link: '/timeline/', target: '_self', icon: 'reco-date' },
            {
                text: 'github',
                link: 'https://github.com/algate',
                target: '_blank'
            }
        ],
        sidebar: {
            '/guide/': getGuideSidebar('指南', '深入'),
        },
        displayAllHeaders: false, // 默认值：false； true：显示所有页面的标题链接
        valineConfig: {
            appId: 'XCBkrMT2cT5gHnAV3uKwy2Eo-gzGzoHsz',
            appKey: 'bX6iJOMctdSEGOXysJloaoGN'
        },
        // 密钥
        /* keyPage: {
            keys: ['3750c667d5cd8aecc0a9213b362066e9'], // 1.3.0 版本后需要设置为密文
            color: '#42b983', // 登录页动画球的颜色
            lineColor: '#42b983' // 登录页动画线的颜色
        } */
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            // ...
        ],
    },
    markdown: {
        lineNumbers: true
    },
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // 修改客户端的 webpack 配置
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        /* ['@vuepress/google-analytics', {
            ga: 'UA-128189152-1'
        }], */
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }],
        ['flowchart']
    ],
    // 监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新
    extraWatchFiles: [
        // '.vuepress/*.js', // 使用相对路径
        '.vuepress/*.md'
    ]
}
function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            // 设置 collapsable: false 来让一个组永远都是展开状态
            collapsable: false,
            children: [
                // '',
                ['', '说明'],
                'getting-started',
                'directory-structure',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'i18n',
                'deploy'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }
    ]
}