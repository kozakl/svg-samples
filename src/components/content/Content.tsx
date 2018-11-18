import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {AlignContentSample} from '../../pages/align-content-sample';
import {AreasSample} from '../../pages/areas-sample';
import {AutoColumnsSample} from '../../pages/auto-columns-sample';
import {BasicSample} from '../../pages/basic-sample';
import {ItemsPositionsSample} from '../../pages/items-positions-sample';
import {LayoutSample} from '../../pages/layout-sample';
import {LinesNameSample} from '../../pages/lines-name-sample';
import {RepeatSample} from '../../pages/repeat-sample';

export default function Content()
{
    return (
        <HashRouter>
            <>
                <select
                    style={{position: 'fixed', top: '0'}}
                    defaultValue={location.hash}
                    onChange={(event)=>
                        window.location.href = event.target.value}>
                    <option value="#/align-content">Align Content</option>
                    <option value="#/areas">Areas</option>
                    <option value="#/auto-column">Auto Column</option>
                    <option value="#/basic">Basic</option>
                    <option value="#/items-positions">Items Positions</option>
                    <option value="#/layout">Layout</option>
                    <option value="#/lines-name">Lines Name</option>
                    <option value="#/repeat">Repeat</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/align-content' exact/>
                    <Route path="/align-content" component={AlignContentSample}/>
                    <Route path="/areas" component={AreasSample}/>
                    <Route path="/auto-column" component={AutoColumnsSample}/>
                    <Route path="/basic" component={BasicSample}/>
                    <Route path="/items-positions" component={ItemsPositionsSample}/>
                    <Route path="/layout" component={LayoutSample}/>
                    <Route path="/lines-name" component={LinesNameSample}/>
                    <Route path="/repeat" component={RepeatSample}/>
                </Switch>
            </>
        </HashRouter>
    );
}
