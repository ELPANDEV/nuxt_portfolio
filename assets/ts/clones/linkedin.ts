import node from "../frameworks/node"
import nuxt from "../frameworks/nuxt"
import vue from "../frameworks/vue"
import html from "../technologies/html"
import scss from "../technologies/scss"
import ts from "../technologies/ts"

const linkedin: interface_project = {
  name: 'Linkedin',
  description: 'Professional social network oriented to business and professional relationships.',
  image: '/images/linkedin.png',
  link: 'https://elpandev.github.io/nuxt_linkedin/',
  frameworks: [
    node,
    nuxt,
    vue,
  ],
  technologies: [
    html,
    scss,
    ts,
  ],
}

export default linkedin