import React from 'react';

import styles from './blockOptions.sass';

import Title from './title/title'
import Field from './field/field'
  
const BlockOptions = props => {
    const {title, first_sign, second_sign} = props;
    return (
        <div className={styles.reference}>
            <Title title={title}/>
            <Field first_sign={first_sign} second_sign={second_sign}/>                
        </div>
)};
  
export default BlockOptions;