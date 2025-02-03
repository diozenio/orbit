import { isDevelopment } from "@/constants/environment";
import LinearAPI from "@/infra/api/rest/linear";
import { LinearMock } from "@/infra/mock/linear/LinearMock";

export const linearGateway = isDevelopment ? new LinearMock() : new LinearAPI();
