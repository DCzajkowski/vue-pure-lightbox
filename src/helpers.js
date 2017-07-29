function object_merge(objectA, objectB) {
    Object.keys(objectB).forEach((key) => {
        objectA[key] = objectB[key]
    })

    return objectA
}

export { object_merge }
