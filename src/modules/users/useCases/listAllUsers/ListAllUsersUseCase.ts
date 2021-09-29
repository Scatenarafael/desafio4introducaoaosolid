import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const users = this.usersRepository.list();

    const userIndex = users.findIndex((user) => user.id === user_id);

    if (users[userIndex].admin === false) {
      throw new Error("User does not have admin permission");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
