// Interactive JavaScript for Vishal Chandel's Portfolio

// 1. Theme Management (Light / Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

// Check saved theme preference or system default
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  themeToggleLightIcon.classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
  themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggleLightIcon.classList.add('hidden');
    themeToggleDarkIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.remove('hidden');
  }
});

// 2. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// 3. Project Filter Tabs
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-blue-600', 'text-white');
      b.classList.add('text-slate-600', 'dark:text-slate-300');
    });

    btn.classList.add('active', 'bg-blue-600', 'text-white');
    btn.classList.remove('text-slate-600', 'dark:text-slate-300');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'flex';
        card.classList.add('animate-fade-in');
      } else {
        card.style.display = 'none';
        card.classList.remove('animate-fade-in');
      }
    });
  });
});

// 4. Project Modal Details Data
const projectData = {
  commerce: {
    title: 'CommerceEngine',
    category: 'Backend Microservices & Observability',
    techStack: 'Java 21, Spring Boot 4, MySQL, Redis, Docker, OpenTelemetry, Grafana LGTM, ELK, Flyway',
    description: 'Enterprise REST API backend built in Spring Boot 4 and Java 21 for robust e-commerce transaction processing with soft-delete data integrity and distributed monitoring.',
    highlights: [
      'Engineered REST API endpoints using Spring Boot 4 & Java 21 with Hibernate soft-deletes to prevent accidental data loss.',
      'Optimized query latency by introducing a Redis caching layer and resolving SQL N+1 select issues via JPQL JOIN FETCH.',
      'Configured distributed tracing and centralized logging using OpenTelemetry, ELK Stack, Grafana LGTM, and Docker Compose.'
    ],
    githubUrl: 'https://github.com/VISHALCHANDEL'
  },
  ridesync: {
    title: 'RideSync Backend',
    category: 'Real-Time gRPC & Geo-Spatial Systems',
    techStack: 'Java 21, Spring Boot 3, Redis (Jedis), gRPC, Protobuf, MySQL, JPA/Hibernate, Gradle',
    description: 'Clean-architecture ride-hailing backend engine managing real-time passenger bookings, driver lifecycle states, and low-latency dispatch.',
    highlights: [
      'Engineered clean architecture in Spring Boot 3 to isolate domain logic for ride lifecycles and transactional bookings.',
      'Implemented real-time driver tracking and radius matching utilizing Redis Geo-spatial operations for instant nearby driver lookups.',
      'Designed low-latency gRPC services with Protocol Buffers (Protobuf) to handle instant ride acceptances and dispatch notifications.'
    ],
    githubUrl: 'https://github.com/VISHALCHANDEL'
  },
  springagent: {
    title: 'SpringAgent CLI',
    category: 'AI Assistant & LLM Tool Automation',
    techStack: 'Java 21, Spring Boot, Spring AI, OpenAI GPT-4o, Gradle, Git',
    description: 'Interactive CLI developer assistant built with Spring AI and GPT-4o to automate local software engineering workflows.',
    highlights: [
      'Engineered an interactive terminal CLI using Spring Boot and Spring AI to automate everyday software engineering tasks.',
      'Orchestrated autonomous function calling (tool-calling) for filesystem operations, regex search, and shell terminal execution via OpenAI GPT-4o.',
      'Implemented multi-turn session conversational memory using MessageChatMemoryAdvisor.'
    ],
    githubUrl: 'https://github.com/VISHALCHANDEL'
  }
};

function openProjectModal(key) {
  const data = projectData[key];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${data.category}</span>
      </div>
      <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">${data.title}</h2>
      
      <div class="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
        <span class="font-bold text-blue-600 dark:text-blue-400">Tech Stack:</span> ${data.techStack}
      </div>

      <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${data.description}</p>
      
      <div class="space-y-2">
        <h4 class="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Key Technical Accomplishments</h4>
        <ul class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          ${data.highlights.map(item => `
            <li class="flex items-start gap-2">
              <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
        <button onclick="closeProjectModal()" class="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          Close
        </button>
        <a href="${data.githubUrl}" target="_blank" rel="noopener" class="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors flex items-center gap-1.5">
          <span>GitHub Repository</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
}

document.getElementById('project-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('project-modal')) {
    closeProjectModal();
  }
});

// 5. Copy Text Utility
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied "${text}" to clipboard!`);
  }).catch(() => {
    alert(`Text: ${text}`);
  });
}

// 6. Contact Form Submission
const contactForm = document.getElementById('contact-form');
const toastSuccess = document.getElementById('toast-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  toastSuccess.classList.remove('hidden');
  toastSuccess.classList.add('flex');
  contactForm.reset();

  setTimeout(() => {
    toastSuccess.classList.add('hidden');
    toastSuccess.classList.remove('flex');
  }, 5000);
});
