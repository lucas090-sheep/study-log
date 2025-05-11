
// 게시글 불러오기 함수
async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("서버 통신 실패");

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("에러 발생:", error);
    document.getElementById("postList").innerText = "게시글 불러오기 실패.";
  }
}

// 게시글 화면에 표시
function displayPosts(posts) {
  const postList = document.getElementById("postList");
  postList.innerHTML = posts.slice(0, 5).map(post => `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `).join("");
}

// 사용자 정보 전송
async function sendUser(event) {
  event.preventDefault(); // 폼 기본 제출 막기

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
      }),
    });

    if (!response.ok) throw new Error("서버 오류");

    const data = await response.json();
    document.getElementById("result").innerText = `사용자 등록 완료: ${data.name} (${data.email})`;
  } catch (error) {
    document.getElementById("result").innerText = "사용자 등록 실패!";
    console.error("에러:", error);
  }
}
