#Dripshop machine test

Problem:
How can you design an A/B testing module using Redis that efficiently distributes three layouts (namely layout1, layout2, and layout3) equally among users? The solution should cater to guest users for whom we don't have any pre-existing identifiers. The goal is to implement an API that serves these layouts uniformly.

Assumptions:
- Emphasis is to design an efficient A/B testing module using Redis and not on the operation of API or Frontend layout.

Steps to run:
    - Install redis locally and run it in background.
    - Go to parent directory
    - Run `npm install`
    - Run  `node index.js`
    - Open 'http://localhost:8080/dashboard' to open the layout or hit the API /api.