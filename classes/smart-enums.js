/* eslint-disable no-restricted-syntax */
const _ = require('lodash');
const assert = require('assert');

class SmartEnums {
    constructor(properties) {
        assert(_.isPlainObject(properties), `Properties should be a plain object`);
        this._properties = new Map(_.toPairs(properties));
        this.attachProperties();
        Object.freeze(this);
    }

    get values() {
        return Array.from(Object.values(this._properties));
    }

    get keys() {
        return Array.from(Object.keys(this._properties));
    }

    hasKey(key) {
        return this._properties.has(key);
    }

    hasValue(value) {
        for (const val of this._properties.values()) {
            if (value === val) {
                return true;
            }
        }
        return false;
    }

    toJSON() {
        return this.keys.reduce((acc, val) => {
            acc[val] = this[val];
            return acc;
        }, {});
    }

    attachProperties() {
        for (const [key, value] of this._properties) {
            Object.defineProperty(this, key, { value });
        }
    }
}

module.exports = SmartEnums;
