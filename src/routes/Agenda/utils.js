import moment from "moment";

export default {
  normalizePayload(formValues) {
    return {
      ...formValues,
      date: moment(formValues.date).format("YYYY-MM-DD HH:mm:ss"),
      remind_at:moment(formValues.date).format("YYYY-MM-DD HH:mm:ss"),
    }
  }
}