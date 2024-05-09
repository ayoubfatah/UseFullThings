
export function formatDate(dateStr) {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateStr));
  }
// this will return a date like this  9 May 15:30.  
