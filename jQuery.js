let chosenProduct = 0;

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "blue",
        img: "https://static.nike.com/a/images/t_default/1fe0b0dd-d6b0-4955-b930-b14b50c4d841/AIR+FORCE+1+%2707.png",
      },
      {
        code: "white",
        img: "https://static.nike.com/a/images/t_default/ec63d3bf-0722-485e-a379-92a73a158928/AIR+FORCE+1+%2707.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 229,
    colors: [
      {
        code: "white",
        img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/554725-130-01-1657443095327.png?v=1675314070623",
      },
      {
        code: "red",
        img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/kj11ctakaqzca1hrkbkh/air-jordan-1-retro-chicago-release-date.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 160,
    colors: [
      {
        code: "green",
        img: "https://static.nike.com/a/images/t_default/0eb70597-720b-436c-9896-c5b53ec7bf8a/BLAZER+MID+%2777+KI+%28GS%29.png",
      },
      {
        code: "red",
        img: "https://static.nike.com/a/images/t_default/edde6171-407b-42fc-b680-858e87462337/custom-nike-blazer-mid-77-shoes-by-you.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 160,
    colors: [
      {
        code: "black",
        img: "https://static.nike.com/a/images/t_default/6f071448-a186-4a12-b528-c445ee45662f/WMNS+NIKE+CRATER+REMIXA.png",
      },
      {
        code: "brown",
        img: "https://static.nike.com/a/images/t_default/436925ed-36f9-44d7-abd0-97ffd6cc5ada/NIKE+FREE+CRATER+TRAIL+BOOT+N7.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 320,
    colors: [
      {
        code: "black",
        img: "https://static.nike.com/a/images/t_default/6996292c-2bdf-4483-a98e-ffc91b8420a9/NIKE+SPACE+HIPPIE+01.png",
      },
      {
        code: "gray",
        img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/4ce1677a-c1c9-4c3e-a914-aac2c30454ee/nike-space-hippie-01-release-date.jpg",
      },
    ],
  },
];

//generate product
products.forEach((product) => {
  let sliderItem = $("<div></div>");
  sliderItem.addClass("sliderItem");
  sliderItem.html(`<div class="sliderImgWrapper">
        <img
          src=${product.colors[0].img}
          alt=${product.title}
        />
    </div>
    <h1 class="sliderTitle">
      ${product.title}
    </h1>
    <h2 class="sliderPrice">$${product.price}</h2>
    <a class="buyButton" href="#product">BUY NOW</a>`);
  sliderItem.appendTo(".sliderWrapper");
});

$(".menuItem").on("click", () => {
  let index = $(event.target).index();
  $(".sliderWrapper").css("transform", `translateX(${-100 * index}vw)`);
  chosenProduct = index;
  generateProductDetail(index);
});

const generateProductDetail = (index) => {
  $("#product").html(`<div class="product__image">
        <img src=${products[index].colors[0].img} alt=${products[index].title} class="product__img"/>
      </div>
      <div class="product__info">
        <h1 class="product__title">${products[index].title}</h1>
        <p class="product__price">$${products[index].price}</p>
        <p class="product__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="product__color">
        </div>

        <div class="product__size">
          <div class="product__size_item">41</div>
          <div class="product__size_item">42</div>
          <div class="product__size_item">43</div>
        </div>
        <div class="button__wrapper">
          <button class="product__buy">BUY NOW!</button>
        </div>
      </div>`);

  products[index].colors.forEach((color) => {
    $("<div></div>")
      .addClass(`product__color_item bg_${color.code}`)
      .appendTo(".product__color");
  });

  $(".product__color_item").on("click", (item) => {
    let colorIndex = $(event.target).index();
    $(".product__img").attr(
      "src",
      products[chosenProduct].colors[colorIndex].img
    );

    $(".product__color_item").css("border-color", "");
    $(".product__color_item")
      .find(item)
      .css("border-color", "rgb(255, 255, 255)");
  });

  $.each($(".product__size_item"), (index, item) => {
    item.addEventListener("click", () => {
      $(".product__size_item").css({
        "background-color": "rgb(255, 255, 255)",
        color: "rgb(0, 0, 0)",
      });
      item.style.backgroundColor = "black";
      item.style.color = "white";
    });
  });

  $(".product__buy").on("click", () => {
    $(".payment__modal").css("display", "flex");
  });
};

$(".payment__exit").on("click", () => {
  $(".payment__modal").css("display", "none");
});

generateProductDetail(0);
