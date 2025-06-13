 const urlParams = new URLSearchParams(window.location.search);
 const nextPage = urlParams.get('next');

 if (nextPage) {
   setTimeout(() => {
     window.location.href = nextPage; 
   }, 3000);
 } else {
   setTimeout(() => {
     window.location.href = "index.html";
   }, 3000);
 }