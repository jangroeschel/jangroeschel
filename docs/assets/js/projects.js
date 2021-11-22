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
            title: 'Project 1',
            demo: false,
            technologies: ['subcategory1', 'subcategory2', 'subcategory3'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['featured', 'category1']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 2',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['featured', 'category2']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 3',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['featured', 'category3']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 4',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['featured', 'category4']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 5',
            demo: false,
            technologies: ['subcategory1'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 6',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 7',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 8',
            demo: false,
            technologies: ['subcategory1'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 9',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 10',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 11',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 12',
            demo: false,
            technologies: ['subcategory1'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 13',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 14',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1', 'category2']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 15',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
            categories: ['category1']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Project 16',
            demo: false,
            technologies: ['subcategory1', 'subcategory2'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo, diam sit amet euismod tristique, sem turpis scelerisque arcu, in.",
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