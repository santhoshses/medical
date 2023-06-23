export const GetCourseStatus = (status, startTime, endTime, userStartTime, userEndTime) => {
  let endDateObj = new Date(endTime);
  let startDateObj = new Date(startTime);
  let endDateString = endDateObj.getDate()+" "+endDateObj.toLocaleString('default', { month: 'long' })+", "+endDateObj.getFullYear();
  let startDateString = startDateObj.getDate()+" "+startDateObj.toLocaleString('default', { month: 'long' })+", "+startDateObj.getFullYear();
  
  switch (status) {
    case 0:
      return {
        status: "Not Started",
        dateText: "Not started ",
      };
    case 1:
      return {
        status: "Started",
        dateText: "Started ",
      };
    case 2:
      return {
        status: "Paused",
        dateText: "Paused ",
      };
    case 3:
      return {
        status: "Completed",
        dateText: "Completed on "+endDateString,
      };
    case 4:
      return {
        status: "Upcoming",
        dateText: "Live on "+startDateString,
      };
    case 5:
      return {
        status: "Live",
        dateText: "Expires on "+endDateString,
      };
    case 6:
      return {
        status: "Expired",
        dateText: "Expires by "+endDateObj.toLocaleTimeString()+", "+endDateString,
      };

    default:
      break;
  }
};
