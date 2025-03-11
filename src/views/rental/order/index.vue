<template>
  <div class="app-container">
    <!-- 搜索 -->
    <page-search
      ref="searchRef"
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />

    <!-- 列表 -->
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @add-click="handleAddClick"
      @edit-click="handleEditClick"
      @export-click="handleExportClick"
      @search-click="handleSearchClick"
      @toolbar-click="handleToolbarClick"
      @operat-click="handleOperatClick"
      @filter-change="handleFilterChange"
    >
      <template #status="scope">
        <el-tag :type="scope.row.status === '已完成' ? 'success' : 'info'">
          {{ scope.row.status }}
        </el-tag>
      </template>
    </page-content>

    <!-- 新增订单 -->
    <page-modal ref="addModalRef" :modal-config="addModalConfig" @submit-click="handleSubmitClick">
      <!-- 根据需要配置订单相关的表单项 -->
    </page-modal>

    <!-- 编辑订单 -->
    <page-modal
      ref="editModalRef"
      :modal-config="editModalConfig"
      @submit-click="handleSubmitClick"
    >
      <!-- 根据需要配置订单相关的表单项 -->
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import OrderAPI from "@/api/rental/order";
import type { IObject, IOperatData } from "@/components/CURD/types";
import usePage from "@/components/CURD/usePage";
import addModalConfig from "./config/add";
import contentConfig from "./config/content";
import editModalConfig from "./config/edit";
import searchConfig from "./config/search";

const {
  searchRef,
  contentRef,
  addModalRef,
  editModalRef,
  handleQueryClick,
  handleResetClick,
  handleSubmitClick,
  handleExportClick,
  handleSearchClick,
  handleFilterChange,
} = usePage();

// 新增订单
async function handleAddClick() {
  addModalRef.value?.setModalVisible();
  // 如需加载其他下拉数据源，可在此调用接口（例如加载车辆下拉数据）
  // addModalConfig.formItems.find(item => item.prop === 'carId')!.attrs!.data = await CarAPI.getOptions();
}

// 编辑订单
async function handleEditClick(row: IObject) {
  editModalRef.value?.handleDisabled(false);
  editModalRef.value?.setModalVisible();
  const data = await OrderAPI.getFormData(row.id);
  editModalRef.value?.setFormData(data);
}

// 其他工具栏操作
function handleToolbarClick(name: string) {
  console.log(name);
  // 可根据需求增加自定义按钮处理逻辑
}

// 操作列处理
async function handleOperatClick(data: IOperatData) {
  console.log(data);
  if (data.name === "detail") {
    editModalRef.value?.handleDisabled(true);
    editModalRef.value?.setModalVisible();
    editModalConfig.drawer = { ...editModalConfig.drawer, title: "订单详情" };
    const formData = await OrderAPI.getFormData(data.row.id);
    editModalRef.value?.setFormData(formData);
  }
}
</script>
