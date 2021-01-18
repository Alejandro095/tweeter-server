import { pool } from 'loaders/services-loaders';

export default class Session {
  constructor({ userID, uuid }) {
    this.userID = userID;
    this.uuid = uuid;
    this.Pool = pool();
  }

  save() {
    return this.Pool.query('INSERT INTO sessions (user_id, uuid) VALUES ($1, $2);', [this.userID, this.uuid]);
  }
}
