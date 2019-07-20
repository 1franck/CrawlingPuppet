export interface StorageInterface {
    save(name: string, content: string, metadata: object): any;
}