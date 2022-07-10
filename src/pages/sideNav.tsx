import { useEffect, useState } from "react"
import { article } from "../types/article"
import { getArticleList } from "../api/article"
import { Calendar, Typography, List } from "antd"
import { Link } from "react-router-dom"
import Sider from "antd/lib/layout/Sider"
import { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import type { Moment } from 'moment';
import Layout from "antd/lib/layout/layout"
import locale from "antd/lib/date-picker/locale/zh_CN"
import {CalendarOutlined,TagOutlined} from '@ant-design/icons';

const { Title } = Typography


const SideNav = () => {
    const [topArticle, setTopArticle] = useState<article[]>()
    const defaultPage = {
        limit: 10,
        offset: 0
    }
    useEffect(() => {
        getArticleList(defaultPage).then((response) =>
            setTopArticle(response.data.data.articles)
        )
    }, [])
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
    };
    return (
        <Sider
            theme="light"
            width={"20%"}
            style={{ marginLeft: 50, marginTop: 100 }}
        >
            <Layout>
                <Typography.Title level={5}><CalendarOutlined style={{ marginRight: 5 }}/>日历</Typography.Title>
                <Calendar locale={locale}
                    fullscreen={false} onPanelChange={onPanelChange} style={{ marginBottom: 100 }} />
            </Layout>
            <List
                bordered
                itemLayout="horizontal"
                header={<Title level={5}><TagOutlined style={{ marginRight: 5 }}/>最新文章</Title>}
                dataSource={topArticle}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Link to={`/article/${item.id}`}>{item.title}</Link>}
                        ></List.Item.Meta>
                    </List.Item>
                )}
            ></List>
        </Sider>
    )
}
export default SideNav