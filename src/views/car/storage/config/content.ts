// src/views/car/storage/config/content.ts
import CarStorageAPI from "@/api/car/storage";
import type { CarPageQuery } from "@/api/car/storage";
import type { IContentConfig } from "@/components/CURD/types";

const contentConfig: IContentConfig<CarPageQuery> = {
  pageName: "car:storage",
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
    return CarStorageAPI.getPage(params);
  },
  deleteAction: CarStorageAPI.deleteByIds,
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", width: 50, align: "center" },
    { label: "车牌号", align: "center", prop: "licensePlate", width: 150 },
    { label: "品牌", align: "center", prop: "brand" },
    { label: "型号", align: "center", prop: "model" },
    {
      label: "分类",
      align: "center",
      prop: "category",
      filters: [
        { text: "经济型", value: "经济型" },
        { text: "商务型", value: "商务型" },
        { text: "SUV", value: "SUV" },
        { text: "豪华型", value: "豪华型" },
      ],
      filterMultiple: true,
    },
    {
      label: "日租金",
      align: "center",
      prop: "dailyPrice",
      templet: "price",
    },
    { label: "所属门店", align: "center", prop: "branch" },
    {
      label: "状态",
      align: "center",
      prop: "status",
      templet: "custom",
      slotName: "status",
      filters: [
        { text: "空闲", value: "空闲" },
        { text: "已出租", value: "已出租" },
        { text: "维护中", value: "维护中" },
      ],
    },
    {
      label: "购置日期",
      align: "center",
      prop: "purchaseDate",
      width: 180,
      // templet: "date", // 使用日期格式化组件
      // attrs: {
      //   format: "YYYY-MM-DD"
      // }
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 200,
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
