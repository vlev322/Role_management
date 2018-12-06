import React from 'react';

import styles from './blockFuncCRUD.sass';

import Title from './title/title'
import FuncCRUD from './funcCrud/funcCrud'

const BlockFuncCRUD = props => {
    const {functions, title} = props;

    return (
        <div className={styles.blockFuncCRUD}>
            <Title title={title} />
            <div className={styles.listRoles}>
                {functions.map(f => (
                    <FuncCRUD name={f.name} key={f.id}/>
                ))}                
            </div>            
        </div>
)};
  
export default BlockFuncCRUD;