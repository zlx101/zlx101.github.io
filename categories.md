---
layout: page
title: Categories
permalink: /categories/
---

<div class="categories-page">
  {% for category in site.categories %}
    <div class="category-group">
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <h2 id="{{ category_name | slugize }}">{{ category_name }}</h2>
      <ul class="post-list">
        {% for post in site.categories[category_name] %}
          <li>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
            <h3>
              <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            {% if post.excerpt %}
              <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
