// assets/js/notices.js
document.addEventListener('DOMContentLoaded', function() {
  const noticeContainer = document.querySelector('.notices');
  
  const updateNotices = () => {
    fetch('/_data/notices.md')
      .then(response => response.text())
      .then(text => {
        // Parse Markdown (example using Marked.js)
        noticeContainer.innerHTML = marked.parse(text.split('---')[2].trim());
      });
  };

  // Initial load + refresh every 60 seconds
  updateNotices();
  setInterval(updateNotices, 60000);
});
