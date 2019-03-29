$(() => {
  $.ajaxSetup({
    cache: false
  });

  const getQuote = () => {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      (json) => {
        $("#text").html($(json[0].content).text().trim());
        $("#author").find("em").text(json[0].title);
        $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent($(json[0].content).text().trim()) + " " + encodeURIComponent("— " + json[0].title));
      }
    );
  };
  getQuote();

  $("#new-quote").click(() => {
    getQuote();
  });
});
