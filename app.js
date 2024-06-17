const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        description: "amazing black leather shoes that supports your ankles",
        colors: [
            {
        code: "black",
        img: "./img/air.png",
        },

        {
            code: "darkblue",
            img: "./img/air2.png",
        },
      ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        description: "beautiful, gray leather show that makes your ankles float",
        colors: [
            {
              code: "lightgray",
              img: "./img/jordan.png",
            },
            {
              code: "green",
              img: "./img/jordan2.png",
            },
          ],
        },
        {
          id: 3,
          title: "Blazer",
          price: 109,
          description: "well-made and sturdy shoes that will bring up your basketball game",
          colors: [
            {
              code: "lightgray",
              img: "./img/blazer.png",
            },
            {
              code: "green",
              img: "./img/blazer2.png",
            },
          ],
        },
        {
          id: 4,
          title: "Crater",
          price: 129,
          description: "nothing makes more sense that buying shoes that Steph Curry can't get enough of",
          colors: [
            {
              code: "black",
              img: "./img/crater.png",
            },
            {
              code: "lightgray",
              img: "./img/crater2.png",
            },
          ],
        },
        {
          id: 5,
          title: "Hippie",
          price: 99,
          description: "hipp hopp hippety hopp, check out the new Hippie",
          colors: [
            {
              code: "gray",
              img: "./img/hippie.png",
            },
            {
              code: "black",
              img: "./img/hippie2.png",
            },
          ],
        },
      ]
      
let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")
const currentProductDesc = document.querySelector(".productDesc")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        //change the choosen product
        chosenProduct = products[index]

        currentProductDesc.textContent = chosenProduct.description
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img
        currentProductColors.forEach((color, index)=> {
            color.style.backgroundColor = chosenProduct.colors[index].code
    })
  })
})

currentProductColors.forEach((color, index)=> {
    color.addEventListener("click", ()=> { 
        currentProductImg.src = chosenProduct.colors[index].img
})
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white"
        size.style.color = "black"
    })
    size.style.backgroundColor = "black"
        size.style.color = "white"
  })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () => {
    payment.style.display = "none"
})