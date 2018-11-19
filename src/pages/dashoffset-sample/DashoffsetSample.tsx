import * as React from 'react';
import * as style from './DashoffsetSample.pcss';

export default function DashoffsetSample()
{
    return (
        <div className={style.dashoffset}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                <polyline
                    className={style.line}
                    points="80,450 200,100 300,310 380,140 420,400"/>
            </svg>
        </div>
    );
}
