import * as React from 'react';
import * as style from './MarkerSample.pcss';

export default function MarkerSample()
{
    return (
        <svg className={style.marker} viewBox="0 0 500 500">
            <defs>
                <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    orient="auto"
                    markerWidth="10"
                    markerHeight="10"
                    refX="3" refY="5">
                    <polygon className={style.arrow} points="0,0 10,5 0,10 3,5"/>
                </marker>
            </defs>
            <polyline
                className={style.line}
                points="80,450 200,100 300,310 380,140 420,400"
                markerEnd="url(#arrow)"/>
        </svg>
    );
}
