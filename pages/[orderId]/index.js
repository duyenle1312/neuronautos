import { MongoClient, ObjectId } from "mongodb";

import OrderDetail from "../../components/orders/OrderDetail";

const OrderDetails = (props) => {
  return <OrderDetail data={props.data} />;
};

export async function getServerSideProps(context) {
  const orderId = context.params.orderId;

  const client = await MongoClient.connect(process.env.DB_HOST);
  const db = client.db();
  const ordersCollection = db.collection("orders");
  const result = await ordersCollection.findOne({ _id: ObjectId(orderId) });
  client.close();

  return {
    props: {
      data: {
        id: result._id.toString(),
        title: result.name + `${result.title ? " | " + result.title : ''}`,
        phone: result.phone || "None",
        image: result.image,
        address: result.address,
        description: result.description || "None",
      },
    },
  };
}

export default OrderDetails;
