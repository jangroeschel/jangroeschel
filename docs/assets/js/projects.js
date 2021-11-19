$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Mporter',
            demo: 'https://mporter.co',
            technologies: ['Flask', 'Celery', 'Python'],
            description: "Flask web application for easy reporting updates to one's mentor. Multi-user support, easy to deploy and use.",
            categories: ['featured', 'category1']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Wall-E',
            demo: 'http://wall-e-jekyll.github.io/',
            technologies: ['Semantic UI', 'Jekyll'],
            description: "A modern Jekyll theme with grid frontpage, beautiful typography, mobile responsive, made with Semantic UI.",
            categories: ['featured', 'category2']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Marvel',
            demo: false,
            technologies: ['Android', 'OpenCV'],
            description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
            categories: ['featured', 'category3']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Master Password',
            demo: 'https://www.nagekar.com/mpw',
            technologies: ['Semantic UI', 'CSS3'],
            description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
            categories: ['featured', 'category4']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Social Share Count',
            demo: false,
            technologies: ['Python'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['category1']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Data Destroyer',
            demo: false,
            technologies: ['C++', 'Qt'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['category1']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Raspberry Pi Monitor',
            demo: false,
            technologies: ['python', 'flask'],
            description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'S3Scan',
            demo: false,
            technologies: ['python'],
            description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Elementary',
            demo: 'https://elementary-jekyll.github.io/',
            technologies: ['Jekyll', 'CSS3'],
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['category1']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Soot Spirits',
            demo: 'https://sootspirits.github.io',
            technologies: ['Jekyll', 'CSS3'],
            description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
            categories: ['category1']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Terminal Group Chat',
            demo: false,
            technologies: ['Python', 'Sockets'],
            description: "Simple terminal group chat based on native sockets using Python.",
            categories: ['category1']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Reusing Old LCD Panel',
            demo: false,
            technologies: ['DIY'],
            description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
            categories: ['category1']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Encrypted Self-Hosted Cloud',
            demo: false,
            technologies: ['NextCloud', 'GnuPG'],
            description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Encrypted Backups - Google Cloud',
            demo: false,
            technologies: ['NextCloud', 'Duplicity'],
            description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Local Cloud - Raspberry Pi',
            demo: false,
            technologies: ['FTP', 'DIY'],
            description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
            categories: ['category1']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Koalamate',
            demo: false,
            technologies: ['Electron', 'Javascript'],
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
            categories: ['category1']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}