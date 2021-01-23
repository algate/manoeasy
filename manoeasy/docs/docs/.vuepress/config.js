const { fs, path } = require('@vuepress/shared-utils')
const officalPlugins = fs
    .readdirSync(path.resolve(__dirname, '../components/official'))
    .map(filename => 'official/' + filename.slice(0, -3))
    .sort()

const extendsNetworks = {
    pinterest: {
        sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
        type: 'popup',
        icon: '/pinterest.png',
    },
    linkedin: {
        sharer: 'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
        type: 'popup',
        color: '#1786b1',
        icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
    }
}
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
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        /* https://github.com/algate/manoeasy/tree/main/manoeasy */
        repo: 'algate/manoeasy',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'algate/manoeasy',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'manoeasy/docs/docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: `在🦊上编辑此页`,
        logo: '/images/logo.png', // 导航栏左侧可以显示logo
        author: 'author',
        /* algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        }, */
        lastUpdated: '最后更新', // themeConfig.lastUpdated 默认是关闭的，如果给定一个字符串，它将会作为前缀显示（默认值是：Last Updated
        smoothScroll: true, // 通过 themeConfig.smoothScroll 选项来启用页面滚动效果
        nav: [{
                text: '指南',
                link: '/guide/',
                target: '_self',
                icon: 'el-icon-info'
            },
            {
                text: '组件',
                link: '/components/',
                target: '_self',
                icon: 'el-icon-s-help'
            },
            {
                text: '项目',
                link: '/github/',
                target: '_self',
                icon: 'el-icon-s-platform'
            },
            {
                text: 'issue',
                link: '/issue/',
                target: '_self',
                icon: 'el-icon-question'
            },
            {
                // 设置分组
                text: '高级开发',
                // icon: 'el-icon-medal-1',
                icon: 'el-icon-s-opportunity',
                items: [
                    {
                        text: 'senior-function',
                        items: [{
                            text: '高级',
                            link: '/senior/senior/',
                            target: '_self',
                            icon: 'el-icon-medal'
                        }]
                    },
                    {
                        text: 'javascript-core',
                        items: [{
                            text: '核心',
                            link: '/senior/core/',
                            target: '_self',
                            icon: 'el-icon-medal'
                        }]
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': getGuideSidebar('指南', '深入'),
            '/components/': getComponentSidebar('组件', '官方插件'),
            '/senior/senior/': [
                ''
            ],
            '/senior/core/': [
                /*
                    放在一个对象里，相当于给文件加了一个父级菜单，以title来命名
                 */
                {
                    title: 'javascript',
                    children: [
                        ''
                    ]
                }
            ]
        },
        displayAllHeaders: false, // 默认值：false； true：显示所有页面的标题链接
        /* valineConfig: {
            appId: 'XCBkrMT2cT5gHnAV3uKwy2Eo-gzGzoHsz',
            appKey: 'bX6iJOMctdSEGOXysJloaoGN'
        }, */
        // 密钥
        /* keyPage: {
            keys: ['3750c667d5cd8aecc0a9213b362066e9'], // 1.3.0 版本后需要设置为密文
            color: '#42b983', // 登录页动画球的颜色
            lineColor: '#42b983' // 登录页动画线的颜色
        } */
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
        ['@vuepress/back-to-top'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', {
            selector: 'img.zoom',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 24,
                background: '#00000080',
                scrollOffset: 0,
                // container: '#zoom-container'
            }
        }],
        // 这个插件将会在你切换页面的时候，在顶部显示进度条
        ['@vuepress/nprogress'],
        // 在你的 VuePress 站点中注册新的 Markdown 容器 - 可以多次使用这个插件 vuepress-plugin-container
        // plugins: [ 'xxx' ] === plugins: [ 'vuepress-plugin-xxx' ]
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],
        ['container', {
            type: 'right',
            defaultTitle: '',
        }],
        /* ['vuepress-plugin-yuque', {
            repoUrl: 'https://www.yuque.com/vuepress/vuepress-plugin-yuque',
            home: {
                actionText: 'Getting Started →',
                actionLink: '/intro/',
                heroImage: 'https://cdn.nlark.com/yuque/0/2018/png/84868/1535520500482-avatar/20c595c5-ab31-4543-9142-f36cc87c8868.png?x-oss-process=image/resize,m_fill,w_320,h_320',
                footer: `Copyright © 蚂蚁金服体验技术部`,
                features: [
                    { title: '循序渐进', details: '本教程的难度依次递进，为阅读者呈现舒适的学习曲线' },
                    { title: '值得信赖', details: '由 antd 团队亲自打造，从技术栈、生态、研发流程等来为你提供系统化的学习体验' },
                    { title: '最佳实践', details: '通过结合实际开发过程中的案例，来描述不同场景下的最佳实践' },
                ]
            }
        }], */
        ['element-ui'],
        ['flowchart'],
        ['social-share', {
            noGlobalSocialShare: true,
            email: 'algate@foxmail.com'
        }],
        /* [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'XCBkrMT2cT5gHnAV3uKwy2Eo-gzGzoHsz',
                    appKey: 'bX6iJOMctdSEGOXysJloaoGN'
                }
            }
        ] */
        [
            '@vssue/vuepress-plugin-vssue', {
                // 设置 `platform` 而不是 `api`
                platform: 'github',
                // 其他的 Vssue 配置
                owner: 'algate',
                repo: 'manoeasy',
                clientId: 'c9507f851a4ea2c9a3bd',
                clientSecret: 'e15f326978abbbd0edf8416eb3d6ee895dfcde3c'
            }
        ]
    ],
    // 监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新
    extraWatchFiles: [
        // '.vuepress/*.js', // 使用相对路径
        '.vuepress/*.md'
    ]
}

function getGuideSidebar(groupA, groupB) {
    return [{
            title: groupA,
            // 设置 collapsable: false 来让一个组永远都是展开状态
            collapsable: false,
            children: [
                // '',
                ['', '说明'], // 显示地指定链接的文字，使用一个格式为 [link, text] 的数组
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

function getComponentSidebar(component, officialPluginTitle) {
    return [{
            title: component,
            // 设置 collapsable: false 来让一个组永远都是展开状态
            collapsable: false,
            // sidebarDepth: 2,
            children: [
                // '',
                ['', '说明'], // 显示地指定链接的文字，使用一个格式为 [link, text] 的数组
                'theme-default-plugin',
                'vuepress-plugin-element-ui',
                'vuepress-plugin-yuque',
                'vuepress-plugin-flowchart',
                'vuepress-plugin-social-share',
                'vuepress-plugin-comment'
            ]
        },
        {
            title: officialPluginTitle,
            collapsable: false,
            children: officalPlugins
        }
    ]
}
