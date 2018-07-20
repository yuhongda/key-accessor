const nonObject = new Proxy(() => { }, {
    get: () => nonObject,
    apply: () => undefined
});
export default function keyAccessor(object) {
    return new Proxy((() => { }), {
        apply: () => object,
        get: (target, key) => {
            if (object !== null && Object.prototype.hasOwnProperty.call(object, key)) {
                return keyAccessor(object[key]);
            }
            return nonObject;
        }
    });
}
//# sourceMappingURL=index.js.map