interface interface_project {
  name:         string
  description:  string
  link:         string
  image:        `${string}.${'jpg'|'png'}`
  frameworks:   interface_framework[]
  technologies: interface_technology[]
}