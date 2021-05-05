module.exports = {
  someSidebar: {
    About: ['about'],
    Database: [
      'database/ACID',
      'database/Indexing',
      'database/Normalization',
      'database/Optimistic-pessimistic-locking-SQL',
      'database/Recovery',
      'database/Sharding',
      'database/Transaction-isolation-levels',
      'database/Joins'
    ],
    'Object Oriented Design': [
      'object-oriented-design/Cohesion-vs-coupling',
      'object-oriented-design/Composition-over-inheritance',
      'object-oriented-design/Dependency-injection',
      'object-oriented-design/Dependency-inversion-principle',
      'object-oriented-design/Inversion-of-control',
      'object-oriented-design/OOP-concepts',
      'object-oriented-design/SOLID-principles'
    ],
    Web: [
      'web/API-versioning',
      'web/Cookies-web-storage',
      'web/HTTP-caching',
      'web/HTTP2',
      'web/HTTPS',
      'web/REST',
      'web/Service-workers',
      'web/SSH',
      'web/SSL-TLS',
      'web/Websocket',
      {
        Security: [
          'web/security/Authentication',
          'web/security/Cross-Site-forgery-attack',
          'web/security/Hashing-algorithms',
          'web/security/SQL-injection',
          'web/security/XSS'
        ]
      }
    ],
    Networking: [
      'networking/DNS',
      'networking/OSI-model',
      'networking/TCP-UDP'
    ],
    'Operating System': [
      'operating-system/Memory-management',
      'operating-system/Process-management'
    ],
    Tools: [
      'tools/AWS',
      'tools/Docker',
      'tools/Rabbitmq',
      'tools/Redis'
    ]
  },
};
