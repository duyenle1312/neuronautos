import { useRouter } from 'next/router'
import classes from './OrderItem.module.css';

function OrderItem(props) {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push('/' + props.id)
  }
  return (
    <li className={classes.item}>
      <div>
        {/* <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div> */}
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>          
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler} >Show Details</button>
        </div>
      </div>
    </li>
  );
}

export default OrderItem;
