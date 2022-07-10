import { Layout, Menu,Typography  } from 'antd';
import { Link, useNavigate } from "react-router-dom"
import {HomeOutlined,UnorderedListOutlined,EditOutlined} from '@ant-design/icons';


const { Header } = Layout;
const { Title } = Typography

const TopNav = () => {
    const navigator = useNavigate()
    const items = [
        {
            label: "首页",
            path: "/",
            icon:<HomeOutlined style={{marginRight:10}}/>,
        },
        {
            label: "文章",
            path: "/article/list/all",
            icon: <UnorderedListOutlined style={{marginRight:10}}/>
        },
        {
            label: "写文章",
            path: "/article/create",
            icon: <EditOutlined style={{marginRight:10}}/>
        }
    ]
    function handlerClick(path: string) {
        navigator(path)
    }
    return (
        <Layout >
            <Header style={{ backgroundColor:"lightgrey" }} >
                <Menu
                    theme="light"
                    mode="horizontal"
                    style={{marginLeft:"20%",marginRight:"20%",textAlign:"center",backgroundColor:"lightgrey" }}
                >
                    {items.map((item, index) => (
                        <Menu.Item key= {index+1} ><Link to={item.path} style={{fontSize:20}}>{item.icon}{item.label}</Link></Menu.Item>
                    ))}
                </Menu>
            </Header>
        </Layout>
    )
}
export default TopNav