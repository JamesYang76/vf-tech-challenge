export  const datTimeFormatEmail = (inputDate: Date ) : string => {
  const day = inputDate.toLocaleString('default', { weekday: 'short' });
  const date = inputDate.toLocaleDateString('default', { day: 'numeric', month: 'numeric', year: 'numeric' });
  const time = inputDate.toLocaleTimeString('default', { hour: 'numeric', minute: 'numeric', hour12: true, hourCycle: 'h12' }).toUpperCase().replace(/\s/g, '');

  return `${day} ${date} ${time}`; 
};
