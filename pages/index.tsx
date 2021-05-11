import { ReactNode, useEffect, useState } from 'react';
import Splash from '../components/common/Splash';

function Home(): ReactNode {
  const [isSplashing, setIsSplashing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashing(false);
    }, 2000);
  });

  return (
    <>
      {isSplashing && <Splash />}
      main
    </>
  );
}

export default Home;
