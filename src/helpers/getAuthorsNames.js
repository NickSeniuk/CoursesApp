import { mockedAuthorsList } from "../constants";

const getAuthorsNames = (authorsIds) => {
  return authorsIds
    .map((id) => mockedAuthorsList.find((author) => author.id === id)?.name)
    .join(", ");
};

export default getAuthorsNames;
