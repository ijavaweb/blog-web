import { Layout, Row ,Col} from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import {Navigate,Link}  from "react-router-dom"
import {GithubOutlined,LinkedinOutlined} from '@ant-design/icons';
const FooterNav = () => {
    return (
        <Layout>
            <Footer style={{ textAlign: 'center' }}>
                <Row>
                    <Col span={24}>
                        <a target="_blank" href="https://github.com/ijavaweb/blog-web"><GithubOutlined style={{ fontSize: '200%', color: '#000',marginRight:20 }} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/jay-guo-409022244/"><LinkedinOutlined style={{ fontSize: '200%', color: '#000' ,marginRight:20}} /></a>
                    </Col>
                </Row>
                <Col span={24} style={{fontSize:16}}>copyright @ijavaweb</Col>
            </Footer>
        </Layout>
    )
}
export default FooterNav