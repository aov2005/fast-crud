
# toolbar 工具条

更多参数见：[FsToolbar](/api/components/crud/toolbar/index.md)

## show
* 说明：显示或隐藏工具条
* 类型：Boolean
* 默认：`true`

## buttons

* 说明：按钮配置
* 类型：Object
* 相关：[FsButton配置](../common-options.md#buttons)
```json5
{ //crudOptions.toolbar.buttons
    //查询按钮
    search:{
        ...FsButton,
        order:1, 列排序号，数字越小越靠前排列。 默认值为1, 当配置0或负数则排到最前面，配置2则排到最后面
        show:true,
        click:()=>{} //点击事件，默认开启隐藏查询框
    },
    // 刷新按钮
    refresh:{},
    // 紧凑模式
    compact:{},
    // 导出按钮
    export:{},
    // 列设置按钮
    columns:{}
}
```
## compact
* 说明：当前是否紧凑模式
* 类型：Boolean
* 默认：`true`


## columnsFilter
* 说明：列设置配置
* 类型：Object


## columnsFilter.mode
* 说明：列设置展示模式
* 类型：string
* 默认值： 无
* 可选值：【simple(简单模式) | default（默认模式）】

