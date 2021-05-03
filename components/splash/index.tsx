import { ReactNode } from 'react';
import Image from 'next/image';

import './splash.scss';

function Splash(): ReactNode {
  return (
    <div style={{ background: '#222', color: '#fff' }}>
      <Image
        src="/assets/images/splash/logo-dalock@2x.png"
        alt="우리의 공간을 의미하는 네모 상자"
        layout="fill"
      />
      <p>whole storage.</p>
    </div>
  );
}

export default Splash;
