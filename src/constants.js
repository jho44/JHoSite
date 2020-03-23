import React from 'react';
import MediaQuery from 'react-responsive'

export const LIGHT_PURPLE = "#dbb4ff";

export const LIGHT_GRAY = "#e4e4ee";

export const DARK_GRAY = "#55555b";

export const PINK_RED_ORANGE= "#ff9385";

export const LIGHT_PINK = "#ffd6e8";

export const CREME = "#ffe9d6";

/* enabling responsive stuff */
export const Desktop = (props) => <MediaQuery {...props} minWidth={1025} />;
export const MobilePortrait = (props) => <MediaQuery {...props} minWidth={360} maxWidth={414} minHeight={640} maxHeight={896} />;
export const Medium = (props) => <MediaQuery {...props} minWidth={641} maxWidth={1024} minHeight={415}/>;
export const MobileLandscape = (props) => <MediaQuery {...props} minWidth={640} maxWidth={896} minHeight={360} maxHeight={414} />;

/* 
    phones: lowest width 360
            biggest width 414

            lowest height 667
            biggest height 896
*/