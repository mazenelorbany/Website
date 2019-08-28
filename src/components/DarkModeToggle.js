import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
 import '../assets/sass/resume.scss';
//  import '../assets/scss/styles.scss';

// @ts-ignore
import moon from './common/assets/images/moon.png';
import sun from './common/assets/images/sun.png';
import HeaderToggle from './Header.Toggle';
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="themeSwitchContainer">
      {/* Only render toggle if JS available */}
      {typeof window !== 'undefined' ? (
        <HeaderToggle
          icons={{
            checked: (
              <img
                src={moon}
                width="12"
                height="12"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),

            unchecked: (
              <img
                src={sun}
                width="18"
                height="18"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
          }}
          onClick={darkMode.toggle}
        />
      ) : null}
    </div>
  );
};

export default DarkModeToggle;
