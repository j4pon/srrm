import { reactive } from 'vue';

interface User {
  status: boolean;
  message: string,
  data: object
  token: string;
  config: object
}

export interface State {
  user: User | null;
}

export const state: State = reactive({
  user: null,
});

export const setUser = (user: User | null) => {
  state.user = user;
};

export default state;

