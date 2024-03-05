import DBConnectionHelper from './DBConnectionHelper';

export default class ConnectionSource {
  static async connect() {
    return await new DBConnectionHelper().connect();
  }
}
