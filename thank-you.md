---
layout: page
title: Thank You
permalink: /thank-you/
---

<div class="thank-you-page">
  <div class="thank-you-content">
    <h1>Thank You!</h1>
    <p>Your message has been successfully sent. I'll get back to you as soon as possible.</p>
    
    <div class="next-steps">
      <h3>While you're here, why not:</h3>
      <ul>
        <li><a href="{{ '/blog' | relative_url }}">Read our latest blog posts</a></li>
        <li><a href="{{ '/projects' | relative_url }}">Check out our projects</a></li>
        <li>Follow us on social media:
          <div class="social-links">
            {% if site.github_username %}
              <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">
                <i class="fab fa-github"></i>
              </a>
            {% endif %}
            {% if site.twitter_username %}
              <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener">
                <i class="fab fa-twitter"></i>
              </a>
            {% endif %}
            {% if site.linkedin_username %}
              <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener">
                <i class="fab fa-linkedin"></i>
              </a>
            {% endif %}
          </div>
        </li>
      </ul>
    </div>
    
    <a href="{{ '/' | relative_url }}" class="btn btn-primary">Return to Homepage</a>
  </div>
</div>

<style>
.thank-you-page {
  text-align: center;
  padding: 4rem 1rem;
}

.thank-you-content {
  max-width: 600px;
  margin: 0 auto;
}

.next-steps {
  margin: 3rem 0;
  text-align: left;
}

.next-steps ul {
  list-style: none;
  padding: 0;
}

.next-steps li {
  margin: 1rem 0;
}

.social-links {
  display: inline-flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-links a {
  color: #2a7ae2;
  font-size: 1.5rem;
}

.social-links a:hover {
  color: #1756a9;
}
</style>
