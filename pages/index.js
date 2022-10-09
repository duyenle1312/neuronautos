import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// Wait to get data before returning the page to the client's browser => good for SEO
export async function getServerSideProps() {
  // fetch data (database)
  const client = await MongoClient.connect(process.env.DB_HOST);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: result.map((data) => ({
        id: data._id.toString(),
        title: data.name + `${data.title ? " | " + data.title : ''}`,
        phone: data.phone || "None",
        image: data.image,
        address: data.address || "None",
      })),
    },
    revalidate: 1,
  };
}

// Have to be exported here after getStaticProps
export default HomePage;
