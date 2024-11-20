---
layout: page
title: Privacy Policy
permalink: /privacy-policy/
last_updated: 2024-01-15
---

<div class="privacy-policy">
  <h1>Privacy Policy</h1>
  <p class="last-updated">Last Updated: {{ page.last_updated }}</p>

  <div class="section">
    <h2>1. Information We Collect</h2>
    <p>We collect information that you voluntarily provide to us when you:</p>
    <ul>
      <li>Subscribe to our newsletter</li>
      <li>Contact us through our contact form</li>
      <li>Comment on our blog posts</li>
    </ul>
    <p>This information may include:</p>
    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Message content</li>
    </ul>
  </div>

  <div class="section">
    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul>
      <li>Send you our newsletter (if subscribed)</li>
      <li>Respond to your inquiries</li>
      <li>Improve our website and services</li>
      <li>Send you important updates about our blog or services</li>
    </ul>
  </div>

  <div class="section">
    <h2>3. Data Protection</h2>
    <p>We implement security measures to protect your personal information:</p>
    <ul>
      <li>Secure form submissions using Formspree</li>
      <li>Regular security updates</li>
      <li>Limited access to personal information</li>
    </ul>
  </div>

  <div class="section">
    <h2>4. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
      <li>Access your personal information</li>
      <li>Request correction of your data</li>
      <li>Unsubscribe from our newsletter</li>
      <li>Request deletion of your data</li>
    </ul>
  </div>

  <div class="section">
    <h2>5. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us:</p>
    <ul>
      <li>Through our <a href="{{ '/contact' | relative_url }}">contact form</a></li>
      <li>By email at: {{ site.author.email }}</li>
    </ul>
  </div>
</div>

<style>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.last-updated {
  color: #666;
  font-style: italic;
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  color: #2a7ae2;
  margin-bottom: 1rem;
}

.section ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.section li {
  margin-bottom: 0.5rem;
}
</style>
