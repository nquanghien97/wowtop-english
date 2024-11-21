interface ListHeaderType {
  id: number;
  title: string;
  path: string;
  children?: ListHeaderType[]
}

export const ListHeader: ListHeaderType[] = [
  {
    id: 1,
    title: 'Home',
    path: '/'
  },
  {
    id: 2,
    title: 'Introduce',
    path: '/introduce',
  },
  {
    id: 3,
    title: 'Wowtop Height Growth Milk',
    path: '/wowtop-height-growth-milk'
  },
  {
    id: 4,
    title: 'Wow News',
    path: '/wow-news',
    children: [
      {
        id: 41,
        title: 'How to increase height',
        path: '#'
      },
      {
        id: 42,
        title: 'Exercises to increase height',
        path: '#'
      },
      {
        id: 43,
        title: 'Milk increases height',
        path: '#'
      }
    ]
  },
  {
    id: 5,
    title: 'Predict Your Child\'s Height',
    path: '/predict-your-child-height'
  },

]