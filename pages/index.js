import { MongoClient } from "mongodb";
import OrderList from "../components/orders/OrderList";

const HomePage = (props) => {
  return <OrderList orders={props.orders} />;
};

// Wait to get data before returning the page to the client's browser => good for SEO
export async function getServerSideProps() {
  // fetch data (database)
  const client = await MongoClient.connect(process.env.DB_HOST);
  const db = client.db();
  const ordersCollection = db.collection("orders");
  const result = await ordersCollection.find().toArray();
  client.close();

  return {
    props: {
      orders: result.map((data) => ({
        id: data._id.toString(),
        title: data.name + `${data.title ? " | " + data.title : ''}`,
        phone: data.phone || "None",
        image: data.image,
        address: data.address || "None",
      })),
    },
  };
}

// Have to be exported here after getStaticProps
export default HomePage;
