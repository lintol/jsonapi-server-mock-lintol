'use strict'

const jsonApi = require('jsonapi-server')
const processorHandler = require('../handlers/processorHandler.js')
const vueFormGenerator = require('vue-form-generator')

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
      .example('Learning how to use JSON:API'),
    configurationOptions: jsonApi.Joi.string(),
    configurationDefaults: jsonApi.Joi.string(),
    created_at: jsonApi.Joi.object().required() 
      .description('Date object of when profile was created.'),
    updated_at: jsonApi.Joi.object().required()
      .description('Date object of when profile was updated.')
  },
  examples: [
    {
      type: 'processors',
      id: 'e43f2460-2bab-4619-b599-cda6a4aa0c45',
      module: 'cl',
      creatorId: null,
      description: 'ODI tool to processes tabular data',
      uniqueTag: 'theodi/csvlint.rb:1',
      name: 'CSV Checking by CSVLint',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      },
      configurationDefaults: JSON.stringify({
        id: 1,
        name: "John Doe",
        password: "J0hnD03!x4",
        skills: ["Javascript", "VueJS"],
        email: "john.doe@gmail.com",
        status: true
      }),
      configurationOptions: JSON.stringify({
        fields: [{
          type: "input",
          inputType: "text",
          label: "ID (disabled text field)",
          model: "id",
          readonly: true,
          disabled: true
        },{
          type: "input",
          inputType: "text",
          label: "Name",
          model: "name",
          placeholder: "Your name",
          featured: true,
          required: true
        },{
          type: "input",
          inputType: "password",
          label: "Password",
          model: "password",
          min: 6,
          required: true,
          hint: "Minimum 6 characters"
        },{
          type: "select",
          label: "Skills",
          model: "skills",      
          values: ["Javascript", "VueJS", "CSS3", "HTML5"]
        },{
          type: "input",
          inputType: "email",
          label: "E-mail",
          model: "email",
          placeholder: "User's e-mail address"
        },{
          type: "checkbox",
          label: "Status",
          model: "status",
          default: true
        }]
      })
    },
    {
      id: '5dcbb803-01ed-4641-b4cd-b085d2099a38',
      type: 'processors',
      description: 'CSV checking tool from Frictionless Data project',
      creatorId: null,
      module: 'good',
      name: 'CSV Checking by GoodTables',
      uniqueTag: 'frictionlessdata/goodtables-py:1',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    },
    {
      uniqueTag: 'lintol/ds-pii:1',
      name: 'Personally-Identifiable Information Spotter',
      module: 'pii',
      creatorId: null,
      description: 'Tool for searching for Personally-Identifiable Information within CSV data',
      id: 'c3f939f7-72bb-409e-929c-695681607350',
      type: 'processors',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    },
    {
      name: 'Boundary Checker',
      uniqueTag: 'lintol/ds-boundary-checker-py:1',
      creatorId: null,
      description: 'GeoJSON boundary checker to make sure data is within given boundaries',
      module: 'boundary_checker',
      type: 'processors',
      id: '80013cbd-15f6-48a8-806b-1532f9064394',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      },
      configurationDefaults: JSON.stringify({
        boundary: 'bg-ni-fo'
      }),
      configurationOptions: JSON.stringify({
        fields: [{
          type: 'select',
          label: 'Boundary',
          model: 'boundary',
          required: true,
          values: [
            { id: 'gb-ni', name: 'Northern Ireland' },
            { id: 'gb-ni-city-belfast', name: 'Belfast'  },
            { id: 'bg-ni-fo', name: 'Fermanagh & Omagh' }
          ]
        }]
      })
    },
    {
      type: 'processors',
      id: '56077c8f-0a17-49f7-b32b-a3f13f724b68',
      creatorId: null,
      description: 'Check that CSV data about countries matches gov.uk register entries',
      module: 'registers',
      name: 'gov.uk Register Checker - Countries',
      uniqueTag: 'lintol/ds-checker-py',
      created_at: {
        date: '2018-03-18'
      },
      updated_at: {
        date: '2018-03-20'
      }
    }
  ]
})
