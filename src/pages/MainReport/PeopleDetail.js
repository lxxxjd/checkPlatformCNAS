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
class PeopleDetail extends PureComponent {
  state = {
    man:[],
    peopleVisible:false,
    manDetail:{}
  };

  columns = [
    {
      title: '检验人员',
      dataIndex: 'inspman',
    },

    {
      title: '联系方式',
      dataIndex: 'tel',
    },
    {
      title: '任务',
      dataIndex: 'inspway',
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
      type: 'main/getAllMan',
      payload: {
        reportno,
        certcode
      },
      callback:response =>{
        if (response.code === 200) {
          this.setState({man:response.data});
        }
      }
    });
  }
  previewItem = text =>{
    const { dispatch } = this.props;
    const certcode = sessionStorage.getItem('certcode');
    dispatch({
      type: 'main/getUserByCertCodeAndName',
      payload: {
        certcode : certcode,
        nameC : text.inspman,
      },
      callback:response =>{
        if (response.code === 200) {
          this.setState({manDetail:response.data});
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
    const { man ,manDetail, peopleVisible} = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="middle">
          <Row gutter={16}>
            <Col span={3}>
              <Title level={3}> 人员详情</Title>
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
              dataSource={man}
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
            <Descriptions.Item label="姓名">{manDetail.nameC}</Descriptions.Item>
            <Descriptions.Item label="用户名">{manDetail.userName}</Descriptions.Item>
            <Descriptions.Item label="性别">{manDetail.sex}</Descriptions.Item>
            <Descriptions.Item label="出生年月">{moment(manDetail.birthday).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="身份证号">{manDetail.idcard}</Descriptions.Item>
            <Descriptions.Item label="电话">{manDetail.applicanttel}</Descriptions.Item>
            <Descriptions.Item label="文化程度">{manDetail.education}</Descriptions.Item>
            <Descriptions.Item label="所学专业">{manDetail.major}</Descriptions.Item>
            <Descriptions.Item label="职务">{manDetail.workduty}</Descriptions.Item>
            <Descriptions.Item label="所在部门">{manDetail.section}</Descriptions.Item>
            <Descriptions.Item label="入岗日期">{moment(manDetail.enterdate).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="本专业年限">{manDetail.majoryears}</Descriptions.Item>
            <Descriptions.Item label="本岗位年限" >{manDetail.workyears}</Descriptions.Item>
            <Descriptions.Item label="是否授权签字人">{manDetail.reportno20}</Descriptions.Item>
            <Descriptions.Item label="系统角色">{manDetail.businesssort}</Descriptions.Item>
          </Descriptions>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default PeopleDetail;
