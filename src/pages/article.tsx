import { Form, Input, Button, message, Card, Row, Col, List, Avatar, Typography } from "antd"
import { Component, useEffect, useState } from "react"
import { getArticle } from "../api/article"
import { article, createArticleRequest } from "../types/article"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Link } from "react-router-dom"

const { Title } = Typography

const Article = () => {
    const { id } = useParams<Record<string, string | undefined>>()
    const [article, setArticle] = useState<article>()
    useEffect(() => {
        getArticle(Number(id)).then((response) =>
            setArticle(response.data.data)
        )
    }, [id])

    return (
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <Row gutter={10} align="middle" justify="center">
                    <Col span={24} style={{ width: "100%" }}>
                        <Title style={{ textAlign: "center" }} level={2}>{article?.title}</Title>
                    </Col>
                </Row>
                <Row gutter={10} align="middle" justify="center" style={{ marginBottom: 20 }}>
                    <Col span={24} style={{ width: "100%" }}>
                        <Title style={{ textAlign: "center" }} italic={true} level={5}>{article?.update_time}<span style={{ marginLeft: 10 }}></span>{article?.letter_num}
                            <span style={{ marginLeft: 10 }}></span>
                            <Link to={`/article/category/${article?.category}`}><span>{article?.category}</span></Link>
                        </Title>
                    </Col>
                </Row>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        showLineNumbers={true}
                                        language={match[1]}
                                        PreTag='div'
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}

                    >{article ? article.content : ""}</ReactMarkdown>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}
export default Article