import React from 'react';

// Temporary link to website homepage
import BaseLayout from './layouts/Base/Base';
import Homepage from './views/Homepage';

const App = () => {
  return (
    <div>
      <BaseLayout>
        <Homepage />
      </BaseLayout>
    </div>
  );
}

export default App;
