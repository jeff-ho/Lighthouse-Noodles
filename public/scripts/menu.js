//creates new tweet with html template.
// const createTweetElement = function (tweetData) {
//   const name = tweetData.user.name;
//   const avatar = tweetData.user.avatars;
//   const handle = tweetData.user.handle;
//   const safeHTML = `<p>${escape(tweetData.content.text)}</p>`;
//   const content = safeHTML;
//   const time = timeago.format(tweetData.created_at);
//   //console.log(name)
//   return `
// <article class="tweet-container">
//       <header>
//           <div class="identity">
//             <div class="logo">
//               <img src="${avatar}">
//             </div>
//             <div class="name">${name}</div>
//           </div>

//           <div class="tagHandle">${handle}</div>


//       </header>

//       <div class="tweetContentById">
//         <p>${content}</p>
//       </div>


//       <footer>
//         <p>${time} </p>
//         <div >
//           <i id="icon1" class="fa-solid fa-flag"></i>
//           <i id="icon2" class="fa-solid fa-retweet"></i>
//           <i id="icon3" class="fa-solid fa-heart"></i>
//         </div>
//       </footer>
// `;
// };
// const renderMenuItems = function (items) {
//   $("#menuItemsList").empty();

//   for (let i = tweets.length - 1; i >= 0; i--) {
//     $("#tweetContainerID").append(createTweetElement(tweets[i]));
//   }
// };
//not sure if this is useful but its stuff from tweeter ^^ above



//light bnbexample
const getAllReservations = (guest_id) => {
  return pool
    .query(`SELECT name, price, description, img_url, category_id
      FROM items


      JOIN properties ON reservations.property_id = properties.id
      JOIN property_reviews ON properties.id = property_reviews.property_id
      WHERE reservations.guest_id = $1
      GROUP BY properties.id, reservations.id
      ORDER BY reservations.start_date
      LIMIT 10`
    , [guest_id])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      return null
    });
};






exports.addProperty = addProperty;
