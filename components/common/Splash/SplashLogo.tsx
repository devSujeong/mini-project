import * as React from 'react';
import classnames from 'classnames/bind';

import styles from './SplashLogo.module.scss';

const cx = classnames.bind(styles);

function SplashLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cx('logo')}
      xmlns="http://www.w3.org/2000/svg"
      width={161}
      height={185}
      viewBox="0 0 161 185"
      {...props}
    >
      <defs>
        <filter id="prefix__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g filter="url(#prefix__a)" transform="translate(-24)" fill="none" fillRule="evenodd">
        <path
          fill="#222"
          d="M107.332 1.633l74.555 42.98a5.672 5.672 0 012.838 4.913v85.948a5.67 5.67 0 01-2.838 4.912l-74.555 42.981a5.673 5.673 0 01-5.664 0l-74.555-42.98a5.675 5.675 0 01-2.838-4.914V49.526a5.67 5.67 0 012.838-4.912l74.555-42.981a5.673 5.673 0 015.664 0zM32.35 47.663l-2.688 4.629L106.79 94.52l73.356-42.141-2.688-4.628-70.734 40.633-74.373-40.72z"
        />
      </g>
    </svg>
  );
}

export default SplashLogo;
