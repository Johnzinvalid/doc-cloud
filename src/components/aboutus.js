import React, { Component, PropTypes } from 'react';
import Nav from '../entries/Nav';

const props = [
  // nav_0_0 区域
  {
    style: {
      position: 'fixed',
      height: '64px',
    },
    dataSource: {
      block1: {
        //logo:'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        menu1:'Home',
        menu2:'Docs',
        menu3:'About Us',
        // menu4:'导航四',
      },
    },
  }
  ];

export default class Aboutus extends Component {
  render() {
    return (
      <div className="templates-wrapper">
        <Nav key="nav_0_0" name="nav_0_0" {...props[0]} />
      </div>
    );
  }
}
