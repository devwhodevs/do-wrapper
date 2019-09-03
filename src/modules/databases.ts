import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Databases extends BaseModule {
    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }
}