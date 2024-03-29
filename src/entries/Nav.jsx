import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import './less/nav0.less';
const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const { menu1, menu2, menu3, } = this.props.dataSource.block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;

    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
      >
        {/*<img height="33" src={logo} />*/}
        <h1 className={`${this.props.className}-text`}>DoC Hybrid-Cloud</h1>
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={["a"]}
          style={{ lineHeight: `${parseFloat(this.props.style.height) - 2}px`,
                   }}>
          <Item key="a">
            {menu1}
            <a href="/"/>
          </Item>
          <Item key="b">
            {menu2}
            <a href="https://johnzinvalid.gitbooks.io/doc-cloud/content" target="_self"/>
          </Item>
          <Item key="c">
            {menu3}
            <a href="/aboutus"/>
          </Item>
          {/*<Item key="d">{menu4} </Item>*/}
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  dataSource: PropTypes.object,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
