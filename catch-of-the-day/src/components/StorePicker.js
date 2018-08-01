import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        //Stop the form from Submitting
        event.preventDefault();
        //Get text from that input
        const storeName = this.myInput.value.value
        //change page to /store/whatever-they-enter
        this.props.history.push(`/store/${storeName}`)
    };
    
    render(){
        return (
            
            <form className="store-selector" onSubmit={this.goToStore}>
            {/* comment */}    
                <h2>Please Enter A Store</h2>

                <button onClick={this.handlerClick}>Click me!</button>

                <input 
                    type="text" 
                    ref={this.myInput}
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store </button>
            </form>
        );
    }
}

export default StorePicker;