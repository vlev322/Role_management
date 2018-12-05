import React, {Component, Fragment} from 'react';

import styles from './contManage.sass';

import BlockFuncCRUD from './BlockFuncCrud/BlockFuncCrud'



class ContManage extends Component {
    constructor() {
        super();
        this.state = {};
    }

  render() {
    return (
      <div className={styles.container}>
        <BlockFuncCRUD/>
        <div>Two</div>
      </div>
    );
  }
}

export default ContManage;