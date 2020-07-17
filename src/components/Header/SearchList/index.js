import React, {Component, Fragment} from 'react'
import './index.scss'
class SearchList extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            historyList: [
                {
                    name: '是否',
                    id: 1
                },
                {
                    name: '野狼disco',
                    id: 2
                },
                {
                    name: '海底',
                    id: 3
                },
                {
                    name: '为你',
                    id: 4
                }
            ],
            hostList: [
                {
                    title: '官方回答',
                    id: 1,
                    count: 1197711,
                    isHot: true,
                    description: '我用官方的回答了他的废话'
                },
                {
                    title: '爱存在',
                    id: 2,
                    count: 8599964,
                    isHot: true,
                    description: '对你的爱会一直存在~'
                },
                {
                    title: '陈奕迅',
                    id: 3,
                    count: 767798,
                    isHot: true,
                    description: '新版《Shall We Talk》听了吗！'
                },
                {
                    title: '毛不易',
                    id: 4,
                    count: 726923,
                    isHot: false,
                    description: '深情的唱作人毛不易！'
                },
                {
                    title: '薛之谦',
                    id: 5,
                    count: 704944,
                    isHot: false,
                    description: '薛老师一发歌就要掀起狂潮！'
                },
                {
                    title: '信仰',
                    id: 6,
                    count: 654029,
                    isHot: true,
                    description: '情歌王子张信哲的经典收录'
                },
            ]
        }
    }
    handleDeleteHistory() {
        console.log('删除历史记录')
        this.setState({
            historyList: []
        })
    }
    handleDeleteHistorySingle(id) {
        let arr = this.state.historyList
        arr.forEach((item, index) => {
            if (item.id === id) {
                arr.splice(index, 1)
            }
        })
        this.setState({
            historyList: arr
        })
    }
    render() {
        return (
            <div className="bwx-search-list">
                <div className="list-trangle"></div>
                <div className="search-history">
                    {
                        this.state.historyList.length > 0 ? 
                        <Fragment>
                            <div className="history-title">
                                <span>搜索历史</span>
                                <i className="iconfont icondelete" onClick={this.handleDeleteHistory.bind(this)}></i>
                            </div>
                            <ul className="history-content">
                                {
                                    this.state.historyList.map(item => (
                                        <li className="history-content__tag" key={item.id}>
                                            <span>{item.name}</span>
                                            <i className="iconfont iconclose" onClick={this.handleDeleteHistorySingle.bind(this, item.id)}></i>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Fragment>
                        : null
                    }
                </div> 
                <div className="hot-list">
                    <div className="hot-title">热搜榜</div>
                    <ul className="hot-list__content">
                        {
                            this.state.hostList.map((item, index) => (
                                <li className="hot-list__info" key={item.id}>
                                    <div className={['list-info__index', (index + 1) < 4 ? 'info-ishot': null].join(' ')}>{index + 1}</div>
                                    <div className="list-info__container">
                                        <div className="container-title">
                                            <span className={['info-title', (index + 1) < 4 ? 'title-ishot': null].join(' ')}>{item.title}</span>
                                            <span className="info-count">{item.count}</span>
                                            {item.isHot? <span className="info-hot" >HOT</span> : null}
                                        </div>
                                        <div className="container-description">{item.description}</div>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchList