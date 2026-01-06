# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Amanda Pinsker, a product and experience designer. It's built with Jekyll and hosted on GitHub Pages at amandapinsker.com. The site showcases design work, includes a reading tracker, writing, and an art page.

## Build and Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site (output to _site/)
bundle exec jekyll build
```

The site will be available at `http://localhost:4000` when running locally.

### Deployment
The site is automatically deployed via GitHub Pages when changes are pushed to the `master` branch. No manual deployment steps are needed.

## Architecture

### Jekyll Structure
- **_config.yml**: Site configuration including SEO metadata, plugins (jekyll-seo-tag)
- **_data/**: YAML files containing structured data for portfolio items, reading list, and writing
  - `portfolio.yaml`: Portfolio projects with metadata (title, description, URL, show/hide flag, external link flag)
  - `reading.yaml`: Books with reading location, dates, highlights, and images
  - `writing.yaml`: Writing pieces with publication status
- **_layouts/**: HTML templates
  - `base.html`: Base template for portfolio pages
  - `project.html`: Template for case study pages
  - `reading.html`: Template for reading page
  - `post.html`: Template for writing posts
- **_includes/**: Reusable HTML components
  - `project-info.html`: Project header that pulls data from portfolio.yaml based on page tag
  - `head.html`, `footer.html`, `scripts.html`
- **_sass/**: SCSS partials organized by page/feature
  - `_variables.scss`: Colors, fonts, timing constants
  - `_home.scss`, `_project.scss`, `_reading.scss`, `_writing.scss`, `_art.scss`: Page-specific styles
  - `_easter-egg.scss`: Easter egg styling (typing "amanda" triggers an effect)
  - `_hover.scss`: Hover state styles
  - `_mq.scss`: Media query mixins
- **main.scss**: Main stylesheet that imports all partials
- **project/**: Individual project case study HTML files
- **js/main.js**: JavaScript for ScrollReveal animations, hover states, and easter egg

### Data-Driven Content
Portfolio items, reading list, and writing are managed through YAML files in `_data/`. The homepage and other pages loop through these data files using Liquid templating.

To add a new portfolio item, add an entry to `_data/portfolio.yaml` with the structure:
```yaml
- title: Project Name
  description: Short description
  url: /project/slug or external URL
  show: true/false
  external: true/false
  id: unique-id
```

### Styling System
- Uses SCSS with partials organized by feature
- Dark mode support via `@media (prefers-color-scheme: dark)`
- Responsive design with media query mixins in `_mq.scss`
- Color variables defined in `_variables.scss` ($foreground, $background, $accent colors)

### Interactive Features
- **Easter egg**: Typing "amanda" on the homepage triggers a visual effect (see js/main.js:38-78)
- **Hover states**: Project links on homepage change background imagery on hover
- **ScrollReveal**: Animations for elements as they scroll into view
- **Footnotes with highlights**: Interactive footnotes in the about section with hover effects

## Content Management

### Adding a New Project Case Study
1. Add project metadata to `_data/portfolio.yaml`
2. Create a new HTML file in `project/` directory
3. Use front matter with `tag` matching the portfolio item title for `project-info.html` to work
4. Add project images to `img/full/`

### Adding a Reading Entry
Add to `_data/reading.yaml` following the template at the top of the file. Include title, URL slug, place read, book image URL, optional picture image, date, description, and optional highlights array.

### Adding a Writing Post
Add entry to `_data/writing.yaml` with title, description, URL slug, date, and `published: true/false` flag.

## Important Notes

- The `_site/` directory is the built output and should not be edited directly
- Portfolio old JSON file (`_data/portfolio_old.json`) appears to be legacy and is not used
- Custom domain is configured via CNAME file
- SEO metadata is handled by jekyll-seo-tag plugin
