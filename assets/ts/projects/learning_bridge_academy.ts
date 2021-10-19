import laravel from "../frameworks/laravel"
import nuxt from "../frameworks/nuxt"
import vue from "../frameworks/vue"
import html from "../technologies/html"
import php from "../technologies/php"
import scss from "../technologies/scss"
import ts from "../technologies/ts"

const learning_bridge_academy: interface_project = {
  name: 'Learning Bride Academy',
  description: 'Web app to administer students and teachers, similar to d2l.',
  image: '/images/learning_bridge_academy.png',
  link: 'https://learningbridge.academy/',
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
  ],
}

export default learning_bridge_academy