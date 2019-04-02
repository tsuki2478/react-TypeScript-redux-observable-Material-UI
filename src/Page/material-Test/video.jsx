import React, { Component } from 'react';
import { Player } from 'video-react';
import "./video-react.css"; // import css
import pic from './1.png'
import med from './1.mp4'
// https://video-react.js.org/components/player/
// https://github.com/CookPete/react-player
// https://github.com/Chimeejs/chimee-player/blob/master/doc/preface.md
// https://juejin.im/entry/5783055e0a2b5800577021e3
// 视频语法
 class video extends Component {

    state = {

    }

    componentDidMount() { 
        if(0.1+0.2 == 0.3){
            console.log('111')
        }else {
            console.log('222:',0.1+0.2)
        }
    }

    render() {
        return (
            <div >
                <Player
                    playsInline
                    poster={pic}
                    src={med}
                />
            </div>
        )
    }
}
export default video