import MeetupItem from './MeetupItem';

function MeetupList(props) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 list-none p-3">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          phone={meetup.phone}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
