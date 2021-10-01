// owl carousel
$(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autopalyTimeout: 5000, //5s
    // autoplayHoverPause: true,
    doc: false,
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  });
});


// ========= best seller ========= 
$(function () {
  const bestSellerProducts = [
    {
      "id": 1,
      "srcimg": "./images/bsl-prod-1.jpg",
      "name": "Fixair Product Sample",
      "price": 120.00,
    },
    {
      "id": 2,
      "srcimg": "./images/bsl-prod-2.jpg",
      "name": "Fixair Product Sample",
      "price": 40.00,
    },
    {
      "id": 3,
      "srcimg": "./images/bsl-prod-3.jpg",
      "name": "Fixair Product Sample",
      "price": 20.00,
    },
    {
      "id": 4,
      "srcimg": "./images/bsl-prod-4.png",
      "name": "Fixair Product Sample",
      "price": 60.00,
    },
    {
      "id": 5,
      "srcimg": "./images/bsl-prod-5.jpg",
      "name": "Fixair Product Sample",
      "price": 70.00,
    },
    {
      "id": 6,
      "srcimg": "./images/bsl-prod-6.png",
      "name": "Fixair Product Sample",
      "price": 10.00,
    },
  ];

  renderBestSellerProducts(bestSellerProducts);



  // $(".best-seller .items .image").hover(function () {
  //     // over
  //     renderProducts(bestSellerProducts);
      
  //   }, function () {
  //     renderBestSellerProducts(bestSellerProducts);
  //   }
  // );
  

});



function renderBestSellerProducts(list) {
  list.map((val, index) => {
    $(
    `
    <div class="item">
      <div class="image">
        <img src="${val.srcimg}" alt="">
      </div>
      <div class="content">
        <p class="name-product">${val.name}</p>
        <span class="price-product">$${val.price}</span>
      </div>
    </div>
  `
    ).appendTo(".items");
  })
}
// function renderProducts(list) {
//   list.map((val, index) => {
//     $(
//     `
//     <div class="item">
//       <div class="image">
//         <img src="${val.img}" alt="">
//       </div>
//       <div class="content">
//         <p class="name-product">${val.name}</p>
//         <span class="price-product">$${val.price}</span>
//       </div>
//     </div>
//   `
//     ).appendTo(".items");
//   })
// }
  
  

// ========= best seller ========= 