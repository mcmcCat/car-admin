// src/views/order/config/edit.ts
import OrderAPI, { type OrderForm } from "@/api/rental/order";
import type { IModalConfig } from "@/components/CURD/types";
import { reactive } from "vue";
import { DeviceEnum } from "@/enums/DeviceEnum";
import { useAppStore } from "@/store";

const modalConfig: IModalConfig<OrderForm> = {
  pageName: "sys:order",
  component: "drawer",
  drawer: {
    title: "修改订单信息",
    size: useAppStore().device === DeviceEnum.MOBILE ? "80%" : 600,
  },
  pk: "id",
  formAction: (data) => OrderAPI.update(data.id as number, data),
  formItems: [
    {
      label: "订单号",
      prop: "orderNumber",
      type: "input",
      attrs: { readonly: true },
    },
    {
      label: "客户姓名",
      prop: "customerName",
      rules: [{ required: true }],
      type: "input",
    },
    {
      label: "联系电话",
      prop: "contactNumber",
      rules: [{ required: true }],
      type: "input",
    },
    // {
    //   label: "订单日期",
    //   prop: "orderDate",
    //   type: "date-picker",
    //   attrs: { valueFormat: "YYYY-MM-DD" },
    // },
    {
      label: "订单状态",
      prop: "status",
      type: "select",
      options: [
        { label: "待支付", value: "待支付" },
        { label: "已生效", value: "已生效" },
        { label: "已完成", value: "已完成" },
        { label: "已取消", value: "已取消" },
      ],
    },
    {
      label: "总金额",
      prop: "totalPrice",
      type: "input-number",
      attrs: { precision: 2, step: 0.01 },
    },
    // {
    //   label: "备注",
    //   prop: "remarks",
    //   type: "textarea",
    //   attrs: { rows: 3 },
    // },
  ],
};

export default reactive(modalConfig);
