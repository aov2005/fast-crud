# rowHandle
* 说明: 操作列配置
* 类型： Object

更多配置请参考[FsRowHandle](../components/crud/crud/fs-row-handle.md)    
支持 el-table-column / a-table-column 配置
## show
* 说明：显示或隐藏查询框
* 类型：Boolean
* 默认：`true`
* 示例： [antdv版](http://fast-crud.docmirror.cn/antdv/#/crud/feature/hide)
  [element版](http://fast-crud.docmirror.cn/element/#/crud/feature/hide)


## buttons
* 说明：按钮配置
* 类型：Object
* 示例： [antdv版](http://fast-crud.docmirror.cn/antdv/#/crud/feature/dropdown)
  [element版](http://fast-crud.docmirror.cn/element/#/crud/feature/dropdown)
* 默认：
* 相关：[FsButton配置](../common-options.md#buttons)
```json5
{ //crudOptions
  rowHandle: {
    buttons: {
      view:{
          ...FsButton, // FsButton的配置，可以修改文本、颜色，也可以修改成图标按钮、纯文本按钮等
          order:1, //排序号，越小则排前面，默认值1
          show:true, 
          dropdown:false,//是否折叠此按钮，当配置为true，将会收起到dropdown中
          //点击事件,点击此按钮会触发此方法
          //此处的查看按钮如果不配置默认打开查看对话框
          click:(context)=>{} 
      },
      edit:{order:1}, //编辑按钮
      remove:{order:1},//删除按钮
      custom:{},//自定义按钮，可以任意命名,任意数量
    }
  }
}
```

## dropdown
* 说明：按钮折叠配置，当按钮配置了dropdown=true时，将会被折叠
* 类型：Object
* 示例： [antdv版](http://fast-crud.docmirror.cn/antdv/#/crud/feature/dropdown)
  [element版](http://fast-crud.docmirror.cn/element/#/crud/feature/dropdown)
```json5
{ // rowHandle.dropdown
  dropdown: {
    atLeast: 2, //当按钮大于2个时，多余的按钮将会被折叠,[注意：此参数将在1.x版中废弃]
    more: {...FsButton}//'更多'按钮的配置
    //此处支持el-dropdown,a-dropdown的配置
  }
}
```

::: warning
`dropdown.atLeast` 将在1.x版中废弃
:::


## group
* 说明：按钮分组配置
* 类型：Object
```json5
{ // rowHandle
  group: {
    yourGroupKey: {
      buttonKey1: {}, //按钮配置
      buttonKey2: {}
    }
  }
}
```

## active
* 说明：当前激活哪个分组，与上面的 `group`配合使用，切换一组按钮
* 类型：string
* 默认：'default'，代表当前激活的是`rowHandle.buttons`里面配置的按钮组

