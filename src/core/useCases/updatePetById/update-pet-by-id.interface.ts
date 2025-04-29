export interface IUpdatePetByIdUseCase{
    updateById(id: string): Promise<void>
}