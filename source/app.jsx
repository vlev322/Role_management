import React, {Component, Fragment} from 'react';

import styles from './styles/main.sass';
import ContManage from './contManage/contManage';

const content = 'Hello world!';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ContManage/>
      </Fragment>
    );
  }
}

export default App;
