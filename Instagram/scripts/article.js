var copyarticle = document.querySelector(".container_contents");
var copyContainer = document.querySelector(".container");

var article1 = copyarticle.cloneNode(true);
var article2 = copyarticle.cloneNode(true);

console.log(article1);
console.log(copyContainer);

var img1 = article1.querySelector(".article_img");
img1.src = "../photo0.jpg";

const like1 = article1.querySelector(".contents_like");
like1.innerHTML = "좋아요 3개";

const ment1 = article1.querySelector(".contents_comment");
ment1.innerHTML = "어릴 때의 나의 모습";

const reply1 = article1.querySelector(".contents_replymore");
reply1.innerHTML = "댓글 3개 모두 보기";

const comment1 = article1.querySelector(".contents_comment1");
reply1.innerHTML = "댓글 12개 모두 보기";

copyContainer.appendChild(article1);


var img2 = document.querySelector(".article_img");
img2.src = "../photo1.jpg";

const like2 = document.querySelector(".contents_like");
like2.innerHTML = "좋아요 35개";

const ment2 = document.querySelector(".contents_comment");
ment2.innerHTML = "마스크맨";

const reply2 = document.querySelector(".contents_replymore");
reply2.innerHTML = "댓글 3개 모두 보기";

const comment2 = document.querySelector(".contents_comment1");
reply2.innerHTML = "댓글 8개 모두 보기";

copyContainer.appendChild(article2);
