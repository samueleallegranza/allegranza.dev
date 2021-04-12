import React from 'react';

// Temporary link to website homepage
import BaseLayout from './layouts/Base/Base';
import Homepage from './views/Homepage/Homepage';
import WritingPage from './views/WritingPage/WritingPage';

const App = () => {
  return (
    <div>
      <BaseLayout>
        {/* <Homepage /> */}
        <WritingPage />
      </BaseLayout>
    </div>
  );
}

export default App;
