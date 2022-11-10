import OrderItem from './OrderItem';

function OrderList(props) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 list-none p-3">
      {props.orders.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          image={order.image}
          title={order.title}
          phone={order.phone}
          address={order.address}
        />
      ))}
    </ul>
  );
}

export default OrderList;
