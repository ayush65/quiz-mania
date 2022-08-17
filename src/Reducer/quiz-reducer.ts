/** @format */

type ActionProps = {
  type: string;
  payload: any;
};

type InitialProps = {
  count: number;
  total_friends: number;
  total_suits: number;
  value: number;
  allquestion: number;
};

export const initialstate: InitialProps = {
  count: 0,
  total_friends: 0,
  total_suits: 0,
  value: 0,
  allquestion: 10,
};

export const reducerFunc = (statetotal: InitialProps, action: ActionProps) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...statetotal,
        count: statetotal.count + 1,
        allquestion: statetotal.allquestion,
      };
    }
    case "DECREMENT": {
      return {
        ...statetotal,
        count: statetotal.count - 1,
      };
    }
    case "CORRECT_FRIENDS_QUIZ": {
      return {
        ...statetotal,
        total_friends:
          Number(statetotal.total_friends) + Number(action.payload),
      };
    }
    case "CORRECT_SUITS_QUIZ": {
      return {
        ...statetotal,
        total_suits: Number(statetotal.total_suits) + Number(action.payload),
      };
    }
    case "WRONG_FRIENDS_QUIZ": {
      return {
        ...statetotal,
        total_friends:
          Number(statetotal.total_friends) - Number(action.payload),
      };
    }
    case "WRONG_SUITS_QUIZ": {
      return {
        ...statetotal,
        total_suits: Number(statetotal.total_suits) - Number(action.payload),
      };
    }
    case "obj1": {
      return {
        ...statetotal,
        value: 1,
      };
    }
    case "obj2": {
      return {
        ...statetotal,
        value: 0,
      };
    }
    case "EXIT": {
      return {
        ...statetotal,
        total_friends: 0,
        total_suits: 0,
      };
    }

    default:
      return statetotal;
  }
};
