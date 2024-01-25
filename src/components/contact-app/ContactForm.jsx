import { useState } from 'react';

const Contact_Form_Init_State = {
  name: '',
  email: '',
  group: '',
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...Contact_Form_Init_State });
  const { name, email, group } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(values);
    setValues({ ...Contact_Form_Init_State });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='group'>Group:</label>
        <select name='group' id='group' value={group} onChange={handleChange}>
          <option value=''>All</option>
          <option value='Home'>Home</option>
          <option value='Office'>Office</option>
        </select>
      </div>
      <br />
      <input type='submit' value='Create New Contact' />
    </form>
  );
};

export default ContactForm;
