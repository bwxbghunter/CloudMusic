import React, {Component, Fragment} from 'react'
import SearchList from '../SearchList'
import './index.scss'
class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            isHighLightColor: false
        }
        this.toggleContainer = React.createRef()
        this._isHiddenMaskBox = this._isHiddenMaskBox.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.isHighLightColor, this.state.isHighLightColor, nextState.isHighLightColor !== this.state.isHighLightColor)
        return nextState.isHighLightColor !== this.state.isHighLightColor
    }
    componentWillMount() {
        document.addEventListener('click', this._isHiddenMaskBox)
    }
    componentDidMount() {
        document.addEventListener('click', this._isHiddenMaskBox)
    }
    componentDidUpdate() {
        if (!this.state.isHighLightColor) {
            document.removeEventListener('click', this._isHiddenMaskBox)
        }
    }
    // 判断当前点击是否在dom元素内
    _isHiddenMaskBox() {
        console.log(window.event.target, this.toggleContainer)
        if (!this.toggleContainer.current.contains(window.event.target)) {
            this.setState({
                isHighLightColor: false
            })
            console.log('0000000')
        }
    }
    handleContentChange(event) {
        if (event) {
            event.target.value = event.target.value.trim()
            this.setState({content: event.target.value})
        }
    }
    handleContentFocus() {
        document.addEventListener('click', this._isHiddenMaskBox)
        this.setState({
            isHighLightColor: true
        })
    }
    handleContentBlur() {
        this._isHiddenMaskBox()
    }
    // handleDeleteHistory(arr) {
    //     this.setState({
    //         historyList: arr,
    //         isHighLightColor: true
    //     })
    //     setTimeout(() => {
    //         console.log(this.state, '==================')
    //     }, 0)
    // }
    render() {
        return (
            <div className="bwx-search-box" ref={this.toggleContainer}>
                <input className="bwx-search-box__input" 
                    placeholder="搜索音乐，视频，歌词，电台"
                    onChange={this.handleContentChange.bind(this)} 
                    onBlur={this.handleContentBlur.bind(this)} 
                    onFocus={this.handleContentFocus.bind(this)} 
                />
                <span className="bwx-search-bwx__icon"><i className={['iconfont', 'iconquery', this.state.isHighLightColor? 'highlight-color': null].join(' ')} ></i></span>
                {
                    this.state.isHighLightColor ? this.props.children : null
                        // <SearchList onDeleteHistory={this.handleDeleteHistory.bind(this)} {...this.state} />
                        // : null
                    // <SearchList onDeleteHistory={this.handleDeleteHistory.bind(this)} {...this.state} />
                }
            </div>
        )
    }
}

export default SearchInput