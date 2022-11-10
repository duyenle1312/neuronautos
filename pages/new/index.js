import { useRouter } from "next/router";
import NewOrderForm from "../../components/orders/NewOrderForm";

const NewOrder = () => {
  const router = useRouter();
  
  const addOrderHandler = async (enteredData) => {
    const response = await fetch(`/api/new-order`, {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return <NewOrderForm onAddOrder={addOrderHandler} />;
};

export default NewOrder;
