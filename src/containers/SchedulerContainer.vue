<template>
  <div>
    <kendo-scheduler
     id="kendoScheduler"
      class="Scheduler"
      :style="schedularHeight"
      :data-source="eventList"
      :footer="false"
      :selectable="true"
      @add="onAdd"
      @edit="onEdit"
      :snap="true"
    >
      <kendo-scheduler-view :type="'day'" :editable-destroy="false" :event-template="templateDay"></kendo-scheduler-view>
    </kendo-scheduler>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AgEventTemplateComponent from "@/components/templates/AgEventTemplateComponent.vue";

@Component({
  components: {
  }
})
export default class SchedulerContainer extends Vue {

   schedularHeight = 30;

  /**
   * sample event list
   */
  eventList = [
    {
      Id: "1",
      start: new Date(new Date().setHours(1, 30)),
      end: new Date(new Date().setHours(2, 30)),
      title: "normal appointment 1"
    }
  ];

  mounted(){
    for(let i=0; i< 15; i++){
      const event =  {
      Id: i.toString(),
      start: new Date(new Date()),
      end: new Date(new Date()),
      title: `AllDay No-${i}`,
      isAllDay: true
    }
    this.eventList.push(event);
    }
  }

  /**
   * kendo onadd hanlder
   * @param e
   */
  onAdd(e: any) {
    // e.preventDefault();
  }

  /**
   * Kendo onEdit Hanlder
   * @param e
   */
  onEdit(e: any) {
    // e.preventDefault();
  }

  /**
   * get custom template
   * @param data
   */
  templateDay(data: any) {
    return {
      template: Vue.component(
        AgEventTemplateComponent.name,
        AgEventTemplateComponent
      ),
      templateArgs: data
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../variables";
.SchedulerToolbar {
  background: #fff;
  height: #{$appointment_toolbar_height};
  line-height: #{$appointment_toolbar_height};

  .ant-menu {
    height: #{$appointment_toolbar_height};
    line-height: #{$appointment_toolbar_height};
    border-bottom: none;
  }
  .ant-menu-item {
    height: #{$appointment_toolbar_height};
    line-height: #{$appointment_toolbar_height};
    &.dateTitle {
      padding-right: 10px;
    }
    &.Today,
    &.GoToDate,
    &.calendarDropdown,
    &.schedularList {
      padding: 0 10px;
    }
  }
}

.Scheduler {
  font-family: "Open Sans", sans-serif;
  height: calc(
    100vh - #{$header_height} - #{$main_toolbar_height} - #{$calender_toolbar_height}
  );
    /* remove all day scaleing  */
  table.k-scheduler-layout{
    >tbody{
      >tr:nth-child(1){
        div[role="gridcell"]{
          .event-allday-details{
            table{
              tr{
                td{
                  padding-top:3px;
                }
              }
            }
          }
        }
      }
      >tr:nth-child(2){
        /deep/ td {
          height: var(--kschedular-height) + " !important";
        }
      }
    }
  }
}

#listView {
  font-family: "Open Sans", sans-serif;
  border-top: 1px solid #e8e8e8;
  height: calc(
    100vh - #{$header_height} - #{$main_toolbar_height} - #{$calender_toolbar_height}
  );

  .k-grid-header {
    border: none;
  }

  .k-grid td {
    border: none;
  }

  .k-grid th {
    border: none;
  }

  .k-header {
    border: none;
    background-color: white;
    font-weight: bolder;
  }

  .del-button {
    color: #0099bb;
    border-color: transparent;
    background-color: transparent;
    -webkit-appearance: none;
    background: none;
    .del-btn-icon-size {
      width: 15px;
      height: 15px;
    }
  }

  .k-loading-image {
    display: none;
  }
  .listViewLabel {
    margin: 0;
    padding: 0;
    li {
      display: inline;
    }
  }
}

.k-scheduler-toolbar {
  visibility: collapse;
  height: 0;
  padding: 0;
  display: none;
}

// .Scheduler.k-scheduler /deep/ td {
//   height: var(--kschedular-height) + " !important";
// }
</style>
