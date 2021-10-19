import laravel from "../frameworks/laravel"
import nuxt from "../frameworks/nuxt"
import vue from "../frameworks/vue"
import html from "../technologies/html"
import php from "../technologies/php"
import scss from "../technologies/scss"
import ts from "../technologies/ts"

const receta_land: interface_project = {
  name: 'Receta Land',
  description: 'Web to publish cook recipes.',
  image: '/images/receta_land.png',
  link: 'https://receta.land/',
  frameworks: [
    laravel,
    vue,
    nuxt,
  ],
  technologies: [
    html,
    scss,
    ts,
    php,
  ],
}

export default receta_land