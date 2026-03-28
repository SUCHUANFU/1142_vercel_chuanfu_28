import Link from 'next/link';
import Image from 'next/image';

// 1. 定義 API 來源路徑
const url = 'https://www.course-api.com/react-tours-project';

// 2. 定義 Tour 資料型別
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

// 3. 非同步抓取資料函式
const fetchTours = async () => {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

// 4. 頁面組件定義
const ToursPage_28 = async () => {
  const tours = await fetchTours();
  console.log('tours', tours);

  return (
    <section>
      <h1 className='text-3xl font-bold mb-6'>Tours_28</h1>
      <div className='grid md:grid-cols-2 gap-x-8 gap-y-10'>
        {tours?.map((tour) => {
          const { id, image, name } = tour;
          return (
            <Link key={id} href={`/tours_28/${id}`} className='group'>
              <div className='relative h-48 mb-2'>
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority
                  className='object-cover rounded shadow-md group-hover:shadow-xl transition-shadow'
                />
              </div>
              <h2 className='text-xl font-semibold mt-2'>{name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ToursPage_28;
