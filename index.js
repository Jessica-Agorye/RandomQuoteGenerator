let nextBtn = document.querySelector("#btn-next");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let quoteEl;
let authorEl;

let url = "https://api.quotable.io/quotes?tags=famous-quotes";

nextBtn.addEventListener("click", () => {
  const getQuotes = async (url) => {
    try {
      const response = await fetch(url);
      let data = await response.json();
      let results = data.results;

      console.log(results);

      let randomIndex = Math.floor(Math.random() * results.length);
      console.log(randomIndex);

      quoteEl = results[randomIndex].content;

      console.log(quoteEl);

      authorEl = results[randomIndex].author;
      console.log(authorEl);

      quote.innerText = quoteEl;
      author.innerText = authorEl;
    } catch (error) {
      console.log("loading failed");
    }
  };

  getQuotes(url);
});
