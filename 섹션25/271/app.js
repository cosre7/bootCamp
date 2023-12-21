// 이 방식은 기존에 존재하던 li 태그들에만 이벤트가 적용되고 추가되는 li태그에는 적용되지 않는다.
// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;    
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function(e) {
    // 1. ul 요소의 자식 태그는 모두 삭제 가능 상태
    // e.target.remove();

    // 2. 클릭한 요소의 nodeName이 li인지 확인 후 맞으면 삭제
    e.target.nodeName === 'LI' && e.target.remove();
})