let counter = 0;

function unfollow() {
  document.querySelectorAll("._acan")[(document.querySelectorAll("._acan").length-1)-counter].click();
  setTimeout(function(){document.querySelectorAll("._a9--")[0].click()},5000);
  counter++;
}
unfollow();
setInterval(unfollow, 35000);
