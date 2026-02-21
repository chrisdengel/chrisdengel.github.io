async function getUserRepos(username) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();
  
      const container = document.querySelector('.container2');
      container.innerHTML = '';
  
      const myImages = {
        "Lake-Town-Properties-LLC": "/images/apts2.png",
        "webdev-task-001": "/images/vocab.png",
        "todo_list_project": "/images/to_do.png"
      };
  
      const displayedRepos = data.filter(repo =>
        myImages[repo.name]
      );
  
      displayedRepos.forEach(repo => {
        const article = document.createElement('article');
        article.classList.add('project-card');
  
        article.innerHTML = `
          <a href="${repo.html_url}" target="_blank">
            <img src="${myImages[repo.name]}" alt="${repo.name} screenshot">
          </a>
          <h2>${repo.name}</h2>
          <p>${repo.description}</p>
          <a href="${repo.html_url}" target="_blank">View Repo</a> `;
  
        container.appendChild(article);
      });
  
    } catch (error) {
      console.error(error);
    }
  }
  
  getUserRepos("chrisdengel");
  