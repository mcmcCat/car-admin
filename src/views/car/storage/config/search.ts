// src/views/car/storage/config/search.ts
import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  pageName: "sys:car",
  formItems: [
    {
      type: "input",
      label: "关键字",
      prop: "keywords",
      attrs: {
        placeholder: "车牌号/品牌/型号",
        clearable: true,
        style: { width: "220px" },
      },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      attrs: {
        clearable: true,
        style: { width: "120px" },
      },
      options: [
        { label: "全部", value: "" },
        { label: "空闲", value: "空闲" },
        { label: "已出租", value: "已出租" },
        { label: "维护中", value: "维护中" },
      ],
    },
    {
      type: "select",
      label: "分类",
      prop: "category",
      attrs: {
        clearable: true,
        style: { width: "120px" },
      },
      options: [
        { label: "全部", value: "" },
        { label: "经济型", value: "经济型" },
        { label: "商务型", value: "商务型" },
        { label: "SUV", value: "SUV" },
        { label: "豪华型", value: "豪华型" },
      ],
    },
    {
      type: "date-picker",
      label: "购置日期",
      prop: "purchaseDate",
      attrs: {
        type: "daterange",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        "value-format": "YYYY-MM-DD",
        style: { width: "300px" },
      },
    },
  ],
};

export default searchConfig;
