import React, {Component} from 'react'
import './index.scss'
class SettingItems extends Component {
    constructor() {
        super()
    }
    render() {
        return (
           <div className="bwx-setting-items">
               <i className="setting-icon iconfont iconclose"></i>
               <i className="setting-icon iconfont iconmaximize"></i>
               <i className="setting-icon iconfont iconminimize"></i>
               <i className="setting-icon iconfont iconminimodel"></i>
               <i className="setting-icon special-set iconfont iconseparator"></i>
               <i className="setting-icon special-set iconfont iconset"></i>
               <i className="setting-icon special-set iconfont iconenvelope"></i>
               <i className="setting-icon special-set iconfont iconskin"></i>
               <i className="special-set">开通VIP</i>
               <div className="setting-userinfo">bghunter <span className="userinfo-triangle"></span></div>
               <div className="user-icon"></div>
           </div>
        )
    }
}

export default SettingItems