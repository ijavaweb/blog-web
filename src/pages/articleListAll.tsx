import { Typography, Row, Col, List, Avatar } from "antd"
import { useEffect, useState } from "react"
import { getArticleList } from "../api/article"
import { article } from "../types/article"
import { Link } from "react-router-dom"
const { Title } = Typography

const ArticleListAll = () => {
    const defaultPage = {
        limit: 50,
        offset: 0
    }
    const [articleList, setArticleList] = useState<article[]>()
    useEffect(() => {
        getArticleList(defaultPage).then((response) =>
            setArticleList(response.data.data.articles)
        )
    }, [])

    return (
        <Row gutter={10} style={{width:"100%"}}>
            <Col span={24}>
                <List
                    bordered
                    itemLayout="horizontal"
                    header={<Title level={5}>所有文章</Title>}
                    dataSource={articleList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<Link to={`/article/${item.id}`}>{item.title}</Link>}
                            ></List.Item.Meta>
                        </List.Item>
                    )}
                    style={{ marginTop: 100, marginLeft: 200 }}
                ></List>
            </Col>
        </Row>
    )
}
export default ArticleListAll