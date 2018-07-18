const emptyObject = {};
export default function keyAccessor(object) {
    return new Proxy(object, {
        apply: () => object,
        get: (object, key) => {
            if (object !== null && Object.prototype.hasOwnProperty.call(object, key)) {
                return keyAccessor(object[key]);
            }
            return emptyObject;
        }
    });
}
//# sourceMappingURL=index.js.map