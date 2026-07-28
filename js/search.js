// 검색 기능

function searchDoc() {
    const input = document.getElementById("search");

    if (!input) return;

    const keyword = input.value.trim();

    if (keyword === "") {
        alert("검색어를 입력하세요.");
        input.focus();
        return;
    }

    // 공백 제거
    const fileName = keyword.replace(/\s+/g, "");

    // docs 폴더의 문서로 이동
    location.href = encodeURIComponent(fileName) + ".html";
}

// Enter 키로 검색
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search");

    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            searchDoc();
        }
    });
});