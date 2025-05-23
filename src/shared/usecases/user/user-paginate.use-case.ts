import { PaginateQuery } from '../../validations/query/paginate.query';
import { paginateUser } from '../../repositories/user.repository';
import { UserFilterQuery } from '../../validations/query/user-filter.query';

export const userPaginateUseCase = async (paginate: PaginateQuery, filter?: UserFilterQuery) => {
    return paginateUser(paginate, filter);
}