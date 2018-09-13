'use strict'

const jsonApi = require('jsonapi-server')
const profileHandler = require('../handlers/profileHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'profiles',
  description: 'Represents the core content, people love to read articles.',
  handlers: profileHandler,
  searchParams: {
    query: jsonApi.Joi.string().uuid()
      .description('Fuzzy text match against titles')
      .example('321629e0-6197-4fcb-b571-9df129bd857f')
  },
  attributes: {
    version: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    creatorId: jsonApi.Joi.string().allow(null),
    description: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    uniqueTag: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    name: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    configurations: jsonApi.Joi.many('processorConfigurations')
      .description('All of the tags associated with an article'),
    created_at: jsonApi.Joi.object().required() 
      .description('Date object of when profile was created.'),
    updated_at: jsonApi.Joi.object().required()
      .description('Date object of when profile was updated.')
  },
  examples: [
    {
      type: 'profiles',
      id: '01aa762d-23f7-4cbc-b150-3a41ee4b9551',
      version: '7',
      description: 'Testing',
      creatorId: null,
      uniqueTag: 'uniq-66-Testing',
      name: 'Testing',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    },
    {
      id: 'af940fa3-d2f4-4fac-ba54-86c9b39dda46',
      type: 'profiles',
      name: 'New Profile',
      version: '7',
      description: 'Profile',
      uniqueTag: 'uniq-66-undefined',
      creatorId: null,
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    },
    {
      name: 'A',
      version: '7',
      description: 'Profile',
      creatorId: null,
      uniqueTag: 'uniq-66-undefined',
      type: 'profiles',
      id: '1ed078a1-ddc7-430e-b643-9c95eb1115ac',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    },
    {
      type: 'profiles',
      id: '625dc900-cead-48e9-b5a1-0c431541e2c4',
      version: '1',
      description: 'Testing goodtables',
      creatorId: null,
      uniqueTag: 'test-goodtables-1',
      name: 'Test Goodtables',
      configurations: [
        { type: 'processorConfigurations', id: '7e6a11b5-d9c4-474b-a8b8-bb1c51874695' }
      ],
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    },
    {
      id: 'a51609b3-d24a-4132-b7b8-e252d8e1dd7d',
      type: 'profiles',
      name: 'Crime Reference Checker',
      creatorId: null,
      uniqueTag: 'uniq-66-undefined',
      description: 'Check Crime is valid.',
      version: '7',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    }
  ]
})
