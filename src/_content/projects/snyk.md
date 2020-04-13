---
title: Snyk
date: 2017-06-02
summary: Making it easier for developers to keep their projects secure and vulnerability free.
image: /images/projects/snyk/image.jpg
category:
- Interaction design
tags:
- featured
style:
  color-accent: '#333152'
  screenshot-shadow: '#0f0d30'
  screenshot-offset: '#6b698e'
aside: |
  Year
  : 2017

  Role
  : Design and user-experience
screenshots:
  projects:
  - url: /images/projects/snyk/screenshot_projects.png
    alt: Projects page
  flow:
  - url: /images/projects/snyk/screenshot_flow_before.png
    alt: Original user journey for adding projects
  - url: /images/projects/snyk/screenshot_flow_after.png
    alt: Proposed user journey for adding projects
  - url: /images/projects/snyk/screenshot_add_repos.png
    alt: Add repos screen
  additional:
  - url: /images/projects/snyk/screenshot_integrations.png
    alt: Integrations page
  - url: /images/projects/snyk/screenshot_usage.png
    alt: Usage page
---
{% render 'screenshots' with screenshots.projects
  alignment: 'bleed'
%}

{% render 'aside'
  aside: aside
%}

With the belief that the open source community is a force for good, Snyk brought together a team of security experts and talented software developers to make it easier for everyone to use open source safely. Snyk enables developers to find, and more importantly fix, known vulnerabilities in their open source projects.

I was brought on-board to address three critical areas of the product to improve sign-up conversion rates and increase the overall number of projects monitored by the service. At the same time, the company was also beginning to dramatically broaden its support for different programming languages and integrations beyond an initial offering that was limited to node.js and GitHub.

{% render 'screenshots' with screenshots.flow
  caption: 'The original project creation flow took users to a dead end that provided too many options. The revised journey closed the loop, and ensured the project overview page was the single place to view information and a project and manage its settings. This also required the creation of a task focused screen for adding new repos to a project.'
  alignment: 'bleed'
%}

I reviewed the project creation flow, addressing areas of friction and confusion, clarifying and simplifying the journey from connecting a code source to monitoring a project for vulnerabilities. I initially focused my attention on redesigning the overview page for projects where I consolidated functionality previously spread across different parts of the product. I then went on to devise the flows and interfaces for integrating third-party tools and partner services and pages that reported usage and displayed billing information.

{% render 'screenshots' with screenshots.additional
  caption: 'Integrations and reporting screens.'
  alignment: 'bleed'
%}

Throughout my engagement I also advised on the development of the company’s nascent component library. I advocated for developing patterns that carried few assumptions about their intended use, enabling them to be applied more broadly across the product.
