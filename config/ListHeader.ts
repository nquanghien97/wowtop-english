interface ListHeaderType {
  id: number;
  title: string;
  path: string;
  children?: ListHeaderType[]
}

export const ListHeader: ListHeaderType[] = [
  {
    id: 1,
    title: 'Trang chủ',
    path: '/'
  },
  {
    id: 2,
    title: 'Giới thiệu',
    path: '/gioi-thieu',
  },
  {
    id: 3,
    title: 'Sản phẩm',
    path: '/san-pham'
  },
  {
    id: 4,
    title: 'Bản tin',
    path: 'ban-tin'
  },
  {
    id: 5,
    title: 'Dự đoán chiều cao của con',
    path: '/du-doan-chieu-cao'
  },
  {
    id: 6,
    title: 'Đại lý',
    path: '/dai-ly'
  }
]