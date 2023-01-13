import React from 'react';
import '../components/Container.css';
import Item from '../components/voiceItem'

export default class Container extends React.Component {

    render() {
        const list = ['😍', '😂', '🥹', '😭', '😞']
        return (
            <div className='container'>
                {list.map(item => {
                    return(
                        <Item name = {item}/>
                    )
                })}
            </div>
        )
    }
}