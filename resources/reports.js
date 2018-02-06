'use strict'

const jsonApi = require('jsonapi-server')
const reportHandler = require('../handlers/reportHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'reports',
  description: 'Represents the core content, people love to read articles.',
  handlers: reportHandler,
  searchParams: {
    query: jsonApi.Joi.string().uuid()
      .description('Fuzzy text match against titles')
      .example('321629e0-6197-4fcb-b571-9df129bd857f')
  },
  attributes: {
    dataResource: jsonApi.Joi.one('dataResources'),
    profile: jsonApi.Joi.one('profiles'),
    name: jsonApi.Joi.string().required()
      .description('The articles title, should be between 8 and 15 words')
      .example('Learning how to use JSON:API'),
    content: jsonApi.Joi.object()
      .description('The main body of the article, provided as HTML'),
    errors: jsonApi.Joi.number().default(0)
      .description('Number of views for this article'),
    warnings: jsonApi.Joi.number().default(0)
      .description('Number of views for this article'),
    qualityScore: jsonApi.Joi.number().default(0)
      .description('Number of views for this article'),
    passes: jsonApi.Joi.number().default(0)
      .description('Number of info/passing comments'),
    createdAt: jsonApi.Joi.date().iso()
      .description('When the report was created')
      .example('2018-01-05 12:42:01')
  },
  examples: [
    {
      type: 'reports',
      dataResource: { type: 'dataResources', id: 'df66f95e-3f8b-45b7-8969-87b2aef79fa7' },
      profile: { type: 'profiles', id: '625dc900-cead-48e9-b5a1-0c431541e2c4' },
      createdAt: '2018-01-05 12:42:01',
      content: {
        'time': 0.083,
        'valid': true,
        'error-count': 0,
        'table-count': 1,
        'tables': [
          {
            'time': 0.082,
            'valid': true,
            'error-count': 0,
            'row-count': 6,
            'source': '/pfs/data/bad.csv',
            'headers': ['ID', 'Name', 'N', 'Mean', 'Standard Deviation'],
            'scheme': 'file',
            'format': 'csv',
            'encoding': 'iso8859-9',
            'schema': null,
            'errors': []
          }
        ],
        'warnings': [],
        'preset': 'table'
      },
      errors: 0,
      warnings: 0,
      qualityScore: 0,
      name: 'bad.csv report',
      passes: 0,
      id: '321629e0-6197-4fcb-b571-9df129bd857f'
    },
    {
      type: 'reports',
      errors: 0,
      warnings: 0,
      qualityScore: 0,
      name: 'bad.csv report',
      passes: 0,
      createdAt: '2018-01-05 12:42:01',
      content: {
        'time': 0.083,
        'valid': true,
        'error-count': 0,
        'table-count': 1,
        'tables': [
          {
            'time': 0.082,
            'valid': true,
            'error-count': 0,
            'row-count': 6,
            'source': '/pfs/data/bad.csv',
            'headers': ['ID', 'Name', 'N', 'Mean', 'Standard Deviation'],
            'scheme': 'file',
            'format': 'csv',
            'encoding': 'iso8859-9',
            'schema': null,
            'errors': []
          }
        ],
        'warnings': [],
        'preset': 'table'
      },
      id: 'c1c27a67-5dac-4069-8d70-20057cddf8e3'
    }
  ]
})
