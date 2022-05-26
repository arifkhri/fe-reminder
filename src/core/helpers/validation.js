
const defaultMessage = {
  required: "Field ini wajib diisi",
  email: "Email tidak valid",
  min: "Minimal karakter ",
  max: "Maksimal karakter ",
  matchWith: "Field tidak sama dengan "
};

const validation = {
  /**
   * Required validation.
   *
   * @param message - The message for validation
   * @returns The object with 2 key message and required
  */
  required: function (message = defaultMessage["required"]) {
    return { message, required: true };
  },

  /**
   * Email validation.
   *
   * @param message - The message for validation
   * @returns The object with 2 key message and type
  */
  email: function (message = defaultMessage["email"]) {
    return { message, type: 'email' };
  },

  /**
   * Max validation.
   *
   * @param maxNumber - The number for benchmark
   * @param customMessage - The message for validation
   * @returns The max validation
  */
  max: function (maxNumber, customMessage) {
    return { max: maxNumber, message: customMessage || `${defaultMessage['max'] + ' ' + maxNumber}`  };
  },

  /**
   * Min validation.
   *
   * @param minNumber - The number for benchmark
   * @param mecustomMessagessage - The message for validation
   * @returns The min validation
  */
  min: function (minNumber, customMessage) {
    return { min: minNumber, message: customMessage || `${defaultMessage['min'] + ' ' + minNumber}`  };
  },

  matchWith: function ({ fieldName, message }) {
    return ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue(fieldName) === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(message || `${defaultMessage['matchWith'] + ' ' + fieldName}`));
      },
    });
  },

  /**
   * Min validation.
   *
   * @param fieldName - The  for benchmark
   * @param message - The message for validation
   * @returns The promise validation
  */
   password: function (message) {
    return () => ({
      validator(_, value) {
        if(!value) {
          return Promise.reject(new Error(defaultMessage['required']));
        } else {
          const checkPassword = (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(value)
          if (checkPassword && value.length >= 6) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(message || `Minimal Karakter 6 dan gunakan huruf besar/kecil [A-z], angka [0-9] dan karakter khusus [~!@]`));
        }

      },
    });
  },

}

export default validation;