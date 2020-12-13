export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd5b4dfae552336bf51c0d4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d76s27yg',
                  apiId: 'e3fe0fa1-9fc8-4609-8c1e-3ce2f88e623f'
                },
                {
                  buildHookId: '5fd5b4df6e0e2e23cb090a93',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mgq54fs5',
                  apiId: 'dbac4cd3-1853-443f-b83c-47c32bea4504'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samdevelops/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mgq54fs5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
