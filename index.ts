interface IHandler<T> {
  get?<U extends keyof T>(target: T, property: U): T[U]
  apply?(): T
}

interface IProxy<T> {
  new (object: T, handler: IHandler<T>): T
}

const emptyObject: any = {}

export default function keyAccessor<T>(object: T): T {
  return new (<IProxy<T>>Proxy)(object, {
    apply: () => object,
    get: (object, key) => {
      if(object !== null && Object.prototype.hasOwnProperty.call(object, key)) {
        return keyAccessor(object[key])
      }
      return emptyObject
    }
  })
}