import React, {Component, Fragment} from 'react';

import styles from './popupCRUD.sass';

class PopupCRUD extends Component {

    render() {
      return (
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
      );
    }
  }
  
  export default PopupCRUD;
  