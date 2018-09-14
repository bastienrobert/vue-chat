class Values {
  constructor() {
    this.init()
  }

  init() {
    this.mouse = {
      x: 0,
      y: 0
    }

    this.viewport = {
      width: 0,
      height: 0
    }

    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  onMouseMove = e => {
    this.mouse = {
      x: e.clientX,
      y: e.clientY
    }
  }

  onResize = () => {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}

export default new Values()
