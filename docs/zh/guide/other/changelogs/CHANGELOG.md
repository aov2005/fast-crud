# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.3](https://github.com/fast-crud/fast-crud/compare/v1.2.2...v1.2.3) (2022-07-05)


### Bug Fixes

* 单元格render示例错误，render应改成cellRender ([b9e1575](https://github.com/fast-crud/fast-crud/commit/b9e1575528f5ae268324c2f49432e8ce24e2c5fa))
* 修复配置esbuild.pure =['console.log'] 报...异常的问题 ([fad8a57](https://github.com/fast-crud/fast-crud/commit/fad8a577b5121e151bb9946e4ccde155e8f63e2e))


### Performance Improvements

* 新增表单字段空白占位配置：key.form.blank ([4b47258](https://github.com/fast-crud/fast-crud/commit/4b4725828bdb083a4b82ffa066aab3b7fa26fedc))





## [1.2.2](https://github.com/fast-crud/fast-crud/compare/v1.2.1...v1.2.2) (2022-06-11)

**Note:** Version bump only for package fast-crud-root





## [1.2.1](https://github.com/fast-crud/fast-crud/compare/v1.2.0...v1.2.1) (2022-06-11)


### Bug Fixes

* 修复element图片预览的问题，图片加号错位问题 ([4ef13d6](https://github.com/fast-crud/fast-crud/commit/4ef13d6924e82eeea005a90594460bb49fdde815))





# [1.2.0](https://github.com/fast-crud/fast-crud/compare/v1.1.2...v1.2.0) (2022-05-24)


### Bug Fixes

* 给fs-form增加doReset参数 ([6e991d2](https://github.com/fast-crud/fast-crud/commit/6e991d272d9e33add023ed869d8e40bbfd9cf55b))
* 修复列设置无法打开的问题 ([db1bff0](https://github.com/fast-crud/fast-crud/commit/db1bff096975bf70a22530eb514153304e4018f0))
* 修复console.log被drop之后报错的问题 ([74305a2](https://github.com/fast-crud/fast-crud/commit/74305a2cdbe08bfc1cfb362088afe60a4b404149))
* 修复element弹出窗口close错位问题 ([d58a4da](https://github.com/fast-crud/fast-crud/commit/d58a4da8261f790b36e2a2c826b2490255b47c1e))
* 增加重置示例 ([a3d75ba](https://github.com/fast-crud/fast-crud/commit/a3d75ba3858d457922ea3f84aeb79a20878c5e07))
* 增加重置示例 ([ecbde2e](https://github.com/fast-crud/fast-crud/commit/ecbde2ec8d96104d5e25e046b0951ec35c298044))
* 增加buttonsPosition=[default,bottom]配置 ([734ef99](https://github.com/fast-crud/fast-crud/commit/734ef99bd441f575d184dee2d14950688b732793))


### Features

* CrudProps与CrudExpose完善 ([78c27ce](https://github.com/fast-crud/fast-crud/commit/78c27ce6fa9737bfe5139db4d817c1dbdf3de150))





## [1.1.2](https://github.com/fast-crud/fast-crud/compare/v1.1.1...v1.1.2) (2022-04-26)

**Note:** Version bump only for package fast-crud-root





## [1.1.1](https://github.com/fast-crud/fast-crud/compare/v1.1.0...v1.1.1) (2022-04-23)


### Bug Fixes

* 紧急修复dayjs引入错误的问题 ([f371444](https://github.com/fast-crud/fast-crud/commit/f3714446e2652aeba4c09c217dec553aa35dfabc))





# [1.1.0](https://github.com/fast-crud/fast-crud/compare/v1.0.7...v1.1.0) (2022-04-22)


### Features

* antdv，element都升级到最新版，element支持tree-select ([644a217](https://github.com/fast-crud/fast-crud/commit/644a2172dd7d0c649f096ba074ec67aad70e0748))





## [1.0.7](https://github.com/fast-crud/fast-crud/compare/v1.0.6...v1.0.7) (2022-03-30)


### Bug Fixes

* 去除意外的滚动条 ([b8fa2c7](https://github.com/fast-crud/fast-crud/commit/b8fa2c75ae4839e02ebd48354f69ef4f6e26660a))
* 修复antdv 固定表头失效的问题 ([f2d0fa2](https://github.com/fast-crud/fast-crud/commit/f2d0fa2e53ed84b28bdd799a4c49915d67f2c402))
* 修复antdv 列配置错位问题 ([18d1e82](https://github.com/fast-crud/fast-crud/commit/18d1e8285d0c729a3f65df79fd4d4856e944ff2c))





## [1.0.6](https://github.com/fast-crud/fast-crud/compare/v1.0.5...v1.0.6) (2022-03-23)


### Bug Fixes

* 修复element button 图标错乱问题 ([347694f](https://github.com/fast-crud/fast-crud/commit/347694fa305dc645be908d4ad6b5358792f52cd8))
* 修复getSearchFormData无法获取默认值的问题 ([cd05002](https://github.com/fast-crud/fast-crud/commit/cd05002cbd204f822c1dae55a954009270450a1f))
* 修复naive button 图标错乱问题 ([be28c9c](https://github.com/fast-crud/fast-crud/commit/be28c9c948188a704c8e886b7c82f405037948c1))
* 优化第一次打开是iconfiy需要再次分析依赖的问题 ([1b941fb](https://github.com/fast-crud/fast-crud/commit/1b941fbd106fc2eb9283e0332f7516c5522f1c62))





## [1.0.5](https://github.com/fast-crud/fast-crud/compare/v1.0.4...v1.0.5) (2022-03-22)


### Bug Fixes

* 修复刷新页面丢失query参数的bug ([499348a](https://github.com/fast-crud/fast-crud/commit/499348a136a205913d5e12bb02176a1a0982d875))
* 修复antdv图标错位问题 ([887c876](https://github.com/fast-crud/fast-crud/commit/887c8763a0242d24632d038bc9fe410bb89c9830))
* 修复button icon 报性能警告的问题 ([78240e9](https://github.com/fast-crud/fast-crud/commit/78240e99dd5b8e18fc3417c5390d7659047f2d02))
* 修复element错位 ([8a59c97](https://github.com/fast-crud/fast-crud/commit/8a59c976f9785dee898a911e46126fa112c4cde9))
* 修复element错位 ([35e46ea](https://github.com/fast-crud/fast-crud/commit/35e46ea507b085b937e83ee290d447191c1a11af))





## [1.0.4](https://github.com/fast-crud/fast-crud/compare/v1.0.3...v1.0.4) (2022-03-14)


### Bug Fixes

* 去除无用代码 ([93d4b90](https://github.com/fast-crud/fast-crud/commit/93d4b9032d2af3d697088b194c92810c3a82570d))
* 修复权限无法保存的bug ([f570740](https://github.com/fast-crud/fast-crud/commit/f570740866ddc24f71bfafc75347999c2bfa16ee))
* 修复antdv菜单和按钮图标错位的问题 ([0610534](https://github.com/fast-crud/fast-crud/commit/06105343a6bc284bed042342f499e4b796ac7db9))





## [1.0.3](https://github.com/fast-crud/fast-crud/compare/v1.0.2...v1.0.3) (2022-03-10)


### Bug Fixes

* 1.解决naive ui与列设置冲突的问题 ([3897b4f](https://github.com/fast-crud/fast-crud/commit/3897b4ff74f3f4c166565ef4dd42e881dfd2bd5c))





## [1.0.2](https://github.com/fast-crud/fast-crud/compare/v1.0.1...v1.0.2) (2022-03-09)

**Note:** Version bump only for package fast-crud-root





## [1.0.1](https://github.com/fast-crud/fast-crud/compare/v1.0.0...v1.0.1) (2022-03-02)

**Note:** Version bump only for package fast-crud-root



# [1.0.0](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.7...v1.0.0) (2022-03-02)


### Bug Fixes

* 修复element折叠左侧菜单显示文本的问题 ([e6da33a](https://github.com/fast-crud/fast-crud/commit/e6da33a73235d9b685f6ac6ae290c5e44a3464d1))


### Features

* 升级element-plus到2.0.2，修复合并单元格示例无效的问题 ([41e9556](https://github.com/fast-crud/fast-crud/commit/41e95568ff315d1cd0cccb0fc48cb3a17eae0f42))
* antdv rowhandle插槽示例 ([390cb95](https://github.com/fast-crud/fast-crud/commit/390cb95f4b362a705a0bc7b8019fb7225db25818))
* fs-icon支持svg ([6f9958c](https://github.com/fast-crud/fast-crud/commit/6f9958c4886615d4af3575f2f0e71539c54ee5f2))
* rowHandle 支持插槽 ([b19ebcf](https://github.com/fast-crud/fast-crud/commit/b19ebcf79c272c04a15bcbcfc3b72b0eb8399553))
* table 增加 data-change事件 ([291da67](https://github.com/fast-crud/fast-crud/commit/291da672bab55d38f6c1aa19de30b8f2a8ce5744))



# [1.0.0-alpha.7](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2022-02-10)


### Features

* 本地编辑 ([ac80dbf](https://github.com/fast-crud/fast-crud/commit/ac80dbff3438fe3ef6a5503f631fb59419935ae8))
* 本地编辑示例 ([f7b5662](https://github.com/fast-crud/fast-crud/commit/f7b5662134c9fdeccd53d256cbd03da08fa8f84a))
* 本地编辑示例 ([5a96c34](https://github.com/fast-crud/fast-crud/commit/5a96c34080efec61a4e9e55f477e292df4b206eb))





# [1.0.0-alpha.6](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2022-01-22)


### Features

* 增加列设置简化模式示例及文档 ([0633cc5](https://github.com/fast-crud/fast-crud/commit/0633cc5b9e5787c6631346d9979b112110536214))
* values-format支持iconify icon ([d1be55e](https://github.com/fast-crud/fast-crud/commit/d1be55e46eea715f8a36fdd9c6b1eb8f33daab35))





# [1.0.0-alpha.5](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2022-01-17)


### Bug Fixes

* 修复服务端排序无效的bug ([a693746](https://github.com/fast-crud/fast-crud/commit/a693746d809f941a429af9bc33eb9c85bcfbafe1))
* 修复切换size刷新两次的bug ([5a9eeec](https://github.com/fast-crud/fast-crud/commit/5a9eeec63d7840254a56ee23ec9f2164ec7c3b41))
* 修复element文件上传加号错位的bug ([fdda181](https://github.com/fast-crud/fast-crud/commit/fdda1812550304abaa0b4e04b0276ed4807bdf96))
* 修复rowHandle无法隐藏的bug ([f9786f7](https://github.com/fast-crud/fast-crud/commit/f9786f7c8489a3df8bf44ef34ff466acd83ca3fd))


### Performance Improvements

* 同步naive ui版本 ([9c6b7e0](https://github.com/fast-crud/fast-crud/commit/9c6b7e003885fe6e677819c648bf779d9970f1e0))





# [1.0.0-alpha.4](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2022-01-10)


### Bug Fixes

* 修复valueBuilder失效的bug ([d413278](https://github.com/fast-crud/fast-crud/commit/d4132783280d8d69cdf4bb453a1f1abd3322d370))





# [1.0.0-alpha.3](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2022-01-07)


### Bug Fixes

* 修复table不显示的问题 ([ffd4b1c](https://github.com/fast-crud/fast-crud/commit/ffd4b1c11a826661c2a0e7f50bb6a345d6afc965))


### Features

* 新增一些组件的文档生成 ([9892016](https://github.com/fast-crud/fast-crud/commit/9892016e11b9e3214c08d30aefbe6a692fe0b7ee))
* 页面内打开表单对话框 ([2f34260](https://github.com/fast-crud/fast-crud/commit/2f342609201fe4dc30de9458a58e65a8cf414e46))
* form 增加beforeSubmit，和afterSubmit配置 ([aadc77d](https://github.com/fast-crud/fast-crud/commit/aadc77d473c6275578e58347892ac0328cf9698e))
* search支持valueResolve ([6743580](https://github.com/fast-crud/fast-crud/commit/674358017310854d79e870beaa6a50041d55afc0))





# [1.0.0-alpha.2](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2022-01-06)


### Bug Fixes

* 修复对话框全屏的问题 ([bcc5161](https://github.com/fast-crud/fast-crud/commit/bcc516164770ae83c9540d3aad40907ac7af7a10))





# [1.0.0-alpha.1](https://github.com/fast-crud/fast-crud/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2022-01-06)


### Performance Improvements

* naive-ui 改成本地mock ([48817d2](https://github.com/fast-crud/fast-crud/commit/48817d245b9180033322946909db0789f376f004))
* naive-ui 改成本地mock ([710bfc7](https://github.com/fast-crud/fast-crud/commit/710bfc7d915b629000e0c23d65bafabee0553cfe))





## [0.22.1](https://github.com/fast-crud/fast-crud/compare/v0.22.0...v0.22.1) (2021-11-29)


### Bug Fixes

* setFormData支持valueBuilder ([95dcb5d](https://github.com/fast-crud/fast-crud/commit/95dcb5ddc6cf7dc712a668b3ad15e26b4e19f93f))


### Performance Improvements

* 升级依赖版本 ([48531ac](https://github.com/fast-crud/fast-crud/commit/48531ac4d989a83d6e94fa4b086755149afca108))





# [0.22.0](https://github.com/fast-crud/fast-crud/compare/v0.21.0...v0.22.0) (2021-11-09)


### Features

* 查询框展开，新页面打开表单 ([eebd6a3](https://github.com/fast-crud/fast-crud/commit/eebd6a3af256061e6075fa6b41c6893e1b767066))
* 升级element最新版，采用新版element-plus/icon ([bb7ea32](https://github.com/fast-crud/fast-crud/commit/bb7ea326f23020d930f70929e06b03f6d176bb9d))


### Performance Improvements

* search collaspe ([b459a04](https://github.com/fast-crud/fast-crud/commit/b459a04a9916586fcb7a17b4eec49149c98a7957))





# [0.21.0](https://github.com/fast-crud/fast-crud/compare/v0.20.1...v0.21.0) (2021-11-02)



### Bug Fixes

* 日期示例、checkbox radio 支持按钮样式、边框样式 ([b2905eb](https://github.com/fast-crud/fast-crud/commit/b2905eb6ba19537cd7e0ac71c59170b20eed18b9))
* 修复auto search不触发的bug ([9d929da](https://github.com/fast-crud/fast-crud/commit/9d929daec11a064af0133bde1994b823eabd7224))


### Features

* 查询框多行模式 ([f01a92e](https://github.com/fast-crud/fast-crud/commit/f01a92e7eb3362427b470f416f045f6102ccd591))
* rowHandle按钮根据dropdown的配置来判断是否折叠 ([242530a](https://github.com/fast-crud/fast-crud/commit/242530a55eac766cf231104397637c3cf7a08ded))


### Performance Improvements

* valuebuilder demo ([f3666fb](https://github.com/fast-crud/fast-crud/commit/f3666fb1d832efbd2cc19ac86b31fa242177305e))





## [0.20.1](https://github.com/fast-crud/fast-crud/compare/v0.20.0...v0.20.1) (2021-10-25)


### Bug Fixes

* 修复autoSearch.value判断错误的bug ([481ecff](https://github.com/fast-crud/fast-crud/commit/481ecffb7607cff2bcc8b39068d084974acf1d8d))


### Performance Improvements

* 改用pnpm ([af59c5b](https://github.com/fast-crud/fast-crud/commit/af59c5b9e3f62949a62f1f1f73c03f8cf07fa13d))





# [0.20.0](https://github.com/fast-crud/fast-crud/compare/v0.18.1...v0.20.0) (2021-10-19)


### Features

* 统一字段排序，【破坏性变更】所有字段排序号默认都为1 ([e09b17f](https://github.com/fast-crud/fast-crud/commit/e09b17f535283dd24e1c0ff8a6e296e4b0a2faa3))


### Performance Improvements

*  element ([4e81976](https://github.com/fast-crud/fast-crud/commit/4e81976a9a30e8d67d3901f4ae8fc900c89621dc))
*  element ([86db595](https://github.com/fast-crud/fast-crud/commit/86db5957300a9c808bca202663ca8cab28e069ee))
* 优化排序 ([155726f](https://github.com/fast-crud/fast-crud/commit/155726f95a8f0ffb3826a9920c2d1c3c418287eb))
* 优化排序 ([83f7fd1](https://github.com/fast-crud/fast-crud/commit/83f7fd18ebe9e4dfd95004a436ef7fd29198281d))
* 优化排序 ([2577698](https://github.com/fast-crud/fast-crud/commit/25776987296129518d5c49a8dcbbc5ac798a9318))
* 支持json-editor ([56e0203](https://github.com/fast-crud/fast-crud/commit/56e0203dff575b11b8f37b7eea8e75f28bb74c2c))
* fs-admin-element ([8b86ebe](https://github.com/fast-crud/fast-crud/commit/8b86ebeb9056fd69dcbb30d7ec7714c525a7d1ea))
* fs-admin-element ([8105098](https://github.com/fast-crud/fast-crud/commit/81050985d3e8dbd3c10631406cf5017ece37c3c1))
* fs-admin-element ([983fe21](https://github.com/fast-crud/fast-crud/commit/983fe214c90c5907b3e69aeccfeb1795b0426f3a))
* image border ([3b459cc](https://github.com/fast-crud/fast-crud/commit/3b459cc06be7ba239c777074e446542ab3c1445c))





# [0.19.0](https://github.com/fast-crud/fast-crud/compare/v0.18.1...v0.19.0) (2021-10-18)


### Features

* 统一字段排序，【破坏性变更】所有字段排序号默认都为1 ([e09b17f](https://github.com/fast-crud/fast-crud/commit/e09b17f535283dd24e1c0ff8a6e296e4b0a2faa3))


### Performance Improvements

*  element ([4e81976](https://github.com/fast-crud/fast-crud/commit/4e81976a9a30e8d67d3901f4ae8fc900c89621dc))
*  element ([86db595](https://github.com/fast-crud/fast-crud/commit/86db5957300a9c808bca202663ca8cab28e069ee))
* 优化排序 ([155726f](https://github.com/fast-crud/fast-crud/commit/155726f95a8f0ffb3826a9920c2d1c3c418287eb))
* 优化排序 ([83f7fd1](https://github.com/fast-crud/fast-crud/commit/83f7fd18ebe9e4dfd95004a436ef7fd29198281d))
* 优化排序 ([2577698](https://github.com/fast-crud/fast-crud/commit/25776987296129518d5c49a8dcbbc5ac798a9318))
* fs-admin-element ([8b86ebe](https://github.com/fast-crud/fast-crud/commit/8b86ebeb9056fd69dcbb30d7ec7714c525a7d1ea))
* fs-admin-element ([8105098](https://github.com/fast-crud/fast-crud/commit/81050985d3e8dbd3c10631406cf5017ece37c3c1))
* fs-admin-element ([983fe21](https://github.com/fast-crud/fast-crud/commit/983fe214c90c5907b3e69aeccfeb1795b0426f3a))
* image border ([3b459cc](https://github.com/fast-crud/fast-crud/commit/3b459cc06be7ba239c777074e446542ab3c1445c))





## [0.18.1](https://github.com/fast-crud/fast-crud/compare/v0.18.0...v0.18.1) (2021-09-24)


### Performance Improvements

* 增加自定义布局示例 ([615ca18](https://github.com/fast-crud/fast-crud/commit/615ca180fd05fca41ebdfa5c0325c376e3f9d431))





# [0.18.0](https://github.com/fast-crud/fast-crud/compare/v0.17.6...v0.18.0) (2021-09-24)


### Features

* 升级vue到3.2.11 ([d4c4fb4](https://github.com/fast-crud/fast-crud/commit/d4c4fb4bbcade4848c5f0ca1079c5b74b9383fc4))
* 升级vue到3.2.11 ([0fdd615](https://github.com/fast-crud/fast-crud/commit/0fdd61550fde70310dd17efec46cd91c4f65158b))
* dict-select支持select的插槽配置，支持页面内打开对话框，支持路由缓存 ([ddf4aaa](https://github.com/fast-crud/fast-crud/commit/ddf4aaa2394b32291f8fb71fda642df272e86525))
* dict-select支持select的插槽配置，支持页面内打开对话框，支持路由缓存 ([e5c0fc0](https://github.com/fast-crud/fast-crud/commit/e5c0fc008c473ed7dd2e75fb1348141184ca4979))





## [0.17.6](https://github.com/fast-crud/fast-crud/compare/v0.17.5...v0.17.6) (2021-09-07)


### Bug Fixes

* vue转移到devDependencies ([9af76bc](https://github.com/fast-crud/fast-crud/commit/9af76bc3b667a89026c9d2a3e31f103ffab9489f))
* 修复作为子组件时翻页组件错乱的bug，https://github.com/fast-crud/fast-crud/issues/17 ([48289be](https://github.com/fast-crud/fast-crud/commit/48289bec1df00a2d3d8a8fc0acac712b1d14ef41))





## [0.17.5](https://github.com/fast-crud/fast-crud/compare/v0.17.4...v0.17.5) (2021-08-28)


### Bug Fixes

* https://github.com/fast-crud/fast-crud/issues/19 ([7781000](https://github.com/fast-crud/fast-crud/commit/77810001678d08da5094926533a9e65e27aa4b9a))
* 修复文件上传数量限制错误的bug ([2db661c](https://github.com/fast-crud/fast-crud/commit/2db661c356dffd1cf6c5cca8d21246f1d60aabd7))


### Performance Improvements

* 列排序 ([7c0b019](https://github.com/fast-crud/fast-crud/commit/7c0b0198b240aa68523563ee8f39a172a2f79fcb))





## [0.17.4](https://github.com/fast-crud/fast-crud/compare/v0.17.3...v0.17.4) (2021-08-17)


### Bug Fixes

* form group 里面某个字段没有配置时提示readproperty show undefined的bug ([ccede90](https://github.com/fast-crud/fast-crud/commit/ccede903bb994621cede9028ba98d69a9055909f))
* 修复日期组件显示问题，修复上传组件校验报错的问题 ([1580c9b](https://github.com/fast-crud/fast-crud/commit/1580c9bb978a14bf152ce391feda578f768ace24))


### Performance Improvements

* 文件上传组件，支持一次选择多个文件 ([df90b39](https://github.com/fast-crud/fast-crud/commit/df90b390bbe5554d105673f968edb65ef4a4e825))





## [0.17.3](https://github.com/fast-crud/fast-crud/compare/v0.17.2...v0.17.3) (2021-08-06)


### Bug Fixes

* 修复默认值的bug ([f8de8f6](https://github.com/fast-crud/fast-crud/commit/f8de8f601935580c8806a5d92eadf36d5b2fca55))
* 第一次获取异步组件为空的bug ([9eb7a05](https://github.com/fast-crud/fast-crud/commit/9eb7a05d9ed98be2f27e9df050a2cc6731dac987))





## [0.17.2](https://github.com/fast-crud/fast-crud/compare/v0.17.1...v0.17.2) (2021-08-05)


### Performance Improvements

* 优化cascader，fieldNames跟随dict配置走 ([5a603d0](https://github.com/fast-crud/fast-crud/commit/5a603d0938e927bf4a1d5d5c5a9ba17e98db2e63))
* 优化cascader，fieldNames跟随dict配置走 ([c35029e](https://github.com/fast-crud/fast-crud/commit/c35029e0420c3570341a7bc9b300cb6f1681efb3))





## [0.17.1](https://github.com/fast-crud/fast-crud/compare/v0.17.0...v0.17.1) (2021-08-04)


### Bug Fixes

* https://github.com/fast-crud/fast-crud/issues/11 ([3e95b39](https://github.com/fast-crud/fast-crud/commit/3e95b394bb25fbba3813e71318d75438893e5989))
* 修复group无法显示表单slot的bug ([72fd641](https://github.com/fast-crud/fast-crud/commit/72fd641588814ca293bd43b14c7faf54282dd36f))
* 修复动态getData缓存的bug ([3dbfd0b](https://github.com/fast-crud/fast-crud/commit/3dbfd0b9f14c609575b1cd77a643af1dc567da52))
* 修复动态getData缓存的bug ([86cd495](https://github.com/fast-crud/fast-crud/commit/86cd495f003b6cd177bb403f7b6e619caee15604))
* 懒加载不反显的bug ([62dcc0e](https://github.com/fast-crud/fast-crud/commit/62dcc0e6fba78c8e8b8713033da7515509bb238e))


### Performance Improvements

* 分解a-table的onChange事件为onSortChange和onFilterChange ([8a6db33](https://github.com/fast-crud/fast-crud/commit/8a6db33ec51bc098710b2ec7d90e711dfb077d4d))





# [0.17.0](https://github.com/fast-crud/fast-crud/compare/v0.16.0...v0.17.0) (2021-07-16)


### Bug Fixes

* 修复form a-row的警告 ([1ec74b3](https://github.com/fast-crud/fast-crud/commit/1ec74b39a60a5cc90b5d4d3af85e081148d5aef8))


### Features

* 升级依赖版本 ([ded1213](https://github.com/fast-crud/fast-crud/commit/ded121378f878fd4960fb3722fa7bc42987ace91))
* form-helper ([dc749ae](https://github.com/fast-crud/fast-crud/commit/dc749ae82e6cdd0bedef27ebc5d21b9c452f36c7))


### Performance Improvements

* 文件上传组件优化 ([db88a16](https://github.com/fast-crud/fast-crud/commit/db88a1693472b01ecf607d94e55685f433787ec9))
* 文件上传组件优化 ([0a5afa8](https://github.com/fast-crud/fast-crud/commit/0a5afa8398fd52afae3fc642f1a362760da388aa))
* 文件上传组件优化 ([f46680c](https://github.com/fast-crud/fast-crud/commit/f46680cfdaef2747a59c32230b9098519183f957))





# [0.16.0](https://github.com/fast-crud/fast-crud/compare/v0.15.1...v0.16.0) (2021-07-14)


### Bug Fixes

* 修复行编辑对勾无效的bug，修复a-button的danger type警告 ([4d48447](https://github.com/fast-crud/fast-crud/commit/4d48447e6b1430663fdf5eca8c03aae531651b74))


### Features

* valueChange 支持 immediate ([16987d3](https://github.com/fast-crud/fast-crud/commit/16987d34f1c0c07dbe39305bb0482668320cb7e4))
* valueChange 支持 immediate ([f72f87e](https://github.com/fast-crud/fast-crud/commit/f72f87ed6c934b116f8d9b224408575017cc3174))


### Performance Improvements

* 添加select本地过滤示例 ([2354a03](https://github.com/fast-crud/fast-crud/commit/2354a0322a87ff940984da4e76f456d251a37e75))
* 添加select本地过滤示例 ([660dc5f](https://github.com/fast-crud/fast-crud/commit/660dc5fe0d290102c8df54c2b1a813ed13cd1d2d))





## [0.15.1](https://github.com/fast-crud/fast-crud/compare/v0.15.0...v0.15.1) (2021-07-09)

**Note:** Version bump only for package fast-crud-root





# [0.15.0](https://github.com/fast-crud/fast-crud/compare/v0.14.0...v0.15.0) (2021-07-06)


### Bug Fixes

* 1 ([a0766a2](https://github.com/fast-crud/fast-crud/commit/a0766a282a52067c5c1b8d687481a84ccf0d3126))
* 修复全屏按钮不显示的bug ([c211564](https://github.com/fast-crud/fast-crud/commit/c21156498d77c5f4e5a6c315c602a2267f9eaa9f))


### Features

* util to ts ([7b79e04](https://github.com/fast-crud/fast-crud/commit/7b79e047c6a4cc4ab87b9135c5610d9dac27fc0c))


### Performance Improvements

* rowHandle动态显隐示例 ([0ad8205](https://github.com/fast-crud/fast-crud/commit/0ad8205ca494b38dcbbe13ccadfe65d4d00a59e0))





# [0.14.0](https://github.com/fast-crud/fast-crud/compare/v0.13.0...v0.14.0) (2021-07-05)


### Bug Fixes

* 修复antdv pagination current没有设置成功的bug ([d236e15](https://github.com/fast-crud/fast-crud/commit/d236e15304e73bc30ba6651677539734fa36fadb))


### Features

* fast-extends,包含uploader、editors ([1b1becc](https://github.com/fast-crud/fast-crud/commit/1b1beccb59727f698d458fa725182ddd6cd7daca))
* fs-admin目录改成fast-admin ([fc6d962](https://github.com/fast-crud/fast-crud/commit/fc6d962389e14990c9629c9ca2e90b2ec8e3d378))
* 增加edtior-quill ([73566e4](https://github.com/fast-crud/fast-crud/commit/73566e4492779008011d4bacbc3c1adcfcfef1ac))
* 移除extends-uploader ([0063df7](https://github.com/fast-crud/fast-crud/commit/0063df7bf4421f1793a252166a9a7663ad4945bc))


### Performance Improvements

* fs-button引用fs-icon ([44b9120](https://github.com/fast-crud/fast-crud/commit/44b91201a3681e0921a0a42e5f1ca80ccb1f5542))





# [0.13.0](https://github.com/fast-crud/fast-crud/compare/v0.12.0...v0.13.0) (2021-07-04)


### Features

* icon支持iconify ([72caa05](https://github.com/fast-crud/fast-crud/commit/72caa05d0e14a16b59d98c6f50056674729b9fa1))





# [0.12.0](https://github.com/fast-crud/fast-crud/compare/v0.11.0...v0.12.0) (2021-07-03)


### Bug Fixes

* 修复切换主题后，按钮text颜色变化的问题 ([8748e29](https://github.com/fast-crud/fast-crud/commit/8748e290deaf32c5ee44f9626d025ae270377e11))


### Features

* 动态计算支持ref和compImpl ([757edde](https://github.com/fast-crud/fast-crud/commit/757edde12c60b1e3722b02318fa6a82822cbce1d))


### Performance Improvements

* select 远程搜索演示 ([6c8b2cf](https://github.com/fast-crud/fast-crud/commit/6c8b2cf91bae18c50c8953be067e3b85b1cb042e))
* 一些优化 ([563acdf](https://github.com/fast-crud/fast-crud/commit/563acdfdac70e1347a7edbac495933f96cfc5f9f))
* 一些优化 ([590ed36](https://github.com/fast-crud/fast-crud/commit/590ed366e6ecc9725df7b05642a72f233264e116))





# [0.11.0](https://github.com/fast-crud/fast-crud/compare/v0.10.4...v0.11.0) (2021-07-02)


### Bug Fixes

* 头像与搜索框冲突的bug https://github.com/fast-crud/fast-crud/issues/2 ([a118b91](https://github.com/fast-crud/fast-crud/commit/a118b91f8327980fe22b7254e11a30fce138b867))
* https://github.com/fast-crud/fast-crud/issues/3 ([b617668](https://github.com/fast-crud/fast-crud/commit/b617668cf77d1d8ceab24a93c14821e75f085a97))


### Features

* radio 支持 button样式 ([60ee9c6](https://github.com/fast-crud/fast-crud/commit/60ee9c6103ba6e64e270deb0e94937e2a70552bb))


### Performance Improvements

* fs-admin 与crud demo ([4e6b20f](https://github.com/fast-crud/fast-crud/commit/4e6b20fe19434460853841f371b9fd5f16e5e2d3))
* fs-admin纳入子模块 ([2940d30](https://github.com/fast-crud/fast-crud/commit/2940d30f419bf4bde1e8e791f1fbdb9184818285))





## [0.10.5](https://github.com/fast-crud/fast-crud/compare/v0.10.4...v0.10.5) (2021-07-01)


### Bug Fixes

* 头像与搜索框冲突的bug https://github.com/fast-crud/fast-crud/issues/2 ([a118b91](https://github.com/fast-crud/fast-crud/commit/a118b91f8327980fe22b7254e11a30fce138b867))
* https://github.com/fast-crud/fast-crud/issues/3 ([b617668](https://github.com/fast-crud/fast-crud/commit/b617668cf77d1d8ceab24a93c14821e75f085a97))


### Performance Improvements

* fs-admin 与crud demo ([4e6b20f](https://github.com/fast-crud/fast-crud/commit/4e6b20fe19434460853841f371b9fd5f16e5e2d3))
* fs-admin纳入子模块 ([2940d30](https://github.com/fast-crud/fast-crud/commit/2940d30f419bf4bde1e8e791f1fbdb9184818285))





## [0.10.4](https://github.com/fast-crud/fast-crud/compare/v0.10.3...v0.10.4) (2021-06-20)


### Bug Fixes

* 修复element expand不显示的bug ([0394626](https://github.com/fast-crud/fast-crud/commit/0394626ee9ccde0a0c981f4d494f0dfa8b82983c))


### Performance Improvements

* 优化logger ([97a0ca9](https://github.com/fast-crud/fast-crud/commit/97a0ca95732a14eef7d91b10f46acd994d0bce87))
* 禁止在列设置中选择配置属性名称修改为columnSetDisabled ([8d6420a](https://github.com/fast-crud/fast-crud/commit/8d6420a23b9ae08fee769ce6d8ad65fb4d3dd55b))





## [0.10.3](https://github.com/fast-crud/fast-crud/compare/v0.10.2...v0.10.3) (2021-06-19)


### Bug Fixes

* table hide error ([fb9c04f](https://github.com/fast-crud/fast-crud/commit/fb9c04f14b7c2321989e017ff429ae49b7a472bf))


### Performance Improvements

* 优化expose ([f1d75b5](https://github.com/fast-crud/fast-crud/commit/f1d75b5c5a2d0a3e88f517f5fdc01bd6d99a7914))





## [0.10.2](https://github.com/fast-crud/fast-crud/compare/v0.10.1...v0.10.2) (2021-06-15)


### Performance Improvements

* 增加固定列示例 ([90d73b3](https://github.com/fast-crud/fast-crud/commit/90d73b35e8566f69d400a5902f29f222b046750b))





## [0.10.1](https://github.com/fast-crud/fast-crud/compare/v0.10.0...v0.10.1) (2021-06-14)


### Bug Fixes

* search增加默认值，columns[x].search.value ([3ce9d23](https://github.com/fast-crud/fast-crud/commit/3ce9d235762036097736cc23ce325ea8e25b7f79))
* 修复a-table宽度拖动问题 ([944f4a5](https://github.com/fast-crud/fast-crud/commit/944f4a51af91016b2eb83f58bc787765f90ff512))





# [0.10.0](https://github.com/fast-crud/fast-crud/compare/v0.9.3...v0.10.0) (2021-06-14)


### Bug Fixes

* edit row mode ([c32aad7](https://github.com/fast-crud/fast-crud/commit/c32aad7d2418f32efd89e2b3f47cebbaf692c8ff))
* fix index demo ([2a68af7](https://github.com/fast-crud/fast-crud/commit/2a68af76927538662fafcbe056607c1f33323dd7))
* switch search ([4615fe2](https://github.com/fast-crud/fast-crud/commit/4615fe295c52240f69a07f444c982cdf97c5bb69))


### Features

* 将ui-interface单独抽出来 ([6bcc22a](https://github.com/fast-crud/fast-crud/commit/6bcc22a25b31e9644b1dd00badf2e5b01785b4aa))





## [0.9.3](https://github.com/fast-crud/fast-crud/compare/v0.9.2...v0.9.3) (2021-05-30)


### Bug Fixes

* sort change ui ([cdd754e](https://github.com/fast-crud/fast-crud/commit/cdd754ebbbfe673ab683b83a773aca8feedd6dfb))
* 修复element pagination 触发antdv的onChange事件的bug ([8915732](https://github.com/fast-crud/fast-crud/commit/8915732f9f083f4d54b5cb7ef76beb5fe28b57ab))





## [0.9.2](https://github.com/fast-crud/fast-crud/compare/v0.9.1...v0.9.2) (2021-05-30)

**Note:** Version bump only for package fast-crud-root





## [0.9.1](https://github.com/fast-crud/fast-crud/compare/v0.9.0...v0.9.1) (2021-05-27)


### Bug Fixes

* element文件上传到第二个时获取不到url的bug ([ac7f663](https://github.com/fast-crud/fast-crud/commit/ac7f6632da570a5a89f193b304c30597e8ad726e))





# [0.9.0](https://github.com/fast-crud/fast-crud/compare/v0.8.5...v0.9.0) (2021-05-23)


### Features

* i18n ([b5a284e](https://github.com/fast-crud/fast-crud/commit/b5a284ee7dd60948255e2ccaf6972277ce21517a))
* nprogress ([ce19154](https://github.com/fast-crud/fast-crud/commit/ce1915427c34b2473e9069eda3d129a282087707))
* 修改locale单词 ([dc6e7e8](https://github.com/fast-crud/fast-crud/commit/dc6e7e82eb3f7e92dd2d658a2d773feaa996bc50))





## [0.8.5](https://github.com/fast-crud/fast-crud/compare/v0.8.4...v0.8.5) (2021-05-22)

**Note:** Version bump only for package fast-crud-root





## [0.8.4](https://github.com/fast-crud/fast-crud/compare/v0.8.3...v0.8.4) (2021-05-22)

**Note:** Version bump only for package fast-crud-root





## [0.8.3](https://github.com/fast-crud/fast-crud/compare/v0.8.2...v0.8.3) (2021-05-22)

**Note:** Version bump only for package fast-crud-root





## [0.8.2](https://github.com/fast-crud/fast-crud/compare/v0.8.1...v0.8.2) (2021-05-22)


### Bug Fixes

* editable add ([14f3aa9](https://github.com/fast-crud/fast-crud/commit/14f3aa9c06ccec9e5d83a6c72d83024a0505caa0))





## [0.8.1](https://github.com/fast-crud/fast-crud/compare/v0.8.0...v0.8.1) (2021-05-22)

**Note:** Version bump only for package fast-crud-root





# [0.8.0](https://github.com/fast-crud/fast-crud/compare/v0.7.1...v0.8.0) (2021-05-09)


### Features

* type支持数组，可以多个继承合并 ([7f75a39](https://github.com/fast-crud/fast-crud/commit/7f75a395a1fc2a4855c008ff2aed9b75506a0682))
