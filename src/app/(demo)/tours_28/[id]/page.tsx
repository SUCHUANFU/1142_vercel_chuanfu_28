// 如果你想在 Server Component 中使用 useParams，必須將元件改為 async，並且 params 會是一個 Promise，需要先 await 才能拿到裡面的 id
// export default TourDetailPage_28;
// const TourDetailPage_28 = async () => {
//   const params = useParams();
//   console.log('params:', params);
//   return (
//     <div>
//       <h2>Tour Detail Page</h2>
//       <p>Tour ID: {params.id}</p>
//     </div>
//   );
// };

// export default TourDetailPage_28;

'use client';

// [在 Server Component 中使用 useParams 的正確方式]
// 1. 定義型別，params 現在是一個 Promise
type Props = {
  params: Promise<{ id: string }>;
};

// 2. 將元件改為 async
const TourDetailPage_28 = async ({ params }: Props) => {
  // 3. 必須先 await 才能拿裡面的 id
  const { id } = await params;
  // console.log('params:', id);
  return (
    <div>
      <h2 className='text-2xl font-bold'>Tour Detail Page</h2>
      <p className='mt-4'>
        Tour ID: <span className='text-blue-500'>{id}</span>
      </p>
    </div>
  );
};
export default TourDetailPage_28;
