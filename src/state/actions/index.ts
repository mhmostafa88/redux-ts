// here we store all of our interfaces that describe the different kind of actions that exist in our app

import { ActionType } from '../action-types';


interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =  SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;