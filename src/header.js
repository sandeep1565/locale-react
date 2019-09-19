import React from 'react';
import { connect } from 'react-redux';
import { updateLocale } from './store/action';

class Header extends React.Component{

    onlanguagechange = (e)=>{
        this.props.updateLocale(e.target.value);
    }

    render(){
        return (
            <div>
            <label>Select language</label>
            <select name="language" onChange={this.onlanguagechange} value={this.props.locale}>
                <option value="hi">हिंदी</option>
                <option value="en">English</option>
            </select>
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        locale: state.locale
    }
},{updateLocale})(Header);