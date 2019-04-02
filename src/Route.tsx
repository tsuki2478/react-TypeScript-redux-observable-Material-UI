import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './containers/Admin';
// import Login from './containers/Login'

const loading = (props: any) => {
    if (props.error) {
        return <div>出现错误!</div>;
    } else if (props.timedOut) {
        return <div>网页无反应，请刷新页面...</div>;
    } else if (props.pastDelay) {
        return (
            <div >
                测试中
            </div>
        )
    } else {
        return null
    }
}

const RouterList: any[] = [
    {
        component: () => import('./Page/Home'),
        path: '/home'
    }, {
        component: () => import('./Page/Test'),
        path: '/test'
    }, {
        component: () => import('./Page/material-Test/media'),
        path: '/media'
    }, {
        component: () => import('./Page/material-Test/video'),
        path:'/video'
    }
]
const App = (props:any) => {
    return (
        <div style={{ height: '100%' }}>
        {props.children}
    </div>
    )
}

const Router = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    {/* <Route path="/login" component={Login} /> */}
                    <Route
                        path="/"
                        render={() => 
                        <Admin>
                            <Switch>
                                {RouterList.map(item => (<Route
                                    key={item.path}
                                    exact={true}
                                    path={item.path}
                                    component={Loadable({ loader: item.component, loading })} />))}
                                <Redirect to="/home" />
                            </Switch>
                        </Admin>} 
                        />
                </Switch>
            </App>
        </BrowserRouter>
    )
}

export default Router