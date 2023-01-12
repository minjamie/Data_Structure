import Queue from './Queue.js'

const cars = new Queue()
cars.enqueue('Honda')
cars.enqueue('Hyundai')
cars.enqueue('Benz')

cars.dequeue()
cars.peek()
