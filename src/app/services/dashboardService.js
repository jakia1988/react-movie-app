export function setStorage(value) {
    // Get the existing data
    let rating = localStorage.getItem('userRating');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    rating = rating ? JSON.parse(rating) : [];

    // Add new data to localStorage Array
    rating.push(value);

    // Save back to localStorage
    localStorage.setItem('userRating', JSON.stringify(rating));
}


export function checkRatingExists(){
    const checkRating = localStorage.getItem('userRating');
    if(checkRating !== null && checkRating !== undefined){
       return true;
    }else{
       return false;  
    }
}

export const getRatingData = () => {
   const currentUser = JSON.parse(localStorage.getItem('currentUser')).email;
   const userRatings = JSON.parse(localStorage.getItem('userRating'));
   let matchedArr = [];
   userRatings.forEach((e) => {
      if(e.user === currentUser){
        matchedArr.push(e);
      }
   });

   return matchedArr;
}