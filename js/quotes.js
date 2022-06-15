const quotes = [
    {
        quote: "오밍구 보고싶어",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 사랑해",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 잘생겼어",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 셀카보내줘",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 토요일에 쿠우쿠우간당",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 점심 맛있게 먹어",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 오늘 발표 화이팅><",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 오늘도 귀엽겠지..",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 엉덩이 찰싹찰싹",
        author: "냥구 왈",
    },
    {
        quote: "오밍구 바보~><",
        author: "냥구 왈",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;