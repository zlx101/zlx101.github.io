---
layout: page
title: Contact Me
description: Get in touch with me for collaborations, questions, or just to say hi!
---

<div class="contact-page">
  <div class="contact-intro">
    <h2>Let's Connect!</h2>
    <p>I'm always interested in hearing about new projects, opportunities, or just having a friendly chat about technology and development.</p>
  </div>

  <div class="contact-form-container">
    <form action="https://formspree.io/f/xbjnkwlk" method="POST" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required class="form-control">
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required class="form-control">
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required class="form-control">
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required class="form-control"></textarea>
      </div>
      
      <div class="g-recaptcha" data-sitekey="{{ site.recaptcha.sitekey }}"></div>
      <small class="privacy-notice">By submitting this form, you agree to our <a href="{{ '/privacy-policy' | relative_url }}">Privacy Policy</a>.</small>
      
      <input type="hidden" name="_subject" value="New Contact Form Submission">
      <input type="hidden" name="_next" value="{{ site.url }}{{ site.baseurl }}/thank-you">
      
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>

  <div class="alternative-contact">
    <h3>Other Ways to Reach Me</h3>
    <div class="social-links">
      {% if site.github_username %}
        <a href="https://github.com/{{ site.github_username }}" class="social-link github" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> GitHub
        </a>
      {% endif %}
      
      {% if site.twitter_username %}
        <a href="https://twitter.com/{{ site.twitter_username }}" class="social-link twitter" target="_blank" rel="noopener">
          <i class="fab fa-twitter"></i> Twitter
        </a>
      {% endif %}
      
      {% if site.linkedin_username %}
        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="social-link linkedin" target="_blank" rel="noopener">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      {% endif %}
    </div>
  </div>
  
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</div>
