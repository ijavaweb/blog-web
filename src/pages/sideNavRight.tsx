import { useEffect, useState } from "react"
import { getCategoryList } from "../api/article"
import { Typography, List } from "antd"
import { Link } from "react-router-dom"
import Sider from "antd/lib/layout/Sider"
import {SearchOutlined} from '@ant-design/icons';

const { Title } = Typography

const SideNavRight = () => {
    const [category, setCategory] = useState<string[]>()
    useEffect(() => {
        getCategoryList().then((response) =>
        setCategory(response.data.data)
        )
    }, [])
    return (
        <Sider
            theme="light"
            width={"20%"}
            style={{marginRight: 50, marginTop: 100 }}
        >
            <List
                bordered
                itemLayout="horizontal"
                header={<Title level={5}><SearchOutlined style={{ marginRight: 5 }} />按分类查看文章</Title>}
                dataSource={category}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Link to={`/article/category/${item}`}>{item}</Link>}
                        ></List.Item.Meta>
                    </List.Item>
                )}
            ></List>
        </Sider>
    )
}
export default SideNavRight