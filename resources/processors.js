'use strict'

const jsonApi = require('jsonapi-server')
const processorHandler = require('../handlers/processorHandler.js')

jsonApi.define({
  namespace: 'json:api',
  resource: 'processors',
  description: 'Represents the core content, people love to read articles.',
  handlers: processorHandler,
  searchParams: {
    query: jsonApi.Joi.string().uuid()
      .description('Fuzzy text match against titles')
      .example('321629e0-6197-4fcb-b571-9df129bd857f')
  },
  attributes: {
    module: jsonApi.Joi.string().required()
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
      .example('Learning how to use JSON:API')
  },
  examples: [
    {
      type: 'processors',
      id: 'e43f2460-2bab-4619-b599-cda6a4aa0c45',
      module: 'cl',
      creatorId: null,
      description: 'ODI tool to processes tabular data',
      uniqueTag: 'theodi/csvlint.rb:1',
      name: 'CSV Checking by CSVLint'
    },
    {
      id: '5dcbb803-01ed-4641-b4cd-b085d2099a38',
      type: 'processors',
      description: 'CSV checking tool from Frictionless Data project',
      creatorId: null,
      module: 'good',
      name: 'CSV Checking by GoodTables',
      uniqueTag: 'frictionlessdata/goodtables-py:1'
    },
    {
      uniqueTag: 'lintol/ds-pii:1',
      name: 'Personally-Identifiable Information Spotter',
      module: 'pii',
      creatorId: null,
      description: 'Tool for searching for Personally-Identifiable Information within CSV data',
      id: 'c3f939f7-72bb-409e-929c-695681607350',
      type: 'processors'
    },
    {
      name: 'Boundary Checker',
      uniqueTag: 'lintol/ds-boundary-checker-py:1',
      creatorId: null,
      description: 'GeoJSON boundary checker to make sure data is within given boundaries',
      module: 'boundary_checker',
      type: 'processors',
      id: '80013cbd-15f6-48a8-806b-1532f9064394'
    },
    {
      type: 'processors',
      id: '56077c8f-0a17-49f7-b32b-a3f13f724b68',
      creatorId: null,
      description: 'Check that CSV data about countries matches gov.uk register entries',
      module: 'registers',
      name: 'gov.uk Register Checker - Countries',
      uniqueTag: 'lintol/ds-checker-py'
    }
  ]
})
