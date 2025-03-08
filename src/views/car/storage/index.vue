<!-- src/views/car/storage/index.vue -->
<template>
  <div class="app-container">
    <page-search
      ref="searchRef"
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />

    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @add-click="handleAddClick"
      @edit-click="handleEditClick"
      @search-click="handleSearchClick"
      @toolbar-click="handleToolbarClick"
      @operat-click="handleOperatClick"
      @filter-change="handleFilterChange"
    >
      <template #status="scope">
        <el-tag :type="getStatusType(scope.row[scope.prop])">
          {{ scope.row[scope.prop] }}
        </el-tag>
      </template>
    </page-content>

    <page-modal
      ref="addModalRef"
      :modal-config="addModalConfig"
      @submit-click="handleSubmitClick"
    />
    <page-modal
      ref="editModalRef"
      :modal-config="editModalConfig"
      @submit-click="handleSubmitClick"
    />
  </div>
</template>

<script setup lang="ts">
import CarStorageAPI from "@/api/car/storage";
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
  handleSearchClick,
  handleFilterChange,
} = usePage();

const getStatusType = (status: string) => {
  return (
    {
      空闲: "success",
      已出租: "warning",
      维护中: "danger",
    }[status] || "info"
  );
};

// 新增车辆
async function handleAddClick() {
  addModalRef.value?.setModalVisible();
}

// 编辑车辆
async function handleEditClick(row: IObject) {
  editModalRef.value?.handleDisabled(false);
  editModalRef.value?.setModalVisible();
  const data = await CarStorageAPI.getFormData(row.id);
  editModalRef.value?.setFormData(data);
}

// 操作列处理
async function handleOperatClick(data: IOperatData) {
  if (data.name === "detail") {
    editModalRef.value?.handleDisabled(true);
    editModalRef.value?.setModalVisible();
    const formData = await CarStorageAPI.getFormData(data.row.id);
    editModalRef.value?.setFormData(formData);
  }
}
</script>
