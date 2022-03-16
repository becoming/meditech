import {VisitsToolbar} from "./VisitsToolbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import adaptivePlugin from '@fullcalendar/adaptive'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'

export function VisitsPage() {
  let onEventClick = (arg: any) => { // bind with an arrow function
    alert(arg.dateStr)
    console.log(arg)
  }

  let onSelect = (arg: any) => { // bind with an arrow function
    alert(arg.dateStr)
    console.log(arg)
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <VisitsToolbar />
      </div>
    </div>

    <div className={"App-page-content"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}

            events={[
              { title: 'event 1', date: '2022-03-16 15:30:00' },
              { title: 'event 2', date: '2022-03-14' }
            ]}
            schedulerLicenseKey={'CC-Attribution-NonCommercial-NoDerivatives'}
            height={"auto"}
            firstDay={1}
            locale={"RO"}
            weekNumbers={true}
            weekText={"Sapt. "}

            editable={true}

            selectOverlap={true}
            selectMirror={true}
            selectable={true}

            eventClick={onEventClick}
            select={onSelect}
            nowIndicator={true}
          />
        </div>
      </div>
    </div>

  </div>
}
