import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(meetupData);

    props.onAddMeetup(meetupData);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name *</label>
          <input type='text' placeholder='Will Smith' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Phone *</label>
          <input type='text' placeholder='0895073288' required id='phone' ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Car Location *</label>
          <input type='text' placeholder='ulitsa "Akademik Stefan Mladenov" 50' required id='address' ref={addressInputRef} />
        </div>        
        <div className={classes.control}>
          <label htmlFor='title'>Car Model</label>
          <input type='text' placeholder='Mercedes C300' id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Car Image URL</label>
          <input type='url' placeholder="https://example.com/image.png" id='image' ref={imageInputRef} />
        </div>   
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' placeholder='duyenle@gmail.com' id='email' ref={emailInputRef} />
        </div>     
        <div className={classes.control}>
          <label htmlFor='description'>Notes</label>
          <textarea
            id='description'
            placeholder="Some notes about your request..."
            rows='3'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <p className='text-red-700 text-sm'>All * fields are required</p>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default NewMeetupForm;
