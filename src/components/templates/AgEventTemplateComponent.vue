<template>
  <!-- ! important - the root `div` tag is required -->
  <div class="event-template">
    <div class="event-template">
      <div :class="getEventStatusStyle"  :style="getEventTemplateTopBarColor()">
      </div>
      <div class="event-grid"  :id="templateArgs.Id">
        <div class="event-left-panel">
          <div v-for="index in 3" :key="index" class="event-side-bar"
               :style="{backgroundColor: 'red'}"></div>
        </div>
        <div class="event-details">
          <table>
            <tbody>
            <tr>
              <td>
                <h5 class="mb-0"><b>{{templateArgs.title}}</b></h5>
                <div class="icon-list">
                  <span>Icon list</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component({})
export default class AgEventTemplateComponent extends Vue {
  templateArgs: any = {};

  /**
   * Get Event Template Top bar color
   */
  getEventTemplateTopBarColor () {
      return '#d1232a';
  }

  /**
   * Get Event template top bar icon
   */
  getEventTemplateTopBarIcon () {
    const icon = '';
    return icon;
  }



  get getEventStatusStyle () {
    const styleClass = '';
    return styleClass;
  }

}
</script>

<style lang="scss">
.event-template {
  height: 100%;

  .event-status-top-bar {
    height: 3px;
    width: 100%;   

    .event-status-icon {
      width: 12px;
      position: absolute;
      right: 5px;
      top: 7px;
    }
  }

  .event-top-bar {
    height: 0px;
    width: 100%;  

    .event-status-icon {
      width: 12px;   
      position: absolute;  
      right: 5px;
      top: 7px;
    }
  }

  .event-grid {
    display: flex;
    height: -webkit-fill-available;

    .event-left-panel {
      display: flex;   

      .event-side-bar {
        width: 8px;
        height: 100%;
      }
    }

    .event-details {
      padding-left: 5px;

      .icon-list {
        .event-icon {
          width: 12px;
          margin-right: 2px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }


  .event-allday-grid {
    display: flex;   

    .event-allday-left-panel {
      display: flex;   

      .event-allday-side-bar {
        width: 8px;
        height: 125%;
      }
    }
    .event-allday-details {
      padding-left: 5px;     
    }
  }

  .options-icon {
    cursor: pointer;
    width: 14px;
    position: absolute;
    right: 5px;
    bottom: 2px;
  }
}


</style>
