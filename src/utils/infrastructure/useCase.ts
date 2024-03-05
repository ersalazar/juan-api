export default interface useCase<T,U> {
    execute(data: T): Promise<U>;
}