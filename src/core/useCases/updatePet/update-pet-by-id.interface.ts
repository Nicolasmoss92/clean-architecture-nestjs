import { UpdatePetDTO } from "src/presentation/controller/http/updatePet/update-pet.dto";

export interface IUpdatePetUseCase{
    update(updatePet: UpdatePetDTO): Promise<void>
}