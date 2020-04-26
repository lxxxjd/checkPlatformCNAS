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
class TestRecord extends PureComponent {
  state = {
    visible:false,
    url:"",
  };

  columns = [
    {
      title: '记录名称',
      dataIndex: 'recordname',
    },
    {
      title: '上传日期',
      dataIndex: 'recorddate',
      render: val => <span>{
        moment(val).format('YYYY-MM-DD')
      }</span>
    },
    {
      title: '上传人',
      dataIndex: 'creator',
    },
    {
      title: '操作',
      render: (text, record) => (
        // 能力分析 人员 仪器设备 检查记录 样品清单 测试报告 证稿证书 委托详情
        <Fragment>
          <a onClick={() => this.previewItem(text, record)}>查看</a>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    const reportno = sessionStorage.getItem('reportno');
    const { dispatch } = this.props;
    dispatch({
      type: 'main/getRecordInfo',
      payload: {
        reportno,
        source:"测试报告"
      }
    });
  }
  previewItem = text => {
    const { dispatch } = this.props;
    const reportno = sessionStorage.getItem('reportno');
    dispatch({
      type: 'main/getRecord',
      payload:{
        reportno,
        recordname:text.recordname,
        source:"测试报告",
      },
      callback:(response) =>{
        if(response.code === 400){
          notification.open({
            message: '打开失败',
            description:response.data,
          });
        }else{
          const url = response.data;
          this.setState({url:url});
          //window.open(url);
        }
      }
    });
    this.setState({visible:true});
  };
  back = () =>{
    window.close();
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const {
      main:{recordData},
      loading,
      dispatch,
    } = this.props;
    const { visible,url} = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="middle">
          <Row gutter={16}>
            <Col span={3}>
              <Title level={3}>测试报告</Title>
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
              dataSource={recordData}
              columns={this.columns}
              rowKey="keyno"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
        <Modal
          title="文件"
          visible={visible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          width={1000}
        >
          <embed src={url} style={{width:'100%', height:document.body.clientHeight*0.8}} type="application/pdf" />
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default TestRecord;
