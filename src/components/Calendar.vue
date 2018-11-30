<template>
  <v-app id="dayspan" v-cloak>
    <ds-calendar-app ref="app" :calendar="calendar" :read-only="readOnly" @change="saveState">
      <template slot="title">Calendrier</template>

      <template slot="eventPopover" slot-scope="slotData">
        <ds-calendar-event-popover v-bind="slotData" :read-only="readOnly" @finish="saveState"></ds-calendar-event-popover>
      </template>

      <template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">
        <ds-calendar-event-create-popover
          :calendar-event="placeholder"
          :calendar="calendar"
          :close="$refs.app.$refs.calendar.clearPlaceholder"
          @create-edit="$refs.app.editPlaceholder"
          @create-popover-closed="saveState"
        ></ds-calendar-event-create-popover>
      </template>

      <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
        <div>
          <v-icon
            class="ds-ev-icon"
            v-if="details.icon"
            size="14"
            :style="{color: details.forecolor}"
          >{{ details.icon }}</v-icon>
          <strong class="ds-ev-title">{{ details.title }}</strong>
        </div>
        <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
      </template>
    </ds-calendar-app>
  </v-app>
</template>

<script>
import { Calendar, Weekday, Month } from "dayspan";

export default {
  name: "Calendar",

  data: () => ({
    storeKey: "dayspanState",
    calendar: Calendar.weeks(),
    readOnly: false,
    defaultEvents: [
      {
        data: {
          title: "Work",
          color: "#3F51B5"
        },
        schedule: {
          dayOfWeek: [
            Weekday.MONDAY,
            Weekday.TUESDAY,
            Weekday.WEDNESDAY,
            Weekday.THURSDAY,
            Weekday.FRIDAY
          ],
          times: [9],
          duration: 8, // this.$store.getters.user_connected.dayHours,
          durationUnit: "hours"
        }
      },
      {
        data: {
          title: "First Weekend",
          color: "#4CAF50"
        },
        schedule: {
          weekspanOfMonth: [0],
          dayOfWeek: [Weekday.FRIDAY],
          duration: 3,
          durationUnit: "days"
        }
      },
      {
        data: {
          title: "End of Month",
          color: "#000000"
        },
        schedule: {
          lastDayOfMonth: [1],
          duration: 1,
          durationUnit: "hours"
        }
      },
      {
        data: {
          title: "Mother's Day",
          color: "#2196F3",
          calendar: "Holidays"
        },
        schedule: {
          month: [Month.MAY],
          dayOfWeek: [Weekday.SUNDAY],
          weekspanOfMonth: [1]
        }
      },
      {
        data: {
          title: "New Year's Day",
          color: "#2196F3",
          calendar: "Holidays"
        },
        schedule: {
          month: [Month.JANUARY],
          dayOfMonth: [1]
        }
      },
      {
        data: {
          title: "Veterans Day",
          color: "#2196F3",
          calendar: "Holidays"
        },
        schedule: {
          month: [Month.NOVEMBER],
          dayOfMonth: [11]
        }
      },
      {
        data: {
          title: "Thanksgiving Day",
          color: "#2196F3",
          calendar: "Holidays"
        },
        schedule: {
          month: [Month.NOVEMBER],
          dayOfWeek: [Weekday.THURSDAY],
          weekspanOfMonth: [3]
        }
      },
      {
        data: {
          title: "Christmas Day",
          color: "#2196F3",
          calendar: "Holidays"
        },
        schedule: {
          month: [Month.DECEMBER],
          dayOfMonth: [25]
        }
      }
    ]
  }),

  created() {},

  mounted() {
    window.app = this.$refs.app;

    this.loadState();
  },

  methods: {
    getCalendarTime(calendarEvent) {
      let sa = calendarEvent.start.format("a");
      let ea = calendarEvent.end.format("a");
      let sh = calendarEvent.start.format("h");
      let eh = calendarEvent.end.format("h");

      if (calendarEvent.start.minute !== 0) {
        sh += calendarEvent.start.format(":mm");
      }

      if (calendarEvent.end.minute !== 0) {
        eh += calendarEvent.end.format(":mm");
      }

      return sa === ea ? sh + " - " + eh + ea : sh + sa + " - " + eh + ea;
    },

    saveState() {
      let state = this.calendar.toInput(true);
      let json = JSON.stringify(state);

      localStorage.setItem(this.storeKey, json);
    },

    loadState() {
      let state = {};

      try {
        let savedState = JSON.parse(localStorage.getItem(this.storeKey));

        if (savedState) {
          state = savedState;
          state.preferToday = false;
        }
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }

      if (!state.events || !state.events.length) {
        state.events = this.defaultEvents;
      }

      state.events.forEach(ev => {
        let defaults = this.$dayspan.getDefaultEventDetails();

        //ev.data = Vue.util.extend(defaults, ev.data);
      });

      this.$refs.app.setState(state);
    }
  }
};
</script>

<style>
body,
html,
#app,
#dayspan {
  font-family: Roboto, sans-serif !important;
  width: 100%;
}

.v-toolbar--fixed {
  position: relative !important;
  top: initial !important;
  margin-bottom: 1%;
}

.v-navigation-drawer,
.v-navigation-drawer--clipped,
.v-navigation-drawer--fixed,
.v-navigation-drawer--open {
  margin-top: 7% !important;
}

.v-content,
.ds-expand {
  padding-top: 0 !important;
}

.v-btn--flat,
.v-text-field--solo .v-input__slot {
  background-color: #f5f5f5 !important;
  margin-bottom: 8px !important;
}
</style>
