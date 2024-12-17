function merge<T extends {}, U extends {}>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Bob" }, { age: 37 });
merged.name;
