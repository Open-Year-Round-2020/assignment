
const btn = document.querySelector('.aaa');
console.log(btn);


function showDetail() { 
	document.getElementById("M").style.display="block";
	btn.classList.remove("hide");

}
function hideDetail() {  
	document.getElementById("M").style.display="none";
	btn.classList.add('hide');

}
function show() { 
	document.getElementById("Q").style.display="block";

}
function hide() {  
	document.getElementById("Q").style.display="block";
}

document.getElementById('M').onclick = function() {
	document.getElementById('M').style.display='none';
}

window.addEventListener("click", (e) => {console.log(e.target)})


let string = "";
let pictureArray = new Array("images/jihyo.svg","images/dahyun.svg","images/chaeyoung.svg");
let text = new Array("images/jihyo.svg","images/dahyun.svg","images/chaeyoung.svg");
for(var i=0; i<=2; i++)
{
	string +=
	 `<div class='a3'>                   <!--피드 바(a3)-->
		<div class="a31">
			<a href="https://www.instagram.com/rovvxhyo/?hl=ko"><div class="b e"><br><img src="images/momo.svg" class="d"></div>&nbsp;&nbsp;
			<div class="a311"><b class="pid_2">rovvxhyo</b></a></div>
			<div class="g"> <button onclick="showDetail()"><svg aria-label="옵션 더 보기" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg></button></div>

		</div>
	

		<div class="a32">
			<img src=${pictureArray[i]}  width="460" height="560" class="pid_img">
		</div>

		<div class="a33">
			<div class="abcd"><svg aria-label="좋아요 취소" class="_8-yf5 heart" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z" fill-rule="evenodd"></path></svg>&nbsp;&nbsp;</div>
			<a href="https://www.instagram.com/p/B__qlwBJNzB/?hl=ko"><svg aria-label="댓글 달기" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg></a>&nbsp;&nbsp;
			<svg aria-label="게시물 공유" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			<svg aria-label="저장" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
		</div>


		<div class="a34">
			<div class="p1"><b class="pid_4">potential1205</b>님 <b>여러 명</b>이 좋아합니다</div>
			<div class="p2 p3"><a href="https://www.instagram.com/p/B__qlwBJNzB/?hl=ko"><p>댓글 160개 모두 보기</p></a></div>
			<div class="p1"><a href="https://www.instagram.com/dubu1815/?hl=ko"><b>r0_calm 너무 멋져요~~ </b>&nbsp; <svg class="x1" aria-label="좋아요" class="_8-yf5 " fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path></svg></a></div>
			<div class="p1"><a href="https://www.instagram.com/park_ji__/?hl=ko"><b>0404kong 여기가 어디죠?</b><svg class="x1" aria-label="좋아요" class="_8-yf5 " fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path></svg></a></div>
			<div class="p2"><a href="https://www.instagram.com/p/B__qlwBJNzB/?hl=ko">2시간 전</a></div>
		</div>

		<div class="a35 p4">
			<p>댓글 달기...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b class="p5">게시</b></p>
		</div>
	</div>`;
}

document.querySelector('.copy').innerHTML=string;




var move = document.querySelectorAll('.a3');
var H = document.querySelectorAll('.heart');
        
move[0].addEventListener("mouseover",A1,false);
move[0].addEventListener("mouseout",B1,false);
move[1].addEventListener("mouseover",A2,false);
move[1].addEventListener("mouseout",B2,false);
move[2].addEventListener("mouseover",A3,false);
move[2].addEventListener("mouseout",B3,false);

H[0].classList.add("black");
H[1].classList.add("black");
H[2].classList.add("black");

H[0].addEventListener("click",check1,false);
H[1].addEventListener("click",check2,false);
H[2].addEventListener("click",check3,false);

function check1()
{
	if(H[0].classList.contains("black"))
	{
	H[0].classList.remove("black");
	H[0].classList.add("red");
	}
	else if(H[0].classList.contains("red")){
	H[0].classList.remove("red");
	H[0].classList.add("black");
	}
}
function check2()
{
	if(H[1].classList.contains("black"))
	{
	H[1].classList.remove("black");
	H[1].classList.add("red");
	}
	else if(H[1].classList.contains("red")){
	H[1].classList.remove("red");
	H[1].classList.add("black");
	}
}
function check3()
{
	if(H[2].classList.contains("black"))
	{
	H[2].classList.remove("black");
	H[2].classList.add("red");
	}
	else if(H[2].classList.contains("red")){
	H[2].classList.remove("red");
	H[2].classList.add("black");
	}
}

function A1()
{
	move[0].classList.add("a3_move");
	move[0].classList.add("a3_ani");
}
function B1()
{
	move[0].classList.remove("a3_move");
	move[0].classList.remove("a3_ani");
}
function A2()
{
	move[1].classList.add("a3_move");
	move[1].classList.add("a3_ani");
}
function B2()
{
	move[1].classList.remove("a3_move");
	move[1].classList.remove("a3_ani");
}
function A3()
{
	move[2].classList.add("a3_move");
	move[2].classList.add("a3_ani");
}
function B3()
{
	move[2].classList.remove("a3_move");
	move[2].classList.remove("a3_ani");
}