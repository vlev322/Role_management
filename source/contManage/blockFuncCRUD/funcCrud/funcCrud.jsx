import React from 'react';

import styles from './funcCrud.sass';

const FuncCRUD = props => {    
    const {name} = props;

    return (
        <div className={styles.listRoles_role}>
            <div  className={styles.listRoles_role_title}>
                <div className={styles.circle}></div>
                <span>Function {name}</span>            
            </div>
            <div className={styles.funcCRUD}>
                <div className={styles.funcCRUD_item}>
                    <span>&bull;</span>
                    <span>Create</span>
                </div>
                <div className={styles.funcCRUD_item}>
                    <span>&bull;</span>
                    <span>Read</span>
                </div>
                <div className={styles.funcCRUD_item}>
                    <span>&bull;</span>
                    <span>Update</span>
                </div>
                <div className={styles.funcCRUD_item}>
                    <span>&bull;</span>
                    <span>Delete</span>
                </div>
                <button>Clear</button>
            </div>            
        </div>
)};
  
  export default FuncCRUD;
  