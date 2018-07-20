interface IHandler<T> {
  get?<U extends keyof T>(target: T, property: U): T[U]
  apply?(): T
}

interface IProxy<T> {
  new (object: T, handler: IHandler<T>): T
}

const nonObject: any = new Proxy(() => {}, {
  get: () => nonObject,
  apply: () => undefined
})


export default function keyAccessor<T>(object: T): T {
  return new (<IProxy<T>>Proxy)(<any>(() => {}), {
    apply: () => object,
    get: (target, key) => {
      if(object !== null && Object.prototype.hasOwnProperty.call(object, key)) {
        return keyAccessor(object[key])
      }
      return nonObject
    }
  })
}