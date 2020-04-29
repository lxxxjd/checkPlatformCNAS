import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table, message, Icon,
  Checkbox,
  Image, Modal, Descriptions,Switch,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import queryStyles from './MainQuery.less'
import styles from '../table.less';





// 查看框
const ReviewFrom = (props => {
  const { modalReviewVisible, handleModalReviewVisible,modalInfo  } = props;

  // 处理操作时间
  const handleDate = (val) => {
    if(val!==undefined && val!==null){
      return  <span>{ moment(val).format('YYYY-MM-DD')}</span>;
    }
    return null;
  };
  // 处理操作时间
  const date = handleDate(modalInfo.makingdate);
  return (
    <Modal
      destroyOnClose
      title="查看委托详情"
      visible={modalReviewVisible}
      style={{ top: 100 }}
      width={800}
      onCancel={() => handleModalReviewVisible()}
      footer={[
        <Button type="primary" onClick={() => handleModalReviewVisible()}>
          关闭
        </Button>
      ]}
    >
      <Descriptions bordered>
        <Descriptions.Item label="委托编号">{modalInfo.reportno}</Descriptions.Item>
        <Descriptions.Item label="船名标识">{modalInfo.shipname}</Descriptions.Item>
        <Descriptions.Item label="检查品名">{modalInfo.cargoname}</Descriptions.Item>
        <Descriptions.Item label="委托编号">{modalInfo.cargoname}</Descriptions.Item>
        <Descriptions.Item label="委托名称">{modalInfo.samplename}</Descriptions.Item>
        <Descriptions.Item label="委托用途">{modalInfo.sampleuse}</Descriptions.Item>
        <Descriptions.Item label="持有人">{modalInfo.duration}</Descriptions.Item>
        <Descriptions.Item label="保存天数">{modalInfo.reportno}</Descriptions.Item>
        <Descriptions.Item label="存放位置">{modalInfo.position}</Descriptions.Item>
        <Descriptions.Item label="制备日期">{date}</Descriptions.Item>
        <Descriptions.Item label="状态">{modalInfo.status}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
});




let id = 0;

// 正文页面
const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

/* eslint react/no-multi-comp:0 */
@connect(({ main, loading }) => ({
  main,
  loading: loading.models.main,
}))
@Form.create()
class MainQuery extends PureComponent {
  state = {
    modalReviewVisible:false,
    modalInfo :{},
    mainResult:[],
  };
  columns = [
    {
      title: '委托编号',
      dataIndex: 'reportno',
    },
    {
      title: '委托日期',
      dataIndex: 'reportdate',
      render: val => <span>{
        moment(val).format('YYYY-MM-DD')
      }</span>
    },
    {
      title: '检验机构',
      dataIndex: 'namec',
    },
    {
      title: '检查品名',
      dataIndex: 'cargoname',
    },
    {
      title: '检验项目',
      dataIndex: 'inspway',
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
      title: '操作',
      render: (text, record) => (
        // 能力分析 人员 仪器设备 检查记录 样品清单 测试报告 证稿证书 委托详情
        <Fragment>
          <a onClick={() => this.abilityItem(text, record)}>能力分析</a>
          &nbsp;&nbsp;
          <a onClick={() => this.peopleItem(text, record)}>人员详情</a>
          &nbsp;&nbsp;
          <a onClick={() => this.instrumentItem(text, record)}>仪器设备</a>
          &nbsp;&nbsp;
          <a onClick={() => this.recordItem(text, record)}>检查记录</a>
          &nbsp;&nbsp;
          <br />
          <a onClick={() => this.sampleItem(text, record)}>样品清单</a>
          &nbsp;&nbsp;
          <a onClick={() => this.testRecordItem(text, record)}>测试报告</a>
          &nbsp;&nbsp;
          <a onClick={() => this.certItem(text, record)}>证稿证书</a>
          &nbsp;&nbsp;
          <a onClick={() => this.previewItem(text, record)}>委托详情</a>
        </Fragment>
      ),
    },
  ];


  componentDidMount() {
    this.init();
  }

  // eslint-disable-next-line react/sort-comp
  init =() =>{
    const { dispatch } = this.props;
    const params = {
    };
    dispatch({
      type: 'main/getReportByCNAS',
      payload: params,
      callback: (response) => {
          this.state.mainResult = response;
      }
    });
  };

  abilityItem = text => {
    sessionStorage.setItem('certcode',text.certcode);
    window.open("/checkPlatformCNAS/MainReport/AbilityAnalysis");
  };

  previewItem = text => {
    sessionStorage.setItem('reportno',text.reportno);
    window.open("/checkPlatformCNAS/MainReport/DetailForEnturstment");
  };

  testRecordItem = text =>{
    sessionStorage.setItem('reportno',text.reportno);
    window.open("/checkPlatformCNAS/MainReport/TestRecord");
  };

  certItem = text =>{
    sessionStorage.setItem('reportno',text.reportno);
    window.open("/checkPlatformCNAS/MainReport/CertFile");
  };

  sampleItem = text =>{
    sessionStorage.setItem('reportno',text.reportno);
    window.open("/checkPlatformCNAS/MainReport/Sample");
  };

  recordItem = text =>{
    sessionStorage.setItem('reportno',text.reportno);
    window.open("/checkPlatformCNAS/MainReport/Record");
  };

  instrumentItem = text =>{
    sessionStorage.setItem('reportno',text.reportno);
    sessionStorage.setItem('certcode',text.certcode);
    window.open("/checkPlatformCNAS/MainReport/Instrument");
  };

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.init();
    this.flag = 0;

  };

  peopleItem = text =>{
    sessionStorage.setItem('reportno',text.reportno);
    sessionStorage.setItem('certcode',text.certcode);
    window.open("/checkPlatformCNAS/MainReport/PeopleDetail");
  };



  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err){
        console.log(err);
        return;
      }
      let mkinds=[];
      let mvalues=[];
      let mconditions=[];

      if( fieldsValue.check ===true && fieldsValue.kind !==undefined &&fieldsValue.value !==undefined &&fieldsValue.condition !== undefined ){
        mkinds.push(fieldsValue.kind );
        mvalues.push(fieldsValue.value);
        mconditions.push(fieldsValue.condition );
      }
      const keys = form.getFieldValue('keys');
      for(let key in keys){
        let k = keys[key];
        console.log(k);
        const kind = form.getFieldValue(`kinds${k}`);
        const condition = form.getFieldValue(`conditions${k}`);
        const value = form.getFieldValue(`values${k}`);
        const checkk = form.getFieldValue(`check${k}`);
        if( checkk ===true &&  kind!==undefined &&value !==undefined &&condition !== undefined ){
          mkinds.push(kind );
          mvalues.push(value);
          mconditions.push(condition);
        }
      }
      const params = {
        kinds :mkinds,
        values: mvalues,
        conditions:mconditions,
      };
      dispatch({
        type: 'main/getReportByCNAS',
        payload: params,
        callback: (response) => {
          this.state.mainResult = response;
        }
      });
    });
  };

  handleReview = (flag,text) => {
    this.handleModalReviewVisible(flag);
    this.state.modalInfo = text;
  };



  handleModalReviewVisible = (flag) => {
    this.setState({
      modalReviewVisible: !!flag,
    });
  };



  // eslint-disable-next-line react/sort-comp
  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 6, lg: 18, xl: 5 }}>
          <Col md={1} sm={20}>
            <Form.Item
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 6 }}
              colon={false}
            >
              {getFieldDecorator('check', {
                initialValue: true,
                valuePropName: 'checked',
              })(
                <Switch checkedChildren="开" unCheckedChildren="关"  />
              )}
            </Form.Item>
          </Col>
          <Col md={3} sm={20}>
            <Form.Item
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 6 }}
              colon={false}
            >
              {getFieldDecorator('kind', {
                initialValue:"reportno",
                rules: [{  message: '选择字段' }],
              })(
                <Select placeholder="选择字段">
                  <Option value="reportno"> 委托编号</Option>
                  <Option value="shipname">船名标识</Option>
                  <Option value="cargoname">检查品名</Option>
                  <Option value="inspway">检验项目</Option>
                  <Option value="company.namec">检验机构</Option>
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col md={3} sm={20}>
            <Form.Item
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 6 }}
              colon={false}
            >
              {getFieldDecorator('condition', {
                initialValue:"=",
                rules: [{  message: '条件' }],
              })(
                <Select placeholder="条件">
                  <Option value="=">等于</Option>
                  <Option value="!=">不等于</Option>
                  <Option value="like">包含</Option>
                  <Option value="not like">不包含</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={4} sm={20}>
            <FormItem>
              {getFieldDecorator('value',{rules: [{ message: '请输入' }],})(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={1} sm={20}>  <Icon type="plus-circle" style={{fontSize:24, marginLeft: 8 ,marginTop:4}} theme='twoTone' twoToneColor="#00ff00" onClick={this.add} /></Col>

          <Col md={8} sm={20}>
            <span className={styles.submitButtons}>
              <Button style={{ marginLeft: 0 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleAdvanceSearch}>
                高级检索
              </Button>
              <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit">
                查询
              </Button>
            </span>
          </Col>
        </Row>

      </Form>
    );
  }


  remove = k => {
    const { form } = this.props;
       // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    // if (keys.length === 1) {
    //   return;
    // }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });


  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // eslint-disable-next-line no-plusplus
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };


  flag = 0;
  handleAdvanceSearch =()=>{
    if(this.flag ===0){
      let i =4;
      while(i>0){
        this.add();
        // eslint-disable-next-line no-plusplus
        i--;
      }
      this.flag = 1;
    }
  };


  render() {
    const {
      loading,
    } = this.props;


    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const { modalReviewVisible,modalInfo ,mainResult, } = this.state;
    const parentMethods = {
      handleModalReviewVisible:this.handleModalReviewVisible,
    };

    const formItems = keys.map((k, index) => (
      <div>
        { index %2===0 && keys.length!==0? (
          <Row className={queryStyles.rowClass} />
        ) : null}
        <Col md={1} sm={20}>
          <Form.Item
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 6 }}
            colon={false}
          >
            {getFieldDecorator(`check${k}`, {
              initialValue: true,
              valuePropName: 'checked',
            })(
              <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
            )}
          </Form.Item>
        </Col>
        <Col md={3} sm={20}>
          <Form.Item
            style={{marginRight:8}}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 6 }}
          >
            {getFieldDecorator(`kinds${k}`, {
              rules: [{  message: '选择字段' }],
            })(
              <Select placeholder="选择字段">
                <Option value="reportno"> 委托编号</Option>
                <Option value="shipname">船名标识</Option>
                <Option value="cargoname">检查品名</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
        <Col md={3} sm={20}>
          <Form.Item
            style={{marginRight:8}}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 6 }}
          >
            {getFieldDecorator(`conditions${k}`, {
              rules: [{  message: '选择条件' }],
            })(
              <Select placeholder="选择条件">
                <Option value="=">等于</Option>
                <Option value="!=">不等于</Option>
                <Option value="like">包含</Option>
                <Option value="not like">不包含</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
        <Col md={4} sm={10}>
          <FormItem>
            {getFieldDecorator(`values${k}`,{rules: [{ message: '选择数值' }],})(<Input placeholder="请输入" />)}
          </FormItem>
        </Col>
        <Col md={1} sm={5}>
          {keys.length >= 1 ? (
            <Icon style={{fontSize:24,marginLeft:8}} type="minus-circle" theme='twoTone' twoToneColor="#ff0000" onClick={() => this.remove(k)} />
              ) : null}
        </Col>
      </div>
    ));



    return (
      <PageHeaderWrapper title="委托查询">
        <ReviewFrom {...parentMethods} modalReviewVisible={modalReviewVisible} modalInfo={modalInfo} />
        <Card bordered={false} size="small">
          <Form onSubmit={this.handleSubmit}>
            <div className={styles.tableListForm}>{this.renderSimpleForm()}</div>
            <Row className={styles.tableListForm}>{formItems}</Row>
          </Form>
          <div className={styles.tableList}>
            <Table
              size="middle"
              rowKey="reportno"
              loading={loading}
              dataSource={mainResult}
              pagination={{showQuickJumper:true,showSizeChanger:true}}
              columns={this.columns}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default MainQuery;
