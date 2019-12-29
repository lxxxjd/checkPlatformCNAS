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
class AbilityAnalysis extends PureComponent {
  state = {
    visible:false,
    url:"",
    list:[]
  };

  columns = [
    {
      title: '检查领域',
      dataIndex: 'checkName',
    },
    {
      title: '检查项目',
      dataIndex: 'checkProject',
      render: (text, record) => {
        let  contentStr = [];
        if(text===undefined || text ===null ||text ===""){
          return null;
        }
        contentStr = text.split("|");
        if (contentStr.length < 2) {
          return text;
        }
        let result = null;
        const br = <br />;
        for( let  j = 0 ; j < contentStr.length ; j ++){
          if(j===0){
            result=contentStr[j];
          }else{
            result=<span>{result}{br}{contentStr[j]}</span>;
          }
        }
        return <div>{result}</div>;
      },
    },
    {
      title: '说明',
      dataIndex: 'explain',
    },
    {
      title: '检验标准',
      dataIndex: 'standard',
      render: (text, record) => {
        let  contentStr = [];
        if(text===undefined || text ===null ||text ===""){
          return null;
        }
        contentStr = text.split("|");
        if (contentStr.length < 2) {
          return text;
        }
        let result = null;
        const br = <br />;
        for( let  j = 0 ; j < contentStr.length ; j ++){
          if(j===0){
            result=contentStr[j];
          }else{
            result=<span>{result}{br}{contentStr[j]}</span>;
          }
        }
        return <div>{result}</div>;
      },
    },
    {
      title: '检验员名单',
      dataIndex: 'checkman',
      render: (text, record) => {
        let  contentStr = [];
        if(text===undefined || text ===null ||text ===""){
          return null;
        }
        contentStr = text.split("|");
        if (contentStr.length < 2) {
          return text;
        }
        let result = null;
        const br = <br />;
        for( let  j = 0 ; j < contentStr.length ; j ++){
          if(j===0){
            result=contentStr[j];
          }else{
            result=<span>{result}{br}{contentStr[j]}</span>;
          }
        }
        return <div>{result}</div>;
      },
    },
    {
      title: '状态',
      dataIndex: 'manStatus',
    },
    {
      title: '授权人员',
      dataIndex: 'auther',
      render: (text, record) => {
        let  contentStr = [];
        if(text===undefined || text ===null ||text ===""){
          return null;
        }
        contentStr = text.split("|");
        if (contentStr.length < 2) {
          return text;
        }
        let result = null;
        const br = <br />;
        for( let  j = 0 ; j < contentStr.length ; j ++){
          if(j===0){
            result=contentStr[j];
          }else{
            result=<span>{result}{br}{contentStr[j]}</span>;
          }
        }
        return <div>{result}</div>;
      },
    },
    {
      title: '状态',
      dataIndex: 'autherStatus',
    },
  ];

  componentDidMount() {
    const certcode = sessionStorage.getItem('certcode');
    const { dispatch } = this.props;
    dispatch({
      type: 'main/getAllCNASCheckDetail',
      payload: {
        certcode
      },
      callback:response =>{
        if (response.code === 200) {
          this.setState({list:response.data});
        }
      }
    });
  }

  back = () =>{
    this.props.history.goBack();
  };

  render() {
    const {
      main:{recordData},
      loading,
      dispatch,
    } = this.props;
    const { list } = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="middle">
          <Row gutter={16}>
            <Col span={3}>
              <Title level={3}>能力分析</Title>
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
              dataSource={list}
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

export default AbilityAnalysis;
