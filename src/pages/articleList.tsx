import { Form, Input, Button, message, Card, Row, Col, List, Avatar } from "antd"
import { useEffect, useState } from "react"
import { getArticleList } from "../api/article"
import { article, createArticleRequest } from "../types/article"
import { Link } from "react-router-dom"
const { Meta } = Card;

const ArticleList = () => {
    const defaultPage = {
        limit: 10,
        offset: 0
    }
    const [articleList, setArticleList] = useState<article[]>()
    useEffect(() => {
        getArticleList(defaultPage).then((response) =>
            setArticleList(response.data.data.articles)
        )
    }, [])

    return (
        <List
            bordered
            itemLayout="horizontal"
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
    )
}
export default ArticleList