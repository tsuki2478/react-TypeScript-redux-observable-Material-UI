import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './Route'

/* 热加载 */
import { AppContainer } from 'react-hot-loader';
/* redux */
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootEpic } from './Epics';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink, blue,purple } from '@material-ui/core/colors';
// import Fade from '@material-ui/core/Fade';
import "node_modules/video-react/dist/video-react.css"; // import css

// 2. 实例化一个epic异常流框架
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic);

// material 的主题
const theme = createMuiTheme({
  typography: {
    // 告诉Material-UI html元素的字体大小是什么。
    htmlFontSize: 10,
    fontSize: 14, 
  },

  palette: {
    primary: purple,   // primary - 用于表示用户的主要界面元素。
    secondary: blue, // secondary - 用于表示用户的辅助界面元素。
    error:pink  // error - 用于表示用户应该知道的界面元素。
  }
})


const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router />·
        </MuiThemeProvider>
      </Provider>
    </AppContainer>, document.getElementById('root'))
}

render(Router)
if (module.hot) {
  module
    .hot
    .accept('./Route', () => { // 当我们热更新的代码出现的时候，把App重新加载
      const NextApp = require('./Route').default //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
      render(NextApp) // 重新渲染到 document 里面
    })
}

registerServiceWorker();
