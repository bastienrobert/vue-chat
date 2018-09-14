import alien from '@/assets/images/avatars/alien.svg'
import planet from '@/assets/images/avatars/planet.svg'
import rocket from '@/assets/images/avatars/rocket.svg'

const host = 'https://bddi-2019-chat.herokuapp.com/'
// const host = 'http://localhost:3000'

const avatars = {
  alien,
  planet,
  rocket
}

const getRandomAvatar = () => {
  const keys = Object.keys(avatars)
  return keys[(keys.length * Math.random()) << 0]
}

export { host, avatars, getRandomAvatar }
