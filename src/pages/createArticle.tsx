import { Form, Input, Button, message, Card, Row, Col } from "antd"
import { createArticle, getArticleList } from "../api/article"
import { createArticleRequest } from "../types/article"
import { useState } from "react"
import { useNavigate  } from "react-router-dom"

const CreateArticlePage = () => {
    const navigator = useNavigate ()
    const [form] = Form.useForm();
    const [markdown, setMarkdown] = useState<string>("")
    const onFinish = (fieldValue: any) => {
        const requestBody: createArticleRequest = {
            title: fieldValue["title"],
            category: fieldValue["category"],
            content: fieldValue["content"],
        }
        createArticle(requestBody).then((response) => {
            message.success("article create successfully")
        })
        navigator("/")
    }
    function handleEditorChange({ html, text }) {
        setMarkdown(text)
    }
    return (
        <Row align="middle" justify="center">
            <Form form={form} onFinish={onFinish}
                layout="horizontal"
                style={{ width: "80%" }}>
                <Card bordered={true} title={
                    <div style={{ lineHeight: "32px" }}>
                        <span>添加文章</span>
                    </div>
                }>
                    <Row gutter={10} style={{ marginBottom: "10px" }}>
                        <Col span={24}>
                            <Form.Item label={"文章标题"} name="title">
                                <Input style={{ width: "100%" }}></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={10} style={{ marginBottom: "10px" }}>
                        <Col span={24}>
                            <Form.Item label={"文章分类"} name="category">
                                <Input style={{ width: "100%" }}></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={10} style={{ marginBottom: "10px" }}>
                        {/* <MdEditor
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                        /> */}
                        <Col span={24}>
                            <Form.Item label={"文章内容"} name="content">
                                <Input.TextArea style={{ width: "100%" }} rows={50}></Input.TextArea>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={16}></Col>
                        <Col span={4}>
                            <Button type="primary" block htmlType="submit">提交</Button>
                        </Col>
                        <Col span={4}>
                            <Button block>取消</Button>
                        </Col>
                    </Row>
                </Card>
            </Form>
        </Row>
    )
}
export default CreateArticlePage