import React from 'react';
import styles from './title.sass';

const Title = props => {
    const {title} = props;
    return (
      <div className={styles.title}>
        <h3>{title}</h3>
    </div>
    );
  };
  
  export default Title;