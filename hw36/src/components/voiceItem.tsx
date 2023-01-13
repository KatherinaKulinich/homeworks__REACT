import React from 'react'
import '../components/voiceItem.css';


type MyProps = {
    name: string
}

type MyState = {
    counter: number
}


export default class Item extends React.Component<MyProps, MyState> {

    state: MyState = {
        counter: 0
    }

    addVoice = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <div className='itemBox'>
                <button type="button" className='itemButton' onClick={this.addVoice}>
                    {this.props.name}
                </button>
                <p className='itemText'>
                    {this.state.counter}
                </p>
            </div>
        )
    }
}