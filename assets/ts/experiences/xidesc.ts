import laravel from "../frameworks/laravel"
import nuxt from "../frameworks/nuxt"
import vue from "../frameworks/vue"
import html from "../technologies/html"
import php from "../technologies/php"
import scss from "../technologies/scss"
import ts from "../technologies/ts"

const xide_sc: interface_experience = {
  company: 'Xide SC',
  description: 'Web app to administer students and teachers, similar to d2l',
  from: 'NOVEMBER 2019',
  to: ' OCTOBER 2020',
  role: 'Full Stack Lead',
  tasks: [
    'Document manager to create and download documents like pdf, images, videos, audios, csv, etc.',
    'QR register to access the document inside the platform.',
    'Tasks administrator using Jira',
    'Login system using JWT',
    'Docker containers',
    'Creating the database architecture for the project using MySql',
    'API REST connection using TS',
    'Third-Party API connection like Google Analytics.',
    'Web page layout using HTML and SCSS',
    'Quality Assistance',
    'Testing the application using PHPunit and Vue-Jest (TS)',
  ],
  frameworks: [
    laravel,
    nuxt,
    vue,
  ],
  technologies: [
    html,
    scss,
    ts,
    php,
  ]
}

export default xide_sc