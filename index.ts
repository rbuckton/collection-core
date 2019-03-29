/*!
   Copyright 2019 Ron Buckton

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

export interface ReadonlyCollection<T> extends Iterable<T> {
    /**
     * Gets the number of elements in the collection.
     */
    readonly [ReadonlyCollection.size]: number;

    /**
     * Tests whether an element is present in the collection.
     */
    [ReadonlyCollection.has](value: T): boolean;
}

export namespace ReadonlyCollection {
    // ReadonlyCollection<T>
    /**
     * A well-known symbol used to define the `ReadonlyCollection#[ReadonlyCollection.size]` property.
     */
    export const size = Symbol.for("ReadonlyCollection.size");

    /**
     * A well-known symbol used to define the `ReadonlyCollection#[ReadonlyCollection.has]` method.
     */
    export const has = Symbol.for("ReadonlyCollection.has");

    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyCollection`.
     */
    export function isReadonlyCollection<T>(value: Iterable<T>): value is ReadonlyCollection<T>;
    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyCollection`.
     */
    export function isReadonlyCollection(value: any): value is ReadonlyCollection<unknown>;
    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyCollection`.
     */
    export function isReadonlyCollection(value: any): value is ReadonlyCollection<unknown> {
        return isIterable(value)
            && ReadonlyCollection.size in value
            && ReadonlyCollection.has in value;
    }
}

export interface Collection<T> extends ReadonlyCollection<T> {
    /**
     * Adds an element to the collection.
     */
    [Collection.add](value: T): void;

    /**
     * Deletes an element from the collection.
     */
    [Collection.delete](value: T): boolean;

    /**
     * Clears the collection.
     */
    [Collection.clear](): void;
}

export namespace Collection {
    // ReadonlyIndexedCollection<T>
    export import size = ReadonlyCollection.size;
    export import has = ReadonlyCollection.has;
    export import isReadonlyCollection = ReadonlyCollection.isReadonlyCollection;

    // Collection<T>
    /**
     * A well-known symbol used to define the `Collection#[Collection.add]` method.
     */
    export const add = Symbol.for("Collection.add");

    Collection.delete = Symbol.for("Collection.delete") as typeof Collection.delete;

    /**
     * A well-known symbol used to define the `Collection#[Collection.clear]` method.
     */
    export const clear = Symbol.for("Collection.clear");

    /**
     * Tests whether a value supports the minimal representation of a `Collection`.
     */
    export function isCollection<T>(value: Iterable<T>): value is Collection<T>;
    /**
     * Tests whether a value supports the minimal representation of a `Collection`.
     */
    export function isCollection(value: any): value is Collection<unknown>;
    /**
     * Tests whether a value supports the minimal representation of a `Collection`.
     */
    export function isCollection(value: any): value is Collection<unknown> {
        return isReadonlyCollection(value)
            && Collection.add in value
            && Collection.delete in value
            && Collection.clear in value;
    }
}

export declare namespace Collection {
    /**
     * A well-known symbol used to define the `Collection#[Collection.delete]` method.
     */
    const _delete: unique symbol;
    export { _delete as delete };
}

export interface ReadonlyIndexedCollection<T> extends ReadonlyCollection<T> {
    /**
     * Gets the index for a value in the collection, or `-1` if the value was not found.
     */
    [ReadonlyIndexedCollection.indexOf](value: T, fromIndex?: number): number;

    /**
     * Gets the value at the specified index in the collection, or `undefined` if the index was outside of the bounds of the collection.
     */
    [ReadonlyIndexedCollection.getAt](index: number): T | undefined;
}

export namespace ReadonlyIndexedCollection {
    // ReadonlyCollection<T>
    export import size = ReadonlyCollection.size;
    export import has = ReadonlyCollection.has;
    export import isReadonlyCollection = ReadonlyCollection.isReadonlyCollection;

    // ReadonlyIndexedCollection<T>
    /**
     * A well-known symbol used to define the `ReadonlyIndexedCollection#[ReadonlyIndexedCollection.indexOf]` method.
     */
    export const indexOf = Symbol.for("ReadonlyIndexedCollection.indexOf");

    /**
     * A well-known symbol used to define the `ReadonlyIndexedCollection#[ReadonlyIndexedCollection.getAt]` method.
     */
    export const getAt = Symbol.for("ReadonlyIndexedCollection.getAt");

    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyIndexedCollection`.
     */
    export function isReadonlyIndexedCollection<T>(value: Iterable<T>): value is ReadonlyIndexedCollection<T>;
    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyIndexedCollection`.
     */
    export function isReadonlyIndexedCollection(value: unknown): value is ReadonlyIndexedCollection<unknown>;
    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyIndexedCollection`.
     */
    export function isReadonlyIndexedCollection(value: unknown): value is ReadonlyIndexedCollection<unknown> {
        return isReadonlyCollection(value)
            && ReadonlyIndexedCollection.indexOf in value
            && ReadonlyIndexedCollection.getAt in value;
    }
}

export interface FixedSizeIndexedCollection<T> extends ReadonlyIndexedCollection<T> {
    /**
     * Sets a value at the specified index in the collection.
     * @returns `true` if the value was set at the provided index, otherwise `false`.
     */
    [FixedSizeIndexedCollection.setAt](index: number, value: T): boolean;
}

export namespace FixedSizeIndexedCollection {
    // ReadonlyCollection<T>
    export import size = ReadonlyCollection.size;
    export import has = ReadonlyCollection.has;
    export import isReadonlyCollection = ReadonlyCollection.isReadonlyCollection;

    // ReadonlyIndexedCollection<T>
    export import indexOf = ReadonlyIndexedCollection.indexOf;
    export import getAt = ReadonlyIndexedCollection.getAt;
    export import isReadonlyIndexedCollection = ReadonlyIndexedCollection.isReadonlyIndexedCollection;

    // FixedSizeIndexedCollection<T>
    /**
     * A well-known symbol used to define the `FixedSizeIndexedCollection#[FixedSizeIndexedCollection.setAt]` method.
     */
    export const setAt = Symbol.for("FixedSizeIndexedCollection.setAt");

    /**
     * Tests whether a value supports the minimal representation of a `FixedSizeIndexedCollection`.
     */
    export function isFixedSizeIndexedCollection<T>(value: Iterable<T>): value is FixedSizeIndexedCollection<T>;
    /**
     * Tests whether a value supports the minimal representation of a `FixedSizeIndexedCollection`.
     */
    export function isFixedSizeIndexedCollection(value: unknown): value is FixedSizeIndexedCollection<unknown>;
    /**
     * Tests whether a value supports the minimal representation of a `FixedSizeIndexedCollection`.
     */
    export function isFixedSizeIndexedCollection(value: unknown): value is FixedSizeIndexedCollection<unknown> {
        return isReadonlyIndexedCollection(value)
            && FixedSizeIndexedCollection.setAt in value;
    }
}

export interface IndexedCollection<T> extends FixedSizeIndexedCollection<T>, Collection<T> {
    /**
     * Inserts a value at the specified index in the collection, shifting any following elements to the right one position.
     */
    [IndexedCollection.insertAt](index: number, value: T): void;

    /**
     * Removes the value at the specified index in the collection, shifting any following elements to the left one position.
     */
    [IndexedCollection.removeAt](index: number): void;
}

export namespace IndexedCollection {
    // ReadonlyCollection<T>
    export import size = ReadonlyCollection.size;
    export import has = ReadonlyCollection.has;
    export import isReadonlyCollection = ReadonlyCollection.isReadonlyCollection;

    // ReadonlyIndexedCollection<T>
    export import indexOf = ReadonlyIndexedCollection.indexOf;
    export import getAt = ReadonlyIndexedCollection.getAt;
    export import isReadonlyIndexedCollection = ReadonlyIndexedCollection.isReadonlyIndexedCollection;

    // FixedSizeIndexedCollection<T>
    export import setAt = FixedSizeIndexedCollection.setAt;
    export import isFixedSizeIndexedCollection = FixedSizeIndexedCollection.isFixedSizeIndexedCollection;

    // Collection<T>
    export import add = Collection.add;
    IndexedCollection.delete = Collection.delete;
    export import clear = Collection.clear;
    export import isCollection = Collection.isCollection;

    // IndexedCollection<T>
    /**
     * A well-known symbol used to define the `IndexedCollection#[IndexedCollection.insertAt]` method.
     */
    export const insertAt = Symbol.for("IndexedCollection.insertAt");

    /**
     * A well-known symbol used to define the `IndexedCollection#[IndexedCollection.removeAt]` method.
     */
    export const removeAt = Symbol.for("IndexedCollection.removeAt");

    /**
     * Tests whether a value supports the minimal representation of an `IndexedCollection`.
     */
    export function isIndexedCollection<T>(value: Iterable<T>): value is IndexedCollection<T>;
    /**
     * Tests whether a value supports the minimal representation of an `IndexedCollection`.
     */
    export function isIndexedCollection(value: unknown): value is IndexedCollection<unknown>;
    /**
     * Tests whether a value supports the minimal representation of an `IndexedCollection`.
     */
    export function isIndexedCollection(value: unknown): value is IndexedCollection<unknown> {
        return isFixedSizeIndexedCollection(value)
            && IndexedCollection.insertAt in value
            && IndexedCollection.removeAt in value;
    }
}

export declare namespace IndexedCollection {
    const _delete: typeof Collection.delete;
    export { _delete as delete };
}

export interface ReadonlyKeyedCollection<K, V> extends Iterable<[K, V]> {
    /**
     * Gets the number of elements in the collection.
     */
    readonly [ReadonlyKeyedCollection.size]: number;

    /**
     * Tests whether a key is present in the collection.
     */
    [ReadonlyKeyedCollection.has](key: K): boolean;

    /**
     * Gets the value in the collection associated with the provided key, if it exists.
     */
    [ReadonlyKeyedCollection.get](key: K): V | undefined;

    /**
     * Gets an `IterableIterator` for the keys present in the collection.
     */
    [ReadonlyKeyedCollection.keys](): IterableIterator<K>;

    /**
     * Gets an `IterableIterator` for the values present in the collection.
     */
    [ReadonlyKeyedCollection.values](): IterableIterator<V>;
}

export namespace ReadonlyKeyedCollection {
    // ReadonlyKeyedCollection<K, V>
    /**
     * A well-known symbol used to define the `ReadonlyKeyedCollection#[ReadonlyKeyedCollection.size]` property.
     */
    export const size = Symbol.for("ReadonlyKeyedCollection.size");

    /**
     * A well-known symbol used to define the `ReadonlyKeyedCollection#[ReadonlyKeyedCollection.has]` method.
     */
    export const has = Symbol.for("ReadonlyKeyedCollection.has");

    /**
     * A well-known symbol used to define the `ReadonlyKeyedCollection#[ReadonlyKeyedCollection.get]` method.
     */
    export const get = Symbol.for("ReadonlyKeyedCollection.get");

    /**
     * A well-known symbol used to define the `ReadonlyKeyedCollection#[ReadonlyKeyedCollection.keys]` method.
     */
    export const keys = Symbol.for("ReadonlyKeyedCollection.keys");

    /**
     * A well-known symbol used to define the `ReadonlyKeyedCollection#[ReadonlyKeyedCollection.values]` method.
     */
    export const values = Symbol.for("ReadonlyKeyedCollection.values");

    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyKeyedCollection`.
     */
    export function isReadonlyKeyedCollection<K, V>(value: Iterable<[K, V]>): value is ReadonlyKeyedCollection<K, V>;
    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyKeyedCollection`.
     */
    export function isReadonlyKeyedCollection(value: unknown): value is ReadonlyKeyedCollection<unknown, unknown>;
    /**
     * Tests whether a value supports the minimal representation of a `ReadonlyKeyedCollection`.
     */
    export function isReadonlyKeyedCollection(value: unknown): value is ReadonlyKeyedCollection<unknown, unknown> {
        return isIterable(value)
            && ReadonlyKeyedCollection.size in value
            && ReadonlyKeyedCollection.has in value
            && ReadonlyKeyedCollection.get in value
            && ReadonlyKeyedCollection.keys in value
            && ReadonlyKeyedCollection.values in value;
    }
}

export interface KeyedCollection<K, V> extends ReadonlyKeyedCollection<K, V> {
    /**
     * Sets a value in the collection for the provided key.
     */
    [KeyedCollection.set](key: K, value: V): void;

    /**
     * Deletes a key and its associated value from the collection.
     * @returns `true` if the key was found and removed; otherwise, `false`.
     */
    [KeyedCollection.delete](key: K): boolean;

    /**
     * Clears the collection.
     */
    [KeyedCollection.clear](): void;
}

export namespace KeyedCollection {
    // ReadonlyKeyedCollection<K, V>
    export import size = ReadonlyKeyedCollection.size;
    export import has = ReadonlyKeyedCollection.has;
    export import get = ReadonlyKeyedCollection.get;
    export import keys = ReadonlyKeyedCollection.keys;
    export import values = ReadonlyKeyedCollection.values;
    export import isReadonlyKeyedCollection = ReadonlyKeyedCollection.isReadonlyKeyedCollection;

    // KeyedCollection<K, V>
    /**
     * A well-known symbol used to define the `KeyedCollection#[KeyedCollection.set]` method.
     */
    export const set = Symbol.for("KeyedCollection.set");

    KeyedCollection.delete = Symbol.for("KeyedCollection.delete") as typeof KeyedCollection.delete;

    /**
     * A well-known symbol used to define the `KeyedCollection#[KeyedCollection.clear]` method.
     */
    export const clear = Symbol.for("KeyedCollection.clear");

    /**
     * Tests whether a value supports the minimal representation of a `KeyedCollection`.
     */
    export function isKeyedCollection<K, V>(value: Iterable<[K, V]>): value is KeyedCollection<K, V>;
    /**
     * Tests whether a value supports the minimal representation of a `KeyedCollection`.
     */
    export function isKeyedCollection(value: unknown): value is KeyedCollection<unknown, unknown>;
    /**
     * Tests whether a value supports the minimal representation of a `KeyedCollection`.
     */
    export function isKeyedCollection(value: unknown): value is KeyedCollection<unknown, unknown> {
        return isReadonlyKeyedCollection(value)
            && KeyedCollection.set in value
            && KeyedCollection.delete in value
            && KeyedCollection.clear in value;
    }
}

export declare namespace KeyedCollection {
    /**
     * A well-known symbol used to define the `KeyedCollection#[KeyedCollection.delete]` method.
     */
    const _delete: unique symbol;
    export { _delete as delete };
}

function isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
}

function isIterable(value: unknown): value is Iterable<unknown> {
    return isObject(value) && Symbol.iterator in value;
}