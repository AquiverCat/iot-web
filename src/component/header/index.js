 import React, {Component, Fragment} from "react";
 import logo from './logo.png';
 import './style.css';
 import { Menu } from 'antd';
 import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

 class AppHeader extends Component {
     render() {
         return (
             <Fragment>
                <img src={logo} className='app-header-logo'/>
                <Menu mode="horizontal" className='app-header-menu'>
                    <Menu.Item key="mail1" icon={<MailOutlined />}>
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="mail2" icon={<MailOutlined />}>
                        设备管理
                    </Menu.Item>
                    <Menu.Item key="mail3" icon={<MailOutlined />}>
                        方案管理
                    </Menu.Item>
                    <Menu.Item key="mail4" icon={<MailOutlined />}>
                        评价管理
                    </Menu.Item>
                    <Menu.Item key="mail5" icon={<MailOutlined />}>
                       其他信息
                    </Menu.Item>
                </Menu>
             </Fragment>
        );
     }
 }
 export default AppHeader;