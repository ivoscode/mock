import {
  DefaultMonthlyEventItem,
  MonthlyBody,
  MonthlyCalendar,
  MonthlyDay,
  MonthlyNav,
} from "@zach.codes/react-calendar";
import { format, startOfMonth, subHours } from "date-fns";
import { useState } from "react";

export const Calendar = () => {
  let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

  return (
    <div className=" bg-blue-400 rounded-xl p-3">
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={(date) => setCurrentMonth(date)}
      >
        <MonthlyNav />
        <MonthlyBody
          events={[
            { title: "Work on project", date: subHours(new Date(), 3) },

            { title: "Work some more", date: new Date() },
          ]}
        >
          <MonthlyDay
            renderDay={(data) =>
              data.map((item, index) => (
                <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  // Format the date here to be in the format you prefer
                  date={format(item.date, "k:mm")}
                />
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
    </div>
  );
};
