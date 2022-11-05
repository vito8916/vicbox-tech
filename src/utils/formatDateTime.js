const formatDatetime = (datetime) => {
    const myDatetime = new Date(datetime);
    const d = new Date(datetime);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  };
  
  export default formatDatetime;