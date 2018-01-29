'use strict'

const jsonApi = require('jsonapi-server')
const dataResourceHandler = require('../handlers/dataResourceHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'dataResources',
  description: 'Represents the core content, people love to read articles.',
  handlers: dataResourceHandler,
  searchParams: {
    query: jsonApi.Joi.string().uuid()
      .description('Fuzzy text match against titles')
      .example('321629e0-6197-4fcb-b571-9df129bd857f')
  },
  attributes: {
    name: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    filename: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    uri: jsonApi.Joi.string().required().allow(null)
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API')
  },
  examples: [
    {
      id: 'ef869d25-218a-471b-a8a2-c53411fda55b',
      uri: null,
      filename: 'bad.csv',
      name: 'Badly formatted CSV',
      type: 'dataResources'
    },
    {
      type: 'dataResources',
      name: 'Badly formatted CSV',
      uri: null,
      filename: 'bad.csv',
      id: 'df66f95e-3f8b-45b7-8969-87b2aef79fa7'
    },
    {
      type: 'dataResources',
      id: '1f05e53c-ede7-467b-bee7-8122cddaa8da',
      name: 'bad.csv',
      filename: 'bad.csv',
      uri: null
    }
  ]
})
