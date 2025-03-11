// src/views/order/config/add.ts
import OrderAPI, { type OrderForm } from "@/api/rental/order";
import type { IModalConfig } from "@/components/CURD/types";
import { reactive } from "vue";

const modalConfig: IModalConfig<OrderForm> = {
  pageName: "sys:order",
  dialog: {
    title: "新增订单",
    width: 800,
    draggable: true,
  },
  form: {
    labelWidth: 100,
  },
  formAction: OrderAPI.add,
  formItems: [
    {
      label: "订单号",
      prop: "orderNumber",
      rules: [{ required: true, message: "订单号不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入订单号" },
      col: { xs: 24, sm: 12 },
    },
    {
      label: "客户姓名",
      prop: "customerName",
      rules: [{ required: true, message: "客户姓名不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入客户姓名" },
      col: { xs: 24, sm: 12 },
    },
    {
      label: "联系电话",
      prop: "contactNumber",
      rules: [{ required: true, message: "联系电话不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入联系电话" },
    },
    // {
    //   label: "订单日期",
    //   prop: "orderDate",
    //   rules: [{ required: true, message: "订单日期不能为空", trigger: "change" }],
    //   type: "date-picker",
    //   attrs: { valueFormat: "YYYY-MM-DD" },
    // },
    {
      label: "订单状态",
      prop: "status",
      rules: [{ required: true, message: "请选择订单状态", trigger: "change" }],
      type: "select",
      options: [
        { label: "待支付", value: "待支付" },
        { label: "已生效", value: "已生效" },
        { label: "已完成", value: "已完成" },
        { label: "已取消", value: "已取消" },
      ],
      initialValue: "待支付",
    },
    {
      label: "总金额",
      prop: "totalPrice",
      rules: [{ required: true, message: "总金额不能为空" }],
      type: "input-number",
      attrs: { precision: 2, step: 0.01, "controls-position": "right" },
    },
    // {
    //   label: "备注",
    //   prop: "remarks",
    //   type: "textarea",
    //   attrs: { placeholder: "请输入备注", rows: 3 },
    // },
  ],
};

export default reactive(modalConfig);
