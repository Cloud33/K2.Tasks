import Reflux from 'reflux'
import TasksActions from '../actions/TasksActions'

const TasksStores = Reflux.createStore({
    listenables: [TasksActions],
    init:function(){
    	this.tasksData=[];
    	this.taskData={};
    	console.log("Stores Init");
    },
    onLoadTasksData: function (data) {
    	console.log('onLoadTasksData start');
    	this.tasksData=data;
    },
    onLoadTasksDataCompleted: function (data) {
    	console.log('onLoadTasksDataCompleted start');
    },
    onLoadTasksDataFailed: function (data) {
    	console.log('onLoadTasksDataFailed start');
    },
    onLoadTaskData:function(data){
    	console.log('onLoadTasksData task start');
    	this.taskData=data;
    },
    onLoadTaskDataCompleted: function (data) {
    	console.log('onLoadTaskDataCompleted task start');
    },
    onLoadTaskDataFailed: function (data) {
    	console.log('onLoadTaskDataFailed task start');
    },
});

export default TasksStores;