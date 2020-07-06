const MAINPOST=document.querySelector('.left_down');


function Posting(id,profile, img){

    const post= document.createElement('div');

    //게시글 상단
    const postTop = document.createElement('div');   
    const postTopImg = document.createElement('img');
    const postId = document.createElement('div');

    const modalB1=document.createElement('div');
    const modalB2=document.createElement('div');
    const modalImg=document.createElement('img');

    const modal=document.createElement('div');
    const modalOverlay=document.createElement('div');
    const modalContent=document.createElement('div');
    const modaloutB=document.createElement('button');

    postTopImg.classList.add('post_top_img');
    postTopImg.setAttribute('src', profile );

    postId.classList.add('post_id');
    postId.innerText = id;

    const MODAL=document.querySelector('.MODAL')
    const modalClone=MODAL.cloneNode(true);
    postTop.appendChild(modalClone);

    postTop.appendChild(postTopImg);
    postTop.appendChild(postId);


    postTop.classList.add('post_top');
    post.appendChild(postTop);

    //게시글 메인 이미지
    const mainImg=document.createElement('img');
    mainImg.setAttribute('src', img);
    mainImg.classList.add('post_img');
    post.appendChild(mainImg);

    

    //게시글 하단
    const comment=document.createElement('section');
    const comment1=document.createElement('div');
    const comment2=document.createElement('div');

    comment.classList.add('post_comment');
    comment1.classList.add('comment1');
    comment2.classList.add('comment2');

    comment1.innerText='댓글달기...';
    comment2.innerText='게시';

    comment.appendChild(comment1);
    comment.appendChild(comment2);
    post.appendChild(comment);

    post.classList.add('insta_post');
    /*MAINPOST.classList.add('left_down2');*/
    MAINPOST.appendChild(post);



};

data.forEach((d) => {
console.log(d);
Posting(d.id,d.profile,d.img);
});