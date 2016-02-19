import React from "react";
import qwest from 'qwest';
import {Table} from 'reactable';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import AppBar from 'material-ui/lib/app-bar';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import IconButton from 'material-ui/lib/icon-button';
import Before from 'material-ui/lib/svg-icons/image/navigate-before';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';
import Dialog from 'material-ui/lib/dialog';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import LinearProgress from 'material-ui/lib/linear-progress';
import Colors from 'material-ui/lib/styles/colors';
import ErrorImg from 'material-ui/lib/svg-icons/alert/error';
import ErrorPage from "../../Error/page";

export default class TaskInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {muiTheme: ThemeManager.getMuiTheme(LightRawTheme),open:'ready',progress:false,dialog:false,message:'',isOK:true,business:[],task:[],error:'',info:'正在加载任务数据中...'};
    this.handleTaskInfoClick = this.handleTaskInfoClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }
  componentWillMount() {
    //console.log("[TaskInfoPage] will mount with server response: ", this.props);
  }
  componentDidMount(){
    //初始化后加载任务数据
    let Mythis=this;
    let task=this.props.params;
    qwest.post('/getTask',{ProcInstID:task.ProcInstID,SN:task.SN,Destination:task.Destination,SharedUser:task.SharedUser})
    .then(function(xhr,response) {
      //console.log(response);
      if (response.status==1) {
        Mythis.setState({task:response,info:null});
      }else{
        Mythis.setState({info:null,error:'任务加载失败，错误日志：'+response.message}); 
      };
    })
    .catch(function(e, xhr, response){
      Mythis.setState({info:null,error:'可能因为网络原因，获取数据失败！错误日志：'+response}); 
    });
    qwest.post('/getBusinessData')
    .then(function(xhr,response) {
      //console.log(response);
      if (response.status==1) {
        Mythis.setState({business:response.data});
      }else{
        Mythis.setState({business:{错误:"没有获取到业务数据，原因："+response.message}});
      };
    })
    .catch(function(e, xhr, response){
      Mythis.setState({business:{错误:"获取到业务数据时出现异常，异常信息："+response}});
      //Mythis.setState({business:{error:'业务数据获取失败。'}});
    });
    
  }
  handleTaskInfoClick(e) {
    //刷新任务
    let Mythis=this;
    let task=this.props.params;
    Mythis.setState({open: 'loading'});
    qwest.post('/getTask',{ProcInstID:task.ProcInstID,SN:task.SN,Destination:task.Destination,SharedUser:task.SharedUser})
    .then(function(xhr,response) {
      Mythis.setState({task:response,open:'ready'});
    })
    .catch(function(e, xhr, response){
      Mythis.setState({open:'ready'});
    });
  }
  handleTaskClick(e){
    //console.log(e);
    e.preventDefault();
    //this.context.router.transitionTo('/');
    this.context.router.goBack();
  }
  handleActionClick(action,e) {
    //处理审批
    this.setState({progress:true});
    let Mythis=this;
    let task=this.state.task.data;
    qwest.post('/executeTask',{ActionName:action,SN:task.SN,Destination:task.Destination,SharedUser:task.SharedUser})
    .then(function(xhr,response) {
        if (response.status==2 ||response.status==3) {
          Mythis.setState({isOK:false,progress:false,dialog:true,message:'审批失败，原因：'+response.message});
        }else{
          Mythis.setState({isOK:true,progress:false,dialog:true,message:'审批成功'});
        };
    })
    .catch(function(e, xhr, response){
        Mythis.setState({isOK:false,progress:false,dialog:true,message:'审批失败，原因：'+response});
    });
    //e.preventDefault();
    
  }
  handleTasksClick(e){
    //console.log(e);
    if (this.state.isOK) {
       e.preventDefault();
      this.context.router.transitionTo('/');
    }else{
      this.setState({dialog:false});
    };
    //this.context.router.goBack();
  }
  
  render() {
    //console.log(this.state.task);
    if (this.state.info) {
        return (<div style={{textAlign: "center"}}><h2>{this.state.info}</h2><br/>
              <CircularProgress mode="indeterminate" color={"rgb(60,79,96)"}  size={2}/>
          </div>);
    };
    if (this.state.error) {
          return <ErrorPage error={this.state.error}  home={true}/>;
      };
    let task=this.state.task.data;
    if (this.state.task.status==2 ||this.state.task.status==3) {
          return <ErrorPage error={this.state.task.message}  home={true}/>;
    };
    //let html=[];
    //if (task.ProcessInstance.constructor==Object) {
    //    if (task.ProcessInstance.DataFields.constructor==Object) {
    //        if (Object.keys(task.ProcessInstance.DataFields).length >0) {
    //          for(let item of Object.keys(task.ProcessInstance.DataFields)){
    //              html.push(<p key={'p'+item}><b>{task.ProcessInstance.DataFields[item].Name}：</b>{task.ProcessInstance.DataFields[item].Value}</p>);
    //          }
    //        };
    //    };
    //};
    //<Card initiallyExpanded={false}>
        //  <CardHeader
        //    titleStyle={{fontWeight:"bold",fontSize:"20px"}}
        //    title="流程DataField信息"
        //    subtitle="流程中DataField信息"
        //    actAsExpander={true}
        //    showExpandableButton={true}/>
        //  <CardText expandable={true}>
        //     {html}
        //  </CardText>
        //</Card>
    let businessHtml=[];

    let business=this.state.business;
    let arrColumn=[];
    if (business) {
      for(let item of Object.keys(business)){
        if(!Array.isArray(business[item])){
           businessHtml.push(<p key={'bup'+item}><b>{item}：</b>{business[item]}</p>);
        }
        else{
            let arr=business[item];
            if (arr.length>0) {
                for (let key of Object.keys(arr[0])) {
                  arrColumn.push(key);
                };
                businessHtml.push(<div id="demo-table"><Table className="reactable-filterer" sortable={true} data={arr} /></div>);
            };
        }
      }
    }else{
      businessHtml.push(<p>没有获取到业务数据。</p>);
    };
    //console.log(arrColumn);
    let buttons=[];
    {Array.from(task.Actions,s=> buttons.push(<span style={{marginRight:"1em",marginBottom:"1em",display:"inline-block"}} key={'span'+s.Name}><RaisedButton backgroundColor={"rgb(60,79,96)"} key={'but'+s.Name} label={s.Name} onTouchTap={this.handleActionClick.bind(this,s.Name)} secondary={true}></RaisedButton></span>))}
    let actions=<RaisedButton label='确定' backgroundColor={"rgb(60,79,96)"} onTouchTap={this.handleTasksClick.bind(this)} secondary={true}></RaisedButton>;
    let progress;
      if (this.state.progress) {
          progress=<LinearProgress mode="indeterminate" color={Colors.redA700}/>;
    };
    return (
      <div >
      <AppBar style={{backgroundColor: "rgb(60,79,96)"}}  title={task.Folio}  iconElementLeft={<IconButton onTouchTap={this.handleTaskClick} ><Before /></IconButton>} 
        iconElementRight={<div onTouchTap={this.handleTaskInfoClick}><RefreshIndicator loadingColor={"rgb(60,79,96)"} percentage={100} size={40} left={0} top={5} status={this.state.open} style={ {position: "relative"} }/> </div>}/>
        <Card initiallyExpanded={true}>
          <CardHeader
            titleStyle={{fontWeight:"bold",fontSize:"20px"}}
            title="申请信息"
            subtitle="流程申请信息"
            actAsExpander={true} 
            showExpandableButton={true}/>
          <CardText expandable={true}>
             <p><b>申请人：</b>{task.Originator}</p>
             <p><b>申请时间：</b>{task.StartDate}</p>
             <p><b>当前环节：</b>{task.ActivityName}</p>
          </CardText>
        </Card>
         <Card initiallyExpanded={false}>
          <CardHeader
            titleStyle={{fontWeight:"bold",fontSize:"20px"}}
            title="业务信息"
            subtitle="跟流程相关的业务信息"
            actAsExpander={true}
            showExpandableButton={true}/>
          <CardText expandable={true}>
             {businessHtml}
          </CardText>
        </Card>
        {progress}
        <Card initiallyExpanded={true}>
          <CardHeader
            titleStyle={{fontWeight:"bold",fontSize:"20px"}}
            title="操作"
            subtitle="选择相关操作进行审批"/>
          <CardText expandable={true}>
             <div style={{textAlign: "center"}}>
              {buttons}
            </div>
          </CardText>
        </Card>
        <Dialog
          title={<IconButton><ErrorImg /></IconButton>}
          actions={actions}
          modal={false}
          open={this.state.dialog}>
          {this.state.message}
        </Dialog>
      </div>
    );
  }
}
TaskInfoPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};