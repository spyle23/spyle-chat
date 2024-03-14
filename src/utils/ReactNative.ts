export class ReactNativeFile {
  public name: any;
  public uri: any;
  public type: any;
  constructor({ uri, name, type }: { uri: any; name: any; type: any }) {
    this.uri = uri;
    this.name = name;
    this.type = type;
  }
}