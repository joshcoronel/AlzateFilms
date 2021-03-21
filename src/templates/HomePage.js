import React from 'react';
import { graphql } from 'gatsby';

function HomePage() {
  return (
    <React.Fragment>
      <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary">Home</h1>

      <hr className="border-b border-gainsboro w-10" />
    </React.Fragment>
  );
}

export default HomePage;
