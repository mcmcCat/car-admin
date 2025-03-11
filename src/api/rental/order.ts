import request from "@/utils/request";

const ORDER_BASE_URL = "/api/v1/orders";

const OrderAPI = {
  /**
   * 获取订单分页列表
   *
   * @param queryParams 查询参数
   */
  getPage(queryParams: OrderPageQuery) {
    return request<any, PageResult<OrderPageVO[]>>({
      url: `${ORDER_BASE_URL}/page`,
      method: "get",
      params: queryParams,
    });
  },

  /**
   * 获取订单表单详情
   *
   * @param orderId 订单ID
   * @returns 订单表单详情
   */
  getFormData(orderId: number) {
    return request<any, OrderForm>({
      url: `${ORDER_BASE_URL}/${orderId}/form`,
      method: "get",
    });
  },

  /**
   * 新增订单
   *
   * @param data 订单表单数据
   */
  add(data: OrderForm) {
    return request({
      url: `${ORDER_BASE_URL}`,
      method: "post",
      data: data,
    });
  },

  /**
   * 修改订单
   *
   * @param orderId 订单ID
   * @param data 订单表单数据
   */
  update(orderId: number, data: OrderForm) {
    return request({
      url: `${ORDER_BASE_URL}/${orderId}`,
      method: "put",
      data: data,
    });
  },

  /**
   * 批量删除订单，多个以英文逗号(,)分割
   *
   * @param ids 订单ID字符串，多个以英文逗号(,)分割
   */
  deleteByIds(ids: string) {
    return request({
      url: `${ORDER_BASE_URL}/${ids}`,
      method: "delete",
    });
  },

  /**
   * 修改订单状态
   *
   * @param orderId 订单ID
   * @param status 订单状态
   */
  updateStatus(orderId: number, status: string) {
    return request({
      url: `${ORDER_BASE_URL}/${orderId}/status`,
      method: "patch",
      params: { status },
    });
  },

  /**
   * 获取订单下拉选项
   */
  getOptions() {
    return request<any, OptionType[]>({
      url: `${ORDER_BASE_URL}/options`,
      method: "get",
    });
  },
};

export default OrderAPI;

// 以下类型请根据实际情况定义
export interface OrderPageQuery {
  keywords?: string;
  status?: string;
  rentalStartDate?: [string, string];
  pageNum: number;
  pageSize: number;
}

export interface OrderPageVO {
  id: number;
  orderNumber: string;
  carId: number;
  customerName: string;
  rentalStartDate: string;
  rentalEndDate: string;
  totalPrice: number;
  status: string;
  createTime: string;
}

export interface OrderForm {
  id?: number;
  orderNumber: string;
  carId: number;
  customerName: string;
  rentalStartDate: string;
  rentalEndDate: string;
  totalPrice: number;
  status: string;
}
