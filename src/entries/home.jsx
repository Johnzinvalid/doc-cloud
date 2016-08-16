import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import './less/common.less';
import Nav0 from './Nav';
import Banner0 from './Banner0';
import Banner1 from './Banner1';
import Content1 from './Content1';
import Content2 from './Content2';
import Content0 from './Content0';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Footer0 from './Footer';
import Point from './Point';



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
  },
  // banner_0_1 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo: '/src/images/docker_logo.png',//'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'Docker',
        content:'fast, lighter, smaller',
        button:'Login',
        top1:'25%',
        logo1: '/src/images/cloudstack_logo1.png',//'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title1:'CloudStack',
        content1:'flexible, reliable',
        button1:'Login',
      },
    },
  },
  // banner_1_2 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
      },
      block2: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg',
      },
      block3: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/glzXQktozLMgGtE.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  // content_1_3 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        img:'/src/images/kubernetes.svg',
        title:'CaaS',
        content:'Deploy micro services in seconds. scale up or down by click button.',
      },
    },
  },
  // content_2_4 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'基于阿里云强大的基础资源',
      },
      block0: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title:'企业资源管理',
        content:'云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
      block1: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'云安全',
        content:'按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
      },
      block2: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'云监控',
        content:'分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
      },
      block3: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'移动',
        content:'一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
      },
      block4: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title:'分布式中间件',
        content:'金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
      },
      block5: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        title:'大数据',
        content:'一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
      },
    },
  },
  // content_0_5 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        img:'/src/images/cs_logo_black.jpg',
        title:'IaaS',
        content:'set up your personal VM',
      },
    },
  },
  // content_4_6 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'客户案例',
        content:'在这里用一段话介绍服务的案例情况',
      },
      block1: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block2: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
      block3: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block4: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
      block5: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block6: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
      block7: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block8: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
    },
  },
  // content_5_7 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'基于阿里云计算强大的基础资源',
      },
      img: {
        img:'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
      },
      block1: {
        img:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'技术',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
      },
      block2: {
        img:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'融合',
        content:'解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
      },
      block3: {
        img:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'开发',
        content:'符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
      },
    },
  },
  // content_6_8 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'科技想象力，金融创造力',
      },
      block0: {
        tag:'PHONE',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
      block1: {
        tag:'TABLET',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
      block2: {
        tag:'DESKTOP',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
    },
  },
  // footer_0_9 区域
  {
    style: {
      height: '40px',
    },
    dataSource: {
      copyright: {
        content:'Copyright © 2016 by <a href=\'#\'>DoC Cloud</a>. All Rights Reserved',
      },
    },
  },
];

export default class Home extends React.Component {
  componentDidMount() {
    // 点的位置居中
    const list = ReactDOM.findDOMNode(this.refs.list);
    const listHeight = list.getBoundingClientRect().height;
    list.style = `margin-top: -${listHeight / 2}px`;
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });
  }

  render() {
    const children = [
      <Nav0 key="nav_0_0" name="nav_0_0" {...props[0]} />,
      <Banner0 key="banner_0_1" name="banner_0_1" {...props[1]} />,
      <Content1 key="content_1_3" name="content_1_3" {...props[3]} />,
      <Content0 key="content_0_5" name="content_0_5" {...props[5]} />,
      <Footer0 key="footer_0_9" name="footer_0_9" {...props[9]} />,
      <Point key="list" ref="list" data={['banner_0_1', 'content_1_3', 'content_0_5']} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}

