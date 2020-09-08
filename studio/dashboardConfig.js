export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f580a6ee0d3ce5a0baddd0c',
                  title: 'Sanity Studio',
                  name: 'danielale-studio',
                  apiId: '75b9b766-e5bb-4c1b-8ae2-9cc51ac3939e'
                },
                {
                  buildHookId: '5f580a6e281634614d9592be',
                  title: 'Landing pages Website',
                  name: 'danielale',
                  apiId: 'c006783f-4555-4d09-99eb-3eaa6aa23adc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/profmcdan/danielale',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://danielale.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
