import * as React from 'react';
import * as style from './PatternSample.pcss';

export default function PatternSample()
{
    return (
        <svg className={style.pattern} viewBox="0 0 500 500">
            <defs>
                <pattern id="diamond" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect x="15" y="15" width="20" height="20" transform="rotate(45 25,25)"/>
                </pattern>
            </defs>
            <rect fill="url(#diamond)" width="500" height="500"/>
        </svg>
    );
}
