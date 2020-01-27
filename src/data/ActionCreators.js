import { ActionTypes, DataTypes } from './Types';
import { RestDataSource } from './RestDataSource';

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType, params).then(response => ({
    dataType,
    data: response.data,
    total: response.headers['x-total-count'],
    params
  }))
});

export const setPageSize = pageSize => ({
  type: ActionTypes.DATA_SET_SIZE,
  payload: pageSize
});

export const setSortKey = sortKey => ({
  type: ActionTypes.DATA_SET_SORT,
  payload: sortKey
});

export const placeOrder = order => ({
  type: ActionTypes.DATA_STORE,
  payload: dataSource
    .StoreData(DataTypes.ORDERS, order)
    .then(response => ({ dataType: DataTypes.ORDERS, data: response.data }))
});
