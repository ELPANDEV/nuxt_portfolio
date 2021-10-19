import laravel from "../frameworks/laravel"
import nuxt from "../frameworks/nuxt"
import vue from "../frameworks/vue"
import html from "../technologies/html"
import php from "../technologies/php"
import scss from "../technologies/scss"
import ts from "../technologies/ts"

const devesoft: interface_experience = {
  company: 'Devesoft',
  description: 'Web app to buy bus tickets in ecuador and track the route in real time.',
  from: 'MAY 2019',
  to: ' OCTOBER 2019',
  role: 'Full Stack Lead',
  tasks: [
    'Helping to create the database architecture for the project',
    'API REST connection using TS',
    'Third-Party API connection like Google Maps and Analytics.',
    'Web page layout using HTML and SCSS',
    'Login system using JWT',
    'Quality Assistance',
    'Teaching and Helping junior or SSr Developers with their tasks.',
    'Testing the application using PHPunit and Jest (TS)',
    'Connect services to a real time application using Websockets (Laravel Echo) for the Front-end and Back-end (PHP, TS)',
  ],
  frameworks: [
    laravel,
    vue,
  ],
  technologies: [
    html,
    scss,
    ts,
    php,
  ]
}

export default devesoft