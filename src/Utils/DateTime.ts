class DateTimeFormat {
  static getFormatedDate(date: Date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${day} ${month}, ${year} ${hour} ${min}`;
  }

  static formatDateString(dateString: string) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "Invalid date";
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  }
  static nowForInput(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");

  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
}
}

export default DateTimeFormat;
