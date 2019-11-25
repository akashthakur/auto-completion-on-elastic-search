const config = require("../config/config.json");

const { Client } = require('elasticsearch')
const client = new Client({ node: config.url })

