import React from 'react';

const CustomeHead = () => {
  return (
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* Font 1 */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
        rel="stylesheet"
      />
      {/* Font 2 */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap"
        rel="stylesheet"
      />
      <style jsx="true" global="true">
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
          a {
            text-decoration: none;
            color: white;
          }
        `}
      </style>
    </head>
  );
};

export default CustomeHead;
