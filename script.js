function openTab(evt, tabName, containerId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementById(containerId).getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementById(containerId).getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function copyToClipboard(codeId) {
    var code = document.querySelector('#' + codeId + ' code').innerText;
    navigator.clipboard.writeText(code).then(function() {
        alert('Copied to clipboard!');
    }, function(err) {
        alert('Failed to copy: ', err);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen1").click();
    document.getElementById("defaultOpenHTML1-1").click();
    // Rest of your code...
});




const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});




const searchInput = document.getElementById('searchInput');
const searchResults = document.querySelector('.search-results');

// Sample data for search results
const data = [
  { id: 1, title: 'Bash', tags: ['Programming', 'script', 'shell', 'sh', 'echo', 'linux'] },
  { id: 2, title: 'Git', tags: ['Linux Command', 'github', 'gitlab', 'version', 'VCS'] },
  { id: 3, title: 'Grep', tags: ['Linux Command', 'text', 'search', 'egrep', 'pattern'] },
  { id: 4, title: 'Netcat', tags: ['Linux Command', 'utility', 'traffic', 'network', 'ncat', 'nc'] }
];

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );

  searchResults.innerHTML = '';

  if (filteredData.length === 0) {
    const noResultsItem = document.createElement('div');
    noResultsItem.textContent = 'No results found';
    noResultsItem.classList.add('search-item');
    searchResults.appendChild(noResultsItem);
  } else {
    filteredData.forEach(item => {
      const searchItem = document.createElement('div');
      searchItem.textContent = `${item.title} - ${item.tags.join(', ')}`;
      searchItem.classList.add('search-item');
      searchResults.appendChild(searchItem);
    });
  }
});