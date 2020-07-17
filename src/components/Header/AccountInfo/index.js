import React, {Component} from 'react'
import './index.scss'
class AccountInfo extends Component {
    render() {
        return (
            <div className="bwx-account-info">
                <div className="account-info__trangle"></div>
                <div className="account-info-name">
                    <div className="account-name-img">
                        {/* <img className="account-in__img" /> */}
                        <span className="account-in__img" ></span>
                        <span>bghunter</span>
                    </div>
                    <div className="account-sign">
                        <i className="iconfont iconsign"></i>
                        <span>签到</span>
                    </div>
                    <div className="account-details"></div>
                </div>
            </div>
        )
    }
}
export default AccountInfo