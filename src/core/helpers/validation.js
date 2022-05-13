
const defaultMessage = {
  required: "Field is required",
  email: "Invalid email",
  min: "min {0}",
  max: "max {0}",
  matchWith: "not same as"
};

export default {
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
   * @param message - The message for validation
   * @returns The max validation
  */
  max: function (maxNumber, message) {
    return { max: maxNumber, message };
  },

  /**
   * Min validation.
   *
   * @param minNumber - The number for benchmark
   * @param message - The message for validation
   * @returns The min validation
  */
  min: function (minNumber, message) {
    return { min: minNumber, message };
  }

}
