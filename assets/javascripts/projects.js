var langColors = {
    'javascript': '#f1e05a',
    'typescript': '#2b7489',
    'html': '#e34c26',
    'css': '#563d7c',
    'python': '#3572A5',
    'makefile': '#427819',
    'c#': '#178600',
    'c': '#555555'
}


function getRepo(user, callback){
    var url = `https://api.github.com/users/${user}/repos?sort=created`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function prettifyRepoName(name){
    var words = name.split("-");
    for(var i =0; i< words.length; i++){
        words[i] = capitalizeFirstLetter(words[i]);
    }
    return words.join(" ");
}

function renderProjects(proj){
    var list = document.getElementById('projects-list');
    var tocListPm = document.getElementById('toc-list-pm');
    var tocList = document.getElementById('toc-list');
    for(var i=0; i< proj.length; i++){
        var li = `<li class="mdl-list__item mdl-list__item--line">
        <span class="mdl-list__item-primary-content">
            <h3 id="${proj[i].name}" style="margin-top: 85px;">
                <a href="${proj[i].homepage}docs/">${prettifyRepoName(proj[i].name)}</a>
                <a class="headerlink" href="#${proj[i].name}" title="Permanent link">¶</a>
            </h3>
            <span class="mdl-list__item-text-body">${proj[i].description}</span>
            <div class="f6 text-gray mt-2 pb-4">
                <span class="repo-language-color" style="background-color:${langColors[proj[i].language.toLowerCase()]};"></span>
                <span class="mr-3" itemprop="programmingLanguage">${proj[i].language}</span>
                Created on ${proj[i].created_at}
            </div>
        </span>
    </li>`
        list.innerHTML += li;
        tocList.innerHTML = tocListPm.innerHTML = tocListPm.innerHTML +
            `<li class="md-nav__item">
                <a href="#${proj[i].name}" title="${prettifyRepoName(proj[i].name)}" class="md-nav__link">
                    ${prettifyRepoName(proj[i].name)}
                </a>
            </li>`
    }
}

(function(){
    getRepo('nmanumr', renderProjects);
})();