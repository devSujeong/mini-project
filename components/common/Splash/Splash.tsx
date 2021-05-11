import { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Splash.module.scss';

import SplashLogo from './SplashLogo';

const cx = classnames.bind(styles);

function Splash(): ReactElement {
  return (
    <div className={cx('wrapper')}>
      <SplashLogo />
      <p className={cx('logo-text')}>whole storage</p>
    </div>
  );
}

export default Splash;
