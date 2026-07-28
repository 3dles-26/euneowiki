// 공통 기능

// 현재 연도를 푸터에 표시 (푸터에 span#year가 있을 경우)
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});