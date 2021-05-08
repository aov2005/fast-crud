import { request, requestForMock } from "./api/service";
import "./mock";
import { FastCrud } from "@fast-crud/fast-crud";
import "@fast-crud/fast-crud/dist/style.css";
import FsUploader from "@fast-crud/extends-uploader";
import "@fast-crud/extends-uploader/dist/style.css";
import UiAntdv from "@fast-crud/ui-antdv";
export default function (app) {
  app.use(UiAntdv);
  app.use(FastCrud, {
    async dictRequest({ url }) {
      return await requestForMock({ url });
    },
    commonOptions() {
      return {
        table: {
          size: "small",
          pagination: false
        },
        request: {
          transformQuery: ({ page, form, sort }) => {
            const order = sort == null ? {} : { orderProp: sort.prop, orderAsc: sort.asc };
            return { current: page.currentPage, size: page.pageSize, ...form, ...order };
          },
          transformRes: ({ res }) => {
            return { currentPage: res.current, pageSize: res.size, ...res };
          }
        },
        form: {
          display: "flex"
        }
      };
    }
  });

  //配置uploader 公共参数
  app.use(FsUploader, {
    defaultType: "cos",
    cos: {
      domain: "https://d2p-demo-1251260344.cos.ap-guangzhou.myqcloud.com",
      bucket: "d2p-demo-1251260344",
      region: "ap-guangzhou",
      secretId: "", //
      secretKey: "", // 传了secretKey 和secretId 代表使用本地签名模式（不安全，生产环境不推荐）
      getAuthorization(custom) {
        // 不传secretKey代表使用临时签名模式,此时此参数必传（安全，生产环境推荐）
        return request({
          url: "/upload/cos/getAuthorization",
          method: "get"
        }).then((ret) => {
          // 返回结构如下
          // ret.data:{
          //   TmpSecretId,
          //   TmpSecretKey,
          //   XCosSecurityToken,
          //   ExpiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
          // }
          return ret;
        });
      },
      successHandle(ret) {
        // 上传完成后可以在此处处理结果，修改url什么的
        console.log("success handle:", ret);
        return ret;
      }
    },
    alioss: {
      domain: "https://d2p-demo.oss-cn-shenzhen.aliyuncs.com",
      bucket: "d2p-demo",
      region: "oss-cn-shenzhen",
      accessKeyId: "",
      accessKeySecret: "",
      getAuthorization(custom, context) {
        // 不传accessKeySecret代表使用临时签名模式,此时此参数必传（安全，生产环境推荐）
        return request({
          url: "/upload/alioss/getAuthorization",
          method: "get"
        }).then((ret) => {
          console.log("ret", ret);
          return ret;
        });
      },
      sdkOpts: {
        // sdk配置
        secure: true // 默认为非https上传,为了安全，设置为true
      },
      successHandle(ret) {
        // 上传完成后可以在此处处理结果，修改url什么的
        console.log("success handle:", ret);
        return ret;
      }
    },
    qiniu: {
      bucket: "d2p-demo",
      getToken(options) {
        return request({
          url: "/upload/qiniu/getToken",
          method: "get"
        }).then((ret) => {
          return ret; // {token:xxx,expires:xxx}
        });
      },
      successHandle(ret) {
        // 上传完成后可以在此处处理结果，修改url什么的
        console.log("success handle:", ret);
        return ret;
      },
      domain: "http://d2p.file.veryreader.com"
    },
    form: {
      action: "/api/upload/form/upload",
      name: "file",
      withCredentials: false,
      successHandle(ret) {
        // 上传完成后的结果处理， 此处后台返回的结果应该为 ret = {code:0,msg:'',data:fileUrl}
        if (!ret.data) {
          throw new Error("上传失败");
        }
        return { url: ret.data };
      }
    }
  });
}
