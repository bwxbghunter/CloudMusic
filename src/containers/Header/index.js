import React, {Component} from 'react'
import SwitchBtn from '../../components/Header/SwitchBtn'
import SearchInput from '../../components/Header/SearchInput'
import SettingItems from '../../components/Header/SettingItems'
import SearchList from '../../components/Header/SearchList'
import './index.scss'
class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="bwx-header">
                <div className="bwx-header-left">
                    <img className="bwx-header__logo" alt="logo"/>
                    <SwitchBtn />
                    <SearchInput >
                        <SearchList />
                    </SearchInput>
                </div>
                <div className="bwx-header-right">
                    <SettingItems />
                </div>
            </div>
        )
    }
}
export default Header