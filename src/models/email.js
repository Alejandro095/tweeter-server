import { Pool } from 'loaders/postgresql';

export default class Email {
  constructor({ userID, code, email }) {
    this.userID = userID;
    this.code = code;
    this.email = email;
  }

  async save() {
    const result = await Pool.query('INSERT INTO email_confirmation (user_id, code, email) VALUES ($1, $2, $3) RETURNING *;', [this.userID, this.code, this.email]);

    if (result.rows.length) {
      return {
        success: true,
        email: result.rows[0],
      };
    }
    return {
      success: false,
    };
  }
}
