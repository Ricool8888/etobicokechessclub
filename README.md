When modifying / changing files from claude ensure the following wording is updated / kept:

Index page:
      Intro paragraphs
      Addresses of Second Cup
      Club rules

About us page:
      Mandate
      Vision Statement
      Person profiles (board of directors)

Posts / news page:
      Partnership with the Second Cup

Events calendar page:
      Info paragraph

Tournaments page:
      Info paragraph

FAQ page:
      All answers for FAQ questions

How pages work:

      Posts and news page:
            How this blog works: posts come from assets/posts.json. To publish
            a new post, add it directly to that file in the repo and commit —
            visitors can read, search, and filter posts, but can't submit
            their own.

      Events calendar page:
            How this calendar works: weekly meetings show automatically every
            Friday (set in assets/calendar.js). Special events come from assets/events.json.
            Click a day to view what's scheduled. To add a new event yourself,
            edit assets/events.json directly in the repo and commit the change —
            visitors can view the calendar but can't submit events.

      Tournaments page:
            How this page works: tournaments are listed in assets/tournaments.json.
            To add a new one or mark one as complete, edit that file in the repo
            and commit the change.

      Banners on index.html
            There are 2 styles of banners: info and urgent.  To add a banner, add json
            to the banner.json file and the next banner should appear.  If the banner
            doesn't appear, make sure the json is correct.  

      Gallery page:
            Photos go in assets/gallery/ and each one needs an entry in
            assets/gallery.json (grouped into sections). Full instructions are in
            the comment at the top of gallery.html. gallery.json is [] until the
            first photos are added.

      Page URLs:
            Files are named with hyphens (events-calendar.html, posts-and-news.html)
            and every internal link leaves off ".html" - GitHub Pages serves
            /about from about.html automatically. Keep new links in that form.

Custom domain / DNS (once the domain is purchased):
      1. Add a file named CNAME at the repo root containing just the domain
         (e.g. etobicokechessclub.com).
      2. At the domain registrar, add A records for the apex domain pointing to
         185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153,
         and a CNAME record for www pointing to ricool8888.github.io
      3. In GitHub: Settings > Pages > Custom domain, enter the domain, wait
         for the DNS check, then tick "Enforce HTTPS".
      4. Replace https://ricool8888.github.io/etobicokechessclub/ with the new
         domain in the canonical / og:url tags of each page, sitemap.xml and
         robots.txt.
      Until then the site is at https://ricool8888.github.io/etobicokechessclub/

Description of extra pages
      - Robots.txt tells automated web crawlers and search engine bots which pages and files they can or cannot visit on a website.
      - 400.html is a custom error page that a web server displays when a user tries to visit a web page with a broken URL or invalid request
      - 404.html is a custom error page that a web server displays when a user tries to visit a web page that does not exist, has been moved, or has a broken link
      - 503.html is a custom error page that a web server displays when a user tries to visit a web page that has active maintenance ongoing
      - sitemap.xml acts as a roadmap for your website. It lists all your important URLs and tells search engines like Google how to find and crawl your content.
      - .nojekyll is an empty configuration file placed in the root directory of a GitHub Pages repository. It tells GitHub to skip running the site through the Jekyll static site generator. This prevents Jekyll from ignoring files or folders that start with an underscore
      - static.yml file is most commonly used as a GitHub Actions workflow configuration template. It automates building and deploying static web content—such as HTML, CSS, and JavaScript—directly to hosting platforms like GitHub Pages whenever you push code changes to your repository.
