import Reflux from 'reflux';
import { getData } from "../common/request";


const TasksActions = Reflux.createActions([
    {loadTasksData:{asyncResult:true}},
    {loadTaskData:{asyncResult:true}}
]);

TasksActions.loadTasksData.listen(function(geturl){
	console.log('loadTasksData url:'+geturl);
	return getData("/tasks");
});
TasksActions.loadTaskData.listen(function(params){
	console.log('loadTasksData url:'+params+',id:'+params);
	return getData("/getTask",params);
});

export default TasksActions;