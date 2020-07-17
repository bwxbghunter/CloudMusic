import React, {Component} from 'react'
import './index.scss'
class SwitchBtn extends Component{
    constructor() {
        super()
    }
    handleChangeBtn(type) {
        console.log(type)
    }
    render() {
        return (
            <div className="bwx-switch-btn">
                <span className="switch-btn-pre" onClick={this.handleChangeBtn.bind(this, 'pre')}>
                    <i className="iconfont iconleftarrow"></i>
                </span>
                <span className="switch-btn-next" onClick={this.handleChangeBtn.bind(this, 'next')}>
                    <i className="iconfont iconrightarrow"></i>
                </span>
            </div>
        )
    }
}

export default SwitchBtn