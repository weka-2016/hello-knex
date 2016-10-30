# Knex Intro

## Learning objectives:

- Use knex to do CRUD on the students table.

## Do or do not, there is no try.

This exercise comes with a sqlite database file all set up for you. This is 'bad practice' but great for learning.

Run `npm install` and then `node index.js`

With any luck you'll see an array with one student logged out.

Your job is to look at the docs for [knex](knexjs.org) and see if you can work out how to do the other crud methods.

NB: All the knex docs use promises which we'll do in the afternoon, for now use callbacks by calling `.asCallback()` on the end of your knex query.
