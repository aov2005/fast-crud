
## table【表格配置】

更多参数见：[FsTable](/api/components/crud/crud/fs-table.md)
支持 el-table | a-table的配置

## show
* 说明：显示或隐藏table
* 类型：Boolean
* 默认：`true`

## fs-table,el-table/a-table参数
* 说明：支持fs-table, 以及el-table/a-table的参数
```json5
{// crudOptions
    table:{
          border: true,
          bordered: true,
          height: "100%",
          rowKey: "id",
          size: "small",
          stripe: true
    }
}
```

## columns
* 说明：列配置
* 类型：Array

## loading
* 说明：当前是否加载中
* 类型：Boolean

## slots
* 说明：table插槽
* 类型：{ slotName: Function(scope){ return jsx } }
* 示例：
```js
{ //crudOptions
  table: {
    slots: {
       // el-table的append插槽
       //https://element-plus.gitee.io/#/zh-CN/component/table#table-slot
       append(scope){
         // 注意，这里使用了jsx，所以crud.js文件后缀名要改成crud.jsx
         return <div>{scope}</div>
       },
       // a-table的expandedRowRender插槽
       //https://2x.antdv.com/components/table-cn#components-table-demo-expand
       expandedRowRender(scope){
        // 注意，这里使用了jsx，所以crud.js文件后缀名要改成crud.jsx
         return <div>行展开数据</div>
       }

    }
  }
}
```
## onSortChange
* 说明：表头排序改变事件
* 类型：Function
* 默认：通常无需配置，自动根据配置触发服务端排序或本地排序，只需要在pageRequest中处理sort相关参数即可
```js
{
  table:{
    onSortChange({isServerSort, prop, asc, order}){
        
    }
  }    
    
}
```

## onFilterChange
* 说明：表头筛选变化事件
* 类型：Function
* 默认值：无
```js
{
  table:{
    onFilterChange(filters){
          // 你的过滤操作
          // 比如你想要服务端过滤，就可以修改查询表单，然后触发doSearch
    }
  }    
    
}
```

## onDataChange
* 说明：列表数据变化事件
* 类型：Function
* 默认值：无
```js
{
  table:{
    onDataChange({data}){
        //列表数据变化时的操作
    }
  }    
    
}
```
