# My Jekyll Blog

A modern, responsive Jekyll blog with project portfolio, newsletter integration, and social media features.

## 🚀 Quick Setup Guide

### 1. Install Ruby
1. Download Ruby+Devkit installer from [RubyInstaller](https://rubyinstaller.org/downloads/)
   - Choose Ruby+Devkit 3.2.X (x64)
   - ✅ Check "Add Ruby executables to your PATH" during installation
   - ✅ Run the `ridk install` step at the end

### 2. Install Jekyll and Bundler
Open a new Command Prompt and run:
```bash
gem install bundler jekyll
```

### 3. Install Project Dependencies
Navigate to your project directory and run:
```bash
cd c:/Users/zlx02/Desktop/每日公众号写文素材
bundle install
```

### 4. Start the Development Server
```bash
bundle exec jekyll serve --livereload
```
Your site will be available at: http://localhost:4000

## 📁 Project Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/            # Page layouts
├── _includes/          # Reusable components
├── _posts/             # Blog posts
├── _projects/          # Project portfolio
├── assets/             # Images, CSS, JS
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── images/        # Image files
└── index.md           # Homepage
```

## 🔧 Development

### Creating New Posts
```bash
bundle exec jekyll post "My New Post"
```

### Creating New Projects
Add new .md files to the `_projects` directory:
```markdown
---
layout: project
title: Project Name
description: Project description
featured: true
image: /assets/images/projects/project-name.jpg
---
```

### Building for Production
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## 📝 Writing Content

### Front Matter
All posts and projects support these front matter variables:
```yaml
---
layout: post/project
title: Title
description: Description
image: /path/to/image.jpg
categories: [category1, category2]
tags: [tag1, tag2]
featured: true/false
---
```

### Adding Images
1. Place images in `/assets/images/`
2. Reference in content: `![Alt text](/assets/images/image.jpg)`

## 🎨 Customization

### Site Configuration
Edit `_config.yml` to change:
- Site title and description
- Social media links
- Analytics settings
- Collection configurations

### Styling
- Main styles: `/assets/css/main.scss`
- Homepage styles: `/assets/css/home.scss`

## 🔍 SEO Features
- Automatic sitemap generation
- Meta tags for social sharing
- Schema.org markup
- RSS feed

## 📱 Features
- Responsive design
- Dark/Light mode toggle
- Reading time estimates
- Social sharing buttons
- Newsletter integration
- Project portfolio
- Category pages
- Related posts

## 💡 Need Help?
- Jekyll Documentation: https://jekyllrb.com/docs/
- Create an issue in the repository
- Check the troubleshooting guide below

## 🔧 Troubleshooting

### Common Issues

1. **Jekyll server won't start**
   ```bash
   # Try running with bundle exec
   bundle exec jekyll serve
   ```

2. **Missing dependencies**
   ```bash
   # Update gems
   bundle update
   ```

3. **Port already in use**
   ```bash
   # Use a different port
   bundle exec jekyll serve --port 4001
   ```

4. **Livereload not working**
   ```bash
   # Force polling
   bundle exec jekyll serve --livereload --force_polling
   ```
