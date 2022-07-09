import { Layout, Menu,MenuProps  } from 'antd';
import { Link, useNavigate } from "react-router-dom"

const { Header } = Layout;

const TopNav = () => {
    const navigator = useNavigate()
    const items = [
        {
            label: "首页",
            path: "/"
        },
        {
            label: "文章",
            path: "/article/list/all"
        },
        {
            label: "写文章",
            path: "/article/create"
        }
    ]
    function handlerClick(path: string) {
        navigator(path)
    }
    return (
        <Layout>
            <Header style={{ background: '#fff' }}>
                <Menu
                    theme="light"
                    mode="horizontal"
                >
                    {items.map((item, index) => (
                        <Menu.Item key= {index+1} ><Link to={item.path}>{item.label}</Link></Menu.Item>

                    ))}
                </Menu>
            </Header>
        </Layout>
    )
}
export default TopNav