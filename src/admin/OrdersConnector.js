import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';
import { ordersSummaryQuery } from './clientQueries';
import { shipOrder } from './clientMutations';
import { OrdersTable } from './OrdersTable';
const vars = { onlyShipped: false, page: 1, pageSize: 10, sort: 'id' };
export const OrdersConnector = flowRight(
  graphql(ordersSummaryQuery, {
    options: props => ({ variables: vars }),
    props: ({ data: { loading, orders, refetch } }) => ({
      totalSize: loading ? 0 : orders.totalSize,
      orders: loading ? [] : orders.orders,
      pageMax: loading ? 0 : Math.ceil(orders.totalSize / vars.pageSize),
      page: vars.page,
      navigateToPage: page => {
        vars.page = Number(page);
        refetch(vars);
      },
      pageSize: vars.pageSize,
      setPageSize: size => {
        vars.pageSize = Number(size);
        refetch(vars);
      },
      sortKey: vars.sort,
      setSortKey: key => {
        vars.sort = key;
        refetch(vars);
      }
    })
  }),
  graphql(shipOrder, {
    props: ({ mutate }) => ({
      toggleShipped: (id, shipped) => mutate({ variables: { id, shipped } })
    })
  })
)(OrdersTable);
