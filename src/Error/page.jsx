import React from "react";
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import LinearProgress from 'material-ui/lib/linear-progress';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import ErrorImg from 'material-ui/lib/svg-icons/alert/error';
import AcctionHome from 'material-ui/lib/svg-icons/action/home';

export default class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {muiTheme: ThemeManager.getMuiTheme(LightRawTheme),error:''};
    this.handleTasksClick = this.handleTasksClick.bind(this);
  }
  componentWillMount() {
    //console.log("[TaskInfoPage] will mount with server response: ", this.props);
  }
  componentDidMount(){
    //初始化后加载任务数据
  }
  handleTasksClick(e){
    e.preventDefault();
    this.context.router.transitionTo('/');
    //this.context.router.goBack();
  }

  render() {
  	let homeHtml;
  	if (this.props.home) {
  		homeHtml=<IconButton onTouchTap={this.handleTasksClick} ><AcctionHome /></IconButton>;
  	};
    let coler= Colors.red900;
    let title="应用出现错误";
    let tableCard="错误信息";
    let subtitle="应用错误的详细信息";
    let error=this.props.error;
    let acrdColer="red";
    if (error.indexOf("24411")!=-1) {
        if (error.indexOf("is not allowed to open the worklist item")!=-1) {
            coler="rgb(60,79,96)";
            title="应用消息提醒";
            tableCard="消息提醒";
            subtitle="应用消息提醒详细信息";
            error="此待办工作项已处理，无法再次加载。";
            acrdColer="";
        };
    };
    return (
      <div >
      <AppBar style={{backgroundColor: coler}} title={title}  iconElementLeft={<IconButton><ErrorImg /></IconButton>}
      iconElementRight={homeHtml}/>
        <Card initiallyExpanded={true}>
          <CardHeader
            titleStyle={{fontWeight:"bold",fontSize:"20px"}}
            title={tableCard}
            subtitle={subtitle}
            actAsExpander={true} 
            showExpandableButton={true}/>
          <CardText expandable={true}>
          	 <div  style={{color: acrdColer}}>
             	{error}
             </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
ErrorPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};
