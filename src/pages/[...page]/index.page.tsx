import Breadcrumb from 'components/Breadcrumb';

const Page = () => {
  return (
    <div>
      <main>
        <h1 className="mx-8 mt-32 text-2xl md:mx-16 md:text-3xl lg:mx-32 lg:text-4xl">
          Breadcrumb Navigation Example with NextJS - Dynamic Route Page
        </h1>
        <Breadcrumb />
      </main>
    </div>
  );
};

export default Page;
