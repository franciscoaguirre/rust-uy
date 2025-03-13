export const monthToString = (month: number): string => {
  switch (month) {
    case 0:
      return 'Enero';
    case 1:
      return 'Febrero';
    case 2:
      return 'Marzo';
    case 3:
      return 'Abril';
    case 4:
      return 'Mayo';
    case 5:
      return 'Junio';
    case 6:
      return 'Julio';
    case 7:
      return 'Agosto';
    case 8:
      return 'Setiembre';
    case 9:
      return 'Octubre';
    case 10:
      return 'Noviembre';
    case 11:
      return 'Diciembre';
    default:
      return '';
  }
};

export interface DestructuredTime {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

export const timeUntilDate = (date: Date): DestructuredTime => {
  const deadline = date.getTime();
  const millisToDeadline = deadline - new Date().getTime();
  const totalSeconds = millisToDeadline / 1000;
  const seconds = Math.trunc(totalSeconds % 60).toString().padStart(2, "0");
  const totalMinutes = totalSeconds / 60;
  const minutes = Math.trunc(totalMinutes % 60).toString().padStart(2, "0");
  const totalHours = totalMinutes / 60;
  const hours = Math.trunc(totalHours % 24).toString().padStart(2, "0");
  const days = Math.trunc(totalHours / 24).toString().padStart(2, "0");
  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
