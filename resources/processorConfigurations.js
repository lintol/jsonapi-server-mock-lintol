'use strict'

const jsonApi = require('jsonapi-server')
const processorConfigurationHandler = require('../handlers/processorConfigurationHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'processorConfigurations',
  description: 'Represents the core content, people love to read articles.',
  handlers: processorConfigurationHandler,
  searchParams: {
    query: jsonApi.Joi.string().uuid()
      .description('Fuzzy text match against titles')
      .example('321629e0-6197-4fcb-b571-9df129bd857f')
  },
  attributes: {
    processor: jsonApi.Joi.one('processors')
      .description('All of the tags associated with an article'),
    profile: jsonApi.Joi.one('profiles')
      .description('All of the tags associated with an article')
  },
  examples: [
    {
      type: 'processorConfigurations',
      id: '7e6a11b5-d9c4-474b-a8b8-bb1c51874695',
      processor: { type: 'processors', id: '5dcbb803-01ed-4641-b4cd-b085d2099a38' },
      profile: { type: 'profiles', id: '625dc900-cead-48e9-b5a1-0c431541e2c4' }
    }
  ]
})
