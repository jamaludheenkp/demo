import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/send-email', formData);
      console.log(response.data);
      // Handle success or show a success message to the user
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Recipient:
          <input
            type="email"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
