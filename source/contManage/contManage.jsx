import React, {Component, Fragment} from 'react';

import styles from './contManage.sass';

import BlockFuncCRUD from './BlockFuncCrud/BlockFuncCrud'
import functions from '../data/functions'
import functions1 from '../data/functions1'
import functions2 from '../data/functions2'
import functions3 from '../data/functions3'


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
        <BlockFuncCRUD title='Placement Charter' functions={functions2}/>
        <BlockFuncCRUD title='Campaigns Charter' functions={functions3}/>
      </div>
    );
  }
}

export default ContManage;