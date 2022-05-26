/**
 * Checks if the passed value is null
 * @param val
 * @returns true if val is null, false otherwise
 */
 export function isNull(val) {
  return val === null;
}

/**
 * Checks if the passed value is undefined
 * @param val
 * @returns true if val is undefined, false otherwise
 */
export function isUndefined(val) {
  return typeof val === "undefined";
}

/**
 * Checks if the passed value is null or undefined
 * @param val
 * @returns true if val is null or undefined, false otherwise
 */
 export function isNullOrUndefined(val) {
  return isUndefined(val) || isNull(val);
}

/**
* Extract a value from a JSON object
* @param object
* @param path
* @param defaultValue
* @returns value from the "object" in the "path". If the value there is found to be undefined, the "defaultValue"(is any) is returned
*/
export const get = (object, path = "", defaultValue) => {
  let result = object;
  if (path && path.length > 0) {
    let parsedPath = path;
    if (!Array.isArray(path)) {
      parsedPath = path.split(".");
    }
    while (!isNullOrUndefined(result) && parsedPath.length > 0) {
      // @ts-ignore
      result = result[parsedPath.shift()];
    }
  }
  return !isNullOrUndefined(result) ? result : defaultValue;
};


export const downloadFile = (path, fileName) => {
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute(
    'href',
    path // the root is "public" folder ex public/contact/import-contac-template.xlsx
  );
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export const isEqual = (obj1, obj2) =>{

	/**
	 * More accurately check the type of a JavaScript object
	 * @param  {Object} obj The object
	 * @return {String}     The object type
	 */
	function getType (obj) {
		return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	}

	function areArraysEqual () {

		// Check length
		if (obj1.length !== obj2.length) return false;

		// Check each item in the array
		for (let i = 0; i < obj1.length; i++) {
			if (!isEqual(obj1[i], obj2[i])) return false;
		}

		// If no errors, return true
		return true;

	}

	function areObjectsEqual () {

		if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

		// Check each item in the object
		for (const key in obj1) {
			if (hasOwnProperty(obj1, key)) {
				if (!isEqual(obj1[key], obj2[key])) return false;
			}
		}

		// If no errors, return true
		return true;

	}

	function arePrimativesEqual () {
		return obj1 === obj2;
	}

	// Get the object type
	const type = getType(obj1);

	// If the two items are not the same type, return false
	if (type !== getType(obj2)) return false;

	// Compare based on type
	if (type === 'array') return areArraysEqual();
	if (type === 'object') return areObjectsEqual();
	return arePrimativesEqual();

}

export const hasOwnProperty = (object, key) => {
  return Object.prototype.hasOwnProperty.call(object, key);
}

export const isEmptyObject = (object) => {
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional check
  return object // 👈 null and undefined check
    && Object.keys(object).length === 0
    && Object.getPrototypeOf(object) === Object.prototype
}

let debounceTimeout;
export const debounce = (func, timeout, options) => {
  const { leading = false, trailing = true } = options || {};
  if (debounceTimeout) {
    if (!leading && !trailing) {
      func();
    }

    if (!trailing) {
      return;
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = undefined;
  }

  if (leading && !debounceTimeout) {
    func();
  }

  debounceTimeout = setTimeout(trailing ? func : () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = undefined;
  }, timeout);
};

export const checkPhoneNumber = (event) => {
  let value = event.target.value.trim();
  value = value.replace(/0?/);
  return value.match(/[0-9]+/);
}