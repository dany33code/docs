webpackJsonp([0xd469fd7863db],{469:function(e,t){e.exports={pathContext:{editPath:"distribution/testing.md",current:{path:"docs/distribution/testing",title:"The Distribution: Create Powerful APIs with Ease - Testing and Specifying the API"},prev:{path:"docs/distribution",title:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",rootPath:"The Distribution: Create Powerful APIs with Ease",items:[{path:"distribution/installing-the-framework",title:"Installing the Framework",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[{path:"distribution/installing-the-framework/using-the-official-distribution-recommended",title:"Using the Official Distribution (recommended)",rootPath:"Installing the Framework",items:[]},{path:"distribution/installing-the-framework/using-symfony-flex-and-composer-advanced-users",title:"Using Symfony Flex and Composer (advanced users)",rootPath:"Installing the Framework",items:[]}]},{path:"distribution/its-ready",title:"It's Ready!",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]},{path:"distribution/bringing-your-own-model",title:"Bringing your Own Model",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]},{path:"distribution/validating-data",title:"Validating Data",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]},{path:"distribution/adding-graphql-support",title:"Adding GraphQL Support",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]},{path:"distribution/the-admin",title:"The Admin",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]},{path:"distribution/a-reactredux-progressive-web-app",title:"A React/Redux Progressive Web App",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]},{path:"distribution/other-features",title:"Other Features",rootPath:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",items:[]}]},next:{path:"docs/distribution/debugging",title:"Debugging",rootPath:"The Distribution: Create Powerful APIs with Ease",items:[{path:"distribution/add-a-development-stage-to-the-dockerfile",title:"Add a Development Stage to the Dockerfile",rootPath:"Debugging",items:[]},{path:"distribution/configure-xdebug-with-docker-compose-override",title:"Configure Xdebug with Docker Compose Override",rootPath:"Debugging",items:[]},{path:"distribution/troubleshooting",title:"Troubleshooting",rootPath:"Debugging",items:[]}]},html:'<h1 id="testing-and-specifying-the-api"><a href="#testing-and-specifying-the-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing and Specifying the API</h1>\n<p>A set of useful tools to specify and test your API are easily installable in the API Platform distribution:</p>\n<ul>\n<li><a href="https://phpunit.de/" target="_blank" rel="nofollow noopener noreferrer">PHPUnit</a> allows to cover your classes with unit tests and to write functional tests thanks to his\nSymfony integration.</li>\n<li><a href="http://docs.behat.org/" target="_blank" rel="nofollow noopener noreferrer">Behat</a> (a <a href="http://en.wikipedia.org/wiki/Behavior-driven_development" target="_blank" rel="nofollow noopener noreferrer">Behavior-driven development</a>\nframework) and its <a href="https://github.com/Behatch/contexts" target="_blank" rel="nofollow noopener noreferrer">Behatch extension</a> (a set of contexts dedicated to REST API and\nJSON documents) are convenient to specify and test your API: write the API specification as user stories and in natural\nlanguage then execute these scenarios against the application to validate its behavior.</li>\n</ul>\n<p>Take a look at <a href="https://symfony.com/doc/current/testing.html" target="_blank" rel="nofollow noopener noreferrer">the Symfony documentation about testing</a> to learn how to use\nPHPUnit in your API Platform project.</p>\n<p>Installing Behat is easy enough following these steps:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker-compose exec php composer require --dev behat/behat\n$ docker-compose exec php vendor/bin/behat -V\n$ docker-compose exec php vendor/bin/behat --init</code></pre>\n      </div>\n<p>This will install Behat in your project and creates a directory <code class="language-text">features</code> where you can place your feature file(s).</p>\n<p>Here is an example of a <a href="http://docs.behat.org/en/latest/user_guide/gherkin.html" target="_blank" rel="nofollow noopener noreferrer">Gherkin</a> feature file specifying the behavior\nof <a href="/docs/distribution/index">the bookstore API we created in the tutorial</a>. Thanks to Behatch, this feature file can be executed against\nthe API without having to write a single line of PHP.</p>\n<div class="gatsby-highlight" data-language="gherkin">\n      <pre class="language-gherkin"><code class="language-gherkin"><span class="token comment"># features/books.feature</span>\n<span class="token feature"><span class="token keyword">Feature:</span><span class="token important"> Manage books and their reviews</span>\n  In order to manage books and their reviews\n  As a client software developer\n  I need to be able to retrieve, create, update and delete them through the API.\n\n  </span><span class="token comment"># the "@createSchema" annotation provided by API Platform creates a temporary SQLite database for testing the API</span>\n  <span class="token tag">@createSchema</span>\n  <span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> Create a book</span></span>\n    <span class="token atrule">When</span> I add <span class="token string">"Content-Type"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">And</span> I add <span class="token string">"Accept"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">And</span> I send a <span class="token string">"POST"</span> request to <span class="token string">"/books"</span> with body:\n    <span class="token pystring string">"""\n    {\n      "isbn": "9781782164104",\n      "title": "Persistence in PHP with the Doctrine ORM",\n      "description": "This book is designed for PHP developers and architects who want to modernize their skills through better understanding of Persistence and ORM.",\n      "author": "Kévin Dunglas",\n      "publicationDate": "2013-12-01"\n    }\n    """</span>\n    <span class="token atrule">Then</span> the response status code should be 201\n    <span class="token atrule">And</span> the response should be in JSON\n    <span class="token atrule">And</span> the header <span class="token string">"Content-Type"</span> should be equal to <span class="token string">"application/ld+json; charset=utf-8"</span>\n    <span class="token atrule">And</span> the JSON should be equal to:\n    <span class="token pystring string">"""\n    {\n      "@context": "/contexts/Book",\n      "@id": "/books/1",\n      "@type": "Book",\n      "id": 1,\n      "isbn": "9781782164104",\n      "title": "Persistence in PHP with the Doctrine ORM",\n      "description": "This book is designed for PHP developers and architects who want to modernize their skills through better understanding of Persistence and ORM.",\n      "author": "K\\u00e9vin Dunglas",\n      "publicationDate": "2013-12-01T00:00:00+00:00",\n      "reviews": []\n    }\n    """</span>\n\n  <span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> Retrieve the book list</span></span>\n    <span class="token atrule">When</span> I add <span class="token string">"Accept"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">And</span> I send a <span class="token string">"GET"</span> request to <span class="token string">"/books"</span>\n    <span class="token atrule">Then</span> the response status code should be 200\n    <span class="token atrule">And</span> the response should be in JSON\n    <span class="token atrule">And</span> the header <span class="token string">"Content-Type"</span> should be equal to <span class="token string">"application/ld+json; charset=utf-8"</span>\n    <span class="token atrule">And</span> the JSON should be equal to:\n    <span class="token pystring string">"""\n    {\n      "@context": "/contexts/Book",\n      "@id": "/books",\n      "@type": "hydra:Collection",\n      "hydra:member": [\n        {\n          "@id": "/books/1",\n          "@type": "Book",\n          "id": 1,\n          "isbn": "9781782164104",\n          "title": "Persistence in PHP with the Doctrine ORM",\n          "description": "This book is designed for PHP developers and architects who want to modernize their skills through better understanding of Persistence and ORM.",\n          "author": "K\\u00e9vin Dunglas",\n          "publicationDate": "2013-12-01T00:00:00+00:00",\n          "reviews": []\n        }\n      ],\n      "hydra:totalItems": 1\n    }\n    """</span>\n\n  <span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> Throw errors when a post is invalid</span></span>\n    <span class="token atrule">When</span> I add <span class="token string">"Content-Type"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">And</span> I add <span class="token string">"Accept"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">And</span> I send a <span class="token string">"POST"</span> request to <span class="token string">"/books"</span> with body:\n    <span class="token pystring string">"""\n    {\n      "isbn": "1312",\n      "title": "",\n      "description": "Yo!",\n      "author": "Me!",\n      "publicationDate": "2016-01-01"\n    }\n    """</span>\n    <span class="token atrule">Then</span> the response status code should be 400\n    <span class="token atrule">And</span> the response should be in JSON\n    <span class="token atrule">And</span> the header <span class="token string">"Content-Type"</span> should be equal to <span class="token string">"application/ld+json; charset=utf-8"</span>\n    <span class="token atrule">And</span> the JSON should be equal to:\n    <span class="token pystring string">"""\n    {\n      "@context": "/contexts/ConstraintViolationList",\n      "@type": "ConstraintViolationList",\n      "hydra:title": "An error occurred",\n      "hydra:description": "isbn: This value is neither a valid ISBN-10 nor a valid ISBN-13.\\ntitle: This value should not be blank.",\n      "violations": [\n        {\n          "propertyPath": "isbn",\n          "message": "This value is neither a valid ISBN-10 nor a valid ISBN-13."\n        },\n        {\n          "propertyPath": "title",\n          "message": "This value should not be blank."\n        }\n      ]\n    }\n    """</span>\n\n  <span class="token comment"># The "@dropSchema" annotation must be added on the last scenario of the feature file to drop the temporary SQLite database</span>\n  <span class="token tag">@dropSchema</span>\n    <span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> Add a review</span></span>\n    <span class="token atrule">When</span> I add <span class="token string">"Content-Type"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">When</span> I add <span class="token string">"Accept"</span> header equal to <span class="token string">"application/ld+json"</span>\n    <span class="token atrule">And</span> I send a <span class="token string">"POST"</span> request to <span class="token string">"/reviews"</span> with body:\n    <span class="token pystring string">"""\n    {\n      "rating": 5,\n      "body": "Must have!",\n      "author": "Foo Bar",\n      "publicationDate": "2016-01-01",\n      "book": "/books/1"\n    }\n    """</span>\n    <span class="token atrule">Then</span> the response status code should be 201\n    <span class="token atrule">And</span> the response should be in JSON\n    <span class="token atrule">And</span> the header <span class="token string">"Content-Type"</span> should be equal to <span class="token string">"application/ld+json; charset=utf-8"</span>\n    <span class="token atrule">And</span> the JSON should be equal to:\n    <span class="token pystring string">"""\n    {\n      "@context": "/contexts/Review",\n      "@id": "/reviews/1",\n      "@type": "Review",\n      "id": 1,\n      "rating": 5,\n      "body": "Must have!",\n      "author": "Foo Bar",\n      "publicationDate": "2016-01-01T00:00:00+00:00",\n      "book": "/books/1"\n    }\n    """</span></code></pre>\n      </div>\n<p>The API Platform flavor of Behat also comes with a temporary SQLite database dedicated to tests. It works out of the box.</p>\n<p>Clear the cache of the <code class="language-text">test</code> environment:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker-compose exec php bin/console cache:clear --env=test</code></pre>\n      </div>\n<p>Then run:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker-compose exec php vendor/bin/behat</code></pre>\n      </div>\n<p>Everything should be green now. Your Linked Data API is now specified and tested thanks to Behat!</p>\n<p>You may also be interested in these alternative testing tools (not included in the API Platform distribution):</p>\n<ul>\n<li><a href="https://www.getpostman.com/docs/writing_tests" target="_blank" rel="nofollow noopener noreferrer">Postman tests</a> (proprietary): create functional test for your API Platform project\nusing a nice UI, benefit from <a href="https://www.getpostman.com/docs/importing_swagger" target="_blank" rel="nofollow noopener noreferrer">the Swagger integration</a> and run tests\ntest in the CI using <a href="https://github.com/postmanlabs/newman" target="_blank" rel="nofollow noopener noreferrer">newman</a>.</li>\n<li><a href="https://github.com/coduo/php-matcher" target="_blank" rel="nofollow noopener noreferrer">PHP Matcher</a>: the Swiss Army knife of JSON document testing.</li>\n</ul>\n<h2 id="running-unit-tests-with-phpunit"><a href="#running-unit-tests-with-phpunit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Unit Tests with PHPUnit</h2>\n<p>To run your <a href="https://phpunit.de/" target="_blank" rel="nofollow noopener noreferrer">PHPUnit</a> test suite, execute the following command:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker-compose exec php vendor/bin/phpunit</code></pre>\n      </div>',nav:[{title:"The Distribution: Create Powerful APIs with Ease",path:"distribution",items:[{id:"index",title:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",anchors:[{id:"installing-the-framework",title:"Installing the Framework",anchors:[{id:"using-the-official-distribution-recommended",title:"Using the Official Distribution (recommended)"},{id:"using-symfony-flex-and-composer-advanced-users",title:"Using Symfony Flex and Composer (advanced users)"}]},{id:"its-ready",title:"It's Ready!"},{id:"bringing-your-own-model",title:"Bringing your Own Model"},{id:"validating-data",title:"Validating Data"},{id:"adding-graphql-support",title:"Adding GraphQL Support"},{id:"the-admin",title:"The Admin"},{id:"a-reactredux-progressive-web-app",title:"A React/Redux Progressive Web App"},{id:"other-features",title:"Other Features"}]},{id:"testing",title:"Testing and Specifying the API",anchors:[{id:"running-unit-tests-with-phpunit",title:"Running Unit Tests with PHPUnit"}]},{id:"debugging",title:"Debugging",anchors:[{id:"add-a-development-stage-to-the-dockerfile",title:"Add a Development Stage to the Dockerfile"},{id:"configure-xdebug-with-docker-compose-override",title:"Configure Xdebug with Docker Compose Override"},{id:"troubleshooting",title:"Troubleshooting"}]}]},{title:"The API Component",path:"core",items:[{id:"index",title:"The API Platform Core Library",anchors:[{id:"features",title:"Features"},{id:"other-resources",title:"Other resources"}]},{id:"getting-started",title:"Getting started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"design",title:"General Design Considerations"},{id:"configuration",title:"Configuration"},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations",anchors:[{id:"prefixing-all-routes-of-all-operations",title:"Prefixing All Routes of All Operations"}]},{id:"subresources",title:"Subresources",anchors:[{id:"control-the-path-of-subresources",title:"Control the Path of Subresources"},{id:"access-control-of-subresources",title:"Access Control of Subresources"},{id:"control-the-depth-of-subresources",title:"Control the Depth of Subresources"}]},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers",anchors:[{id:"recommended-method",title:"Recommended Method",anchors:[{id:"serialization-groups",title:"Serialization Groups"},{id:"entity-retrieval",title:"Entity Retrieval"}]},{id:"alternative-method",title:"Alternative Method"}]}]},{id:"default-order",title:"Overriding Default Order"},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters",anchors:[{id:"basic-knowledge",title:"Basic Knowledge"},{id:"search-filter",title:"Search Filter"},{id:"date-filter",title:"Date Filter",anchors:[{id:"managing-null-values",title:"Managing null Values"}]},{id:"boolean-filter",title:"Boolean Filter"},{id:"numeric-filter",title:"Numeric Filter"},{id:"range-filter",title:"Range Filter"},{id:"exists-filter",title:"Exists Filter"},{id:"order-filter-sorting",title:"Order Filter (Sorting)",anchors:[{id:"comparing-with-null-values",title:"Comparing with Null Values"},{id:"using-a-custom-order-query-parameter-name",title:"Using a Custom Order Query Parameter Name"}]},{id:"filtering-on-nested-properties",title:"Filtering on Nested Properties"},{id:"enabling-a-filter-for-all-properties-of-a-resource",title:"Enabling a Filter for All Properties of a Resource"}]},{id:"serializer-filters",title:"Serializer Filters",anchors:[{id:"group-filter",title:"Group Filter"},{id:"property-filter",title:"Property filter"}]},{id:"creating-custom-filters",title:"Creating Custom Filters",anchors:[{id:"creating-custom-doctrine-orm-filters",title:"Creating Custom Doctrine ORM Filters"},{id:"using-doctrine-filters",title:"Using Doctrine Filters"}]},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations",anchors:[{id:"configuration",title:"Configuration"}]},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-serialization-groups-per-operation",title:"Using Serialization Groups per Operation",anchors:[{id:"embedding-relations",title:"Embedding Relations"},{id:"denormalization",title:"Denormalization"}]},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per-item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-adding-extra-data",title:"Decorating a Serializer and Adding Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"validating-submitted-data",title:"Validating Submitted Data"},{id:"using-validation-groups",title:"Using Validation Groups"},{id:"using-validation-groups-on-operations",title:"Using Validation Groups on Operations"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Errors Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination",anchors:[{id:"globally",title:"Globally"},{id:"for-a-specific-resource",title:"For a Specific Resource"},{id:"client-side",title:"Client-side",anchors:[{id:"globally-1",title:"Globally"},{id:"for-a-specific-resource-1",title:"For a specific resource"}]}]},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page",anchors:[{id:"globally-2",title:"Globally"},{id:"for-a-specific-resource-2",title:"For a Specific Resource"},{id:"client-side-1",title:"Client-side",anchors:[{id:"globally-3",title:"Globally"},{id:"for-a-specific-resource-3",title:"For a Specific Resource"}]}]},{id:"changing-maximum-items-per-page",title:"Changing Maximum items per page",anchors:[{id:"globally-4",title:"Globally"},{id:"for-a-specific-resource-4",title:"For a Specific Resource"},{id:"for-a-specific-resource-collection-operation",title:"For a Specific Resource Collection Operation"}]},{id:"partial-pagination",title:"Partial Pagination",anchors:[{id:"globally-5",title:"Globally"},{id:"for-a-specific-resource-5",title:"For a Specific Resource"},{id:"client-side-2",title:"Client-side",anchors:[{id:"globally-6",title:"Globally"},{id:"for-a-specific-resource-6",title:"For a Specific Resource"}]}]},{id:"avoiding-double-sql-requests-on-doctrine",title:"Avoiding double SQL requests on Doctrine"},{id:"custom-controller-action",title:"Custom Controller Action"}]},{id:"events",title:"The Event System"},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"enabling-additional-formats-on-a-specific-resourceoperation",title:"Enabling Additional Formats On a Specific Resource/Operation"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External Vocabularies"},{id:"extending-jsonld-context",title:"Extending JSON-LD context"},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:"Injecting the Serializer in an ItemDataProvider"},{id:"injecting-extensions-pagination-filter-eagerloading-etc",title:"Injecting Extensions (Pagination, Filter, EagerLoading etc.)"}]},{id:"data-persisters",title:"Data Persisters",anchors:[{id:"creating-a-custom-data-persister",title:"Creating a Custom Data Persister"}]},{id:"identifiers",title:"Identifiers",anchors:[{id:"custom-identifier-normalizer",title:"Custom identifier normalizer"},{id:"supported-identifiers",title:"Supported identifiers"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Example",anchors:[{id:"blocking-anonymous-users",title:"Blocking Anonymous Users"}]}]},{id:"security",title:"Security",anchors:[{id:"configuring-the-access-control-message",title:"Configuring the Access Control Message"}]},{id:"deprecations",title:"Deprecating Resources and Properties (Alternative to Versioning)",anchors:[{id:"deprecating-resource-classes-operations-and-properties",title:"Deprecating Resource Classes, Operations and Properties"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-built-in-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System",anchors:[{id:"extending-cache-tags-for-invalidation",title:"Extending Cache-Tags for invalidation"}]},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes",anchors:[{id:"search-filter-1",title:"Search Filter"},{id:"eager-loading",title:"Eager Loading",anchors:[{id:"max-joins",title:"Max Joins"},{id:"force-eager",title:"Force Eager"},{id:"override-at-resource-and-operation-level",title:"Override at Resource and Operation Level"},{id:"disable-eager-loading",title:"Disable Eager Loading"}]},{id:"partial-pagination-1",title:"Partial Pagination"}]},{id:"profiling-with-blackfireio",title:"Profiling with Blackfire.io"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration-1",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Resolver",anchors:[{id:"defining-the-operation-path-resolver",title:"Defining the Operation Path Resolver"},{id:"registering-the-service",title:"Registering the Service"},{id:"configure-it",title:"Configure It"}]}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:[{id:"create-your-deserializelistener-decorator",title:"Create your DeserializeListener Decorator"},{id:"creating-the-service-definition",title:"Creating the Service Definition"}]},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:"Creating a User Entity with Serialization Groups"}]},{id:"jwt",title:"JWT Authentication",anchors:[{id:"installing-lexikjwtauthenticationbundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swaggeropen-api",title:"Documenting the Authentication Mechanism with Swagger/Open API",anchors:[{id:"configuring-api-platform",title:"Configuring API Platform"},{id:"adding-a-new-api-key",title:"Adding a New API Key"}]},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle Integration"},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger / Open API Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger Documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"},{id:"changing-the-name-of-a-definition",title:"Changing the Name of a Definition"},{id:"changing-operations-in-the-swagger-documentation",title:"Changing Operations in the Swagger Documentation"},{id:"changing-the-swagger-ui-location",title:"Changing the Swagger UI Location",anchors:[{id:"disabling-swagger-ui",title:"Disabling Swagger UI"},{id:"manually-registering-the-swagger-ui-controller",title:"Manually Registering the Swagger UI Controller"}]},{id:"using-the-swagger-command",title:"Using the Swagger Command"},{id:"overriding-the-ui-template",title:"Overriding the UI Template"},{id:"compatibilily-layer-with-amazon-api-gateway",title:"Compatibilily Layer with Amazon API Gateway"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"},{id:"filters",title:"Filters",anchors:[{id:"filtering-on-nested-properties-1",title:"Filtering on Nested Properties"}]},{id:"security-access_control",title:"Security (access_control)"},{id:"serialization-groups-1",title:"Serialization Groups"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:[{id:"how-to-use-a-dto-for-writing",title:"How to Use a DTO for Writing"},{id:"how-to-use-a-dto-for-reading",title:"How to Use a DTO for Reading",anchors:[{id:"adding-this-custom-dto-reading-in-swagger-documentation",title:"Adding this Custom DTO reading in Swagger Documentation.",anchors:[{id:"use-swagger-decorator",title:"Use Swagger Decorator"},{id:"use-nelmioapidoc",title:"Use NelmioApiDoc"}]}]}]},{id:"file-upload",title:"Handling File Upload",anchors:[{id:"installing-vichuploaderbundle",title:"Installing VichUploaderBundle"},{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"handling-file-upload",title:"Handling File Upload"},{id:"making-a-request-to-the-media_objects-endpoint",title:"Making a Request to the /media_objects Endpoint"},{id:"linking-a-mediaobject-resource-to-another-resource",title:"Linking a MediaObject Resource to Another Resource"}]}]},{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"The schema generator",anchors:[{id:"what-is-schemaorg",title:"What is Schema.org?"},{id:"why-use-schemaorg-data-to-generate-a-php-model",title:"Why use Schema.org data to generate a PHP model?",anchors:[{id:"dont-reinvent-the-wheel",title:"Don't Reinvent The Wheel"},{id:"improve-seo-and-user-experience",title:"Improve SEO and user experience"},{id:"be-ready-for-the-future",title:"Be ready for the future"}]},{id:"documentation",title:"Documentation"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"model-scaffolding",title:"Model Scaffolding",anchors:[{id:"going-further",title:"Going Further"}]},{id:"cardinality-extraction",title:"Cardinality Extraction"}]},{id:"configuration",title:"Configuration",anchors:[{id:"customizing-php-namespaces",title:"Customizing PHP Namespaces"},{id:"forcing-a-field-range",title:"Forcing a Field Range"},{id:"forcing-a-field-cardinality",title:"Forcing a Field Cardinality"},{id:"forcing-a-relation-table-name",title:"Forcing a Relation Table Name"},{id:"forcing-or-disabling-a-class-parent",title:"Forcing (or Disabling) a Class Parent"},{id:"forcing-a-class-to-be-abstract",title:"Forcing a Class to be Abstract"},{id:"forcing-a-nullable-property",title:"Forcing a Nullable Property"},{id:"forcing-a-unique-property",title:"Forcing a Unique Property"},{id:"making-a-property-read-only",title:"Making a Property Read Only"},{id:"making-a-property-write-only",title:"Making a Property Write Only"},{id:"forcing-a-property-to-be-in-a-serialization-group",
title:"Forcing a Property to be in a Serialization Group"},{id:"forcing-an-embeddable-class-to-be-embedded",title:"Forcing an Embeddable Class to be Embedded"},{id:"author-phpdoc",title:"Author PHPDoc"},{id:"disabling-generators-and-creating-custom-ones",title:"Disabling Generators and Creating Custom Ones"},{id:"skipping-accessor-method-generation",title:"Skipping Accessor Method Generation"},{id:"disabling-the-id-generator",title:"Disabling the id Generator"},{id:"generating-uuids",title:"Generating UUIDs"},{id:"user-submitted-uuids",title:"User submitted UUIDs"},{id:"generating-custom-ids",title:"Generating Custom IDs"},{id:"disabling-usage-of-doctrine-collection",title:"Disabling Usage of Doctrine Collection"},{id:"changing-the-field-visibility",title:"Changing the Field Visibility"},{id:"generating-asserttype-annotations",title:"Generating @Assert\\Type Annotations"},{id:"forcing-doctrine-inheritance-mapping-annotation",title:"Forcing Doctrine Inheritance Mapping Annotation"},{id:"interfaces-and-doctrine-resolve-target-entity-listener",title:"Interfaces and Doctrine Resolve Target Entity Listener"},{id:"custom-schemas",title:"Custom Schemas"},{id:"checking-goodrelation-compatibility",title:"Checking GoodRelation Compatibility"},{id:"php-file-header",title:"PHP File Header"},{id:"full-configuration-reference",title:"Full Configuration Reference"}]}]},{title:"The Admin Component",path:"admin",items:[{id:"index",title:"The API Platform Admin",anchors:[{id:"features-1",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation-1",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin",anchors:[{id:"using-custom-components",title:"Using Custom Components"},{id:"managing-files-and-images",title:"Managing Files and Images"},{id:"using-a-custom-validation-function-or-inject-custom-props",title:"Using a Custom Validation Function or Inject Custom Props"},{id:"using-the-hydra-data-provider-directly-with-react-admin",title:"Using the Hydra Data Provider Directly with react-admin"}]}]},{id:"authentication-support",title:"Authentication Support"},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"customizing-a-property",title:"Customizing a Property"},{id:"customizing-an-icon",title:"Customizing an Icon"},{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]},{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"The API Platform Client Generator",anchors:[{id:"features-2",title:"Features"}]},{id:"react",title:"React Generator",anchors:[{id:"install",title:"Install"},{id:"generating-a-progressive-web-app",title:"Generating a Progressive Web App"},{id:"screenshots",title:"Screenshots"}]},{id:"vuejs",title:"Vue.js Generator"},{id:"react-native",title:"React Native generator",anchors:[{id:"install-1",title:"Install"},{id:"generating-a-native-app",title:"Generating a Native App"},{id:"screenshots-in-ios-simulator",title:"Screenshots in iOS Simulator"}]},{id:"troubleshooting",title:"Troubleshooting"}]},{title:"Deployment",path:"deployment",items:[{id:"index",title:"Deploying API Platform Applications"},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:[{id:"preparing-your-cluster-and-your-local-machine",title:"Preparing Your Cluster and Your Local Machine"},{id:"creating-and-publishing-the-docker-images",title:"Creating and Publishing the Docker Images"},{id:"deploying",title:"Deploying"},{id:"initializing-the-database",title:"Initializing the Database"},{id:"tiller-rbac-issue",title:"Tiller RBAC Issue"}]},{id:"heroku",title:"Deploying an API Platform App on Heroku"},{id:"traefik",title:"Implement Traefik Into API Platform Dockerized",anchors:[{id:"basic-implementation",title:"Basic Implementation"},{id:"known-issues",title:"Known Issues"}]}]},{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process"},{id:"philosophy",title:"API Platform's Philosophy"},{id:"troubleshooting",title:"Troubleshooting",anchors:[{id:"using-docker",title:"Using Docker",anchors:[{id:"with-docker-toolbox-on-windows",title:"With Docker Toolbox on Windows"},{id:"error-starting-userland-proxy",title:"Error starting userland proxy"}]},{id:"using-api-platform-and-jms-serializer-in-the-same-project",title:"Using API Platform and JMS Serializer in the same project"},{id:"upstream-sent-too-big-header-while-reading-response-header-from-upstream-502-error",title:'"upstream sent too big header while reading response header from upstream" 502 Error'}]},{id:"contribution-guides",title:"Contribution guides"},{id:"conduct",title:"Contributor Code of Conduct"}]}]}}}});
//# sourceMappingURL=path---docs-distribution-testing-217ad98de81f220c2bc3.js.map