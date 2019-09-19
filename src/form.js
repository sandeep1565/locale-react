import  React  from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
    render() {
        if(!this.props.localeState){
            return <div>...loading</div>
        }
        const localeData = this.props.localeState.localeData;
        return (
            <form>
                <div>
                    <label>{localeData.first_name}</label>
                    <input type="text" name="firstname"/>
                </div>
                <div>
                    <label>{localeData.last_name}</label>
                    <input type="text" name="lastname" />
                </div>
                <input type="submit" value={localeData.submit}/>
            </form>
        );
    }
}

export default connect((localeState)=>{
    return {
        localeState
    };
})(Form);