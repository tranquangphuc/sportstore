import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPageSize, setSortKey } from '../data/ActionCreators';

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortKey };
const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  page: Number(router.match.params.page),
  pageMax: Math.ceil(dataStore.products_total / (dataStore.pageSize || 5)),
  navigateToPage: page =>
    router.history.push(
      `/shop/products/${router.match.params.category}/${page}`
    )
});

export const ProductPageConnector = PageComponent =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );
