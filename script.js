//your code here
const issuesList = document.getElementById("issues-list");
const pageNumber = document.getElementById("page-number");
let currentPage = 1;

function displayIssues(issues) {
  issuesList.innerHTML = "";
  for (const issue of issues) {
    const li = document.createElement("li");
    li.textContent = issue.title;
    issuesList.appendChild(li);
  }
}

function loadIssues(page) {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    .then(response => response.json())
    .then(data => displayIssues(data));
}

loadIssues(currentPage);

document.getElementById("load-next").addEventListener("click", () => {
  currentPage++;
  pageNumber.textContent = `Page number ${currentPage}`;
  loadIssues(currentPage);
});

document.getElementById("load-prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    pageNumber.textContent = `Page number ${currentPage}`;
    loadIssues(currentPage);
  }
});
