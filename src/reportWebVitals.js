<<<<<<< HEAD
const reportWebVitals = onPerfEntry => {
=======
const reportWebVitals = (onPerfEntry) => {
>>>>>>> 5e80e68620bf7ac6907819075b608ec2788afcff
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

<<<<<<< HEAD
export default reportWebVitals;
=======
export default reportWebVitals; 
>>>>>>> 5e80e68620bf7ac6907819075b608ec2788afcff
