module.exports = {
    title: 'FastCrud',
    description: '面向配置的CRUD编程.',
    head: [
        [
            'meta',
            {
                name: 'viewport',
                content:
                    'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
        ['meta', {name: 'keywords', content: 'fast-crud、fs-admin'}],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],

    themeConfig: {
        algolia: {
            apiKey: '4c3df6ffd511f104fe912603ff34106b',
            indexName: 'fast-crud'
        },
        // search: true,
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: [
                        {text: '介绍', link: '/guide/'},
                        {text: '启动示例', link: '/guide/start/demo'},
                        {text: '第一个CRUD', link: '/guide/start/first'},
                        {text: '集成到你的项目', link: '/guide/start/integration'},
                        {text: '国际化', link: '/guide/start/i18n'},
                        {text: '图标', link: '/guide/start/icon'}
                    ],
                },
                {
                    text: '进阶',
                    children: [
                        {text: '基于配置', link: '/guide/advance/options'},
                        {text: '字段配置', link: '/guide/advance/component'},
                        {text: '字段类型', link: '/guide/advance/column-type'},
                        {text: '数据字典', link: '/guide/advance/dict'},
                        {text: '动态计算', link: '/guide/advance/compute'},
                        {text: '自定义组件', link: '/guide/advance/custom-component'},
                        {text: '插槽', link: '/guide/advance/slots'},
                        {text: '扩展', link: '/guide/advance/extends'},
                        {text: '入门常见问题', link: '/guide/advance/improve'},
                    ],
                },
                {
                    text: '其他',
                    children: [
                        {text: '升级', link: '/guide/other/upgrade'},
                        {text: '贡献代码', link: '/guide/other/contribution'},
                        {text: 'changelogs', link: '/guide/other/changelogs/index'},
                        {text: '其他疑难问题', link: '/guide/other/questions'},
                        {text: '联系作者', link: '/guide/other/contact'}
                    ],
                },
                {
                    text: 'ChangeLogs',
                    children: [
                        {text: 'main', link: '/guide/other/changelogs/CHANGELOG'},
                        {text: 'fast-crud', link: '/guide/other/changelogs/packages/fast-crud/CHANGELOG'},
                        {
                            text: 'fast-extends',
                            link: '/guide/other/changelogs/packages/extends/fast-extends/CHANGELOG'
                        },
                        {text: 'ui-antdv', link: '/guide/other/changelogs/packages/ui/ui-antdv/CHANGELOG'},
                        {text: 'ui-element', link: '/guide/other/changelogs/packages/ui/ui-element/CHANGELOG'},
                    ],
                },
            ],
            '/api/': [
                {
                    text: "配置",
                    children: [
                        {
                            text: 'InstallOptions',
                            link: '/api/install-options'
                        },
                        {
                            text: 'CrudOptions',
                            children: [
                                {text: '概览', link: '/api/crud-options/index'},
                                {text: 'request', link: '/api/crud-options/request'},
                                {text: 'columns', link: '/api/crud-options/columns'},
                                {text: 'form', link: '/api/crud-options/form'},
                                {text: 'search', link: '/api/crud-options/search'},
                                {text: 'actionbar', link: '/api/crud-options/actionbar'},
                                {text: 'toolbar', link: '/api/crud-options/toolbar'},
                                {text: 'viewForm', link: '/api/crud-options/viewForm'},
                                {text: 'addForm', link: '/api/crud-options/addForm'},
                                {text: 'editForm', link: '/api/crud-options/editForm'},
                                {text: 'table', link: '/api/crud-options/table'},
                                {text: 'rowHandle', link: '/api/crud-options/rowHandle'},
                                {text: 'pagination', link: '/api/crud-options/pagination'},
                                {text: 'container', link: '/api/crud-options/container'},
                            ]
                        },
                        {
                            text: 'CommonOptions',
                            link: '/api/common-options',
                        },
                        {
                            text: 'Dict数据字典',
                            link: '/api/dict'
                        },
                        {
                            text: '官方字段类型列表',
                            link: '/api/types'
                        },
                        {
                            text: 'Expose暴露的方法',
                            link: '/api/expose'
                        }
                    ]
                },
                {
                    text: '组件',
                    children: [
                        {
                            text: '基础组件', children: [
                                {text: 'fs-page', link: "/api/components/crud/container/fs-page"},
                                {text: 'fs-container', link: "/api/components/crud/container/fs-container"},
                                {text: 'fs-button', link: "/api/components/crud/basic/fs-button"},
                                {text: 'fs-icon', link: "/api/components/crud/basic/fs-icon"},
                                {text: 'fs-iconify', link: "/api/components/crud/basic/fs-iconify"},
                                {text: 'fs-icon-svg', link: "/api/components/crud/basic/fs-icon-svg"},
                            ]
                        },
                        {
                            text: 'crud组件',
                            children: [
                                {text: 'fs-crud', link: "/api/components/crud/fs-crud"},
                                {text: 'fs-actionbar', link: "/api/components/crud/actionbar/index"},
                                {text: 'fs-search', link: "/api/components/crud/search/index"},
                                {text: 'fs-toolbar', link: "/api/components/crud/toolbar/index"},
                                {text: 'fs-table', link: "/api/components/crud/crud/fs-table"},
                                {text: 'fs-row-handle', link: "/api/components/crud/crud/fs-row-handle"},
                                {text: 'fs-form-wrapper', link: "/api/components/crud/crud/fs-form-wrapper"},
                                {text: 'fs-form', link: "/api/components/crud/crud/fs-form"},
                                {text: 'fs-form-item', link: "/api/components/crud/crud/fs-form-item"},
                                {text: 'fs-form-helper', link: "/api/components/crud/crud/fs-form-helper"},
                            ]
                        },
                        {
                            text: '业务组件', children: [
                                {text: 'fs-date-format', link: "/api/components/crud/extends/fs-date-format"},
                                {text: 'fs-dict-cascader', link: "/api/components/crud/extends/fs-dict-cascader"},
                                {
                                    text: 'fs-dict-cascader-format',
                                    link: "/api/components/crud/extends/fs-dict-cascader-format"
                                },
                                {text: 'fs-dict-checkbox', link: "/api/components/crud/extends/fs-dict-checkbox"},
                                {text: 'fs-dict-radio', link: "/api/components/crud/extends/fs-dict-radio"},
                                {text: 'fs-dict-select', link: "/api/components/crud/extends/fs-dict-select"},
                                {text: 'fs-dict-switch', link: "/api/components/crud/extends/fs-dict-switch"},
                                {text: 'fs-dict-tree', link: "/api/components/crud/extends/fs-dict-tree"},
                                {text: 'fs-values-format', link: "/api/components/crud/extends/fs-values-format"},
                            ]
                        },
                        {
                            text: '扩展组件', children: [
                                {
                                    text: '上传组件', children: [
                                        {
                                            text: "fs-cropper",
                                            link: '/api/components/extends/uploader/components/fs-cropper'
                                        },
                                        {
                                            text: "fs-cropper-uploader",
                                            link: '/api/components/extends/uploader/components/fs-cropper-uploader'
                                        },
                                        {
                                            text: "fs-file-uploader",
                                            link: '/api/components/extends/uploader/components/fs-file-uploader'
                                        },
                                        {
                                            text: "fs-images-format",
                                            link: '/api/components/extends/uploader/components/fs-images-format'
                                        },
                                        {
                                            text: "fs-files-format",
                                            link: '/api/components/extends/uploader/components/fs-files-format'
                                        }
                                    ]
                                },
                                {
                                    text: '富文本编辑器', children: [
                                        {
                                            text: "fs-editor-wang",
                                            link: '/api/components/extends/editor/components/fs-editor-wang/index'
                                        }
                                    ]
                                },
                                {
                                    text: 'JsonEditor', children: [
                                        {
                                            text: "fs-json-editor",
                                            link: '/api/components/extends/json/components/fs-json-editor'
                                        }
                                    ]
                                }
                            ]
                        },
                    ],
                }
            ]
        },
        author: 'Greper',
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: 'API', link: '/api/'},
            {text:"d.ts",link:"http://fast-crud.docmirror.cn/d.ts/modules.html"},
            {text: 'FsAdmin', link: '/admin/'},
            {text: '示例', link: '/demo/'},
            {text: 'github', link: 'https://github.com/fast-crud/fast-crud'},
            {text: 'gitee', link: 'https://gitee.com/fast-crud/fast-crud'},
        ],
    },
}

