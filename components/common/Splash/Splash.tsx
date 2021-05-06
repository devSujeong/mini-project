import { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Splash.module.scss';

const cx = classnames.bind(styles);

function Splash(): ReactElement {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('logo-text')}>whole storage</p>
    </div>
  );
}

export default Splash;
