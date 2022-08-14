const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121

require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'proverbs'