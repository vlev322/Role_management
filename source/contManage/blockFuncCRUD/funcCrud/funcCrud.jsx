import React, {Component, Fragment} from 'react';

import styles from './funcCrud.sass';

import PopupCRUD from './PopupCRUD/PopupCRUD'

class FuncCRUD extends Component {  
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    onClicked(event) {
        console.log('All OK', event); 
        this.setState({ isOpen: !this.state.isOpen })       
    }

    render(){    
        const {name} = this.props;
        return (
        <div className={styles.listRoles_role}>
            <div onClick={this.onClicked.bind(this)}  className={styles.listRoles_role_title}>
                <div className={styles.circle}>
                    <div className={styles.fill}></div>
                </div>
                <span>Function {name}</span>            
            </div>
           { this.state.isOpen ? <PopupCRUD /> : null }
        </div>
)};
    }


    
  
  export default FuncCRUD;
  