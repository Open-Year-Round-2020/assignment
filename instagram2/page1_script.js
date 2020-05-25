const data = [
    {
        id : 'Tom',
        profile : './page1/user_icon1.png',
        img : './page1/post1.jpg',
        like : '외 15명'
    },
    {
        id : 'James',
        profile : './page1/user_icon2.png',
        img : './page1/post2.jpg',
        like : '외 20명'
    },
    {
        id : 'Ann',
        profile : './page1/user_icon3.png',
        img : './page1/post3.jpg',
        like : '외 35명'
    }
]

const MAINPOST=document.querySelector('.left_down');


function Posting(id, profile, img, like){

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

    modalB1.classList.add('modal_button1');
    modalB2.classList.add('modal_button');
    modalImg.classList.add('three_dot_img');
    modalImg.setAttribute('src', './page1/three_dot.png' );

    modal.classList.add('modal');
    modalOverlay.classList.add('modal_overlay');
    modalContent.classList.add('modal_content');
    modaloutB.innerHTML='취소';

    // modalContent.appendChild('modaloutB');
    // modal.appendChild('modalOverlay');
    // modal.appendChild('modalContent');

    modalB2.appendChild(modalImg);
    modalB1.appendChild(modalB2);
    
    postTop.appendChild(postTopImg);
    postTop.appendChild(postId);
    postTop.appendChild(modalB1);
    postTop.appendChild(modal);

    postTop.classList.add('post_top');
    post.appendChild(postTop);

    //게시글 메인 이미지
    const mainImg=document.createElement('img');
    mainImg.setAttribute('src', img);
    mainImg.classList.add('post_img');
    post.appendChild(mainImg);
    
    //게시물 좋아요 수
    const postLIke=document.createElement('section');
    const postLikeImg=document.createElement('img');
    const postLike1=document.createElement('div');
    const postLike2=document.createElement('div');
    const postLike3=document.createElement('div');
    const postLike4=document.createElement('div');

    postLikeImg.classList.add('post_like_img');
    postLike1.classList.add('post_like1');
    postLike2.classList.add('post_like2');
    postLike3.classList.add('post_like3');
    postLike4.classList.add('post_like2');
    
    postLikeImg.setAttribute('src', './page1/icon5.jpg');
    postLike1.innerText='instagram';
    postLike2.innerText='님';
    postLike3.innerText = like;
    postLike4.innerText='이 좋아합니다.';

    postLike.classList.add('post_like');
    
    postLike.appendChile(postLikeImg);
    postLike.appendChile(postLike1);
    postLike.appendChile(postLike2);
    postLike.appendChile(postLike3);
    postLike.appendChile(postLike4);
    post.appendChild(postLike);

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
    MAINPOST.classList.add('left_down');
    MAINPOST.appendChild(post);
};

data.forEach((d) => {
    console.log(d);
    Posting(d.id, d.profile, d.img, d.like);
});