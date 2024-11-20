---
layout: home
title: Welcome to My Blog
description: Exploring technology, development, and creative solutions
featured_image: /assets/images/home-banner.svg
---

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<div class="hero-section">
  <h1>{{ page.title }}</h1>
  <p class="lead">{{ page.description }}</p>
  <div class="cta-buttons">
    <a href="{{ '/projects' | relative_url }}" class="btn btn-primary">View Projects</a>
    <a href="{{ '/blog' | relative_url }}" class="btn btn-secondary">Read Blog</a>
  </div>
</div>

## Featured Projects

<div class="project-grid">
  {% assign featured_projects = site.projects | where: "featured", true | limit: 3 %}
  {% if featured_projects.size > 0 %}
    {% for project in featured_projects %}
      <div class="project-card">
        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
        {% else %}
          <div class="project-image placeholder">{{ project.title | slice: 0 }}</div>
        {% endif %}
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-type">{{ project.project_type }}</p>
          <p class="project-description">{{ project.description | default: project.excerpt | strip_html | truncate: 120 }}</p>
          <a href="{{ project.url | relative_url }}" class="read-more">Learn More →</a>
        </div>
      </div>
    {% endfor %}
  {% else %}
    <div class="empty-state">
      <p>No featured projects yet. Check back soon!</p>
    </div>
  {% endif %}
</div>

## Latest Posts

<div class="post-grid">
  {% if site.posts.size > 0 %}
    {% for post in site.posts limit:3 %}
      <div class="post-card">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-image">
        {% else %}
          <div class="post-image placeholder">
            <i class="fas fa-file-alt"></i>
          </div>
        {% endif %}
        <div class="post-content">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="post-meta">
            <span class="date"><i class="far fa-calendar-alt"></i> {{ post.date | date: "%B %d, %Y" }}</span>
            {% if post.categories %}
              <span class="categories">
                {% for category in post.categories %}
                  <a href="{{ '/categories#' | append: category | slugify | relative_url }}">#{{ category }}</a>
                {% endfor %}
              </span>
            {% endif %}
          </div>
          <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
          {% include reading_time.html content=post.content %}
        </div>
      </div>
    {% endfor %}
    <div class="view-all">
      <a href="{{ '/blog' | relative_url }}" class="btn btn-outline">View All Posts →</a>
    </div>
  {% else %}
    <div class="empty-state">
      <p>No posts yet. Check back soon!</p>
    </div>
  {% endif %}
</div>

## Newsletter

<div class="newsletter-section">
  <h3>Stay Updated</h3>
  <p>Subscribe to my newsletter for the latest updates on projects, blog posts, and tech insights.</p>
  {% include newsletter.html %}
</div>

## Get in Touch

<div class="contact-section">
  <p>Interested in working together or have questions? Feel free to reach out!</p>
  <div class="social-links">
    {% if site.github_username %}
      <a href="https://github.com/{{ site.github_username }}" class="social-link github" target="_blank" rel="noopener">
        <i class="fab fa-github"></i>
      </a>
    {% endif %}
    {% if site.twitter_username %}
      <a href="https://twitter.com/{{ site.twitter_username }}" class="social-link twitter" target="_blank" rel="noopener">
        <i class="fab fa-twitter"></i>
      </a>
    {% endif %}
    {% if site.linkedin_username %}
      <a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="social-link linkedin" target="_blank" rel="noopener">
        <i class="fab fa-linkedin"></i>
      </a>
    {% endif %}
  </div>
  <a href="{{ '/contact' | relative_url }}" class="btn btn-primary">Contact Me</a>
</div>
