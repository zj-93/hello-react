import React from 'react'

class App extends React.Component {
  // 构造函数
  // 定义变量的地方
  // 不要直接修改 State 否则dom不会重新渲染，
  // 修改方式 this.setState({seconds: 100}) (不推荐)
  // this.setState(state => ({  seconds: state.seconds + 1 })); (推荐)

  // 参数接受 this.props.xxx
  
  constructor(props) {
    super(props);
    this.state = { seconds: Number(this.props.name) };
  }

  // 事件
  tick() {
    this.setState(state => ({
      seconds: state.seconds + Number(this.props.name)
    }));
  }

  // 周期 在组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // 周期 组件从 DOM 中被移除
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('timer-example')
// );
export default App