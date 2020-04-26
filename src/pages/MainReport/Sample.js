import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage } from 'umi-plugin-react/locale';

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table, message, Modal, DatePicker,Typography, Icon,
  Descriptions
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import styles from '../table.less';

const FormItem = Form.Item;
const { Option } = Select;
const { Title} = Typography;





@connect(({ main, loading }) => ({
  main,
  loading: loading.models.main,
}))
@Form.create()
class Sample extends PureComponent {
  state = {
    visible:false,
    url:"",
    sample:[]
  };

  columns = [
    {
      title: '样品编号',
      dataIndex: 'sampleno',
    },
    {
      title: '样品名称',
      dataIndex: 'samplename',
    },
    {
      title: '样品用途',
      dataIndex: 'sampleuse',
    },
    {
      title: '制样日期',
      dataIndex: 'makingdate',
      render: val => <span>{
        moment(val).format('YYYY-MM-DD')
      }</span>
    },
    {
      title: '重量数量',
      dataIndex: 'weight',
    },
    {
      title: '保存位置',
      dataIndex: 'position',
    },
    {
      title: '状态',
      dataIndex: 'state',
    },
  ];

  componentDidMount() {
    const reportno = sessionStorage.getItem('reportno');
    const { dispatch } = this.props;
    dispatch({
      type: 'main/selectSampleByReportno',
      payload: {
        reportno
      },
      callback:response =>{
        if (response.code === 200) {
          this.setState({sample:response.data.list});
        }
      }
    });
  }

  back = () =>{
    window.close();
  };

  render() {
    const {
      main:{recordData},
      loading,
      dispatch,
    } = this.props;
    const { sample} = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="middle">
          <Row gutter={16}>
            <Col span={3}>
              <Title level={3}>样品清单</Title>
            </Col>
            <Col span={19}>
            </Col>
            <Col span={2}>
              <Button type="primary" style={{ marginLeft: 8 ,paddingLeft:0,paddingRight:15}} onClick={this.back}>
                <Icon style={{paddingLeft:5}} type="close" />关闭
              </Button>
            </Col>
          </Row>
          <div className={styles.tableList}>
            <Table
              size="middle"
              loading={loading}
              dataSource={sample}
              columns={this.columns}
              rowKey="keyno"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Sample;
