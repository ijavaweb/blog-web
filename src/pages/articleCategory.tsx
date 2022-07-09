import { Form, Input, Button, message, Card, Avatar, Col, List } from "antd"
import { useEffect, useState } from "react"
import { getArticleByCategory } from "../api/article"
import { article, createArticleRequest } from "../types/article"
import { Link, useParams } from "react-router-dom"

const { Meta } = Card;

const ArticleCategoryList = () => {
    const defaultPage = {
        limit: 10,
        offset: 0
    }
    const { category } = useParams<Record<string, string | undefined>>()

    const [articleList, setArticleList] = useState<article[]>()
    useEffect(() => {
        getArticleByCategory(String(category)).then((response) =>
            setArticleList(response.data.data.articles)
        )
    }, [category])

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
                    >
                    </List.Item.Meta>
                </List.Item>
            )}
            style={{ marginTop: 100, marginLeft: 200 }}
        ></List>
    )
}
export default ArticleCategoryList