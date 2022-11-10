const OrderDetails = (props) => {
  return (
    <div className="">
      {props.data["image"] && (
        <div className="w-full flex justify-center content-center">
          <img
            className="lg:w-2/5 md:w-2/3 w-full h-auto object-cover"
            src={props.data["image"]}
            alt={props.data["title"]}
          />
        </div>
      )}
      <div className="text-center text-lg space-y-6 mt-6">
        <h1>{props.data["title"]}</h1>
        <p>Phone: {props.data["phone"]}</p>
        <address>{props.data["address"]}</address>
        <p>Notes: {props.data["description"]}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
