import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return <MeetupDetail data={props.data} />;
};

export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.DB_HOST);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
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

export default MeetupDetails;
