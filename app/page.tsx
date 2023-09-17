import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import Results from '@/components/Results/Results';
import { getResults } from '@/utils/getResults';

type propsTypes = {
  searchParams: any
};

export default async function Home({
  searchParams
}: propsTypes
) {
  const { genre } = searchParams;
  const results: any = await getResults(genre);

  return (
    <main className="capitalize">
      <div className="">
        <Header />
      </div>
      <div className="">
        <Nav />
      </div>
      <div className="">
        <Results
          results={results}
        />
      </div>
    </main>
  )
}
