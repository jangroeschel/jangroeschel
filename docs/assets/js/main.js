
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Placeholder authorship description 1',
        },
        {
            url: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Placeholder authorship description 1',
        },
        {
            url: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Placeholder authorship description 1',
        },
        {
            url: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Placeholder authorship description 1',
        },
        {
            url: 'https://www.linkedin.com/in/jangroeschel/',
            title: 'Placeholder authorship description 1',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://www.linkedin.com/in/jangroeschel/');">

        <div class="blog-link">

            <h3><a href="https://www.linkedin.com/in/jangroeschel/">Visit my LinkedIn in for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}