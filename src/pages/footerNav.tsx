import { Layout, Menu } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
const { Header } = Layout;

const FooterNav = () => {
    return (
        <Layout>
            <Footer style={{ textAlign: 'center' }}>
                copyright @ijavaweb
            </Footer>
        </Layout>
    )
}
export default FooterNav