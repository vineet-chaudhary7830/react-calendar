import React from 'react';

import './App.css';
import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,EventSettingsModel,ViewsDirective,ViewDirective  } from '@syncfusion/ej2-react-schedule';
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data';
function App() {
  const localData:EventSettingsModel={
    dataSource:[
      {
        EndTime:new Date(2023,0,11,6,30),
        StartTime:new Date(2023,0,11,4,0),
        Subject:'',
        isAllDay:true,
        RecurrenceRule : 'FREQ=DAILY;INTERVAL=1;COUNT=10',
      }
    ],
    fields:{
      subject:{name:'Summary',default:'No title is provided.'},
      startTime:{name:'Start'},
      endTime:{name:'End'},
    }
  };
  const remoteData=new DataManager({
    url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/loadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  return (
    <div className="App">
      <ScheduleComponent currentView='Week' selectedDate={new Date(2023,9,23)} eventSettings={{dataSource:remoteData}}>
        <ViewsDirective>
          <ViewDirective option='Day'></ViewDirective>
          <ViewDirective option='Week'></ViewDirective>
          <ViewDirective option='TimelineDay'></ViewDirective>
          <ViewDirective option='TimelineDay'></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
