import React from "react";
import qwest from 'qwest';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import ListItem from 'material-ui/lib/lists/list-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Divider from 'material-ui/lib/divider';
//import { Link,Navigation } from "react-router";

export default class TaskPage extends React.Component{
  constructor(props) {
    super(props);
    this.state= {muiTheme: ThemeManager.getMuiTheme(LightRawTheme),open:'ready'};
    this.handleClick = this.handleClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
  }
  
  componentWillMount() {
    //console.log("[TaskPage] will mount with server response: ", Navigation);
  }
  handleClick(e) {
    //进入任务详情页面
    e.preventDefault();
    let task=this.props.task;
    let url=encodeURI('/task/'+task.SN+'/'+task.ProcInstID+'/'+task.Destination+'/'+task.SharedUser);
    this.context.router.transitionTo(url);
  }
  handleActionClick(e) {
    //处理审批
    e.preventDefault();
    this.props.handleApplyTasksChange.handleApplyTasksChange();
    let mythis=this;
    let action=e.target.textContent;
    let task=this.props.task;
    
    qwest.post('/executeTask',{ActionName:action,SN:task.SN,Destination:task.Destination,SharedUser:task.SharedUser})
    .then(function(xhr,response) {
        if (response.status==2 ||response.status==3) {
          //console.log('审批失败，原因：'+response.message);
          mythis.props.handleErrorTasksChange.handleErrorTasksChange();
        }else{
          mythis.props.handleDelTasksChange.handleDelTasksChange(task);
        };
    })
    .catch(function(e, xhr, response){
        //console.log('执行审批操作时出现错误！');
        mythis.props.handleErrorTasksChange.handleErrorTasksChange();
    });
  }
  render() {
    const iconButtonElement = (
          <IconButton
            touch={true}
            tooltip="处理"
            tooltipPosition="bottom-left">
            <MoreVertIcon/>
          </IconButton>
    );
    let rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement} onItemTouchTap={this.handleActionClick}>
        {Array.from(this.props.task.Actions,s=> <MenuItem key={"item"+s.Name}>{s.Name}</MenuItem>)}
      </IconMenu>
    );
    return (
      <div>
      <ListItem
          onTouchTap={this.handleClick}
          rightIconButton={rightIconMenu}
          primaryText={this.props.task.Folio}
          secondaryText={
            <p>
              由 {this.props.task.Originator} <br/>
              在 {this.props.task.StartDate} 时申请  <span style={{float:'right'}}>当前环节 {this.props.task.ActivityName}</span>
            </p>
          }
          secondaryTextLines={2} />
          <Divider/>
          </div>
    );
  }
}
TaskPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};