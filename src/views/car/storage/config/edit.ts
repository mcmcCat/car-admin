// src/views/car/storage/config/edit.ts
import CarStorageAPI, { type CarForm } from "@/api/car/storage";
import type { IModalConfig } from "@/components/CURD/types";
import { reactive } from "vue";
import { DeviceEnum } from "@/enums/DeviceEnum";
import { useAppStore } from "@/store";

const modalConfig: IModalConfig<CarForm> = {
  pageName: "sys:car",
  component: "drawer",
  drawer: {
    title: "修改车辆信息",
    size: useAppStore().device === DeviceEnum.MOBILE ? "80%" : 600,
  },
  pk: "id",
  formAction: (data) => CarStorageAPI.update(data.id as number, data),
  formItems: [
    {
      label: "车牌号",
      prop: "licensePlate",
      type: "input",
      attrs: { readonly: true },
    },
    {
      label: "品牌",
      prop: "brand",
      rules: [{ required: true }],
      type: "input",
    },
    {
      label: "型号",
      prop: "model",
      rules: [{ required: true }],
      type: "input",
    },
    {
      label: "车辆分类",
      prop: "category",
      type: "select",
      options: [
        { label: "经济型", value: "经济型" },
        { label: "商务型", value: "商务型" },
        { label: "SUV", value: "SUV" },
        { label: "豪华型", value: "豪华型" },
      ],
    },
    {
      label: "日租金",
      prop: "dailyPrice",
      type: "input-number",
      attrs: { precision: 2, step: 100 },
    },
    {
      label: "所属门店",
      prop: "branch",
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
      label: "当前状态",
      prop: "status",
      type: "radio",
      options: [
        { label: "空闲", value: "空闲" },
        { label: "已出租", value: "已出租" },
        { label: "维护中", value: "维护中" },
      ],
    },
    {
      label: "最后维护日期",
      prop: "lastMaintenance",
      type: "date-picker",
      attrs: { valueFormat: "YYYY-MM-DD" },
    },
  ],
};

export default reactive(modalConfig);
