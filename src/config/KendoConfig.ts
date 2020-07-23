import Vue from 'vue';
// kendo ui
import '@progress/kendo-ui';
import '@progress/kendo-ui/js/kendo.scheduler';
import '@progress/kendo-ui/js/kendo.button';
// kendo theme
import '@progress/kendo-theme-default/dist/all.css';
// kendo modules
import { DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper';
import { SchedulerInstaller } from '@progress/kendo-scheduler-vue-wrapper';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
// kendo cultures
import '@progress/kendo-ui/js/cultures/kendo.culture.nb-NO.js';
import '@progress/kendo-ui/js/cultures/kendo.culture.da-DK.js';
import '@progress/kendo-ui/js/cultures/kendo.culture.fi-FI.js';
import '@progress/kendo-ui/js/cultures/kendo.culture.nn-NO.js';
import '@progress/kendo-ui/js/cultures/kendo.culture.sv-FI.js';
import '@progress/kendo-ui/js/cultures/kendo.culture.sv-SE.js';
// kendo custom theme
import '@/assets/kendo/all.css';
import '@/assets/kendo/variables.scss';


// register with vue
Vue.use(DateinputsInstaller);
Vue.use(SchedulerInstaller);
Vue.use(GridInstaller);
