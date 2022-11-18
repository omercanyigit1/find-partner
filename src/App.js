import data from './data.json';
import { Col, Divider, Layout, List, Row } from 'antd';
import { getBirthdayGuys } from './utils';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Divider orientation="middle">PS Interactive</Divider>
        <Content>
            <Row gutter={[16, 30]}>
              <Col span={6}>
                <List
                  size="small"
                  header={<h2>List of all partners</h2>}
                  footer={null}
                  bordered
                  dataSource={data.locations}
                  renderItem={(item) => <List.Item>{item.name}</List.Item>}
                />
              </Col>
              <Col span={10}>
                <h3>Let's call any partner to celebrate their birthday in the our Sofia Office </h3>
                <List
                  size="small"
                  header={null}
                  footer={null}
                  bordered
                  dataSource={getBirthdayGuys()}
                  renderItem={(item) => <List.Item>{item.name}</List.Item>}
                />
              </Col>
            </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
