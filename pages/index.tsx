import { ReactNode, useEffect, useState } from 'react';
import Splash from '../components/common/Splash';

function Home(): ReactNode {
  const [isSplashing, setIsSplashing] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('initLoading')) {
      setIsSplashing(true);

      setTimeout(() => {
        sessionStorage.setItem('initLoading', 'initLoadingCompleted');
        setIsSplashing(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      {isSplashing && <Splash />}
      main
    </>
  );
}

export default Home;
