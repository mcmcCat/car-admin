// src/views/order/config/search.ts
import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  pageName: "sys:order",
  formItems: [
    {
      type: "input",
      label: "关键字",
      prop: "keywords",
      attrs: {
        placeholder: "订单号/客户姓名",
        clearable: true,
        style: { width: "220px" },
      },
    },
    {
      type: "select",
      label: "订单状态",
      prop: "status",
      attrs: {
        clearable: true,
        style: { width: "120px" },
      },
      options: [
        { label: "全部", value: "" },
        { label: "待支付", value: "待支付" },
        { label: "已生效", value: "已生效" },
        { label: "已完成", value: "已完成" },
        { label: "已取消", value: "已取消" },
      ],
    },
  ],
};

export default searchConfig;
