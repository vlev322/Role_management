import React, {Component, Fragment} from 'react';

import styles from './contManage.sass';

import BlockFuncCRUD from './BlockFuncCrud/BlockFuncCrud'
import functions from '../data/functions'
import functions1 from '../data/functions1'


class ContManage extends Component {
    constructor() {
        super();
        this.state = {};
    }

  render() {
    return (
      <div className={styles.container}>
        <BlockFuncCRUD title='Campaigns Charter' functions={functions}/>
        <BlockFuncCRUD title='Placement Charter' functions={functions1}/>
        <div>Two</div>
      </div>
    );
  }
}

export default ContManage;