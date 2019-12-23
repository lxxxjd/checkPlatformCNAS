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
class Instrument extends PureComponent {
  state = {
    instruments:[],
    peopleVisible:false,
    instrument:{}
  };

  columns = [
    {
      title: '设备名称',
      dataIndex: 'divicename',
    },

    {
      title: '设备编号',
      dataIndex: 'diviceId',
    },
    {
      title: '检验项目',
      dataIndex: 'inspways',
      render: (text, record) => {
        let  contentStr = [];
        if(text===undefined || text ===null ||text ===""){
          return null;
        }
        contentStr = text.split(" ");
        if (contentStr.length < 2) {
          return text;
        }
        let result = null;
        const br = <br />;
        for( let  j = 0 ; j < contentStr.length ; j ++){
          if(j===0){
            result=contentStr[j];
          }else if(j%3===0){
            result=<span>{result}{br}{contentStr[j]}</span>;
          }else{
            result=<span>{result}&nbsp;{contentStr[j]}</span>;
          }
        }
        return <div>{result}</div>;
      },
    },
    {
      title: '使用日期',
      dataIndex: 'usedate',
      render: val => <span>{
        moment(val).format('YYYY-MM-DD')
      }</span>
    },
    {
      title: '检定日期',
      dataIndex: 'checkdate',
      render: val => <span>{
        moment(val).format('YYYY-MM-DD')
      }</span>
    },
    {
      title: '周期',
      dataIndex: 'checkcycle',
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
    const certcode = sessionStorage.getItem('certcode');
    const { dispatch } = this.props;
    dispatch({
      type: 'main/getInstrumentByReportno',
      payload: {
        reportno,
        certcode
      },
      callback:response =>{
        if (response.code === 200) {
          this.setState({instruments:response.data});
        }
      }
    });
  }
  previewItem = text =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'main/getInstrumentByKeyno',
      payload: {
        keyno:text.keyno
      },
      callback:response =>{
        if (response.code === 200) {
          this.setState({instrument:response.data});
          this.setState({peopleVisible:true});
        }else{
          notification.open({
            message: '查看失败',
            description:response.data,
          });
        }
      }
    });
  };
  back = () =>{
    this.props.history.goBack();
  };
  handleCancel = () => {
    this.setState({
      peopleVisible: false,
    });
  };
  render() {
    const {
      loading,
      dispatch,
    } = this.props;
    const { instruments ,instrument, peopleVisible} = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="middle">
          <Row gutter={16}>
            <Col span={3}>
              <Title level={3}> 仪器设备</Title>
            </Col>
            <Col span={19}>
            </Col>
            <Col span={2}>
              <Button type="primary" style={{ marginLeft: 8 ,paddingLeft:0,paddingRight:15}} onClick={this.back}>
                <Icon type="left" />返回
              </Button>
            </Col>
          </Row>
          <div className={styles.tableList}>
            <Table
              size="middle"
              loading={loading}
              dataSource={instruments}
              columns={this.columns}
              rowKey="keyno"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
        <Modal           
          title="人员"
          visible={peopleVisible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          width={1000}
        >
          <Descriptions size="large" title="业务信息" style={{ marginBottom: 32 }} bordered>
            <Descriptions.Item label="仪器编号">{instrument.diviceId}</Descriptions.Item>
            <Descriptions.Item label="仪器名称">{instrument.divicename}</Descriptions.Item>
、            <Descriptions.Item label="规格/型号">{instrument.specifications}</Descriptions.Item>
            <Descriptions.Item label="国别/生产厂">{instrument.idcard}</Descriptions.Item>
            <Descriptions.Item label="购置日期">{moment(instrument.buydate).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="验收日期">{moment(instrument.acceptdate).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="验收组人员">{instrument.major}</Descriptions.Item>
            <Descriptions.Item label="使用日期">{moment(instrument.usedate).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="使用部门">{instrument.usesection}</Descriptions.Item>
            <Descriptions.Item label="保管人">{instrument.manufacturer}</Descriptions.Item>
            <Descriptions.Item label="价值（万元）" >{instrument.value}</Descriptions.Item>
            <Descriptions.Item label="检定日期">{moment(instrument.checkdate).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="检定周期">{instrument.checkcycle}</Descriptions.Item>
            <Descriptions.Item label="检定单位">{instrument.checkCompany}</Descriptions.Item>
            <Descriptions.Item label="状态">{instrument.status}</Descriptions.Item>
          </Descriptions>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default Instrument;
