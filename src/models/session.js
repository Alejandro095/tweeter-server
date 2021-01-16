import { Pool } from 'loaders/postgresql';

export default class Session {
  constructor({ userID, uuid }) {
    this.userID = userID;
    this.uuid = uuid;
  }

  save() {
    return Pool.query('INSERT INTO sessions (user_id, uuid) VALUES ($1, $2);', [this.userID, this.uuid]);
  }
}
