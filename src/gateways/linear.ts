import { isDevelopment } from "@/constants/environment";
import LinearAPI from "@/api/linear";
import { LinearMock } from "@/mocks/linear/LinearMock";

export const linearGateway = isDevelopment ? new LinearMock() : new LinearAPI();
