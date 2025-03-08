// src/views/car/storage/config/add.ts
import CarStorageAPI, { type CarForm } from "@/api/car/storage";
import type { IModalConfig } from "@/components/CURD/types";
import { reactive } from "vue";

const modalConfig: IModalConfig<CarForm> = {
  pageName: "sys:car",
  dialog: {
    title: "新增车辆",
    width: 800,
    draggable: true,
  },
  form: {
    labelWidth: 100,
  },
  formAction: CarStorageAPI.add,
  formItems: [
    {
      label: "车牌号",
      prop: "licensePlate",
      rules: [
        { required: true, message: "车牌号不能为空", trigger: "blur" },
        { pattern: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z0-9]{5}$/, message: "格式示例：粤A12345" },
      ],
      type: "input",
      attrs: { placeholder: "请输入车牌号" },
      col: { xs: 24, sm: 12 },
    },
    {
      label: "品牌",
      prop: "brand",
      rules: [{ required: true, message: "品牌不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入品牌" },
      col: { xs: 24, sm: 12 },
    },
    {
      label: "型号",
      prop: "model",
      rules: [{ required: true, message: "型号不能为空", trigger: "blur" }],
      type: "input",
      attrs: { placeholder: "请输入型号" },
    },
    {
      label: "车辆分类",
      prop: "category",
      rules: [{ required: true, message: "请选择分类", trigger: "change" }],
      type: "select",
      options: [
        { label: "经济型", value: "经济型" },
        { label: "商务型", value: "商务型" },
        { label: "SUV", value: "SUV" },
        { label: "豪华型", value: "豪华型" },
      ],
      initialValue: "经济型",
    },
    {
      label: "日租金",
      prop: "dailyPrice",
      rules: [
        { required: true, message: "日租金不能为空" },
        { type: "number", min: 100, message: "日租金需≥100元" },
      ],
      type: "input-number",
      attrs: { precision: 2, step: 100, "controls-position": "right" },
    },
    {
      label: "所属门店",
      prop: "branch",
      rules: [{ required: true, message: "请选择所属门店", trigger: "change" }],
      type: "select",
      options: [
        { label: "广州天河店", value: "广州天河店" },
        { label: "上海浦东店", value: "上海浦东店" },
        { label: "北京朝阳店", value: "北京朝阳店" },
        { label: "深圳南山店", value: "深圳南山店" },
        { label: "杭州西湖店", value: "杭州西湖店" },
      ],
    },
    {
      label: "VIN码",
      prop: "vin",
      rules: [{ pattern: /^[A-HJ-NPR-Z0-9]{17}$/, message: "17位车辆识别码" }],
      type: "input",
      attrs: { maxlength: 17 },
    },
    {
      label: "购置日期",
      prop: "purchaseDate",
      type: "date-picker",
      attrs: { valueFormat: "YYYY-MM-DD" },
    },
  ],
};

export default reactive(modalConfig);
