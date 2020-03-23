import React from 'react';
import MediaQuery from 'react-responsive'

export const LIGHT_PURPLE = "#dbb4ff";

export const LIGHT_GRAY = "#e4e4ee";

export const DARK_GRAY = "#55555b";

export const PINK_RED_ORANGE= "#ff9385";

export const LIGHT_PINK = "#ffd6e8";

export const CREME = "#ffe9d6";

/* enabling responsive stuff */
export const Desktop = (props) => <MediaQuery {...props} minDeviceWidth={1025} />;
// export const Tablet = (props) => <MediaQuery {...props} minDeviceWidth={768} maxDeviceWidth={1224} />;
export const MobilePortrait = (props) => <MediaQuery {...props} minDeviceWidth={360} maxDeviceWidth={414} minDeviceHeight={640} maxDeviceHeight={896} />;
export const MobileLandscape = (props) => <MediaQuery {...props} minDeviceWidth={640} maxDeviceWidth={896} minDeviceHeight={360} maxDeviceHeight={414} />;
export const Medium = (props) => <MediaQuery {...props} minDeviceWidth={641} maxDeviceWidth={1024} minDeviceHeight={415}/>;

/* 
    phones: lowest width 360
            biggest width 414

            lowest height 667
            biggest height 896
*/