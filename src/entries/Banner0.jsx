import React, { PropTypes } from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './less/banner0.less';

class Banner extends React.Component {
  _invokeLeftButton() {
    window.open("https://146.169.45.204:6443/ui/",'_self');
    //console.log(this.props.name);
  }

  _invokeRightButton() {
    window.open("https://cloudstack.doc.ic.ac.uk:8443/client/",'_self');
  }

  render() {
    const { block1 } = this.props.dataSource;
    const { top, logo, title, content, button, logo1, title1, content1, button1 } = block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;
    return (
      <OverPack replay
        scrollName={this.props.name}
        playScale={[0.3, 0.1]}
        {...props}
        style={{
          //backgroundImage: `url(${bgImg})`,
          ...props.style,
        }}
        hideProps={{ icon: { reverse: true } }}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-title`}
          key="text"
          style={{ top }}
        >
          {logo ? <span className="logo" key="logo"><img width="100%" src={logo} /></span> : null}
          {title ? <h1 key="h1">{title}</h1> : null}
          <p key="content">{content}</p>
          <Button type="ghost" key="button" onClick={() => this._invokeLeftButton()}>
            {button}
          </Button>
        </QueueAnim>
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-title1`}
          key="text1"
          style={{ top }}
        >
          {logo1 ? <span className="logo1" key="logo1"><img width="100%" src={logo1} /></span> : null}
          {title1 ? <h1 key="h1">{title1}</h1> : null}
          <p key="content">{content1}</p>
          <Button type="ghost" key="button" onClick={() => this._invokeRightButton()}>
            {button1}

          </Button>
        </QueueAnim>

        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
          key="icon"
        >
          {/*<Icon type="down" />*/}
          <svg width="140px" height="55px" viewBox="140 0 200 42" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            {/*<g transform="scale(1)">*/}
              <rect id="Rectangle-path" fill="#6BEFF2" transform="translate(234.014842, 10.517713) rotate(-45.000000) translate(-234.014842, -10.517713) " x="226.781747" y="3.28461757" width="14.4661912" height="14.4661912"/>
              <rect id="Rectangle-path" fill="#6BEFF2" transform="translate(234.023164, 51.480471) rotate(-45.000000) translate(-234.023164, -51.480471) " x="226.790068" y="44.247375" width="14.4661912" height="14.4661912"/>
              <rect id="Rectangle-path" fill="#53C2CA" transform="translate(244.257580, 20.756290) rotate(-45.000000) translate(-244.257580, -20.756290) " x="237.024484" y="13.5231946" width="14.4661912" height="14.4661912"/>
              <rect id="Rectangle-path" fill="#53C2CA" transform="translate(244.261805, 41.237669) rotate(-45.000000) translate(-244.261805, -41.237669) " x="237.028709" y="34.0045733" width="14.4661912" height="14.4661912"/>
              <rect id="Rectangle-path" fill="#2B9DA0" transform="translate(254.500382, 30.994931) rotate(-45.000000) translate(-254.500382, -30.994931) " x="247.267286" y="23.7618356" width="14.4661912" height="14.4661912"/>
            {/*</g>*/}
          </svg>
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  dataSource: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner0',
};

export default Banner;
