import  React  from 'react';
import Form from './form';
import Header from './header';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Form />
            </div>
            
        )
    }
}