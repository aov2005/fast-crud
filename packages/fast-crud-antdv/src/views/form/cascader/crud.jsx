import * as api from "./api";
import { requestForMock } from "/src/api/service";
import { dict } from "/src/fs";
export default function({ crudRef }) {
  const pageRequest = async query => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }) => {
    form.id = row.id;
    return await api.UpdateObj(form);
  };
  const delRequest = async id => {
    return await api.DelObj(id);
  };

  const addRequest = async ({ form }) => {
    return await api.AddObj(form);
  };
  return {
    request: {
      pageRequest,
      addRequest,
      editRequest,
      delRequest
    },
    form: {
      // 单列布局
      col: { span: 24 },
      labelCol: { span: 4 },
      wrapperCol: { span: 18 }
    },
    columns: {
      id: {
        title: "ID",
        key: "id",
        type: "number",
        column: {
          width: 50
        },
        form: {
          show: false
        }
      },
      cascader: {
        title: "级联",
        search: { show: true },
        type: "dict-cascader",
        dict: dict({
          url: "/dicts/cascaderData?single"
        })
      },
      lazyLoad: {
        title: "懒加载",
        type: "dict-cascader",
        dict: dict({
          url: "/tree/GetTreeChildrenByParentId?lazyLoad",
          value: "code",
          label: "name",
          getNodes(values) {
            if (values == null) {
              return [];
            }
            return requestForMock({
              url: "/tree/GetNodesByValues",
              params: { values }
            });
          }
        }),
        form: {
          component: {
            vModel: "value",
            options: [
              {
                value: "11",
                label: "北京",
                isLeaf: false
              },
              {
                value: "12",
                label: "天津",
                isLeaf: false
              }
            ],
            loadData: async selectedOptions => {
              console.log("lazyLoad", selectedOptions);
              const targetOption = selectedOptions[selectedOptions.length - 1];
              targetOption.loading = true;

              const ret = await requestForMock({
                url: "/tree/GetTreeChildrenByParentId",
                params: { parentId: targetOption.value }
              });
              targetOption.loading = false;
              const list = [];
              for (const item of ret) {
                list.push({
                  value: item.code,
                  label: item.name,
                  isLeaf: item.leaf === true
                });
              }
              console.log("layz loaded", list);
              targetOption.children = list;
              //options.value = [...options.value];
            },
            changeOnSelect: true
          }
        }
      },
      multiple: {
        title: "级联多选",
        type: "dict-cascader",
        dict: dict({
          url: "/dicts/cascaderData?multiple"
        }),
        form: {
          component: { showSearch: true }
        }
      }
    }
  };
}
