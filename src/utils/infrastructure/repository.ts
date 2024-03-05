export default interface repository<T,U> {
    execute(data: T): Promise<U>;
}