import { Pool } from 'loaders/postgresql';

export default class User {
  constructor(user) {
    this.Pool = Pool;
    this.user = user;
  }

  static async one(username, email) {
    const result = await Pool.query('SELECT * FROM users WHERE email = $1 OR username = $2;', [email, username]);

    if (result.rows.length) {
      return {
        success: true,
        user: result.rows[0],
      };
    }

    return {
      success: false,
    };
  }

  async save() {
    const {
      username, email, password, firstname, lastname, bio, website, birthday,
    } = this.user;

    const result = await this.Pool.query('INSERT INTO users (username, email, password, first_name, last_name, website, birthday, bio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;', [username, email, password, firstname, lastname, bio, website, birthday]);

    if (result.rows.length) {
      return {
        success: true,
        user: result.rows[0],
      };
    }

    return {
      success: false,
    };
  }
}
