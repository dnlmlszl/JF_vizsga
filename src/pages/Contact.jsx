import { useState } from 'react';
import { Feedback } from '../classes/Feedback.class';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackObj = new Feedback(email, feedback);
    console.log(feedbackObj);
  };

  return (
    <section
      className="container"
      style={{
        maxWidth: '600px',
        margin: '2rem auto',
        padding: '3rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2 className="light-title text-secondary">Provide a feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            className="form-control"
            onChange={({ target }) => setFeedback(target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn mt-3"
          style={{
            backgroundColor: 'gray',
            color: 'white',
            letterSpacing: '2px',
          }}
        />
      </form>
    </section>
  );
};
