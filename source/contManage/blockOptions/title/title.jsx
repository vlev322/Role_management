import React from 'react';
import styles from './title.sass'

const Title = props => {
    const {title} = props;
    return (
      <div className={styles.sub_title}>
        <h2>{title}</h2>
        <div><a href="#">Edit</a></div>
    </div>
    );
  };
  
export default Title;
