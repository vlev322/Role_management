import React from 'react';

import styles from './field.sass';
  
const Field = props => {
    const {first_sign, second_sign} = props;
    return (
        <div  className={styles.container}>
            <div className={styles.first_block}>
                <span>{first_sign}</span>
                <div></div >
            </div>
            <div className={styles.second_block}>
                <span>{second_sign}</span>
                <div></div>
            </div>              
        </div> 
)};
  
export default Field;