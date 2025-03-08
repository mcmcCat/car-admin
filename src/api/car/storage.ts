// src/api/car/storage.ts
import request from "@/utils/request";

const STORAGE_BASE_URL = "/api/v1/cars";

const CarStorageAPI = {
  getPage(queryParams: CarPageQuery) {
    return request<any, PageResult<CarPageVO[]>>({
      url: `${STORAGE_BASE_URL}/page`,
      method: "get",
      params: queryParams,
    });
  },

  getFormData(carId: number) {
    return request<any, CarForm>({
      url: `${STORAGE_BASE_URL}/${carId}/form`,
      method: "get",
    });
  },

  add(data: CarForm) {
    return request({
      url: STORAGE_BASE_URL,
      method: "post",
      data: data,
    });
  },

  update(id: number, data: CarForm) {
    console.log(id, data);

    return request({
      url: `${STORAGE_BASE_URL}/${id}`,
      method: "put",
      data: data,
    });
  },

  deleteByIds(ids: string) {
    return request({
      url: `${STORAGE_BASE_URL}/${ids}`,
      method: "delete",
    });
  },

  // getOptions() {
  //   return request<any, OptionType[]>({
  //     url: `${STORAGE_BASE_URL}/options`,
  //     method: "get",
  //   });
  // },

  // updateStatus(id: number, status: string) {
  //   return request({
  //     url: `${STORAGE_BASE_URL}/${id}/status`,
  //     method: "patch",
  //     params: { status },
  //   });
  // },
};

export default CarStorageAPI;

// 确保包含所有搜索字段
export interface CarPageQuery extends PageQuery {
  licensePlate?: string;
  brand?: string;
  model?: string;
  status?: string;
  category?: string;
  purchaseDate?: [string, string];
}

export interface CarPageVO {
  id: number;
  purchaseDate: string;
  licensePlate: string;
  brand: string;
  model: string;
  category: string;
  dailyPrice: number;
  branch: string;
  status: string;
  createTime: Date;
}

export interface CarForm {
  id?: number;
  licensePlate: string;
  brand: string;
  model: string;
  category: string;
  dailyPrice: number;
  branch: string;
  vin?: string;
  mileage?: number;
  purchaseDate?: Date;
  insuranceExpiry?: Date;
  lastMaintenance?: Date;
}
