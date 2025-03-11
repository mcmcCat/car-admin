import OrderAPI from "@/api/rental/order";
import type { OrderPageQuery } from "@/api/rental/order";
import type { IContentConfig } from "@/components/CURD/types";

const contentConfig: IContentConfig<OrderPageQuery> = {
  pageName: "rental:order",
  table: {
    border: true,
    highlightCurrentRow: true,
  },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 20,
    pageSizes: [10, 20, 30, 50],
  },
  indexAction: function (params) {
    return OrderAPI.getPage(params);
  },
  deleteAction: OrderAPI.deleteByIds,
  // 若需要导入导出功能，可按需开启
  importAction(file) {
    // 示例：上传文件后端可能另有处理，当前仅模拟
    console.log("importAction", file);
    return Promise.resolve();
  },
  importsAction(data) {
    console.log("importsAction", data);
    return Promise.resolve();
  },
  exportsAction: async function (params) {
    const res = await OrderAPI.getPage(params);
    console.log("exportsAction", res.list);
    return res.list;
  },
  pk: "id",
  toolbar: [
    "add",
    "delete",
    // 其他工具栏按钮可根据业务需求添加
  ],
  defaultToolbar: [],
  cols: [
    { type: "selection", width: 50, align: "center" },
    { label: "ID", align: "center", prop: "id", show: false },
    { label: "订单编号", align: "center", prop: "orderNumber", width: 200 },
    { label: "客户名称", align: "center", prop: "customerName", width: 120 },
    { label: "车辆ID", align: "center", prop: "carId", width: 100 },
    { label: "租赁开始日期", align: "center", prop: "rentalStartDate", width: 120 },
    { label: "租赁结束日期", align: "center", prop: "rentalEndDate", width: 120 },
    { label: "总价", align: "center", prop: "totalPrice" },
    {
      label: "状态",
      align: "center",
      prop: "status",
      width: 100,
      templet: "custom",
      slotName: "status",
    },
    // { label: "创建时间", align: "center", prop: "createTime", width: 180 },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 240,
      templet: "tool",
      operat: [
        {
          icon: "Document",
          name: "detail",
          text: "详情",
        },
        "edit",
        "delete",
      ],
    },
  ],
};

export default contentConfig;
