const host = 'https://bddi-2019-chat.herokuapp.com/'
// const host = 'http://localhost:3000'

const avatars = {
  alien: 'https://res.cloudinary.com/bastienrobert/image/upload/v1536927661/avatars/alien.svg',
  planet: 'https://res.cloudinary.com/bastienrobert/image/upload/v1536927661/avatars/planet.svg',
  rocket: 'https://res.cloudinary.com/bastienrobert/image/upload/v1536927661/avatars/rocket.svg'
}

const getRandomAvatar = () => {
  const keys = Object.keys(avatars)
  return avatars[keys[(keys.length * Math.random()) << 0]]
}

export { host, avatars, getRandomAvatar }
