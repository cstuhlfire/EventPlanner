export default  { 
    formatDate: function(dbDate) {
    // Returns data as:
    // Day, Month, day, yyyy
  
    let newDate = Intl.DateTimeFormat(
        'en', 
        { weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })
          .format(new Date(dbDate));

    return (newDate);
  },
  formatTime: function(dbDate) {
    // Returns time as:
    // 00:00 AM/PM
  
    let newTime = Intl.DateTimeFormat(
        'en', 
        { hour: "numeric", 
          minute: "numeric", 
          hour12: true 
        })
          .format(new Date(dbDate));
  
    return (newTime);
  }
};