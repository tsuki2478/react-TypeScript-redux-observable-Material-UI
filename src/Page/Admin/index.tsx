import * as React from 'react'
import { ReactHTML } from 'react'
import './style.less'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
export interface IHistory {
  push: (pathname: string) => void
}
interface ILocation {
  pathname: string
}
interface IProps {
  children: ReactHTML
  location: ILocation
  history: IHistory
  isLogin: () => void
}
class Admin extends React.Component<IProps> {
  timer: any

  state = {

  }
  componentDidMount() {
    this.isLogin()
    this.onResize()
  }
  /**
   * 是否存在用户名
   */
  isLogin = () => {
    const user = localStorage.getItem('user')
    !user || user === 'undefined' ? this.props.history.push('/login') : null;
  }
  // 屏幕大小
  onResize = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      window.onresize = () => {
        this.setState({
          isMobile: document.body.clientWidth < 769
        })
      }
    }, 500)
  }


  render() {
    const { children, location } = this.props
    return (

        <TransitionGroup appear={true} exit={false}>
          <CSSTransition
            classNames="example"
            in={false}
            key={location.pathname}
            timeout={{
              enter: 3000,
              exit: 300
            }}>
            <div>{children}</div>
          </CSSTransition>
        </TransitionGroup>
    )
  }
}

export default Admin
