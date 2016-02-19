import React from "react";
import ReactDOM from 'react-dom';
import qwest from 'qwest';
import debounce from 'lodash.debounce';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import AppBar from 'material-ui/lib/app-bar';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import IconButton from 'material-ui/lib/icon-button';
import ActionList from 'material-ui/lib/svg-icons/action/list';
import List from 'material-ui/lib/lists/list';
import TextField from 'material-ui/lib/text-field';
import ActionSearch from 'material-ui/lib/svg-icons/action/search';
import Colors from 'material-ui/lib/styles/colors';
import LinearProgress from 'material-ui/lib/linear-progress';
import CircularProgress from 'material-ui/lib/circular-progress';
import Snackbar from 'material-ui/lib/snackbar';
import Task from "./task";
import ErrorPage from "../../Error/page";


export default class TasksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {muiTheme: ThemeManager.getMuiTheme(LightRawTheme),open:'ready',search:false,progress:false,snackbar:false,message:'',tasks:[],filteredtasks:[],error:'',info:'loading ... '};
    this.handleRefreshTasksClick = this.handleRefreshTasksClick.bind(this);
    this.handleSearchTasksClick=this.handleSearchTasksClick.bind(this);
    this.handleSearchTasksChange=this.handleSearchTasksChange.bind(this);
  }
  handleRefreshTasksClick(e) {
    let Mythis=this;
    Mythis.setState({open: 'loading'});
    qwest.post('/tasks',{username:window.sessionStorage.TasksUser}).then(function(xhr,response) {
      if (response.status==2 ||response.status==3) {
          Mythis.setState({info:null,open:'ready',error:'获取任务中心列表失败，错误日志：'+response.message}); 
       }else{
          Mythis.setState({tasks:response,filteredtasks:response.data,info:null,open:'ready'});
       };
    })
    .catch(function(e, xhr, response){
      Mythis.setState({open:'ready'});
    });
  }
  handleSearchTasksClick(e) {
    if (this.state.search) {
      this.setState({search:false,filteredtasks:this.state.tasks.data,open:'ready'});
    }else{
      this.setState({search:true,open:'hide'});
      //console.log(this.refs);
      //this.refs.myTextSearch.focus();
      
    }
  }
  handleSearchTasksChange(e) {
    e.preventDefault();
    this.inputCallback(e);
  }
  handleDelTasksChange(task) {
    //console.log(task);
    let i=this.state.filteredtasks.indexOf(task);
    if (i!=-1) {
      this.state.filteredtasks.splice(i, 1);
    };
    this.setState({progress:false,snackbar:true,message:'审批成功！'});
  }
  handleErrorTasksChange() {
    //失败
    this.setState({progress:false,snackbar:true,message:'审批失败，请联系管理员！'});
  }
  handleApplyTasksChange() {
    this.setState({progress:true});
  }
  handleRequestClose(){
    this.setState({snackbar:false});
  }
  componentWillMount() {
    //debounce 
    this.inputCallback = debounce(function (e) {
      //console.log(e.target.value.toLocaleUpperCase());
      if (e.target.value) {
        let tasks=this.state.tasks.data.filter(function(task) {
          return (task.Folio.toLocaleUpperCase().indexOf(e.target.value.toLocaleUpperCase()) > -1||task.Originator.toLocaleUpperCase().indexOf(e.target.value.toLocaleUpperCase()) > -1);
        });
        this.setState({filteredtasks:tasks});
      }
      else{
        this.setState({filteredtasks:this.state.tasks.data});
      };
    }, 500);
  }
  componentDidMount(){
    let Mythis=this;
    //console.log('tasks user:'+window.sessionStorage.TasksUser);
    if (window.sessionStorage.TasksUser) {
      Mythis.setState({info:'正在获取任务中心列表...'}); 
      qwest.post('/tasks',{username:window.sessionStorage.TasksUser}).then(function(xhr,response) {
        if (response.status==2 ||response.status==3) {
          Mythis.setState({info:null,error:'获取任务中心列表失败，错误日志：'+response.message}); 
        }else{
          Mythis.setState({tasks:response,filteredtasks:response.data,info:null,error:null});
        };
        
      })
      .catch(function(e, xhr, response){
        Mythis.setState({info:null,error:'可能因为网络原因，获取数据失败！'}); 
      });
    }else{
      Mythis.setState({info:'验证身份中...'}); 
      qwest.post('/login',{username:window.sessionStorage.Account,token:window.sessionStorage.Token}).then(function(xhr,response) {
        //console.log(response);
        if (response.status==2 ||response.status==3) {
          Mythis.setState({info:null,error:'验证身份失败，错误日志：'+response.message}); 
        }else{
          Mythis.setState({info:'验证身份成功，正在获取任务中心列表...'}); 
          window.sessionStorage.TasksUser=response.data;
          qwest.post('/tasks',{username:window.sessionStorage.TasksUser}).then(function(xhr,response) {
              if (response.status==2 ||response.status==3) {
                Mythis.setState({info:null,error:'获取任务中心列表失败，错误日志：'+response.message}); 
              }else{
                Mythis.setState({tasks:response,filteredtasks:response.data,info:null});
              };
            })
            .catch(function(e, xhr, response){
              Mythis.setState({info:null,error:'可能因为网络原因，获取数据失败！'}); 
            });
        };
       
      })
      .catch(function(e, xhr, response){
        Mythis.setState({info:null,error:'在验证身份出现问题，请联系管理员！'}); 
      });
    };
  }
  render() {
      if (this.state.info) {
        return (<div style={{textAlign: "center"}}><h2>{this.state.info}</h2><br/>
              <CircularProgress color={"rgb(60,79,96)"} mode="indeterminate" size={2}/>
          </div>);
      };
      //error
      if (this.state.error) {
          return <ErrorPage error={this.state.error} home={false}/>;
      };
      let appTitle;
      if (this.state.search) {
        appTitle=(<TextField ref="mySearch" onChange={this.handleSearchTasksChange} hintText="Search Tasks" underlineFocusStyle={{borderColor: Colors.amber900}} underlineStyle={{borderColor:Colors.amber100}}></TextField>);
      }else{
        appTitle=(<span>任务中心</span>);
      };
      let progress;
      if (this.state.progress) {
          progress=<LinearProgress mode="indeterminate" color={Colors.redA700}/>;
      };
      let handleDelTasksChange = { handleDelTasksChange: this.handleDelTasksChange.bind(this) };
      let handleErrorTasksChange = { handleErrorTasksChange: this.handleErrorTasksChange.bind(this) };
      let handleApplyTasksChange = { handleApplyTasksChange: this.handleApplyTasksChange.bind(this) };
      let taskList;
      if (this.state.tasks.data.length>0) {
            taskList=<List>
              {Array.from(this.state.filteredtasks,s=> <Task handleDelTasksChange={handleDelTasksChange} 
                handleErrorTasksChange={handleErrorTasksChange}
                handleApplyTasksChange={handleApplyTasksChange}
               task={s} key={s.SN}>{s.Folio}</Task>)}
          </List>;
          }else{
            taskList=<List subheader="您并没有待办任务需要处理。" subheaderStyle={{textAlign: "center"}}>
            </List>;
        };
      return (
       <div>
          <AppBar style={{backgroundColor: "rgb(60,79,96)"}}  title={appTitle}  iconElementLeft={<IconButton  onTouchTap={this.handleSearchTasksClick} ><ActionSearch /></IconButton>} 
          iconElementRight={<div onTouchTap={this.handleRefreshTasksClick}><RefreshIndicator loadingColor={"rgb(60,79,96)"} percentage={100} size={40} left={0} top={5} status={this.state.open} style={ {position: "relative"} }/> </div>}/>
          {progress}
          <Snackbar open={this.state.snackbar} message={this.state.message} action="" autoHideDuration={3000} onRequestClose={this.handleRequestClose.bind(this)}/>
          {taskList}
        </div>
      );
  }
}
