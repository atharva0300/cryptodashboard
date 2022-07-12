import React from 'react';
import {Button , Menu , Typography , Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined , MoneyCollectOutlined , BulbOutlined , FundOutlined , MenuOutlined} from '@ant-design/icons';
import icon from '../images/dashboard.png';
import {useState, useEffect } from 'react';
import {motion} from 'framer-motion';

function Navbar() {
    const [activeMenu , setActiveMenu] = useState(true);
    const [screenSize , setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            //setting the screen size to window.innerWidth
            setScreenSize(window.innerwidth);
        }

        window.addEventListener('resize' , handleResize);

        handleResize();

        return () => window.removeEventListener('resize' , handleResize);
    }, [] );

    useEffect(() => {
        if(screenSize < 760){
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    }, [screenSize])

  return (
    <div className = "nav-container">
        <motion.div className = "logo-container" initial={{y : 1920}} animate = {{y : 0}} transition = {{duration : 0.5, ease : 'easeOut'}}>
            <Avatar src = {icon} size = "large" />
            <Typography.Title level = {2} className = "logo">
                <Link to = "/cryptodashboard">Cryptodashboard</Link>
            </Typography.Title>
            <Button className = 'menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </motion.div>

        {activeMenu && <Menu theme = "dark">
            <Menu.Item icon = {<HomeOutlined />}>
                <Link to = "/cryptodashboard">Home</Link>
            </Menu.Item>
            <Menu.Item icon = {<FundOutlined />}>
                <Link to = "/cryptodashboard/cryptocurrency">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon = {<MoneyCollectOutlined />}>
                <Link to = "/cryptodashboard/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon = {<BulbOutlined />}>
                <Link to = "/cryptodashboard/news">News</Link>
            </Menu.Item>
        </Menu>}
    </div>
  )
}

export default Navbar
