//========= owl carousel main banner =========
$(function () {
  $("#main-banner").owlCarousel({
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1200,
    dots: true,
    // autopalyTimeout: 5000, //5s
    // autoplayHoverPause: true,
    // doc: false,
    freeDrag: true,
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  });
});
//========= owl carousel main banner =========

// ========= burger dropdown ========= 
$(".header .header-left .burger").click(function (e) { 
  e.preventDefault();
  $(".burger-dropdown").addClass("burger-dropdown-active");
  console.log("h");
});

$(".btn-out .fa-times").click(function (e) { 
  e.preventDefault();
  $(".burger-dropdown").removeClass("burger-dropdown-active");
});
// ========= burger dropdown ========= 

//========= owl carousel latest product =========
$(function () {
  $("#latest-product").owlCarousel({
    items: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1200,
    dots: false,
    // autopalyTimeout: 5000, //5s
    // autoplayHoverPause: true,
    // doc: false,
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      411: {
        items: 2,
        nav: false,
      },
      768: {
        items: 4,
        nav: true,
      }
    },
  });
  
  const latestProducts = [
    {
      "id": 1,
      "srcimg": "./images/latest-product-1.jpg",
      "name": "Fixair Product Sample",
      "price": 120.00,
    },
    {
      "id": 2,
      "srcimg": "./images/latest-product-2.jpg",
      "name": "Fixair Product Sample",
      "price": 40.00,
    },
    {
      "id": 3,
      "srcimg": "./images/latest-product-3.jpg",
      "name": "Fixair Product Sample",
      "price": 20.00,
    },
    {
      "id": 4,
      "srcimg": "./images/latest-product-4.jpg",
      "name": "Fixair Product Sample",
      "price": 60.00,
    },
    {
      "id": 5,
      "srcimg": "./images/latest-product-5.jpg",
      "name": "Fixair Product Sample",
      "price": 70.00,
    },
    {
      "id": 6,
      "srcimg": "./images/latest-product-6.jpg",
      "name": "Fixair Product Sample",
      "price": 10.00,
    },
  ];
  renderOwl(latestProducts, ".latest-product .container .owl-carousel");
  

});

function renderOwl(list, selector) {

  list.reverse().map((val, index) => {
    // $(".rate").empty();
    $(selector) 
    .trigger("add.owl.carousel", [
    `
    <div class="slide">
      <div class="img-product">
        <img src="${val.srcimg}" alt="">
      </div>
      <div class="btn-add">
        <i class="fas fa-plus"></i>
      </div>
      <div class="info-product">
        <div class="${val.name}">Bright Blush Powder</div>
        <div class="price">$${val.price}</div>
      </div>
    </div>  
    `
    , index,])
    .trigger("refresh.owl.carousel");
  })
}

//========= owl carousel latest product =========

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



