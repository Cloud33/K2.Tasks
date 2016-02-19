var express = require('express');
var app = express();


/************************************************************
 *
 * Express routes for:
 *   - app.js
 *   - style.css
 *   - index.html
 *
 *   Sample endpoints to demo async data fetching:
 *     - POST /landing
 *     - POST /home
 *
 ************************************************************/

// Serve application file depending on environment
app.get('/app.js', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/app.js');
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});
// Serve application file depending on environment
app.get('/table.css', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/table.css');
  } else {
    res.redirect('//localhost:9090/build/table.css');
  }
});
// Serve aggregate stylesheet depending on environment
app.get('/style.css', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/style.css');
  } else {
    res.redirect('//localhost:9090/build/style.css');
  }
});

// Serve index page
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});
app.post('/tasks', function(req, res) {
  res.json({
    "status": 1,
    "message": "",
    "data": [
        {
            "ProcInstID": 447,
            "Folio": "Deliotte Expense Claims Workflow---2015-12-29 07:47:20Z",
            "StartDate": "2015-12-29 15:45",
            "ActivityName": "GDC Finance Payment",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "447_166",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Submit",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 447,
            "Folio": "Deliotte Expense Claims Workflow---2015-12-29 07:47:20Z",
            "StartDate": "2015-12-29 15:45",
            "ActivityName": "GDC Finance Payment",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "447_162",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Submit",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 451,
            "Folio": "Deliotte Expense Claims Workflow---2015-12-29 09:27:32Z",
            "StartDate": "2015-12-29 17:27",
            "ActivityName": "GDC Finance Check",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "451_118",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Submit",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 451,
            "Folio": "Deliotte Expense Claims Workflow---2015-12-29 09:27:32Z",
            "StartDate": "2015-12-29 17:27",
            "ActivityName": "GDC Finance Check",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "451_114",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Submit",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 450,
            "Folio": "Deliotte Expense Claims Workflow---2015-12-29 09:16:14Z",
            "StartDate": "2015-12-29 17:14",
            "ActivityName": "Receive Claims Bills",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "450_28",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Express and Save Status",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 449,
            "Folio": "Deliotte Expense Claims Workflow---2015-12-29 09:06:34Z",
            "StartDate": "2015-12-29 17:04",
            "ActivityName": "Receive Claims Bills",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "449_28",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Express and Save Status",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 377,
            "Folio": "EC-20151224- 0009",
            "StartDate": "2015-12-24 17:25",
            "ActivityName": "财务审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "377_40",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "同意",
                    "MetaData": "同意"
                },
                {
                    "Name": "拒绝",
                    "MetaData": "拒绝"
                },
                {
                    "Name": "加签",
                    "MetaData": "加签"
                }
            ]
        },
        {
            "ProcInstID": 374,
            "Folio": "TR-201512220028",
            "StartDate": "2015-12-22 17:46",
            "ActivityName": "主管领导审批",
            "Originator": "K2:DENALLIX\\Anthony",
            "SN": "374_17",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "同意",
                    "MetaData": "同意"
                },
                {
                    "Name": "拒绝",
                    "MetaData": "拒绝"
                },
                {
                    "Name": "加签",
                    "MetaData": "加签"
                }
            ]
        },
        {
            "ProcInstID": 373,
            "Folio": "EC-201512220006",
            "StartDate": "2015-12-22 17:37",
            "ActivityName": "主管领导审批",
            "Originator": "K2:DENALLIX\\Anthony",
            "SN": "373_17",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "同意",
                    "MetaData": "同意"
                },
                {
                    "Name": "拒绝",
                    "MetaData": "拒绝"
                },
                {
                    "Name": "加签",
                    "MetaData": "加签"
                }
            ]
        },
        {
            "ProcInstID": 353,
            "Folio": "LR-000001",
            "StartDate": "2015-12-16 15:02",
            "ActivityName": "HR Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "353_33",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 231,
            "Folio": "4-DENALLIX\\Administratort提交了办公用品需求与领用申请，请尽快处理",
            "StartDate": "2015-04-29 18:56",
            "ActivityName": "车间主任",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "231_26",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "同意",
                    "MetaData": ""
                },
                {
                    "Name": "不同意",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 317,
            "Folio": "test_001",
            "StartDate": "2015-09-16 10:57",
            "ActivityName": "Originator",
            "Originator": "K2:DENALLIX\\administrator",
            "SN": "317_19",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "chongtijiao",
                    "MetaData": ""
                },
                {
                    "Name": "chexiao",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 64,
            "Folio": "CID00000001 -2014-07-09 02:07:11Z",
            "StartDate": "2014-07-08 19:07",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "64_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 209,
            "Folio": "CID00000001 -2015-03-24 02:23:44Z",
            "StartDate": "2015-03-24 10:23",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "209_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 201,
            "Folio": "CID00000001 -2015-02-11 02:10:52Z",
            "StartDate": "2015-02-11 10:10",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "201_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 193,
            "Folio": "CID00000001 -2014-12-19 11:00:58Z",
            "StartDate": "2014-12-19 19:00",
            "ActivityName": "010_填写表单",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "193_14",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 192,
            "Folio": "CID00000001 -2014-12-19 10:57:41Z",
            "StartDate": "2014-12-19 18:57",
            "ActivityName": "010_填写表单",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "192_14",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 184,
            "Folio": "Budget Request:2014-12-04 06:30:23Z",
            "StartDate": "2014-12-04 14:30",
            "ActivityName": "Rework",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "184_16",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 180,
            "Folio": "CID00000001 -2014-11-25 04:00:22Z",
            "StartDate": "2014-11-25 12:00",
            "ActivityName": "010_填写表单",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "180_14",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 179,
            "Folio": "Budget Request:2014-11-25 03:57:12Z",
            "StartDate": "2014-11-25 11:57",
            "ActivityName": "Rework",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "179_16",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 178,
            "Folio": "CID00000001 -2014-11-25 03:48:48Z",
            "StartDate": "2014-11-25 11:48",
            "ActivityName": "010_填写表单",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "178_14",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 112,
            "Folio": "CID00000002 -2014-10-15 05:41:33Z",
            "StartDate": "2014-10-15 13:42",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "112_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 176,
            "Folio": "CID00000001 -2014-11-10 07:01:18Z",
            "StartDate": "2014-11-10 14:57",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "176_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 175,
            "Folio": "SampleRequest-0040",
            "StartDate": "2014-11-06 20:31",
            "ActivityName": "Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "175_18",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 174,
            "Folio": "Purchase Order - Administrator System - 44",
            "StartDate": "2014-11-06 15:34",
            "ActivityName": "Manager Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "174_13",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 114,
            "Folio": "CID00000003 -2014-10-15 17:49:14Z",
            "StartDate": "2014-10-16 01:49",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "114_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 103,
            "Folio": "CID00000001 -2014-10-11 08:12:17Z",
            "StartDate": "2014-10-11 16:12",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "103_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 71,
            "Folio": "CID00000001 -2014-07-21 11:11:07Z",
            "StartDate": "2014-07-21 04:11",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "71_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 148,
            "Folio": "SampleRequest-0039",
            "StartDate": "2014-10-21 08:24",
            "ActivityName": "Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "148_18",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 116,
            "Folio": "SampleRequest-0038",
            "StartDate": "2014-10-16 15:57",
            "ActivityName": "Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "116_68",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 115,
            "Folio": "Purchase Order - Administrator System - 43",
            "StartDate": "2014-10-16 14:30",
            "ActivityName": "Manager Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "115_13",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 93,
            "Folio": "CID00000001 -2014-09-28 10:17:29Z",
            "StartDate": "2014-09-28 18:16",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "93_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 111,
            "Folio": "SampleRequest-0037",
            "StartDate": "2014-10-13 11:21",
            "ActivityName": "NextApproval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "111_43",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 107,
            "Folio": "SampleRequest-0035",
            "StartDate": "2014-10-13 11:14",
            "ActivityName": "Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "107_18",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 104,
            "Folio": "CID00000001 -2014-10-11 08:13:21Z",
            "StartDate": "2014-10-11 16:13",
            "ActivityName": "010_填写表单",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "104_14",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 102,
            "Folio": "SampleRequest-0034",
            "StartDate": "2014-10-11 16:04",
            "ActivityName": "Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "102_18",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                },
                {
                    "Name": "Rework",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 91,
            "Folio": "9/23/2014 12:05 PM",
            "StartDate": "2014-09-23 12:05",
            "ActivityName": "DefaultActivity",
            "Originator": "K2:DENALLIX\\administrator",
            "SN": "91_8",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Confirm",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 79,
            "Folio": "test 0820",
            "StartDate": "2014-08-19 20:50",
            "ActivityName": "总经理审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "79_27",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 83,
            "Folio": "Budget Request:2014-09-05 13:40:38Z",
            "StartDate": "2014-09-05 21:40",
            "ActivityName": "Rework",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "83_16",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": "DENALLIX\\Administrator",
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Pass",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 78,
            "Folio": "",
            "StartDate": "2014-08-19 20:47",
            "ActivityName": "  部门经理审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "78_9",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 73,
            "Folio": "Purchase Order - Administrator System - 30",
            "StartDate": "2014-08-05 20:30",
            "ActivityName": "Manager Approval",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "73_13",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 60,
            "Folio": "CID00000001 -2014-06-26 12:56:10Z",
            "StartDate": "2014-06-26 05:56",
            "ActivityName": "020_归口部门审批",
            "Originator": "K2:DENALLIX\\Administrator",
            "SN": "60_24",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Decline",
                    "MetaData": ""
                },
                {
                    "Name": "Addition",
                    "MetaData": ""
                }
            ]
        },
        {
            "ProcInstID": 70,
            "Folio": "Purchase Order - Bob Maggio - 28",
            "StartDate": "2014-07-18 01:40",
            "ActivityName": "Manager Approval",
            "Originator": "K2:DENALLIX\\Bob",
            "SN": "70_13",
            "Destination": "DENALLIX\\Bob",
            "SharedUser": null,
            "IsChecked": false,
            "Actions": [
                {
                    "Name": "Approve",
                    "MetaData": ""
                },
                {
                    "Name": "Reject",
                    "MetaData": ""
                }
            ]
        }
    ]
});
});
app.post('/getTask', function(req, res) {
  res.json({"status":1,"message":"","data":{"ID":552,"ProcInstID":353,"ActInstDestID":33,"ActInstID":30,"ProcID":0,"ActID":1197,"EventID":37,"Destination":"K2:DENALLIX\\Administrator","AssignedDate":"2015-12-16 15:02","StartDate":"2015-12-16 15:02","FinishDate":null,"Status":1,"TenantID":null,"ActivityName":"HR Approval","ActivityDispName":"HR Approval","FullName":"Workflow\\Leave Request Approval","ProcDispName":"Leave Request Approval","Originator":"DENALLIX\\Administrator","Folio":"LR-000001","FlowNumber":null,"ProfileID":null,"ProcInstStatus":2,"ProcStartDate":"2015-12-16 15:02","SN":"353_33","Data":"http://demo.k2software.cn:82/Runtime/Runtime/Form/Leave+Request+Review/?_State=HR+Approval\u0026SerialNo=353_33\u0026SharedUser=K2:DENALLIX\\Administrator","IsChecked":false,"Actions":[{"Name":"Approve","MetaData":""},{"Name":"Reject","MetaData":""},{"Name":"Rework","MetaData":""}],"ProcessInstance":{"ID":353,"ProcID":0,"ProcSetID":0,"FullName":"Workflow\\Leave Request Approval","DisplayName":null,"ProcessName":null,"FlowNumber":null,"Folio":"LR-000001","Originator":"DENALLIX\\Administrator","ActivityName":null,"ViewUrl":null,"Priority":1,"ExpectedDuration":0,"Status":0,"State":null,"Version":0,"StartDate":"2015-12-16 15:02","FinishDate":null,"BOID":null,"IsSub":false,"OrigProfileID":null,"BOOwner":null,"BOOwnerProfileID":null,"PrevApprovers":null,"TenantID":null,"IsChecked":false,
    "DataFields":{
   "ID": {
"Name": "ID",
"Value": 16
},
"Business Deptment Approver": {
"Name": "Business Deptment Approver",
"Value": "K2:DENALLIX\\Administrator"
},
"Business Deptment Approver2": {
"Name": "Business Deptment Approver2",
"Value": "K2:DENALLIX\\Administrator"
},
"Business Deptment Approver3": {
"Name": "Business Deptment Approver3",
"Value": "K2:DENALLIX\\Administrator"
},
"Business Deptment Checker": {
"Name": "Business Deptment Checker",
"Value": "K2:DENALLIX\\Administrator"
}
  }
    ,"XmlFields":{"ItemReferences":{"Name":"ItemReferences","Value":"\u003citemReferences\u003e\r\n  \u003citemReference name=\"Leave_Request_Details\" displayName=\"Leave Request Details\" type=\"SmartObjectItem\" primary=\"true\"\u003e\r\n    \u003csettings\u003e\r\n      \u003cmethod\u003e\r\n        \u003cobjectName\u003eLeave_Request_Details\u003c/objectName\u003e\r\n        \u003cmethodName\u003eLoad\u003c/methodName\u003e\r\n        \u003cmethodType\u003eread\u003c/methodType\u003e\r\n        \u003cobjectTypes\u003e\r\n          \u003ctype\u003eList\u003c/type\u003e\r\n        \u003c/objectTypes\u003e\r\n      \u003c/method\u003e\r\n    \u003c/settings\u003e\r\n    \u003cdefinition /\u003e\r\n    \u003citems lastId=\"1\"\u003e\r\n      \u003citem id=\"1\"\u003e\r\n        \u003cproperties\u003e\r\n          \u003cproperty name=\"ID\"\u003e1\u003c/property\u003e\r\n        \u003c/properties\u003e\r\n        \u003cparameters /\u003e\r\n      \u003c/item\u003e\r\n    \u003c/items\u003e\r\n  \u003c/itemReference\u003e\r\n\u003c/itemReferences\u003e","Category":"","Schema":"\u003cxs:schema attributeFormDefault=\"unqualified\" elementFormDefault=\"qualified\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"\u003e\u003cxs:element name=\"itemReferences\"\u003e\u003cxs:complexType\u003e\u003cxs:sequence\u003e\u003cxs:element name=\"itemReference\" maxOccurs=\"unbounded\"\u003e\u003cxs:complexType\u003e\u003cxs:attribute name=\"primary\" type=\"xs:string\" /\u003e\u003cxs:attribute name=\"type\" type=\"xs:string\" /\u003e\u003cxs:attribute name=\"name\" type=\"xs:string\" /\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003c/xs:sequence\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003c/xs:schema\u003e","Hidden":false,"MetaData":"","Xsl":""},"WorkflowMetadata":{"Name":"WorkflowMetadata","Value":"\u003cReferenceFields\u003e\n  \u003cActivity displayname=\"Set Folio\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Set WF Reference\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"HR Approval\" templatetype=\"ClientSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Manager Approval\" templatetype=\"ClientSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Send Approval Mail\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Approved\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Get Leave Balance\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Save Leave Type Balances\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Send Rejection Mail\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Rejected\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Rework Request\" templatetype=\"ClientSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Cancelled\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n\u003c/ReferenceFields\u003e","Category":"","Schema":"\u003cxs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" elementFormDefault=\"qualified\"\u003e\u003cxs:element name=\"Activity\"\u003e\u003cxs:complexType\u003e\u003cxs:sequence\u003e\u003cxs:element ref=\"Notes\"/\u003e\u003cxs:element ref=\"ResultRecorder\" minOccurs=\"0\"/\u003e\u003cxs:element ref=\"ResultCompare\" minOccurs=\"0\"/\u003e\u003c/xs:sequence\u003e\u003cxs:attribute name=\"displayname\" use=\"required\"\u003e\u003c/xs:attribute\u003e\u003cxs:attribute name=\"templatetype\" use=\"required\"\u003e\u003cxs:simpleType\u003e\u003cxs:restriction base=\"xs:NMTOKEN\"\u003e\u003cxs:enumeration value=\"ClientSide\"/\u003e\u003cxs:enumeration value=\"ServerSide\"/\u003e\u003c/xs:restriction\u003e\u003c/xs:simpleType\u003e\u003c/xs:attribute\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003cxs:element name=\"Notes\"\u003e\u003cxs:complexType/\u003e\u003c/xs:element\u003e\u003cxs:element name=\"ReferenceFields\"\u003e\u003cxs:complexType\u003e\u003cxs:sequence\u003e\u003cxs:element ref=\"Activity\" maxOccurs=\"unbounded\"/\u003e\u003c/xs:sequence\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003cxs:element name=\"ResultCompare\" type=\"xs:string\"/\u003e\u003cxs:element name=\"ResultRecorder\"\u003e\u003cxs:complexType/\u003e\u003c/xs:element\u003e\u003c/xs:schema\u003e","Hidden":true,"MetaData":"","Xsl":""}}},"ActivityDataFields":{"Outcome":"","Status":"","Action Result":""}}});
});
app.post('/executeTask', function(req, res) {
  res.json({"status":1,"message":"","data":{"ID":552,"ProcInstID":353,"ActInstDestID":33,"ActInstID":30,"ProcID":0,"ActID":1197,"EventID":37,"Destination":"K2:DENALLIX\\Administrator","AssignedDate":"2015-12-16 15:02","StartDate":"2015-12-16 15:02","FinishDate":null,"Status":1,"TenantID":null,"ActivityName":"HR Approval","ActivityDispName":"HR Approval","FullName":"Workflow\\Leave Request Approval","ProcDispName":"Leave Request Approval","Originator":"DENALLIX\\Administrator","Folio":"LR-000001","FlowNumber":null,"ProfileID":null,"ProcInstStatus":2,"ProcStartDate":"2015-12-16 15:02","SN":"353_33","Data":"http://demo.k2software.cn:82/Runtime/Runtime/Form/Leave+Request+Review/?_State=HR+Approval\u0026SerialNo=353_33\u0026SharedUser=K2:DENALLIX\\Administrator","IsChecked":false,"Actions":[{"Name":"Approve","MetaData":""},{"Name":"Reject","MetaData":""},{"Name":"Rework","MetaData":""}],"ProcessInstance":{"ID":353,"ProcID":0,"ProcSetID":0,"FullName":"Workflow\\Leave Request Approval","DisplayName":null,"ProcessName":null,"FlowNumber":null,"Folio":"LR-000001","Originator":"DENALLIX\\Administrator","ActivityName":null,"ViewUrl":null,"Priority":1,"ExpectedDuration":0,"Status":0,"State":null,"Version":0,"StartDate":"2015-12-16 15:02","FinishDate":null,"BOID":null,"IsSub":false,"OrigProfileID":null,"BOOwner":null,"BOOwnerProfileID":null,"PrevApprovers":null,"TenantID":null,"IsChecked":false,
    "DataFields":{
   "ID": {
"Name": "ID",
"Value": 16
},
"Business Deptment Approver": {
"Name": "Business Deptment Approver",
"Value": "K2:DENALLIX\\Administrator"
},
"Business Deptment Approver2": {
"Name": "Business Deptment Approver2",
"Value": "K2:DENALLIX\\Administrator"
},
"Business Deptment Approver3": {
"Name": "Business Deptment Approver3",
"Value": "K2:DENALLIX\\Administrator"
},
"Business Deptment Checker": {
"Name": "Business Deptment Checker",
"Value": "K2:DENALLIX\\Administrator"
}
  }
    ,"XmlFields":{"ItemReferences":{"Name":"ItemReferences","Value":"\u003citemReferences\u003e\r\n  \u003citemReference name=\"Leave_Request_Details\" displayName=\"Leave Request Details\" type=\"SmartObjectItem\" primary=\"true\"\u003e\r\n    \u003csettings\u003e\r\n      \u003cmethod\u003e\r\n        \u003cobjectName\u003eLeave_Request_Details\u003c/objectName\u003e\r\n        \u003cmethodName\u003eLoad\u003c/methodName\u003e\r\n        \u003cmethodType\u003eread\u003c/methodType\u003e\r\n        \u003cobjectTypes\u003e\r\n          \u003ctype\u003eList\u003c/type\u003e\r\n        \u003c/objectTypes\u003e\r\n      \u003c/method\u003e\r\n    \u003c/settings\u003e\r\n    \u003cdefinition /\u003e\r\n    \u003citems lastId=\"1\"\u003e\r\n      \u003citem id=\"1\"\u003e\r\n        \u003cproperties\u003e\r\n          \u003cproperty name=\"ID\"\u003e1\u003c/property\u003e\r\n        \u003c/properties\u003e\r\n        \u003cparameters /\u003e\r\n      \u003c/item\u003e\r\n    \u003c/items\u003e\r\n  \u003c/itemReference\u003e\r\n\u003c/itemReferences\u003e","Category":"","Schema":"\u003cxs:schema attributeFormDefault=\"unqualified\" elementFormDefault=\"qualified\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"\u003e\u003cxs:element name=\"itemReferences\"\u003e\u003cxs:complexType\u003e\u003cxs:sequence\u003e\u003cxs:element name=\"itemReference\" maxOccurs=\"unbounded\"\u003e\u003cxs:complexType\u003e\u003cxs:attribute name=\"primary\" type=\"xs:string\" /\u003e\u003cxs:attribute name=\"type\" type=\"xs:string\" /\u003e\u003cxs:attribute name=\"name\" type=\"xs:string\" /\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003c/xs:sequence\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003c/xs:schema\u003e","Hidden":false,"MetaData":"","Xsl":""},"WorkflowMetadata":{"Name":"WorkflowMetadata","Value":"\u003cReferenceFields\u003e\n  \u003cActivity displayname=\"Set Folio\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Set WF Reference\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"HR Approval\" templatetype=\"ClientSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Manager Approval\" templatetype=\"ClientSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Send Approval Mail\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Approved\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Get Leave Balance\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Save Leave Type Balances\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Send Rejection Mail\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Rejected\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Rework Request\" templatetype=\"ClientSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n  \u003cActivity displayname=\"Cancelled\" templatetype=\"ServerSide\"\u003e\n    \u003cNotes /\u003e\n  \u003c/Activity\u003e\n\u003c/ReferenceFields\u003e","Category":"","Schema":"\u003cxs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" elementFormDefault=\"qualified\"\u003e\u003cxs:element name=\"Activity\"\u003e\u003cxs:complexType\u003e\u003cxs:sequence\u003e\u003cxs:element ref=\"Notes\"/\u003e\u003cxs:element ref=\"ResultRecorder\" minOccurs=\"0\"/\u003e\u003cxs:element ref=\"ResultCompare\" minOccurs=\"0\"/\u003e\u003c/xs:sequence\u003e\u003cxs:attribute name=\"displayname\" use=\"required\"\u003e\u003c/xs:attribute\u003e\u003cxs:attribute name=\"templatetype\" use=\"required\"\u003e\u003cxs:simpleType\u003e\u003cxs:restriction base=\"xs:NMTOKEN\"\u003e\u003cxs:enumeration value=\"ClientSide\"/\u003e\u003cxs:enumeration value=\"ServerSide\"/\u003e\u003c/xs:restriction\u003e\u003c/xs:simpleType\u003e\u003c/xs:attribute\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003cxs:element name=\"Notes\"\u003e\u003cxs:complexType/\u003e\u003c/xs:element\u003e\u003cxs:element name=\"ReferenceFields\"\u003e\u003cxs:complexType\u003e\u003cxs:sequence\u003e\u003cxs:element ref=\"Activity\" maxOccurs=\"unbounded\"/\u003e\u003c/xs:sequence\u003e\u003c/xs:complexType\u003e\u003c/xs:element\u003e\u003cxs:element name=\"ResultCompare\" type=\"xs:string\"/\u003e\u003cxs:element name=\"ResultRecorder\"\u003e\u003cxs:complexType/\u003e\u003c/xs:element\u003e\u003c/xs:schema\u003e","Hidden":true,"MetaData":"","Xsl":""}}},"ActivityDataFields":{"Outcome":"","Status":"","Action Result":""}}});
});
app.post('/getBusinessData', function(req, res) {
  res.json({"status":1,"message":"","data":{"流程单号":'LR-000001',"类型":"市场投标差旅","币种":"CNY","出发地":"中国大陆","出发地城市":"深圳","目的地":"中国大陆","目的地城市":"广州"
    ,"开始时间":"2015-12-29T16:00:00Z","结束时间":"2015-12-30T16:00:00Z","说明":"客户方招投标，需要过去投标","总金额":720.0,
    "TravelRequestTwoDetails":
    [{"报销类型":"其它","目标":"拿到合同","目的":"拿到合同","说明":"拿到合同","Destination":"高铁往返深圳和广州","Amount":150.0},
    {"报销类型":"住宿","目标":"让客户认识到我们的产品","目的":"让客户认识到我们的产品","说明":"让客户认识到我们的产品","Destination":"在广州需要为投标事项留宿","Amount":300.0},
    {"报销类型":"餐费","目标":"推广我们的产品","目的":"推广我们的产品","说明":"推广我们的产品","Destination":"在投标期间餐饮","Amount":200.0},
    {"报销类型":"租车","目标":"使用我们的产品","目的":"使用我们的产品","说明":"使用我们的产品","Destination":"从广州南站到达客户所在地","Amount":70.0}]}});
});
app.post('/login', function(req, res) {
  res.json({"status":1,"message":"","data":"jackF"});
});
/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

if (!process.env.PRODUCTION) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }
  });
}


/******************
 *
 * Express server
 *
 *****************/

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});
