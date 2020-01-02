import React from 'react';
import Navbar from '../layout/Navbar';

type Props = {
  nextQuestion: () => void;
};

const Q2 = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Do you own a smartphone?</h1>
        <form>
          <select className="text-margin" name="text">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </form>
        <button
          className="button"
          onClick={props.nextQuestion}
          style={{ padding: '0.7rem 3rem', marginTop: '2rem' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Q2;
